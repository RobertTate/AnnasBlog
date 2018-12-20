async function fetchArticle(articleNumber) {
    await fetch("https://www.googleapis.com/blogger/v3/blogs/2500055890074266959/posts?key=AIzaSyAsEUDdev13GZ1hOa7vMnjDdCL8xmph_i8")
    .then(response => response.json())
    .then((result) => {
        let parent = document.querySelector('[data-parent]');
        let sibling = document.querySelectorAll('[data-sibling]');
        let currentArticle = document.createRange().createContextualFragment(result.items[articleNumber].content);
        parent.insertBefore(currentArticle, sibling[0]);
    });
}

fetchArticle(5);
