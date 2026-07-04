// ============================================
// SHREERADHE — Sample Product Data
// ============================================

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: { en: "Pink Anarkali Kurta", hi: "गुलाबी अनारकली कुर्ता" },
    price: 1299,
    comparePrice: 1999,
    category: "kurtis",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Pink", nameHi: "गुलाबी", hex: "#E91E63" },
      { name: "Maroon", nameHi: "मैरून", hex: "#880E4F" }
    ],
    description: {
      en: "Elegant pink Anarkali kurta crafted with premium cotton blend fabric. Features beautiful embroidery work on the neckline and sleeves. Perfect for festive occasions and family gatherings.",
      hi: "प्रीमियम कॉटन ब्लेंड फैब्रिक से बनी खूबसूरत गुलाबी अनारकली कुर्ता। नेकलाइन और स्लीव्स पर सुंदर कढ़ाई का काम। त्योहारों और पारिवारिक समारोहों के लिए बिल्कुल सही।"
    },
    images: [],
    rating: 4.5,
    reviews: 23,
    inStock: true,
    isNew: true,
    isTrending: true,
    isSale: true
  },
  {
    id: 2,
    name: { en: "Blue Silk Saree", hi: "नीली सिल्क साड़ी" },
    price: 2499,
    comparePrice: 3499,
    category: "sarees",
    sizes: ["Free Size"],
    colors: [
      { name: "Royal Blue", nameHi: "रॉयल ब्लू", hex: "#1565C0" },
      { name: "Navy", nameHi: "नेवी", hex: "#0D47A1" }
    ],
    description: {
      en: "Luxurious blue silk saree with intricate gold zari border. Comes with a matching blouse piece. The rich texture and sheen make it ideal for weddings and grand celebrations.",
      hi: "सुंदर गोल्ड ज़री बॉर्डर के साथ शानदार नीली सिल्क साड़ी। मैचिंग ब्लाउज पीस के साथ। समृद्ध बनावट इसे शादियों और भव्य समारोहों के लिए आदर्श बनाती है।"
    },
    images: [],
    rating: 4.8,
    reviews: 45,
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 3,
    name: { en: "Floral Print Kurti", hi: "फ्लोरल प्रिंट कुर्ती" },
    price: 799,
    comparePrice: 999,
    category: "kurtis",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Yellow", nameHi: "पीला", hex: "#FDD835" },
      { name: "White", nameHi: "सफ़ेद", hex: "#FAFAFA" }
    ],
    description: {
      en: "Breezy floral print kurti perfect for daily wear. Made with soft rayon fabric that keeps you comfortable all day. Features a mandarin collar and 3/4 sleeves.",
      hi: "दैनिक पहनने के लिए बिल्कुल सही फ्लोरल प्रिंट कुर्ती। नरम रेयॉन फैब्रिक से बनी जो आपको पूरे दिन आरामदायक रखती है। मंदारिन कॉलर और 3/4 स्लीव्स।"
    },
    images: [],
    rating: 4.2,
    reviews: 67,
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 4,
    name: { en: "Red Bridal Lehenga", hi: "लाल ब्राइडल लहंगा" },
    price: 8999,
    comparePrice: 12999,
    category: "lehengas",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Red", nameHi: "लाल", hex: "#D32F2F" },
      { name: "Maroon", nameHi: "मैरून", hex: "#B71C1C" }
    ],
    description: {
      en: "Stunning red bridal lehenga with heavy embroidery and sequin work. Includes lehenga, choli, and dupatta. Hand-crafted with attention to every detail for your special day.",
      hi: "भारी कढ़ाई और सीक्विन वर्क के साथ शानदार लाल ब्राइडल लहंगा। लहंगा, चोली और दुपट्टा शामिल है। आपके खास दिन के लिए हर विवरण पर ध्यान देकर हाथ से बनाया गया।"
    },
    images: [],
    rating: 4.9,
    reviews: 12,
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 5,
    name: { en: "White Chikankari Kurta", hi: "सफ़ेद चिकनकारी कुर्ता" },
    price: 1599,
    comparePrice: 2199,
    category: "kurtis",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", nameHi: "सफ़ेद", hex: "#FAFAFA" },
      { name: "Cream", nameHi: "क्रीम", hex: "#FFF8E1" }
    ],
    description: {
      en: "Classic Lucknowi Chikankari kurta in pristine white. Hand-embroidered with delicate floral patterns. A timeless piece that goes with everything.",
      hi: "शुद्ध सफेद में क्लासिक लखनवी चिकनकारी कुर्ता। नाजुक फूलों के पैटर्न से हाथ से कढ़ाई की गई। एक शाश्वत पीस जो हर चीज़ के साथ जाता है।"
    },
    images: [],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 6,
    name: { en: "Teal A-Line Dress", hi: "टील ए-लाइन ड्रेस" },
    price: 1899,
    comparePrice: 2599,
    category: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Teal", nameHi: "टील", hex: "#00897B" },
      { name: "Emerald", nameHi: "पन्ना", hex: "#2E7D32" }
    ],
    description: {
      en: "Modern teal A-line dress with a flattering fit. Made from premium crepe fabric. Features a boat neck and cinched waist. Perfect for office wear or casual outings.",
      hi: "आकर्षक फिट के साथ मॉडर्न टील ए-लाइन ड्रेस। प्रीमियम क्रेप फैब्रिक से बनी। बोट नेक और सिंच्ड वेस्ट। ऑफिस वियर या कैज़ुअल आउटिंग के लिए परफेक्ट।"
    },
    images: [],
    rating: 4.3,
    reviews: 34,
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: true
  },
  {
    id: 7,
    name: { en: "Green Banarasi Saree", hi: "हरी बनारसी साड़ी" },
    price: 3999,
    comparePrice: 5499,
    category: "sarees",
    sizes: ["Free Size"],
    colors: [
      { name: "Green", nameHi: "हरा", hex: "#388E3C" },
      { name: "Gold-Green", nameHi: "गोल्ड-ग्रीन", hex: "#689F38" }
    ],
    description: {
      en: "Exquisite green Banarasi saree woven with pure silk and gold zari. Traditional motifs with a contemporary feel. A must-have in every woman's wardrobe.",
      hi: "शुद्ध सिल्क और गोल्ड ज़री से बुनी शानदार हरी बनारसी साड़ी। समकालीन अनुभव के साथ पारंपरिक मोटिफ। हर महिला की अलमारी में ज़रूरी।"
    },
    images: [],
    rating: 4.7,
    reviews: 28,
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 8,
    name: { en: "Black Palazzo Set", hi: "ब्लैक पलाज़ो सेट" },
    price: 1099,
    comparePrice: 1499,
    category: "tops",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", nameHi: "काला", hex: "#212121" },
      { name: "Charcoal", nameHi: "चारकोल", hex: "#424242" }
    ],
    description: {
      en: "Chic black palazzo set with a printed short kurti top. Comfortable elastic waist palazzo pants. An effortless look for everyday elegance.",
      hi: "प्रिंटेड शॉर्ट कुर्ती टॉप के साथ शिक ब्लैक पलाज़ो सेट। आरामदायक इलास्टिक वेस्ट पलाज़ो पैंट। रोज़मर्रा की सुंदरता के लिए सहज लुक।"
    },
    images: [],
    rating: 4.1,
    reviews: 56,
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 9,
    name: { en: "Purple Sharara Set", hi: "पर्पल शरारा सेट" },
    price: 2799,
    comparePrice: 3799,
    category: "lehengas",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Purple", nameHi: "बैंगनी", hex: "#7B1FA2" },
      { name: "Lavender", nameHi: "लैवेंडर", hex: "#AB47BC" }
    ],
    description: {
      en: "Gorgeous purple sharara set with mirror work and thread embroidery. Includes kurta, sharara, and dupatta. Perfect for mehendi and sangeet functions.",
      hi: "मिरर वर्क और थ्रेड कढ़ाई के साथ भव्य पर्पल शरारा सेट। कुर्ता, शरारा और दुपट्टा शामिल। मेहंदी और संगीत समारोहों के लिए बिल्कुल सही।"
    },
    images: [],
    rating: 4.4,
    reviews: 19,
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 10,
    name: { en: "Coral Crop Top & Skirt", hi: "कोरल क्रॉप टॉप और स्कर्ट" },
    price: 1499,
    comparePrice: 2099,
    category: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Coral", nameHi: "कोरल", hex: "#FF7043" },
      { name: "Peach", nameHi: "पीच", hex: "#FFAB91" }
    ],
    description: {
      en: "Trendy coral crop top paired with a matching flared skirt. Embellished with sequin details. A head-turning outfit for parties and date nights.",
      hi: "मैचिंग फ्लेयर्ड स्कर्ट के साथ ट्रेंडी कोरल क्रॉप टॉप। सीक्विन डिटेल्स से सजा। पार्टियों और डेट नाइट्स के लिए शानदार आउटफिट।"
    },
    images: [],
    rating: 4.0,
    reviews: 41,
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: true
  },
  {
    id: 11,
    name: { en: "Mint Green Cotton Kurti", hi: "मिंट ग्रीन कॉटन कुर्ती" },
    price: 699,
    comparePrice: 899,
    category: "kurtis",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Mint", nameHi: "मिंट", hex: "#80CBC4" },
      { name: "Sea Green", nameHi: "सी ग्रीन", hex: "#4DB6AC" }
    ],
    description: {
      en: "Light and airy mint green cotton kurti for summer days. Simple yet stylish design with side slits. Your go-to comfort wear.",
      hi: "गर्मी के दिनों के लिए हल्की और हवादार मिंट ग्रीन कॉटन कुर्ती। साइड स्लिट के साथ सिंपल लेकिन स्टाइलिश डिज़ाइन। आपकी आरामदायक पहनावा।"
    },
    images: [],
    rating: 4.3,
    reviews: 72,
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 12,
    name: { en: "Gold Embroidered Dupatta", hi: "गोल्ड कढ़ाई दुपट्टा" },
    price: 599,
    comparePrice: 899,
    category: "accessories",
    sizes: ["Free Size"],
    colors: [
      { name: "Gold", nameHi: "सुनहरा", hex: "#D4A853" },
      { name: "Champagne", nameHi: "शैम्पेन", hex: "#D7CCC8" }
    ],
    description: {
      en: "Elegant gold embroidered dupatta with scalloped edges. Made with net fabric and adorned with sequin work. Elevates any ethnic outfit instantly.",
      hi: "स्कैलप्ड एज के साथ सुंदर गोल्ड कढ़ाई दुपट्टा। नेट फैब्रिक से बना और सीक्विन वर्क से सजा। किसी भी एथनिक आउटफिट को तुरंत बेहतर बनाता है।"
    },
    images: [],
    rating: 4.5,
    reviews: 33,
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: true
  }
];

