let currentBase64Image = '';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('admin');
  initNavigation();
  initLanguageToggle();
  
  checkLogin();
  updatePageLanguage();
});

function checkLogin() {
  if (sessionStorage.getItem('sr_admin_logged_in') === 'true') {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    loadDashboardData();
  } else {
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminDashboard').style.display = 'none';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const user = document.getElementById('adminUser').value.trim();
  const pass = document.getElementById('adminPass').value.trim();
  
  if (user === 'admin' && pass === 'shreeradhe2026') {
    sessionStorage.setItem('sr_admin_logged_in', 'true');
    checkLogin();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

function handleLogout() {
  sessionStorage.removeItem('sr_admin_logged_in');
  window.location.href = 'index.html';
}

function switchAdminTab(tabId) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

function loadDashboardData() {
  const products = getProducts();
  const orders = getOrders();
  const coupons = getCoupons();
  const settings = getSettings();
  
  // Stats
  document.getElementById('statProducts').textContent = products.length;
  document.getElementById('statOrders').textContent = orders.length;
  
  const revenue = orders.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + o.total, 0);
  document.getElementById('statRevenue').textContent = formatPrice(revenue);
  
  // Render Products Table
  const pBody = document.getElementById('productsTableBody');
  pBody.innerHTML = '';
  products.forEach(p => {
    const img = p.images && p.images.length > 0 ? p.images[0] : generatePlaceholderImage(p);
    const cat = CATEGORIES.find(c => c.id === p.category);
    pBody.innerHTML += `
      <tr>
        <td><img src="${img}" class="product-thumb"></td>
        <td>${p.name.en}</td>
        <td>${formatPrice(p.price)}</td>
        <td>${cat ? cat.name.en : p.category}</td>
        <td><span class="status-badge ${p.inStock ? 'in-stock' : 'out-of-stock'}">${p.inStock ? 'In Stock' : 'Out of Stock'}</span></td>
        <td>
          <div class="table-actions">
            <button class="edit-btn" onclick='editProduct(${p.id})'>✏️</button>
            <button class="delete-btn" onclick="deleteProduct(${p.id})">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  });
  
  // Render Orders Table
  const oBody = document.getElementById('ordersTableBody');
  oBody.innerHTML = '';
  // Sort orders newest first
  orders.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(o => {
    oBody.innerHTML += `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.customer.name}<br><small style="color:var(--text-muted)">${o.customer.phone}</small></td>
        <td>${new Date(o.date).toLocaleDateString()}</td>
        <td>${formatPrice(o.total)}</td>
        <td>
          <select onchange="updateOrderStatus('${o.id}', this.value)" style="padding:4px; font-size:0.8rem; border-color:var(--border);">
            <option value="ordered" ${o.status==='ordered'?'selected':''}>Ordered</option>
            <option value="shipped" ${o.status==='shipped'?'selected':''}>Shipped</option>
            <option value="out_for_delivery" ${o.status==='out_for_delivery'?'selected':''}>Out for Delivery</option>
            <option value="delivered" ${o.status==='delivered'?'selected':''}>Delivered</option>
          </select>
        </td>
      </tr>
    `;
  });

  // Render Coupons Table
  const cBody = document.getElementById('couponsTableBody');
  cBody.innerHTML = '';
  coupons.forEach(c => {
    cBody.innerHTML += `
      <tr>
        <td><strong>${c.code}</strong></td>
        <td>${c.type}</td>
        <td>${c.type === 'percent' ? c.value + '%' : '₹' + c.value}</td>
        <td>₹${c.minOrder}</td>
        <td>${new Date(c.expiry).toLocaleDateString()}</td>
        <td><span class="status-badge ${c.active ? 'in-stock' : 'out-of-stock'}">${c.active ? 'Active' : 'Inactive'}</span></td>
        <td>
          <div class="table-actions">
            <button class="delete-btn" onclick="deleteCoupon('${c.code}')">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  });
  
  // Load Settings
  document.getElementById('set_wa').value = settings.whatsappNumber || '';
  document.getElementById('set_upi').value = settings.upiId || '';
  document.getElementById('set_email').value = settings.storeEmail || '';
  document.getElementById('set_phone').value = settings.storePhone || '';
}

// Product Management
function toggleProductForm() {
  const form = document.getElementById('productFormContainer');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  if (form.style.display === 'block') {
    document.getElementById('productForm').reset();
    document.getElementById('p_id').value = '';
    document.getElementById('imagePreviewContainer').innerHTML = '';
    currentBase64Image = '';
    document.getElementById('productFormTitle').textContent = t('admin_add_product');
  }
}

function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(event) {
    currentBase64Image = event.target.result;
    document.getElementById('imagePreviewContainer').innerHTML = `
      <div class="image-preview">
        <img src="${currentBase64Image}">
        <button type="button" class="remove-img" onclick="removeImage()">✕</button>
      </div>
    `;
  };
  reader.readAsDataURL(file);
}

function removeImage() {
  currentBase64Image = '';
  document.getElementById('imagePreviewContainer').innerHTML = '';
  document.getElementById('p_image').value = '';
}

