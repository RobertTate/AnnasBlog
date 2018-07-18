$.ajax({
    url: "https://www.googleapis.com/blogger/v3/blogs/2500055890074266959/posts?key=AIzaSyDveTnWGDRmOF3g4mzCtS2kRunFUqDjM1g",
    success: function(result){
        console.log(result.items["3"].content);
    }
});

