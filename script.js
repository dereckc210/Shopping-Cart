const cart = document.getElementById("cart-section");

const addButtons = document.querySelectorAll("cart");

const removeButton = document.getElementById("remove-btn");

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("data-time");

    const option = document.createElement("option");
    option.textContent = itemName;
    option.value = itemName;

    cart.____________________;
  });
});
