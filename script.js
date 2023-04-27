const popupOpened = document.querySelector(".popup_opened"),
    profileEditButton = document.querySelector(".profile__edit-button"),
    popupCloseButton = document.querySelector(".popup__close-button"),
    profileAddButton = document.querySelector(".profile__add-button"),
    popupSaveButton = document.querySelector(".popup__save-button"),
    popup = document.querySelector(".popup"),
    elementsLike = document.querySelectorAll(".elements__like");


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

// elementsLike.addEventListener("click", (e) => {
//     console.log(e)
//     elementsLike.src = "images/Union.png"
// })

elementsLike.forEach(element => {
    element.addEventListener("click", () => {
        if (element.getAttribute("src") == "images/Like.png") {
            element.src = "images/Union.png"
        } else {
            element.src = "images/Like.png"
        }
    })
});


//Надо ли делать карандаш и плюс кнопками в html(тегом button)
//popupOpened.style.display = "none";