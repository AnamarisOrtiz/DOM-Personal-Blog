const backButton = document.querySelector("#back-button");
const container = document.querySelector("#body-container");
const blogPosts = document.querySelector("#blog-posts");

const localStorageKey = "content";

let tempstorageObject = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
tempstorageObject.forEach(element => {
    const post = createBlogPost(element.title, element.username, element.content);
    blogPosts.appendChild(post);
});

backButton.addEventListener("click", function (event) {
    
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