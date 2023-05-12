const elementsLike = document.querySelectorAll(".elements__like-button"),
    nameInput = document.querySelector("#name-input"),
    descriptionInput = document.querySelector("#description-input"),
    profileTitle = document.querySelector(".profile__title"),
    profileSubtitle = document.querySelector(".profile__subtitle"),
    profileEditButton = document.querySelector(".profile__edit-button"),
    popupCloseButton = document.querySelector(".popup__close-button"),
    popupSaveButton = document.querySelector(".popup__save-button"),
    popup = document.querySelector(".popup");

profileEditButton.addEventListener("click", function () {
    popup.classList.add("popup_open")
    nameInput.value = profileTitle.textContent
    descriptionInput.value = profileSubtitle.textContent
})

popupCloseButton.addEventListener("click", function () {
    popup.classList.remove("popup_open")
})

popupSaveButton.addEventListener("click", () => {
    let newProfileTitle = nameInput.value;
    profileTitle.textContent = newProfileTitle;
    let newProfileSubtitle = descriptionInput.value;
    profileSubtitle.textContent = newProfileSubtitle;
})

elementsLike.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.value == "elements__like-button") {
            element.classList.add("elements__like-button_active")
            element.classList.remove("elements__like-button")
        } else {
            element.classList.add("elements__like-button")
            element.classList.remove("elements__like-button_active")
        }
    })
});