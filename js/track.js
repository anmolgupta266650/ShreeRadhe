document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbarContainer').innerHTML = getNavbarHTML('track');
  document.getElementById('footerContainer').innerHTML = getFooterHTML();
  initNavigation();
  initLanguageToggle();
  updatePageLanguage();
});

function handleTrack(e) {
  e.preventDefault();
  const input = document.getElementById('trackInput').value.trim().toUpperCase();
  const errorEl = document.getElementById('trackError');
  const resultEl = document.getElementById('trackingResult');
  
  if (!input) return;
  
  const orders = getOrders();
  const order = orders.find(o => o.id === input);
  
  if (!order) {
    errorEl.style.display = 'block';
    resultEl.classList.remove('show');
    return;
  }
  
  errorEl.style.display = 'none';
  
  // Display details
  document.getElementById('displayOrderId').textContent = `Order ${order.id}`;
  document.getElementById('displayOrderDate').textContent = new Date(order.date).toLocaleDateString();
  document.getElementById('displayOrderTotal').textContent = formatPrice(order.total);
  
  // Reset steps
  document.querySelectorAll('.tracking-step').forEach(step => {
    step.classList.remove('completed', 'active');
  });
  
  // Animate progress
  let fillWidth = '0%';
  const status = order.status; // ordered, shipped, out_for_delivery, delivered
  
  setTimeout(() => {
    const s1 = document.getElementById('step1');
    const s2 = document.getElementById('step2');
    const s3 = document.getElementById('step3');
    const s4 = document.getElementById('step4');
    
    s1.classList.add('completed');
    fillWidth = '0%';
    
    if (status === 'shipped' || status === 'out_for_delivery' || status === 'delivered') {
      s2.classList.add('completed');
      fillWidth = '33%';
    } else {
      s1.classList.add('active');
    }
    
    if (status === 'out_for_delivery' || status === 'delivered') {
      s3.classList.add('completed');
      fillWidth = '66%';
    } else if (status === 'shipped') {
      s2.classList.add('active');
    }
    
    if (status === 'delivered') {
      s4.classList.add('completed');
      fillWidth = '100%';
    } else if (status === 'out_for_delivery') {
      s3.classList.add('active');
    }
    
    document.getElementById('progressFill').style.width = fillWidth;
  }, 100);
  
  resultEl.classList.add('show');
}
