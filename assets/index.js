const container = document.querySelector("#body-container");
const usernameInput =document.querySelector("#username");
const titleInput =document.querySelector("#title");
const contentInput =document.querySelector("#content");
const localStorageKey = "content";
const submitBtn = document.querySelector("#submit-button");

let tempstorageObject = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];

const themeToggleBtn = document.querySelector("#theme-toggle");
let mode = window.localStorage.getItem('theme') || 'light';
container.setAttribute("class", mode);

themeToggleBtn.addEventListener("click", function (){
    if (mode ==="dark") {
        mode = "light";
        container.setAttribute("class", "light");
    }
    else {
        mode = "dark";
        container.setAttribute("class", "dark");
    }
    window.localStorage.setItem('theme', mode);
});

submitBtn.addEventListener("click", function (event){
/// write code here to add blog to local storage
    event.stopPropagation();
    event.preventDefault();

    let username = usernameInput.value;
    let title = titleInput.value;
    let content = contentInput.value;

    if (!username || !title || !content){
        alert("Please enter username, title, and content to submit!");
        return
    }
    tempstorageObject.push({
        username,
        title,
        content,
    });

    window.localStorage.setItem(localStorageKey, JSON.stringify(tempstorageObject));
    window.location.assign(`blog.html`);
});

function updateLocalStorage() {
    // TODO: Update the local storage with the tempStorageObject
    window.localStorage.setItem(localStorageKey, JSON.stringify(tempStorageObject));
  
  }

  
