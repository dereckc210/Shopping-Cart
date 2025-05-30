const cart = document.getElementById("cart");

const addButtons = document.querySelectorAll("#items-section button");

const removeButton = document.getElementById("remove-btn");

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("data-time");

    const option = document.createElement("option");
    option.textContent = itemName;
    option.value = itemName;

    cart.appendChild(option);
  });
});

removeButton.addEventListener("click", () => {
  const selected = Array.from(cart.selectedOptions);

  selected.forEach(option => {
    cart.removeChild(option);
  });
});
