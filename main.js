class Blog {
    constructor() {
    }

    getArticle(articleNumber) {
        fetch("https://www.googleapis.com/blogger/v3/blogs/2500055890074266959/posts?key=AIzaSyAsEUDdev13GZ1hOa7vMnjDdCL8xmph_i8")
        .then(response => response.json())
        .then(result => console.log(result.items[articleNumber].content));
    };
}

let blog = new Blog;

blog.getArticle(1)

let body = document.querySelectorAll('[data-test]');


// .then(result => this._article = result.items[articleNumber].content);




// $.ajax({
//     url: "https://www.googleapis.com/blogger/v3/blogs/2500055890074266959/posts?key=AIzaSyAsEUDdev13GZ1hOa7vMnjDdCL8xmph_i8",
//     success: function (result) {
//         console.log(result);
        
//     }
// });



// $.ajax({
//     url: "https://www.googleapis.com/blogger/v3/blogs/2500055890074266959/posts?key=AIzaSyAsEUDdev13GZ1hOa7vMnjDdCL8xmph_i8",
//     success: function(result){
//         console.log(result.items["1"].content);
//     }
// });



// AIzaSyAsEUDdev13GZ1hOa7vMnjDdCL8xmph_i8