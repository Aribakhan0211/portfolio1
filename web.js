// This function is called when the page is loaded.
function init() {
  // Add a click event listener to the links in the navigation bar.
  var links = document.querySelectorAll("nav a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      // Get the href attribute of the link.
      var href = this.getAttribute("href");

      // Scroll to the section with the given ID.
      var section = document.getElementById(href);
      section.scrollIntoView();
    });
  }
}

// Call the init function when the page is loaded.
window.onload = init;
