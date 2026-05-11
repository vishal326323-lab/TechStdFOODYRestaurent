// Track cart count
let cartCount = 0;
let cartItems = [];

// Function to add items to cart
function addToCart(itemName) {

  cartCount++;
  cartItems.push(itemName);

  // Update cart count in navbar
  document.getElementById("cart-count").textContent = cartCount;

  // Show confirmation
  alert(itemName + " added to cart!");
}

/* CONTACT FORM */
// Just show the popup
      document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById("contact-form");

      form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Please fill all fields!"
          });
          return;
        }

        Swal.fire({
          icon: "success",
          title: "Message sent successfully!",
          showConfirmButton: false,
          timer: 2000
        });
        form.reset();
      });
    });
