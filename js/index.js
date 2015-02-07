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
    
    $(".close").click(function(){
        if($(".management-login").hasClass("login-active")){
            $(".management-login").removeClass("login-active");
        }
        
        if($(".player-login").hasClass("login-active")){
            $(".player-login").removeClass("login-active");
        }
        
        if($(".fan-login").hasClass("login-active")){
            $(".fan-login").removeClass("login-active");
        }
        
        $(".login-mask").removeClass("mask-active");
        
        setTimeout(function(){
            $(".login-mask").css("display","none");
            $(".management-login").css("display","none");
            $(".player-login").css("display","none");
            $(".fan-login").css("display","none");
            $(".management-sign-up-form").css("display","none");                 $(".management-form").css("display","block"); 
            $(".management-form").removeClass("log-in-deactive");
            $(".management-sign-up-form").removeClass("sign-up-active");
            $(".fan-form").css("display","block"); 
            $(".fan-form").removeClass("log-in-deactive");
            $(".fan-sign-up-form").removeClass("sign-up-active");
        }, 700);
    });
    
    $(".management-sign-up").click(function(){
        $(".management-form").addClass("log-in-deactive");
        
        setTimeout(function(){
            $(".management-form").css("display","none");
            $(".management-sign-up-form").css("display","block");
        }, 700);
        
        setTimeout(function(){
            $(".management-sign-up-form").addClass("sign-up-active");
        }, 800);
    });
    
    $(".fan-sign-up").click(function(){
        $(".fan-form").addClass("log-in-deactive");
        
        setTimeout(function(){
            $(".fan-form").css("display","none");
            $(".fan-sign-up-form").css("display","block");
        }, 700);
        
        setTimeout(function(){
            $(".fan-sign-up-form").addClass("sign-up-active");
        }, 800);
    });
    
});