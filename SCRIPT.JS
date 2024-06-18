window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#555'; // Change the background color when scrolled
    } else {
      navbar.style.backgroundColor = '#333'; // Revert to original color when back at the top
    }
  });
  
  var menuItems = document.querySelectorAll('#navbar a');
  menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      this.style.color = '#ff0'; // Change font color on hover
    });
    item.addEventListener('mouseout', function() {
      this.style.color = '#fff'; // Revert font color on mouseout
    });
  });