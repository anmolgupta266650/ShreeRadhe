document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('profile');
  document.getElementById('footerContainer').innerHTML = getFooterHTML();
  initNavigation();
  initLanguageToggle();
  updatePageLanguage();
  
  loadProfileData();
});

function loadProfileData() {
  const phone = sessionStorage.getItem('sr_user_phone') || 'Guest';
  document.getElementById('userDisplayPhone').textContent = phone;
  document.getElementById('infoPhone').value = phone;
  
  loadUserOrders(phone);
}

function switchProfileTab(tabId, btnElement) {
  document.querySelectorAll('.profile-menu button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.profile-tab-pane').forEach(p => p.classList.remove('active'));
  
  btnElement.classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

function loadUserOrders(phone) {
  const container = document.getElementById('ordersContainer');
  const allOrders = getOrders();
  
  // Filter orders by phone number
  const userOrders = allOrders.filter(o => o.customer.phone === phone);
  
  if (userOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 0;">
        <div style="font-size:3rem; margin-bottom:16px;">🛍️</div>
        <h3>No orders found</h3>
        <p class="text-muted mb-2">You haven't placed any orders yet.</p>
        <a href="shop.html" class="btn btn-outline mt-2">Start Shopping</a>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  // Sort by newest
  userOrders.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(order => {
    let itemsHtml = '';
    order.items.forEach(item => {
      const product = getProduct(item.productId);
      if(product) {
        itemsHtml += `<div style="font-size:0.9rem; margin-bottom:4px;">${item.qty}x ${product.name.en} (Size: ${item.size})</div>`;
      }
    });
    
    // Status Badge Mapping
    let statusClass = 'in-stock';
    let statusText = order.status;
    if (order.status === 'ordered') { statusClass = 'in-stock'; statusText = 'Processing'; }
    if (order.status === 'shipped') { statusClass = 'in-stock'; statusText = 'Shipped'; }
    if (order.status === 'out_for_delivery') { statusClass = 'out-of-stock'; statusText = 'Out for Delivery'; }
    if (order.status === 'delivered') { statusClass = 'in-stock'; statusText = 'Delivered'; }
    
    container.innerHTML += `
      <div class="order-card">
        <div class="order-header">
          <div>
            <strong>Order #${order.id}</strong><br>
            <span class="text-muted" style="font-size:0.85rem;">${new Date(order.date).toLocaleDateString()}</span>
          </div>
          <span class="status-badge ${statusClass}" style="text-transform: capitalize;">${statusText}</span>
        </div>
        <div style="margin-bottom: 12px;">
          ${itemsHtml}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong>Total: ${formatPrice(order.total)}</strong>
          <a href="track-order.html?id=${order.id}" class="btn btn-outline btn-sm">Track Order</a>
        </div>
      </div>
    `;
  });
}

function handleUserLogout() {
  sessionStorage.removeItem('sr_user_logged_in');
  sessionStorage.removeItem('sr_user_phone');
  window.location.href = 'index.html';
}
