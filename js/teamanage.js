$(document).ready(function(){
    
    $(".log-out").click(function(){
        window.localStorage.clear();
        window.location = "../index.html";
    });
});