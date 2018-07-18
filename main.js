$.ajax({
    url: "https://www.googleapis.com/blogger/v3/blogs/2500055890074266959/posts",
    success: function(result){
        console.log(result.items["1"].content);
    }
});

