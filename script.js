const popupOpened = document.querySelector(".popup_opened"),
    profileEditButton = document.querySelector(".profile__edit-button"),
    popupCloseButton = document.querySelector(".popup__close-button"),
    profileAddButton = document.querySelector(".profile__add-button"),
    popupSaveButton = document.querySelector(".popup__save-button"),
    popup = document.querySelector(".popup"),
    elementsLike = document.querySelectorAll(".elements__like-button");


popupCloseButton.addEventListener("click", () => {
    popup.classList.remove("popup_opened")
})

profileEditButton.addEventListener("click", () => {
    popup.classList.add("popup_opened")
})

profileAddButton.addEventListener("click", () => {
    popup.classList.add("popup_opened")
})

popupSaveButton.addEventListener("click", () => {
    console.log("Сохранено");
})

elementsLike.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.style.backgroundImage)
        if (element.style.backgroundImage == "url(\"../../../images/Like.png\")") {
            element.style.backgroundImage = "url(\"../../../images/Union.png\")"
        } else {
            element.style.backgroundImage = "url(\"../../../images/Like.png\")"
        }
    })
});

// первый клик по лайку выводит в консоль пустую строку из element.style.backgroundImage
// центровка страницы: надоли создавать доп. обертку для всей страницы после бади