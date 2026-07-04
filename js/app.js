// ============================================
// SHREERADHE — Core Application Logic
// Navigation, Cart Badge, Toast, Scroll Animations, Common Utils
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initLanguageToggle();
  updateCartBadge();
  initRevealAnimations();
});

// ---------- Navigation ----------
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const navbar = document.querySelector('.navbar');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('show');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        navOverlay.classList.remove('show');
        document.body.style.overflow = '';
      });
    }

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('show');
        document.body.style.overflow = '';
      });
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'home.html')) {
      link.classList.add('active');
    }
  });
}

// ---------- Scroll Effects ----------
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    lastScroll = currentScroll;
  });
}

// ---------- Cart Badge ----------
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function animateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.classList.remove('bump');
    void badge.offsetWidth; // trigger reflow
    badge.classList.add('bump');
  });
}

// ---------- Language Toggle ----------
function initLanguageToggle() {
  document.querySelectorAll('.lang-toggle span').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langOption;
      if (lang) {
        setLang(lang);
      }
    });
  });

  // Initialize language on page load
  updatePageLanguage();
}

// ---------- Toast Notifications ----------
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = {
    success: '✅',
    error: '❌',
    info: '💡',
    warning: '⚠️'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || '📢'}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ---------- Reveal on Scroll ----------
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ---------- Modal ----------
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('show');
    document.body.style.overflow = '';
  }
});

