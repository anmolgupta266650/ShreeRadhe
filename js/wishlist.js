document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('wishlist');
  document.getElementById('footerContainer').innerHTML = getFooterHTML();
  initNavigation();
  initLanguageToggle();
  
  renderWishlist();
  
  window.addEventListener('languageChanged', () => {
    renderWishlist(); // Re-render to update labels
  });
});

function renderWishlist() {
  const wishlist = getWishlist();
  const products = getProducts();
  const emptyState = document.getElementById('emptyWishlist');
  const grid = document.getElementById('wishlistGrid');
  
  if (wishlist.length === 0) {
    emptyState.style.display = 'block';
    grid.style.display = 'none';
    return;
  }
  
  emptyState.style.display = 'none';
  grid.style.display = 'grid';
  grid.innerHTML = '';
  
  wishlist.forEach(id => {
    const product = products.find(p => p.id === id);
    if (product) {
      // Modify product card to have a remove button instead of wishlist toggle
      const card = createProductCard(product);
      
      // Replace the heart button with remove button
      const actionBtn = card.querySelector('.product-action-btn');
      actionBtn.className = 'product-action-btn';
      actionBtn.innerHTML = '🗑️';
      actionBtn.onclick = (e) => {
        e.stopPropagation();
        toggleWishlist(product.id);
        renderWishlist();
      };
      
      // Update quick add to also remove from wishlist
      const quickAddBtn = card.querySelector('.product-quick-add .btn');
      quickAddBtn.onclick = (e) => {
        e.stopPropagation();
        const defaultSize = product.sizes[0] || '';
        const defaultColor = product.colors[0]?.name || '';
        addToCart(product.id, defaultSize, defaultColor, 1);
        animateCartBadge();
        toggleWishlist(product.id);
        renderWishlist();
      };
      quickAddBtn.innerHTML = `<span data-lang="wishlist_move_cart">${t('wishlist_move_cart')}</span> 🛒`;
      
      grid.appendChild(card);
    }
  });
  
  updatePageLanguage();
}
