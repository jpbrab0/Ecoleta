const darculaButton = document.querySelector("a[name=darcula]")
const body = document.querySelector("body")

darculaButton.addEventListener("click", () => {
    body.classList.toggle("darcula")
})