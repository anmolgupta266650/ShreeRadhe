let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const itemsPerPage = 8;
const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "Free Size"];
const COLORS = [
  { name: "Pink", hex: "#E91E63" },
  { name: "Red", hex: "#D32F2F" },
  { name: "Blue", hex: "#1565C0" },
  { name: "Green", hex: "#388E3C" },
  { name: "Purple", hex: "#7B1FA2" },
  { name: "Black", hex: "#212121" },
  { name: "White", hex: "#FAFAFA" },
  { name: "Yellow", hex: "#FDD835" },
  { name: "Gold", hex: "#D4A853" },
  { name: "Teal", hex: "#00897B" }
];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('shop');
  document.getElementById('footerContainer').innerHTML = getFooterHTML();
  initNavigation();
  initLanguageToggle();
  
  allProducts = getProducts();
  
  renderFilters();
  
  // Read URL params
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    const cb = document.getElementById(`cat_${catParam}`);
    if (cb) cb.checked = true;
  }

  document.getElementById('priceRange').addEventListener('input', (e) => {
    document.getElementById('priceDisplayValue').textContent = formatPrice(parseInt(e.target.value));
  });
  document.getElementById('priceRange').addEventListener('change', applyFilters);

  window.addEventListener('languageChanged', () => {
    renderFilters(); // Re-render to get correct translations
    applyFilters();
  });

  applyFilters();
});

function renderFilters() {
  // Categories
  const catContainer = document.getElementById('categoryFilters');
  catContainer.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const isChecked = document.getElementById(`cat_${cat.id}`)?.checked;
    catContainer.innerHTML += `
      <label class="filter-option">
        <input type="checkbox" value="${cat.id}" id="cat_${cat.id}" onchange="applyFilters()" ${isChecked ? 'checked' : ''}>
        ${tName(cat.name)} (${cat.count})
      </label>
    `;
  });

  // Sizes
  const sizeContainer = document.getElementById('sizeFilters');
  sizeContainer.innerHTML = '';
  SIZES.forEach(size => {
    sizeContainer.innerHTML += `
      <label class="filter-option">
        <input type="checkbox" value="${size}" onchange="applyFilters()">
        ${size}
      </label>
    `;
  });

  // Colors
  const colorContainer = document.getElementById('colorFilters');
  colorContainer.innerHTML = '';
  COLORS.forEach(c => {
    colorContainer.innerHTML += `
      <div class="color-swatch" style="background-color: ${c.hex};" 
           title="${c.name}" data-color="${c.name}" onclick="toggleColor(this)">
      </div>
    `;
  });
}

function toggleColor(el) {
  el.classList.toggle('active');
  applyFilters();
}

function clearFilters() {
  document.querySelectorAll('#categoryFilters input').forEach(cb => cb.checked = false);
  document.querySelectorAll('#sizeFilters input').forEach(cb => cb.checked = false);
  document.querySelectorAll('.color-swatch').forEach(sw => sw.classList.remove('active'));
  document.getElementById('priceRange').value = 15000;
  document.getElementById('priceDisplayValue').textContent = formatPrice(15000);
  applyFilters();
}

function applyFilters() {
  const selectedCats = Array.from(document.querySelectorAll('#categoryFilters input:checked')).map(cb => cb.value);
  const selectedSizes = Array.from(document.querySelectorAll('#sizeFilters input:checked')).map(cb => cb.value);
  const selectedColors = Array.from(document.querySelectorAll('.color-swatch.active')).map(sw => sw.dataset.color.toLowerCase());
  const maxPrice = parseInt(document.getElementById('priceRange').value);

  filteredProducts = allProducts.filter(p => {
    if (selectedCats.length > 0 && !selectedCats.includes(p.category)) return false;
    if (p.price > maxPrice) return false;
    if (selectedSizes.length > 0 && !p.sizes.some(s => selectedSizes.includes(s))) return false;
    if (selectedColors.length > 0 && !p.colors.some(c => selectedColors.includes(c.name.toLowerCase()))) return false;
    return true;
  });

  // Sort
  const sort = document.getElementById('sortSelect').value;
  if (sort === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);
  else if (sort === 'newest') filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  else if (sort === 'popular') filteredProducts.sort((a, b) => b.rating - a.rating);

  document.getElementById('resultCount').textContent = filteredProducts.length;
  
  currentPage = 1;
  document.getElementById('productsGrid').innerHTML = '';
  
  if (filteredProducts.length === 0) {
    document.getElementById('noProducts').style.display = 'block';
    document.getElementById('loadMoreContainer').style.display = 'none';
  } else {
    document.getElementById('noProducts').style.display = 'none';
    loadMore();
  }
}

function loadMore() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const toShow = filteredProducts.slice(start, end);
  
  const grid = document.getElementById('productsGrid');
  toShow.forEach(p => {
    grid.appendChild(createProductCard(p));
  });

  if (end >= filteredProducts.length) {
    document.getElementById('loadMoreContainer').style.display = 'none';
  } else {
    document.getElementById('loadMoreContainer').style.display = 'block';
  }
  
  currentPage++;
  updatePageLanguage();
}
