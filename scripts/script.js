const 
    // elementsLike = document.querySelectorAll(".elements__like-button"),
    profileTitle = document.querySelector(".profile__title"),
    profileSubtitle = document.querySelector(".profile__subtitle"),
    profileEditButton = document.querySelector(".profile__edit-button"),
    popupCloseButton = document.querySelector(".popup__close-button"),
    // popupSaveButton = document.querySelector(".popup__save-button"),
    popupProfileForm = document.querySelector(".popup__profile-form"),
    popup = document.querySelector(".popup");

let nameInput = document.querySelector("#name-input"),
    descriptionInput = document.querySelector("#description-input")
    
function popupClose() {
    popup.classList.remove("popup_open");
}

function popupOpen() {
    popup.classList.add("popup_open");
    //let newProfileSubtitle = descriptionInputValue;
}

profileEditButton.addEventListener("click", function() {
    popupOpen();
    nameInput.value = profileTitle.textContent;
    descriptionInput.value = profileSubtitle.textContent;
})

popupProfileForm.addEventListener("submit", function () {
    //nameInput = profileTitle.textContent;
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = descriptionInput.value;
    //descriptionInput = profileSubtitle.textContent;
})

popupCloseButton.addEventListener("click", function () {
    popupClose();
})

// popupSaveButton.addEventListener("click", () => {
//     //let newProfileTitle = nameInputValue;
//     profileTitle.textContent = nameInput.value;
//     //let newProfileSubtitle = descriptionInputValue;
//     profileSubtitle.textContent = descriptionInput.value;
//     //popupSaveButton();
// })

// elementsLike.forEach(element => {
//     element.addEventListener("click", () => {
//         if (element.classList.value == "elements__like-button") {
//             element.classList.add("elements__like-button_active")
//             element.classList.remove("elements__like-button")
//         } else {
//             element.classList.add("elements__like-button")
//             element.classList.remove("elements__like-button_active")
//         }
//     })
// });