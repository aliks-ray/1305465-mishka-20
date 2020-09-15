const modalBasket = document.querySelector(".modal");
const basketButton = document.querySelectorAll(".js-modal-button");

basketButton.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal__active");
    modalForm.classList.add("modal-wrapper--active");
  })
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalBasket.classList.contains("modal__active")) {
      evt.preventDefault();
      modalBasket.classList.remove("modal__active");
      modalForm.classList.remove("modal-wrapper--active")
    }
  }
});
