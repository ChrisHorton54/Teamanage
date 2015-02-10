$(document).ready(function(){
    var dir = "http://christopher-horton.co.uk/scripts/images.php?id=h003945";
    var items =[];

    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        type: 'POST',
        dataType:"json",
        async: false,
        success: function (data) {
            items.push(data);
        }
    });

    for(i = 0; i < items[0].length; i++){
        var elem = document.createElement("img");
        elem.setAttribute("src", "http://christopher-horton.co.uk/files/images/h003945/" + items[0][i]);
        elem.setAttribute("width","100%");
        document.getElementById("images").appendChild(elem);
    }

    $('#images').cycle({ 
        fx:     'fade', 
        speed:  'fast', 
        timeout: 0, 
        next:   '#next2', 
        prev:   '#prev2' 
    });
});

function captureImage(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
    
    alert(imageData);
}

function onFail(message) {
    alert('Failed because: ' + message);
}