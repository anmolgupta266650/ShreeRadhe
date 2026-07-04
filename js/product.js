let currentProduct = null;
let selectedSize = null;
let selectedColor = null;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('shop');
  document.getElementById('footerContainer').innerHTML = getFooterHTML();
  initNavigation();
  initLanguageToggle();

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  if (!productId) {
    window.location.href = 'shop.html';
    return;
  }

  currentProduct = getProduct(productId);
  if (!currentProduct) {
    window.location.href = 'shop.html';
    return;
  }

  renderProductDetails();
  renderRelatedProducts();

  window.addEventListener('languageChanged', () => {
    renderProductDetails();
  });
});

function renderProductDetails() {
  if (!currentProduct) return;

  const lang = getLang();
  
  // Breadcrumb
  const cat = CATEGORIES.find(c => c.id === currentProduct.category);
  document.getElementById('bcCategory').textContent = cat ? tName(cat.name) : currentProduct.category;
  document.getElementById('bcProductName').textContent = tName(currentProduct.name);
  
  // Info
  document.getElementById('productCategory').textContent = cat ? tName(cat.name) : currentProduct.category;
  document.getElementById('productName').textContent = tName(currentProduct.name);
  document.getElementById('productStars').textContent = renderStars(currentProduct.rating);
  document.getElementById('productReviews').textContent = `(${currentProduct.reviews})`;
  
  document.getElementById('currentPrice').textContent = formatPrice(currentProduct.price);
  if (currentProduct.comparePrice > currentProduct.price) {
    document.getElementById('originalPrice').textContent = formatPrice(currentProduct.comparePrice);
    const discount = getDiscountPercent(currentProduct.price, currentProduct.comparePrice);
    const dp = document.getElementById('discountPercent');
    dp.textContent = `${discount}% off`;
    dp.style.display = 'inline-block';
  } else {
    document.getElementById('originalPrice').textContent = '';
    document.getElementById('discountPercent').style.display = 'none';
  }

  document.getElementById('productDesc').textContent = tName(currentProduct.description);
  document.getElementById('tab-desc').textContent = tName(currentProduct.description);

  // Stock status
  const stockEl = document.getElementById('stockStatus');
  if (currentProduct.inStock) {
    stockEl.textContent = t('product_in_stock');
    stockEl.style.color = 'var(--success)';
    document.getElementById('addCartBtn').disabled = false;
  } else {
    stockEl.textContent = t('product_out_stock');
    stockEl.style.color = 'var(--error)';
    document.getElementById('addCartBtn').disabled = true;
  }

  // Wishlist btn
  const wlBtn = document.getElementById('wishlistBtn');
  if (isInWishlist(currentProduct.id)) {
    wlBtn.classList.add('wishlisted');
    wlBtn.innerHTML = `<span>${t('product_add_wishlist')}</span> ❤️`;
  } else {
    wlBtn.classList.remove('wishlisted');
    wlBtn.innerHTML = `<span>${t('product_add_wishlist')}</span> 🤍`;
  }

  // Sizes
  const sizeContainer = document.getElementById('sizeOptions');
  if (!selectedSize && currentProduct.sizes.length > 0) selectedSize = currentProduct.sizes[0];
  sizeContainer.innerHTML = '';
  currentProduct.sizes.forEach(size => {
    sizeContainer.innerHTML += `
      <div class="size-btn ${size === selectedSize ? 'active' : ''}" onclick="selectSize('${size}')">${size}</div>
    `;
  });

  // Colors
  const colorContainer = document.getElementById('colorOptions');
  if (!selectedColor && currentProduct.colors.length > 0) selectedColor = currentProduct.colors[0].name;
  colorContainer.innerHTML = '';
  currentProduct.colors.forEach(c => {
    colorContainer.innerHTML += `
      <div class="detail-color-swatch ${c.name === selectedColor ? 'active' : ''}" 
           style="background-color: ${c.hex};" title="${c.nameHi || c.name}" onclick="selectColor('${c.name}')">
      </div>
    `;
  });

  // Images
  const mainImage = document.getElementById('mainImage');
  const thumbsContainer = document.getElementById('galleryThumbs');
  thumbsContainer.innerHTML = '';
  
  const images = currentProduct.images && currentProduct.images.length > 0 
    ? currentProduct.images 
    : [generatePlaceholderImage(currentProduct)];
    
  mainImage.src = images[0];

  images.forEach((img, idx) => {
    thumbsContainer.innerHTML += `
      <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="setMainImage(this, '${img}')">
        <img src="${img}" alt="Thumbnail">
      </div>
    `;
  });

  updatePageLanguage();
}

function selectSize(size) {
  selectedSize = size;
  renderProductDetails(); // Re-render to update active classes
}

function selectColor(colorName) {
  selectedColor = colorName;
  renderProductDetails();
}

function updateQty(change) {
  const input = document.getElementById('qtyInput');
  let val = parseInt(input.value) + change;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
}

function setMainImage(thumbEl, src) {
  document.getElementById('mainImage').src = src;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function handleAddToCart() {
  if (!currentProduct.inStock) return;
  const qty = parseInt(document.getElementById('qtyInput').value);
  addToCart(currentProduct.id, selectedSize, selectedColor, qty);
  animateCartBadge();
}

function handleWishlist() {
  handleWishlistToggle(currentProduct.id, document.getElementById('wishlistBtn'));
}

function handleWhatsApp() {
  const msg = `Hi! I'm interested in ${tName(currentProduct.name)} (₹${currentProduct.price}). Is it available in Size: ${selectedSize}?`;
  window.open(generateWhatsAppLink(msg), '_blank');
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  event.currentTarget.classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

function renderRelatedProducts() {
  const container = document.getElementById('relatedProducts');
  const products = getProducts();
  const related = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 5);
  
  if (related.length === 0) {
    document.querySelector('.section-title').parentElement.style.display = 'none';
    return;
  }
  
  related.forEach(p => {
    container.appendChild(createProductCard(p));
  });
}
