$(document).ready(function(){
    $(".type-management h2").click(function(){
        $(".login-mask").css("display","block");
        $(".management-login").css("display","block");
        
        setTimeout(function(){
            $(".login-mask").addClass("mask-active");
            $(".management-login").addClass("login-active");
        }, 200);
    });
    
    $(".type-player h2").click(function(){
        $(".login-mask").css("display","block");
        $(".player-login").css("display","block");
        
        setTimeout(function(){
            $(".login-mask").addClass("mask-active");
            $(".player-login").addClass("login-active");
        }, 200);
    });
    
    $(".type-fan h2").click(function(){
        $(".login-mask").css("display","block");
        $(".fan-login").css("display","block");
        
        setTimeout(function(){
            $(".login-mask").addClass("mask-active");
            $(".fan-login").addClass("login-active");
        }, 200);
    });
});