function saveProduct(e) {
  e.preventDefault();
  
  const idStr = document.getElementById('p_id').value;
  const isEdit = idStr !== '';
  const products = getProducts();
  
  // Parse Colors
  const colorsInput = document.getElementById('p_colors').value;
  const colors = colorsInput.split(',').map(c => {
    const parts = c.trim().split(':');
    return { name: parts[0]?.trim() || '', hex: parts[1]?.trim() || '#000000' };
  });
  
  const product = {
    id: isEdit ? parseInt(idStr) : Date.now(),
    name: { 
      en: document.getElementById('p_name_en').value,
      hi: document.getElementById('p_name_hi').value
    },
    price: parseInt(document.getElementById('p_price').value),
    comparePrice: parseInt(document.getElementById('p_compare_price').value) || 0,
    category: document.getElementById('p_category').value,
    sizes: document.getElementById('p_sizes').value.split(',').map(s => s.trim()),
    colors: colors,
    description: {
      en: document.getElementById('p_desc_en').value,
      hi: document.getElementById('p_desc_hi').value
    },
    inStock: document.getElementById('p_instock').checked,
    images: currentBase64Image ? [currentBase64Image] : [],
    // Defaults for new products
    rating: isEdit ? getProduct(idStr).rating : 4.5,
    reviews: isEdit ? getProduct(idStr).reviews : 0,
    isNew: isEdit ? getProduct(idStr).isNew : true,
    isTrending: isEdit ? getProduct(idStr).isTrending : false,
    isSale: parseInt(document.getElementById('p_compare_price').value) > parseInt(document.getElementById('p_price').value)
  };
  
  if (isEdit) {
    const idx = products.findIndex(p => p.id === parseInt(idStr));
    // Keep old image if no new one uploaded
    if (!currentBase64Image && products[idx].images) {
      product.images = products[idx].images;
    }
    if (idx > -1) products[idx] = product;
  } else {
    products.unshift(product);
  }
  
  saveProducts(products);
  showToast('Product saved successfully');
  toggleProductForm();
  loadDashboardData();
}

function editProduct(id) {
  const product = getProduct(id);
  if (!product) return;
  
  toggleProductForm();
  document.getElementById('productFormTitle').textContent = t('admin_edit_product');
  
  document.getElementById('p_id').value = product.id;
  document.getElementById('p_name_en').value = product.name.en || product.name;
  document.getElementById('p_name_hi').value = product.name.hi || '';
  document.getElementById('p_price').value = product.price;
  document.getElementById('p_compare_price').value = product.comparePrice || '';
  document.getElementById('p_category').value = product.category;
  document.getElementById('p_sizes').value = product.sizes.join(', ');
  document.getElementById('p_colors').value = product.colors.map(c => `${c.name}:${c.hex}`).join(', ');
  document.getElementById('p_desc_en').value = product.description.en || product.description;
  document.getElementById('p_desc_hi').value = product.description.hi || '';
  document.getElementById('p_instock').checked = product.inStock;
  
  if (product.images && product.images.length > 0) {
    currentBase64Image = product.images[0];
    document.getElementById('imagePreviewContainer').innerHTML = `
      <div class="image-preview">
        <img src="${currentBase64Image}">
        <button type="button" class="remove-img" onclick="removeImage()">✕</button>
      </div>
    `;
  }
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    const products = getProducts();
    const updated = products.filter(p => p.id !== id);
    saveProducts(updated);
    showToast('Product deleted');
    loadDashboardData();
  }
}

// Order Management
function updateOrderStatus(id, status) {
  const orders = getOrders();
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = status;
    saveOrders(orders);
    showToast('Order status updated');
  }
}

// Coupon Management
function toggleCouponForm() {
  const form = document.getElementById('couponFormContainer');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  if (form.style.display === 'block') {
    form.querySelector('form').reset();
  }
}

function saveCoupon(e) {
  e.preventDefault();
  const coupons = getCoupons();
  
  const coupon = {
    code: document.getElementById('c_code').value.toUpperCase(),
    type: document.getElementById('c_type').value,
    value: parseFloat(document.getElementById('c_value').value),
    minOrder: parseFloat(document.getElementById('c_min').value) || 0,
    expiry: document.getElementById('c_expiry').value,
    active: true
  };
  
  // Remove if exists to update
  const updated = coupons.filter(c => c.code !== coupon.code);
  updated.push(coupon);
  
  saveCoupons(updated);
  showToast('Coupon saved');
  toggleCouponForm();
  loadDashboardData();
}

function deleteCoupon(code) {
  if (confirm('Delete this coupon?')) {
    const coupons = getCoupons();
    const updated = coupons.filter(c => c.code !== code);
    saveCoupons(updated);
    showToast('Coupon deleted');
    loadDashboardData();
  }
}

// Settings
function saveStoreSettings(e) {
  e.preventDefault();
  const settings = getSettings();
  settings.whatsappNumber = document.getElementById('set_wa').value;
  settings.upiId = document.getElementById('set_upi').value;
  settings.storeEmail = document.getElementById('set_email').value;
  settings.storePhone = document.getElementById('set_phone').value;
  
  saveSettings(settings);
  showToast('Settings saved');
}
