
/* =========================
   STAR MENU
========================= */

const starButton = document.getElementById("starButton");
const starLinks = document.getElementById("starLinks");

if (starButton && starLinks) {

    starButton.addEventListener("click", function () {

        starLinks.classList.toggle("show");

    });

}


/* =========================
   TYPING ANIMATION
========================= */

const typingText = document.getElementById("typingText");

if (typingText) {

    const text = "Student Portfolio";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            typingText.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 120);

        }

    }

    typeText();

}
const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {
        welcomeMessage.textContent =
            "Welcome to my portfolio! Thank you for visiting! ♡";
    });
}
const photos = document.querySelectorAll(".interest-photo");
const popup = document.getElementById("photoPopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

photos.forEach(function(photo) {
    photo.addEventListener("click", function() {
        popup.style.display = "flex";
        popupImage.src = photo.src;
    });
});

if (closePopup) {
    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });
}

/* =========================
   CONTACT ENVELOPE
========================= */

const envelopeButton = document.getElementById("envelopeButton");
const envelope = document.getElementById("envelope");

if (envelopeButton && envelope) {

    envelopeButton.addEventListener("click", function () {

        envelope.classList.toggle("open");

        const isOpen = envelope.classList.contains("open");

        envelopeButton.setAttribute("aria-expanded", isOpen);

    });

}
