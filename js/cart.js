let currentDiscount = 0;
let appliedCouponCode = null;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('cart');
  document.getElementById('footerContainer').innerHTML = getFooterHTML();
  initNavigation();
  initLanguageToggle();
  
  renderCart();
  
  window.addEventListener('languageChanged', () => {
    renderCart(); // Re-render to update labels
  });
});

function renderCart() {
  const cart = getCart();
  const products = getProducts();
  const emptyCart = document.getElementById('emptyCart');
  const cartLayout = document.getElementById('cartLayout');
  const container = document.getElementById('cartItemsContainer');
  
  if (cart.length === 0) {
    emptyCart.style.display = 'block';
    cartLayout.style.display = 'none';
    sessionStorage.removeItem('sr_applied_coupon');
    return;
  }
  
  emptyCart.style.display = 'none';
  cartLayout.style.display = 'grid';
  container.innerHTML = '';
  
  let subtotal = 0;
  
  cart.forEach((item, index) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return;
    
    subtotal += product.price * item.qty;
    
    const image = product.images && product.images.length > 0 ? product.images[0] : generatePlaceholderImage(product);
    
    container.innerHTML += `
      <div class="cart-item">
        <a href="product.html?id=${product.id}" class="cart-item-image">
          <img src="${image}" alt="${tName(product.name)}">
        </a>
        <div class="cart-item-info">
          <h4><a href="product.html?id=${product.id}">${tName(product.name)}</a></h4>
          <div class="item-meta">
            ${t('shop_filter_size')}: ${item.size} | ${t('shop_filter_color')}: ${item.color}
          </div>
          <div class="quantity-selector mt-2" style="transform: scale(0.85); transform-origin: left center; margin-bottom:0;">
            <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
            <input type="text" class="qty-value" value="${item.qty}" readonly>
            <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price">
          ${formatPrice(product.price * item.qty)}
        </div>
        <button class="cart-item-remove" onclick="remove(${index})" title="${t('cart_remove')}">🗑️</button>
      </div>
    `;
  });
  
  updateSummary(subtotal);
  updatePageLanguage();
}

function updateQty(index, change) {
  const cart = getCart();
  const newQty = cart[index].qty + change;
  if (newQty > 0 && newQty <= 10) {
    updateCartQty(index, newQty);
    
    // Re-validate coupon if order total changed
    if (appliedCouponCode) {
      const subtotal = getCartTotal();
      const res = validateCoupon(appliedCouponCode, subtotal);
      if (!res.valid) {
        removeCoupon(res.message);
      } else {
        currentDiscount = res.discount;
      }
    }
    
    renderCart();
  }
}

function remove(index) {
  removeFromCart(index);
  
  if (appliedCouponCode) {
    const subtotal = getCartTotal();
    const res = validateCoupon(appliedCouponCode, subtotal);
    if (!res.valid) {
      removeCoupon();
    } else {
      currentDiscount = res.discount;
    }
  }
  
  renderCart();
  updateCartBadge();
}

function updateSummary(subtotal) {
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal - currentDiscount + shipping;
  
  document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('cartShipping').textContent = shipping === 0 ? t('cart_shipping_free') : formatPrice(shipping);
  
  const discountRow = document.getElementById('discountRow');
  if (currentDiscount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('cartDiscount').textContent = '-' + formatPrice(currentDiscount);
  } else {
    discountRow.style.display = 'none';
  }
  
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function applyCoupon() {
  const code = document.getElementById('couponCode').value.trim();
  const subtotal = getCartTotal();
  const errorEl = document.getElementById('couponError');
  const successEl = document.getElementById('couponSuccess');
  
  errorEl.classList.remove('show');
  successEl.classList.remove('show');
  
  if (!code) return;
  
  const res = validateCoupon(code, subtotal);
  
  if (res.valid) {
    currentDiscount = res.discount;
    appliedCouponCode = code;
    document.getElementById('couponSuccessMsg').textContent = `Coupon applied! You saved ${formatPrice(res.discount)}`;
    successEl.classList.add('show');
    
    // Save for checkout
    sessionStorage.setItem('sr_applied_coupon', JSON.stringify({
      code: res.coupon.code,
      discount: res.discount
    }));
    
    renderCart();
  } else {
    document.getElementById('couponErrorMsg').textContent = res.message;
    errorEl.classList.add('show');
    removeCoupon();
    renderCart();
  }
}

function removeCoupon(msg) {
  currentDiscount = 0;
  appliedCouponCode = null;
  sessionStorage.removeItem('sr_applied_coupon');
  document.getElementById('couponSuccess').classList.remove('show');
  if (msg) {
    document.getElementById('couponErrorMsg').textContent = msg;
    document.getElementById('couponError').classList.add('show');
  }
}

function proceedToCheckout() {
  window.location.href = 'checkout.html';
}
