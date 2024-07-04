function createBlogPost(title, username, content){
    const post = document.createElement('div');
    post.setAttribute("class", "blog-container");
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    const hr = document.createElement('hr');
    const contentElement = document.createElement('p');
    contentElement.setAttribute("class", "content-box");
    contentElement.textContent = content;
    const postedBy = document.createElement('h3');
    postedBy.textContent = `Posted By: ${username}`;
    post.appendChild(titleElement);
    post.appendChild(hr);
    post.appendChild(contentElement);
    post.appendChild(postedBy);
    return post;
}