// ---------- Utility Functions ----------
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function getDiscountPercent(price, comparePrice) {
  if (!comparePrice || comparePrice <= price) return 0;
  return Math.round(((comparePrice - price) / comparePrice) * 100);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function createProductCard(product) {
  const discount = getDiscountPercent(product.price, product.comparePrice);
  const wishlisted = isInWishlist(product.id);
  const lang = getLang();

  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.images && product.images.length > 0 ? product.images[0] : generatePlaceholderImage(product)}" alt="${tName(product.name)}" loading="lazy">
      <div class="product-badges">
        ${product.isNew ? `<span class="badge badge-new">${t('common_new')}</span>` : ''}
        ${product.isSale && discount > 0 ? `<span class="badge badge-sale">${discount}% ${t('common_off')}</span>` : ''}
        ${product.isTrending ? `<span class="badge badge-trending">${t('common_trending')}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="product-action-btn ${wishlisted ? 'wishlisted' : ''}" onclick="event.stopPropagation(); handleWishlistToggle(${product.id}, this)" title="${t('product_add_wishlist')}">
          ${wishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-quick-add">
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); quickAddToCart(${product.id})">${t('common_quick_add')} 🛒</button>
      </div>
    </div>
    <a href="product.html?id=${product.id}" class="product-info">
      <p class="product-category-label">${tName(CATEGORIES.find(c => c.id === product.category)?.name || { en: product.category })}</p>
      <h4 class="product-name">${tName(product.name)}</h4>
      <div class="product-price">
        <span class="current-price">${formatPrice(product.price)}</span>
        ${product.comparePrice > product.price ? `<span class="original-price">${formatPrice(product.comparePrice)}</span>` : ''}
        ${discount > 0 ? `<span class="discount-percent">${discount}% off</span>` : ''}
      </div>
      <div class="product-rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
    </a>
  `;

  return card;
}

function generatePlaceholderImage(product) {
  // Generate a color-based SVG placeholder
  const color = product.colors && product.colors.length > 0 ? product.colors[0].hex : '#C45B7C';
  const name = tName(product.name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:0.15"/>
        <stop offset="100%" style="stop-color:${color};stop-opacity:0.3"/>
      </linearGradient>
    </defs>
    <rect width="400" height="500" fill="url(#bg)"/>
    <text x="200" y="230" text-anchor="middle" font-family="serif" font-size="48" fill="${color}" opacity="0.5">👗</text>
    <text x="200" y="290" text-anchor="middle" font-family="sans-serif" font-size="14" fill="${color}" opacity="0.7">${name.substring(0, 25)}</text>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function handleWishlistToggle(productId, btn) {
  const isWishlisted = toggleWishlist(productId);
  if (btn) {
    btn.classList.toggle('wishlisted', isWishlisted);
    btn.innerHTML = isWishlisted ? '❤️' : '🤍';
  }
}

function quickAddToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;
  const defaultSize = product.sizes[0] || '';
  const defaultColor = product.colors[0]?.name || '';
  addToCart(productId, defaultSize, defaultColor, 1);
  animateCartBadge();
}

// Generate WhatsApp link
function generateWhatsAppLink(message) {
  const settings = getSettings();
  const phone = settings.whatsappNumber || '919876543210';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// ---------- Navbar HTML Generator ----------
function getNavbarHTML(activePage) {
  return `
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <a href="home.html" class="nav-logo">
          <span class="logo-icon">🪷</span>
          Shreeradhe
        </a>
        <ul class="nav-links">
          <li><a href="home.html" ${activePage === 'home' ? 'class="active"' : ''} data-lang="nav_home">${t('nav_home')}</a></li>
          <li><a href="shop.html" ${activePage === 'shop' ? 'class="active"' : ''} data-lang="nav_shop">${t('nav_shop')}</a></li>
          <li><a href="about.html" ${activePage === 'about' ? 'class="active"' : ''} data-lang="nav_about">${t('nav_about')}</a></li>
          <li><a href="contact.html" ${activePage === 'contact' ? 'class="active"' : ''} data-lang="nav_contact">${t('nav_contact')}</a></li>
          <li><a href="track-order.html" ${activePage === 'track' ? 'class="active"' : ''} data-lang="nav_track">${t('nav_track')}</a></li>
        </ul>
        <div class="nav-actions">
          <div class="lang-toggle">
            <span data-lang-option="en" class="${getLang() === 'en' ? 'active' : ''}">EN</span>
            <span data-lang-option="hi" class="${getLang() === 'hi' ? 'active' : ''}">हिं</span>
          </div>
          <a href="profile.html" class="nav-action-btn" title="Profile">👤</a>
          <a href="wishlist.html" class="nav-action-btn" title="${t('nav_wishlist')}">🤍</a>
          <a href="cart.html" class="nav-action-btn" title="${t('nav_cart')}">
            🛒
            <span class="cart-badge" style="display:${getCartCount() > 0 ? 'flex' : 'none'}">${getCartCount()}</span>
          </a>
        </div>
        <div class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <div class="nav-overlay" id="navOverlay"></div>
    <nav class="mobile-nav" id="mobileNav">
      <div class="lang-toggle" style="margin-bottom:24px;">
        <span data-lang-option="en" class="${getLang() === 'en' ? 'active' : ''}">EN</span>
        <span data-lang-option="hi" class="${getLang() === 'hi' ? 'active' : ''}">हिं</span>
      </div>
      <a href="home.html" ${activePage === 'home' ? 'class="active"' : ''} data-lang="nav_home">${t('nav_home')}</a>
      <a href="shop.html" ${activePage === 'shop' ? 'class="active"' : ''} data-lang="nav_shop">${t('nav_shop')}</a>
      <a href="about.html" ${activePage === 'about' ? 'class="active"' : ''} data-lang="nav_about">${t('nav_about')}</a>
      <a href="contact.html" ${activePage === 'contact' ? 'class="active"' : ''} data-lang="nav_contact">${t('nav_contact')}</a>
      <a href="track-order.html" ${activePage === 'track' ? 'class="active"' : ''} data-lang="nav_track">${t('nav_track')}</a>
      <a href="wishlist.html" ${activePage === 'wishlist' ? 'class="active"' : ''}>🤍 <span data-lang="nav_wishlist">${t('nav_wishlist')}</span></a>
      <a href="cart.html" ${activePage === 'cart' ? 'class="active"' : ''}>🛒 <span data-lang="nav_cart">${t('nav_cart')}</span> (${getCartCount()})</a>
      <a href="profile.html" ${activePage === 'profile' ? 'class="active"' : ''}>👤 Profile</a>
      <a href="admin.html" style="color:var(--text-muted); font-size: 0.85rem; margin-top: 20px;">🔐 <span data-lang="nav_admin">${t('nav_admin')}</span></a>
    </nav>
  `;
}

function getFooterHTML() {
  const settings = getSettings();
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>🪷 Shreeradhe</h3>
            <p data-lang="footer_desc">${t('footer_desc')}</p>
            <div class="footer-social">
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Pinterest">📌</a>
              <a href="#" title="YouTube">🎬</a>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-lang="footer_quick_links">${t('footer_quick_links')}</h4>
            <a href="home.html" data-lang="nav_home">${t('nav_home')}</a>
            <a href="shop.html" data-lang="nav_shop">${t('nav_shop')}</a>
            <a href="about.html" data-lang="nav_about">${t('nav_about')}</a>
            <a href="contact.html" data-lang="nav_contact">${t('nav_contact')}</a>
          </div>
          <div class="footer-col">
            <h4 data-lang="footer_customer_care">${t('footer_customer_care')}</h4>
            <a href="track-order.html" data-lang="nav_track">${t('nav_track')}</a>
            <a href="#" data-lang="footer_shipping_policy">${t('footer_shipping_policy')}</a>
            <a href="#" data-lang="footer_return_policy">${t('footer_return_policy')}</a>
            <a href="#" data-lang="footer_terms">${t('footer_terms')}</a>
          </div>
          <div class="footer-col">
            <h4 data-lang="footer_connect">${t('footer_connect')}</h4>
            <a href="tel:${settings.storePhone}">📞 ${settings.storePhone}</a>
            <a href="mailto:${settings.storeEmail}">📧 ${settings.storeEmail}</a>
            <a href="${generateWhatsAppLink('Hi! I have a question.')}" target="_blank">💬 WhatsApp</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Shreeradhe. <span data-lang="footer_rights">${t('footer_rights')}</span></p>
        </div>
      </div>
    </footer>
  `;
}

// ---------- Authentication ----------
function requireAuth() {
  const currentPage = window.location.pathname.split('/').pop();
  
  // Skip auth check if we are on the login portal
  if (currentPage === 'index.html' || currentPage === '') return;
  
  const isUser = sessionStorage.getItem('sr_user_logged_in') === 'true';
  const isAdmin = sessionStorage.getItem('sr_admin_logged_in') === 'true';
  
  if (currentPage === 'admin.html') {
    if (!isAdmin) {
      window.location.href = 'index.html';
    }
  } else {
    if (!isUser && !isAdmin) {
      window.location.href = 'index.html';
    }
  }
}
requireAuth();
