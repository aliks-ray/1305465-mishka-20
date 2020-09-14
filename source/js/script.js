const modalBasket = document.querySelector(".modal");
const toBasketButton = document.querySelector(".product-of-the-week__button");
const basketButton = document.querySelectorAll(".product-card__button");

toBasketButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.add("modal__active");
  modalForm.classList.add("modal-wrapper--active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalBasket.classList.contains("modal__active")) {
      evt.preventDefault();
      modalBasket.classList.remove("modal__active");
    }
  }
});
