const backButton = document.querySelector("#back-button");
const container = document.querySelector("#body-container");

backButton.addEventListener("click", function (event) {
    /// write code here to add blog to local storage
    event.stopPropagation();
    event.preventDefault();
    window.location.assign(`index.html`);

});


const themeToggleBtn = document.querySelector("#theme-toggle");
let mode = window.localStorage.getItem('theme') || 'light';
container.setAttribute("class", mode);

themeToggleBtn.addEventListener("click", function () {
    if (mode === "dark") {
        mode = "light";
        container.setAttribute("class", "light");
    }
    else {
        mode = "dark";
        container.setAttribute("class", "dark");
    }
    window.localStorage.setItem('theme', mode);
});