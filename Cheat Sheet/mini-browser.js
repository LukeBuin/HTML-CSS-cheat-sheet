// Mini-browser tab switching (scoped to each mini-browser)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mini-browser').forEach(function(browser) {
    const tabs = browser.querySelectorAll('.mini-browser-tab');
    const panes = browser.querySelectorAll('.mini-browser-pane');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('mini-browser-tab-active'));
        panes.forEach(p => p.classList.remove('mini-browser-pane-active'));
        tab.classList.add('mini-browser-tab-active');
        browser.querySelector('#' + tab.getAttribute('data-tab')).classList.add('mini-browser-pane-active');
      });
    });
  });
});

// Back to Top button logic
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', function() {
    backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
  });
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  // Hide initially
  backToTopBtn.style.display = 'none';
}
