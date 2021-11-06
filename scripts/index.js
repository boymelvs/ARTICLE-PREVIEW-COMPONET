const share = document.querySelector(".share_arrow");
const showShareButton = document.querySelector(".share_container");

share.addEventListener("click", () => {
  showShareButton.classList.toggle("active");
});
