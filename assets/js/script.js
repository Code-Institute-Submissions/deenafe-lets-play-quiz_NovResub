// Popup modal for "How to play" button
let popup = document.getElementById("popup");
let popOpen = document.getElementById("btn-open");
let popClose = document.getElementById("btn-close");

function openPopup(event) {
    popup.classList.add("popup-modal");
}

function closePopup(event) {
    popup.classList.remove("popup-modal");
}

popOpen.addEventListener('click', openPopup);
popClose.addEventListener('click', closePopup);