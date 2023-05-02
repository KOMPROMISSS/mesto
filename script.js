const popupOpened = document.querySelector(".popup_opened"),
    elementsLike = document.querySelectorAll(".elements__like-button");


document.querySelector(".profile__edit-button").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("open")
})

document.querySelector(".profile__add-button").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("open")
})

document.querySelector(".popup__close-button").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("open")
})

document.querySelector(".popup__save-button").addEventListener("click", () => {
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