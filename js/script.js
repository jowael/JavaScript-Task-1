function addToCart(productName, price) {
  const cartSection = document.getElementById("cart-section");
  const cartItem = document.createElement("div");
  cartItem.classList.add("product-card-cart");
  cartItem.innerHTML = `
      <p>Name: ${productName}</p>
      <p>Price: $${price.toFixed(2)}</p>
  `;
  cartSection.appendChild(cartItem);
}

function showTotalPrice() {
  const cartItems = document.querySelectorAll("#cart-section .product-card-cart");
  let totalPrice = 0;

  cartItems.forEach((item) => {
    const priceText = item.querySelector("p:nth-child(2)").textContent;
    const price = parseFloat(priceText.replace("Price: $", ""));
    totalPrice += price;
  });

  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}
