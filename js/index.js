$(document).ready(function(){
    
    startUpLogin();
    
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
            $(".management-sign-up-form").css("display","none");                 
            $(".management-form").css("display","block"); 
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
    
    /*
    /* Account Func
    */
    
    $(".management-signing").click(function(){
        var email_address = $(".management-sign-up-form #email_address").val();
        var password = $(".management-sign-up-form #password").val();
        var confirm_password = $(".management-sign-up-form #confirm_password").val();
        var team_name = $(".management-sign-up-form #team_name").val();
        
        if(emailChecker(email_address)){
            if(password == confirm_password){
                if(team_name.length > 5){
                    $.ajax({
                        url:"http://teamanage.co.uk/scripts/login-signup.php",
                        type: "POST",
                        data: { email_address: email_address, password: password, team_name: team_name },
                        success:function(data){
                            console.log(data);
                        }
                    }); 
                } else {
                    alert("Please provide a more suitable team name");
                }
            } else {
                alert("Please make sure your passwords match");
            }
        } else {
            alert("Please provide a valid Email Address!");
        }
        
    });
    
    $(".management-submit").click(function(){
        var email_address = $(".management-form #email_address").val();
        var password = $(".management-form #password").val();
        
        $.ajax({
            url:"http://teamanage.co.uk/scripts/login.php",
            type: "POST",
            data: { email_address: email_address, password: password, type: "management" },
            success:function(data){
                loginManager(data);
            }
        }); 
    });
    
    
    
});

function startUpLogin(){
    if (localStorage.getItem("email_address") != null) {
        console.log("test");
        if(localStorage.getItem("account_type") == "management"){
            window.location = "management/index.html";
        } else if(localStorage.getItem("account_type") == "player"){
            
        } else {
            
        }
    }
}

function loginManager(data){
    var information = JSON.parse(data);
    console.log(information);
    if(information['error_email'] == "true"){
        alert("Please use a registered Email Address.");
    } else if(information['password_error'] == "true"){
        alert("Please make sure your password is correct.");
    } else {
        localStorage.setItem("email_address", information['email_address']);
        localStorage.setItem("password", information['password']);
        localStorage.setItem("clubID", information['clubID']);
        localStorage.setItem("account_type", "management");
        
        window.location = "management/index.html";
    }
}

function emailChecker(email) {
  var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return pattern.test(email);
}