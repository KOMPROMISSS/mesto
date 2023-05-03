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


// elementsLike.forEach(element => {
//     element.addEventListener("click", () => {
//         console.log(element.style.backgroundImage)
//         if (element.style.backgroundImage == "url(\"../../../images/Like.png\")") {
//             element.style.backgroundImage = "url(\"../../../images/Union.png\")"
//         } else {
//             element.style.backgroundImage = "url(\"../../../images/Like.png\")"
//         }
//     })
// });

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

// первый клик по лайку выводит в консоль пустую строку из element.style.backgroundImage