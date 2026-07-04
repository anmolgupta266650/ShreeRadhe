let orderTotal = 0;
let appliedCoupon = null;
let cartItems = [];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('cart');
  document.getElementById('footerContainer').innerHTML = getFooterHTML();
  initNavigation();
  initLanguageToggle();
  
  cartItems = getCart();
  if (cartItems.length === 0) {
    window.location.href = 'cart.html';
    return;
  }
  
  const couponData = sessionStorage.getItem('sr_applied_coupon');
  if (couponData) {
    appliedCoupon = JSON.parse(couponData);
  }
  
  const settings = getSettings();
  document.getElementById('displayUpiId').textContent = settings.upiId || 'shreeradhe@upi';
  
  renderSummary();
  updatePageLanguage();
});

function renderSummary() {
  const products = getProducts();
  const container = document.getElementById('checkoutItems');
  container.innerHTML = '';
  
  let subtotal = 0;
  
  cartItems.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return;
    
    subtotal += product.price * item.qty;
    
    container.innerHTML += `
      <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.9rem;">
        <div>
          <span style="font-weight:500;">${tName(product.name)}</span> x ${item.qty}<br>
          <span style="color:var(--text-muted); font-size:0.8rem;">Size: ${item.size} | Color: ${item.color}</span>
        </div>
        <div style="font-weight:600;">${formatPrice(product.price * item.qty)}</div>
      </div>
    `;
  });
  
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const shipping = subtotal > 999 ? 0 : 99;
  orderTotal = subtotal - discount + shipping;
  
  document.getElementById('c_subtotal').textContent = formatPrice(subtotal);
  
  if (discount > 0) {
    document.getElementById('c_discount_row').style.display = 'flex';
    document.getElementById('c_discount').textContent = '-' + formatPrice(discount);
  }
  
  document.getElementById('c_shipping').textContent = shipping === 0 ? t('cart_shipping_free') : formatPrice(shipping);
  document.getElementById('c_total').textContent = formatPrice(orderTotal);
}

function togglePayment(method) {
  document.getElementById('pm_cod').classList.remove('active');
  document.getElementById('pm_upi').classList.remove('active');
  document.getElementById(`pm_${method}`).classList.add('active');
  
  if (method === 'upi') {
    document.getElementById('upiDetails').classList.add('show');
  } else {
    document.getElementById('upiDetails').classList.remove('show');
  }
}

function handlePlaceOrder(e) {
  e.preventDefault();
  
  // Get Form Data
  const customer = {
    name: document.getElementById('s_name').value,
    phone: document.getElementById('s_phone').value,
    email: document.getElementById('s_email').value,
    address: document.getElementById('s_address').value,
    city: document.getElementById('s_city').value,
    state: document.getElementById('s_state').value,
    pincode: document.getElementById('s_pincode').value
  };
  
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  const orderId = generateOrderId();
  
  // Create Order Object
  const order = {
    id: orderId,
    date: new Date().toISOString(),
    customer,
    items: cartItems,
    coupon: appliedCoupon,
    total: orderTotal,
    paymentMethod,
    status: 'ordered' // ordered, shipped, out_for_delivery, delivered
  };
  
  // Save Order
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
  
  // Generate WhatsApp Message
  const products = getProducts();
  let itemsText = '';
  cartItems.forEach((item, i) => {
    const p = products.find(x => x.id === item.productId);
    itemsText += `${i+1}. ${tName(p.name)} (Size: ${item.size}, Color: ${item.color}, Qty: ${item.qty}) — ₹${p.price * item.qty}\n`;
  });
  
  let msg = `🛍️ *New Order — Shreeradhe*\n`;
  msg += `📋 Order ID: ${orderId}\n`;
  msg += `👤 Name: ${customer.name}\n`;
  msg += `📞 Phone: ${customer.phone}\n`;
  msg += `📍 Address: ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}\n\n`;
  msg += `📦 *Items:*\n${itemsText}\n`;
  
  if (appliedCoupon) {
    msg += `🏷️ Coupon: ${appliedCoupon.code} (-₹${appliedCoupon.discount})\n`;
  }
  msg += `💰 *Total: ₹${orderTotal}*\n`;
  msg += `💳 Payment: ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI Payment'}`;
  
  // Open WhatsApp in new tab
  window.open(generateWhatsAppLink(msg), '_blank');
  
  // Clear Cart & Show Confirmation
  saveCart([]);
  sessionStorage.removeItem('sr_applied_coupon');
  
  document.getElementById('checkoutLayout').style.display = 'none';
  document.getElementById('checkoutHeader').style.display = 'none';
  document.getElementById('displayOrderId').textContent = orderId;
  document.getElementById('orderConfirmation').classList.add('show');
}
