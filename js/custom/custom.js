// Scroll to top button functionality
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.addEventListener('scroll', function() {
    var button = document.getElementById('back-to-top-button');
    if (window.scrollY > 800) { // Adjust the scroll threshold as needed
      button.classList.remove('d-none');
    } 
    else {
      button.classList.add('d-none');
    }
  });