const CATEGORIES = [
  { id: "sarees", name: { en: "Sarees", hi: "साड़ियाँ" }, icon: "👘", count: 0 },
  { id: "kurtis", name: { en: "Kurtis", hi: "कुर्तियाँ" }, icon: "👗", count: 0 },
  { id: "lehengas", name: { en: "Lehengas", hi: "लहंगे" }, icon: "💃", count: 0 },
  { id: "dresses", name: { en: "Dresses", hi: "ड्रेसेस" }, icon: "👠", count: 0 },
  { id: "tops", name: { en: "Tops & Sets", hi: "टॉप्स और सेट्स" }, icon: "👚", count: 0 },
  { id: "accessories", name: { en: "Accessories", hi: "एक्सेसरीज़" }, icon: "✨", count: 0 }
];

const SAMPLE_COUPONS = [
  { code: "WELCOME10", type: "percent", value: 10, minOrder: 500, expiry: "2027-12-31", active: true },
  { code: "FLAT200", type: "flat", value: 200, minOrder: 1500, expiry: "2027-12-31", active: true },
  { code: "FESTIVE25", type: "percent", value: 25, minOrder: 2000, expiry: "2027-03-31", active: true }
];

// Initialize products in localStorage if not present
function initializeData() {
  if (!localStorage.getItem('sr_products')) {
    localStorage.setItem('sr_products', JSON.stringify(SAMPLE_PRODUCTS));
  }
  if (!localStorage.getItem('sr_coupons')) {
    localStorage.setItem('sr_coupons', JSON.stringify(SAMPLE_COUPONS));
  }
  if (!localStorage.getItem('sr_cart')) {
    localStorage.setItem('sr_cart', JSON.stringify([]));
  }
  if (!localStorage.getItem('sr_wishlist')) {
    localStorage.setItem('sr_wishlist', JSON.stringify([]));
  }
  if (!localStorage.getItem('sr_orders')) {
    localStorage.setItem('sr_orders', JSON.stringify([]));
  }
  if (!localStorage.getItem('sr_settings')) {
    localStorage.setItem('sr_settings', JSON.stringify({
      whatsappNumber: '919876543210',
      upiId: 'shreeradhe@upi',
      storeName: 'Shreeradhe',
      storeEmail: 'info@shreeradhe.com',
      storePhone: '+91 98765 43210',
      storeAddress: 'Shop No. 12, Fashion Street, Mumbai, Maharashtra 400001'
    }));
  }
  if (!localStorage.getItem('sr_lang')) {
    localStorage.setItem('sr_lang', 'en');
  }

  // Update category counts
  const products = getProducts();
  CATEGORIES.forEach(cat => {
    cat.count = products.filter(p => p.category === cat.id).length;
  });
}

