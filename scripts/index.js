const share = document.querySelector(".share_arrow");
const arrow = document.querySelector(".arrow_icon");
const showShareButton = document.querySelector(".share_container");

share.addEventListener("click", () => {
   showShareButton.classList.toggle("active");
   arrow.classList.toggle("active");
   share.classList.toggle("active");
});
