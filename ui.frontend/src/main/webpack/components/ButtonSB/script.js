export function initButton() {
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.classList.add("button-copied-text");
      event.target.textContent = "Copied!";
    });
  });
}