// Data access functions
function getProducts() {
  return JSON.parse(localStorage.getItem('sr_products') || '[]');
}

function getProduct(id) {
  return getProducts().find(p => p.id === parseInt(id));
}

function saveProducts(products) {
  localStorage.setItem('sr_products', JSON.stringify(products));
}

function getCart() {
  return JSON.parse(localStorage.getItem('sr_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('sr_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, size, color, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.productId === productId && item.size === size && item.color === color);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, size, color, qty });
  }
  saveCart(cart);
  showToast('Added to cart!', 'success');
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, qty) {
  const cart = getCart();
  if (qty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].qty = qty;
  }
  saveCart(cart);
}

function getCartTotal() {
  const cart = getCart();
  const products = getProducts();
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getWishlist() {
  return JSON.parse(localStorage.getItem('sr_wishlist') || '[]');
}

function saveWishlist(wishlist) {
  localStorage.setItem('sr_wishlist', JSON.stringify(wishlist));
}

function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.push(productId);
    showToast('Added to wishlist! ❤️', 'success');
  }
  saveWishlist(wishlist);
  return wishlist.includes(productId);
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

function getOrders() {
  return JSON.parse(localStorage.getItem('sr_orders') || '[]');
}

function saveOrders(orders) {
  localStorage.setItem('sr_orders', JSON.stringify(orders));
}

function getCoupons() {
  return JSON.parse(localStorage.getItem('sr_coupons') || '[]');
}

function saveCoupons(coupons) {
  localStorage.setItem('sr_coupons', JSON.stringify(coupons));
}

function validateCoupon(code, orderTotal) {
  const coupons = getCoupons();
  const coupon = coupons.find(c => c.code.toUpperCase() === code.toUpperCase() && c.active);
  if (!coupon) return { valid: false, message: 'Invalid coupon code' };
  if (new Date(coupon.expiry) < new Date()) return { valid: false, message: 'Coupon has expired' };
  if (orderTotal < coupon.minOrder) return { valid: false, message: `Minimum order ₹${coupon.minOrder} required` };
  
  const discount = coupon.type === 'percent' 
    ? Math.round(orderTotal * coupon.value / 100) 
    : coupon.value;
  
  return { valid: true, discount, coupon };
}

function getSettings() {
  return JSON.parse(localStorage.getItem('sr_settings') || '{}');
}

function saveSettings(settings) {
  localStorage.setItem('sr_settings', JSON.stringify(settings));
}

function generateOrderId() {
  return 'SR' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
}

// Initialize on load
initializeData();
