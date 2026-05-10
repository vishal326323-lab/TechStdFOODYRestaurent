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
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully!");
    document.getElementById("contact-form").reset();
  });
