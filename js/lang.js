// ============================================
// SHREERADHE — Language Translation System
// Hindi + English
// ============================================

const TRANSLATIONS = {
  // Navigation
  nav_home: { en: "Home", hi: "होम" },
  nav_shop: { en: "Shop", hi: "शॉप" },
  nav_about: { en: "About", hi: "हमारे बारे में" },
  nav_contact: { en: "Contact", hi: "संपर्क" },
  nav_cart: { en: "Cart", hi: "कार्ट" },
  nav_wishlist: { en: "Wishlist", hi: "विशलिस्ट" },
  nav_track: { en: "Track Order", hi: "ऑर्डर ट्रैक करें" },
  nav_admin: { en: "Admin", hi: "एडमिन" },

  // Hero
  hero_badge: { en: "NEW COLLECTION 2026", hi: "नया कलेक्शन 2026" },
  hero_title_1: { en: "Discover Your", hi: "अपनी" },
  hero_title_2: { en: "Perfect Style", hi: "परफेक्ट स्टाइल खोजें" },
  hero_desc: { en: "Explore our handpicked collection of ethnic and contemporary women's fashion. From elegant sarees to trendy kurtis — find your perfect look.", hi: "एथनिक और कंटेम्पररी महिला फैशन का हमारा चुनिंदा कलेक्शन एक्सप्लोर करें। सुंदर साड़ियों से लेकर ट्रेंडी कुर्तियों तक — अपना परफेक्ट लुक खोजें।" },
  hero_btn_shop: { en: "Shop Now", hi: "अभी खरीदें" },
  hero_btn_collection: { en: "View Collection", hi: "कलेक्शन देखें" },

  // Sections
  section_categories: { en: "Shop by Category", hi: "कैटेगरी से खरीदें" },
  section_categories_desc: { en: "Find exactly what you're looking for", hi: "वही खोजें जो आप ढूंढ रहे हैं" },
  section_trending: { en: "Trending Now", hi: "अभी ट्रेंडिंग" },
  section_trending_desc: { en: "Most loved by our customers", hi: "हमारे ग्राहकों द्वारा सबसे पसंदीदा" },
  section_new: { en: "New Arrivals", hi: "नई आवक" },
  section_new_desc: { en: "Fresh styles just dropped", hi: "ताज़ा स्टाइल अभी आए हैं" },
  section_related: { en: "You May Also Like", hi: "आपको ये भी पसंद आ सकता है" },

  // Brand Story
  brand_story_title: { en: "The Shreeradhe Story", hi: "श्रीराधे की कहानी" },
  brand_story_text: { en: "Born from a passion for timeless Indian craftsmanship, Shreeradhe brings you handpicked fashion that celebrates the modern Indian woman. Every piece tells a story of tradition meeting contemporary elegance.", hi: "भारतीय शिल्पकला के प्रति जुनून से जन्मी, श्रीराधे आपके लिए हाथ से चुना हुआ फैशन लाती है जो आधुनिक भारतीय महिला का जश्न मनाता है। हर टुकड़ा परंपरा और समकालीन सुंदरता की कहानी कहता है।" },
  brand_story_btn: { en: "Our Story", hi: "हमारी कहानी" },

  // Newsletter
  newsletter_title: { en: "Stay in Style", hi: "स्टाइल में रहें" },
  newsletter_desc: { en: "Subscribe for exclusive offers, new arrivals & style tips", hi: "विशेष ऑफर, नई आवक और स्टाइल टिप्स के लिए सब्सक्राइब करें" },
  newsletter_placeholder: { en: "Enter your email", hi: "अपना ईमेल दर्ज करें" },
  newsletter_btn: { en: "Subscribe", hi: "सब्सक्राइब" },

  // Shop Page
  shop_title: { en: "Our Collection", hi: "हमारा कलेक्शन" },
  shop_filter: { en: "Filters", hi: "फ़िल्टर" },
  shop_filter_category: { en: "Category", hi: "कैटेगरी" },
  shop_filter_price: { en: "Price Range", hi: "कीमत सीमा" },
  shop_filter_size: { en: "Size", hi: "साइज़" },
  shop_filter_color: { en: "Color", hi: "रंग" },
  shop_sort: { en: "Sort by", hi: "क्रमबद्ध करें" },
  shop_sort_popular: { en: "Popular", hi: "लोकप्रिय" },
  shop_sort_newest: { en: "Newest", hi: "नवीनतम" },
  shop_sort_low: { en: "Price: Low to High", hi: "कीमत: कम से ज़्यादा" },
  shop_sort_high: { en: "Price: High to Low", hi: "कीमत: ज़्यादा से कम" },
  shop_results: { en: "products found", hi: "प्रोडक्ट मिले" },
  shop_load_more: { en: "Load More", hi: "और लोड करें" },
  shop_no_products: { en: "No products found", hi: "कोई प्रोडक्ट नहीं मिला" },
  shop_clear_filters: { en: "Clear all filters", hi: "सभी फ़िल्टर हटाएं" },

  // Product Detail
  product_add_cart: { en: "Add to Cart", hi: "कार्ट में जोड़ें" },
  product_add_wishlist: { en: "Wishlist", hi: "विशलिस्ट" },
  product_whatsapp: { en: "Ask on WhatsApp", hi: "WhatsApp पर पूछें" },
  product_description: { en: "Description", hi: "विवरण" },
  product_reviews: { en: "Reviews", hi: "समीक्षाएं" },
  product_shipping: { en: "Shipping Info", hi: "शिपिंग जानकारी" },
  product_size_guide: { en: "Size Guide", hi: "साइज़ गाइड" },
  product_select_size: { en: "Select Size", hi: "साइज़ चुनें" },
  product_select_color: { en: "Select Color", hi: "रंग चुनें" },
  product_in_stock: { en: "In Stock", hi: "स्टॉक में" },
  product_out_stock: { en: "Out of Stock", hi: "स्टॉक में नहीं" },

  // Cart
  cart_title: { en: "Shopping Cart", hi: "शॉपिंग कार्ट" },
  cart_empty: { en: "Your cart is empty", hi: "आपकी कार्ट खाली है" },
  cart_empty_desc: { en: "Looks like you haven't added anything yet", hi: "लगता है आपने अभी तक कुछ नहीं जोड़ा" },
  cart_continue: { en: "Continue Shopping", hi: "खरीदारी जारी रखें" },
  cart_summary: { en: "Order Summary", hi: "ऑर्डर सारांश" },
  cart_subtotal: { en: "Subtotal", hi: "उप-कुल" },
  cart_shipping: { en: "Shipping", hi: "शिपिंग" },
  cart_shipping_free: { en: "FREE", hi: "मुफ़्त" },
  cart_discount: { en: "Discount", hi: "छूट" },
  cart_total: { en: "Total", hi: "कुल" },
  cart_coupon_placeholder: { en: "Enter coupon code", hi: "कूपन कोड दर्ज करें" },
  cart_apply: { en: "Apply", hi: "लागू करें" },
  cart_checkout: { en: "Proceed to Checkout", hi: "चेकआउट पर जाएं" },
  cart_remove: { en: "Remove", hi: "हटाएं" },

  // Checkout
  checkout_title: { en: "Checkout", hi: "चेकआउट" },
  checkout_shipping_details: { en: "Shipping Details", hi: "शिपिंग विवरण" },
  checkout_name: { en: "Full Name", hi: "पूरा नाम" },
  checkout_phone: { en: "Phone Number", hi: "फ़ोन नंबर" },
  checkout_email: { en: "Email", hi: "ईमेल" },
  checkout_address: { en: "Address", hi: "पता" },
  checkout_city: { en: "City", hi: "शहर" },
  checkout_state: { en: "State", hi: "राज्य" },
  checkout_pincode: { en: "Pincode", hi: "पिनकोड" },
  checkout_payment: { en: "Payment Method", hi: "भुगतान विधि" },
  checkout_cod: { en: "Cash on Delivery", hi: "कैश ऑन डिलीवरी" },
  checkout_cod_desc: { en: "Pay when you receive your order", hi: "ऑर्डर मिलने पर भुगतान करें" },
  checkout_upi: { en: "UPI Payment", hi: "UPI भुगतान" },
  checkout_upi_desc: { en: "Pay via Google Pay, PhonePe, Paytm", hi: "Google Pay, PhonePe, Paytm से भुगतान करें" },
  checkout_place_order: { en: "Place Order via WhatsApp", hi: "WhatsApp से ऑर्डर करें" },
  checkout_order_placed: { en: "Order Placed Successfully!", hi: "ऑर्डर सफलतापूर्वक दिया गया!" },
  checkout_order_id: { en: "Your Order ID", hi: "आपकी ऑर्डर आईडी" },
  checkout_whatsapp_msg: { en: "We've sent your order details to WhatsApp", hi: "हमने आपकी ऑर्डर डिटेल्स WhatsApp पर भेजी हैं" },

  // Wishlist
  wishlist_title: { en: "My Wishlist", hi: "मेरी विशलिस्ट" },
  wishlist_empty: { en: "Your wishlist is empty", hi: "आपकी विशलिस्ट खाली है" },
  wishlist_empty_desc: { en: "Save items you love for later", hi: "बाद के लिए पसंदीदा आइटम सेव करें" },
  wishlist_move_cart: { en: "Move to Cart", hi: "कार्ट में भेजें" },

  // Order Tracking
  track_title: { en: "Track Your Order", hi: "अपना ऑर्डर ट्रैक करें" },
  track_desc: { en: "Enter your order ID to track your package", hi: "अपने पैकेज को ट्रैक करने के लिए ऑर्डर आईडी दर्ज करें" },
  track_placeholder: { en: "Enter Order ID", hi: "ऑर्डर आईडी दर्ज करें" },
  track_btn: { en: "Track", hi: "ट्रैक करें" },
  track_ordered: { en: "Ordered", hi: "ऑर्डर किया" },
  track_shipped: { en: "Shipped", hi: "शिप किया" },
  track_out_delivery: { en: "Out for Delivery", hi: "डिलीवरी के लिए निकला" },
  track_delivered: { en: "Delivered", hi: "डिलीवर हो गया" },
  track_not_found: { en: "Order not found", hi: "ऑर्डर नहीं मिला" },

  // About
  about_title: { en: "Our Story", hi: "हमारी कहानी" },
  about_desc: { en: "Shreeradhe was born from a simple dream — to make every Indian woman feel beautiful in clothes that celebrate her heritage while embracing modernity. We curate and craft pieces that blend traditional artistry with contemporary design, ensuring every woman finds her perfect expression of style.", hi: "श्रीराधे का जन्म एक सपने से हुआ — हर भारतीय महिला को ऐसे कपड़ों में खूबसूरत महसूस कराना जो उनकी विरासत का जश्न मनाते हुए आधुनिकता को अपनाएं। हम ऐसे डिज़ाइन तैयार करते हैं जो पारंपरिक कला और समकालीन डिज़ाइन का मिश्रण करते हैं।" },
  about_value_1_title: { en: "Quality First", hi: "गुणवत्ता सबसे पहले" },
  about_value_1_desc: { en: "Every piece is crafted with premium fabrics and meticulous attention to detail", hi: "हर पीस प्रीमियम फैब्रिक और बारीक ध्यान से बनाया गया है" },
  about_value_2_title: { en: "Artisan Crafted", hi: "कारीगरों द्वारा निर्मित" },
  about_value_2_desc: { en: "We partner with skilled artisans to preserve traditional craftsmanship", hi: "हम पारंपरिक शिल्पकला को संरक्षित करने के लिए कुशल कारीगरों के साथ काम करते हैं" },
  about_value_3_title: { en: "Sustainable Fashion", hi: "सस्टेनेबल फैशन" },
  about_value_3_desc: { en: "Committed to ethical practices and eco-friendly materials", hi: "नैतिक प्रथाओं और पर्यावरण-अनुकूल सामग्री के प्रति प्रतिबद्ध" },

  // Contact
  contact_title: { en: "Get in Touch", hi: "संपर्क करें" },
  contact_desc: { en: "We'd love to hear from you", hi: "हमें आपसे सुनकर खुशी होगी" },
  contact_form_name: { en: "Your Name", hi: "आपका नाम" },
  contact_form_email: { en: "Your Email", hi: "आपका ईमेल" },
  contact_form_subject: { en: "Subject", hi: "विषय" },
  contact_form_message: { en: "Message", hi: "संदेश" },
  contact_form_send: { en: "Send Message", hi: "संदेश भेजें" },
  contact_whatsapp: { en: "Chat on WhatsApp", hi: "WhatsApp पर चैट करें" },
  contact_faq_title: { en: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न" },

  // FAQ
  faq_1_q: { en: "How long does delivery take?", hi: "डिलीवरी में कितना समय लगता है?" },
  faq_1_a: { en: "Standard delivery takes 5-7 business days. Express delivery is available for select locations within 2-3 business days.", hi: "स्टैंडर्ड डिलीवरी में 5-7 बिजनेस डेज लगते हैं। चुनिंदा स्थानों के लिए 2-3 बिजनेस डेज में एक्सप्रेस डिलीवरी उपलब्ध है।" },
  faq_2_q: { en: "What is your return policy?", hi: "आपकी रिटर्न पॉलिसी क्या है?" },
  faq_2_a: { en: "We offer easy 7-day returns for all products. Items must be unworn and in original packaging with tags.", hi: "हम सभी उत्पादों पर 7 दिन की आसान वापसी प्रदान करते हैं। आइटम बिना पहने और टैग के साथ ओरिजिनल पैकेजिंग में होने चाहिए।" },
  faq_3_q: { en: "Do you offer Cash on Delivery?", hi: "क्या आप कैश ऑन डिलीवरी प्रदान करते हैं?" },
  faq_3_a: { en: "Yes! We offer Cash on Delivery (COD) across India. UPI payment is also available.", hi: "हां! हम पूरे भारत में कैश ऑन डिलीवरी (COD) प्रदान करते हैं। UPI भुगतान भी उपलब्ध है।" },
  faq_4_q: { en: "How can I track my order?", hi: "मैं अपना ऑर्डर कैसे ट्रैक कर सकती हूं?" },
  faq_4_a: { en: "You can track your order using the Order ID on our Track Order page. You'll also receive WhatsApp updates.", hi: "आप हमारे ट्रैक ऑर्डर पेज पर ऑर्डर आईडी का उपयोग करके अपना ऑर्डर ट्रैक कर सकती हैं। आपको WhatsApp अपडेट भी मिलेंगे।" },

  // Footer
  footer_desc: { en: "Celebrating the beauty of Indian women through handpicked fashion that blends tradition with modernity.", hi: "परंपरा और आधुनिकता का मिश्रण करने वाले चुनिंदा फैशन के माध्यम से भारतीय महिलाओं की सुंदरता का जश्न।" },
  footer_quick_links: { en: "Quick Links", hi: "त्वरित लिंक" },
  footer_customer_care: { en: "Customer Care", hi: "ग्राहक सेवा" },
  footer_shipping_policy: { en: "Shipping Policy", hi: "शिपिंग पॉलिसी" },
  footer_return_policy: { en: "Return Policy", hi: "वापसी नीति" },
  footer_privacy: { en: "Privacy Policy", hi: "गोपनीयता नीति" },
  footer_terms: { en: "Terms & Conditions", hi: "नियम और शर्तें" },
  footer_connect: { en: "Connect", hi: "जुड़ें" },
  footer_rights: { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },

  // Admin
  admin_title: { en: "Admin Panel", hi: "एडमिन पैनल" },
  admin_login_title: { en: "Admin Login", hi: "एडमिन लॉगिन" },
  admin_login_desc: { en: "Enter your credentials to access the dashboard", hi: "डैशबोर्ड तक पहुंचने के लिए अपने क्रेडेंशियल्स दर्ज करें" },
  admin_username: { en: "Username", hi: "यूज़रनेम" },
  admin_password: { en: "Password", hi: "पासवर्ड" },
  admin_login_btn: { en: "Login", hi: "लॉगिन" },
  admin_logout: { en: "Logout", hi: "लॉगआउट" },
  admin_products: { en: "Products", hi: "प्रोडक्ट्स" },
  admin_orders: { en: "Orders", hi: "ऑर्डर्स" },
  admin_coupons: { en: "Coupons", hi: "कूपन" },
  admin_settings: { en: "Settings", hi: "सेटिंग्स" },
  admin_add_product: { en: "Add Product", hi: "प्रोडक्ट जोड़ें" },
  admin_edit_product: { en: "Edit Product", hi: "प्रोडक्ट एडिट करें" },
  admin_total_products: { en: "Total Products", hi: "कुल प्रोडक्ट्स" },
  admin_total_orders: { en: "Total Orders", hi: "कुल ऑर्डर्स" },
  admin_revenue: { en: "Revenue", hi: "राजस्व" },

  // Common
  common_search: { en: "Search...", hi: "खोजें..." },
  common_all: { en: "All", hi: "सभी" },
  common_save: { en: "Save", hi: "सेव करें" },
  common_cancel: { en: "Cancel", hi: "रद्द करें" },
  common_delete: { en: "Delete", hi: "हटाएं" },
  common_edit: { en: "Edit", hi: "संपादित करें" },
  common_close: { en: "Close", hi: "बंद करें" },
  common_loading: { en: "Loading...", hi: "लोड हो रहा है..." },
  common_no_results: { en: "No results found", hi: "कोई परिणाम नहीं मिला" },
  common_view_all: { en: "View All", hi: "सभी देखें" },
  common_back: { en: "Back", hi: "वापस" },
  common_off: { en: "OFF", hi: "छूट" },
  common_new: { en: "NEW", hi: "नया" },
  common_sale: { en: "SALE", hi: "सेल" },
  common_trending: { en: "TRENDING", hi: "ट्रेंडिंग" },
  common_quick_add: { en: "Quick Add", hi: "जल्दी जोड़ें" },
  common_explore: { en: "Explore", hi: "एक्सप्लोर करें" },
};

// Get translation
function t(key) {
  const lang = localStorage.getItem('sr_lang') || 'en';
  const translation = TRANSLATIONS[key];
  if (!translation) return key;
  return translation[lang] || translation.en || key;
}

// Get localized name (for products/categories with {en, hi} objects)
function tName(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  const lang = localStorage.getItem('sr_lang') || 'en';
  return obj[lang] || obj.en || '';
}

// Get current language
function getLang() {
  return localStorage.getItem('sr_lang') || 'en';
}

// Set language
function setLang(lang) {
  localStorage.setItem('sr_lang', lang);
  updatePageLanguage();
}

// Update all translatable elements on page
function updatePageLanguage() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  // Update language toggle buttons
  const lang = getLang();
  document.querySelectorAll('.lang-toggle span').forEach(span => {
    span.classList.toggle('active', span.dataset.langOption === lang);
  });

  // Dispatch event for page-specific updates
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: getLang() } }));
}
