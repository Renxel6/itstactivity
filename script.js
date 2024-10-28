document.addEventListener("DOMContentLoaded", function() {
    
    const subscribeButton = document.getElementById("subscribeButton");
    const popupForm = document.getElementById("popupForm");
    const closeButton = document.getElementById("closeButton");
    const navLinks = document.querySelectorAll('nav ul li a');

    let hasNavigated = false;

    
    function showPopup() {
        if (!hasNavigated) {
            popupForm.style.display = "flex";
        }
    }

    // Show the pop-up after 5 seconds unless navigated
    setTimeout(showPopup, 5000);

    // Show the pop-up when the Subscribe button is clicked
    subscribeButton.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });

    // Hide the pop-up when the Close button is clicked
    closeButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    // Hide the pop-up when clicking outside the form container
    window.addEventListener("click", function(event) {
        if (event.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Track navigation clicks
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            hasNavigated = true; // Set flag to true when a navigation link is clicked
        });
    });
});
