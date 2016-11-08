var reds = document.getElementsByClassName('red');
var planeBox=document.getElementsByClassName("planeBox");
var isClicked = true;
var index = 0;
var isReady = false;
//var move = function (x,y) {  
//    for (var i = 0; i < reds.length; i++) {
//        reds[i].addEventListener('click', function () {
//            if (isClicked) {
//                this.style.top = x + "px";
//                this.style.left = y + 'px';
//                isClicked = false;
//            }           
//        });
 
//    };
//}



var colorChoose = function (index, x, y) {
    var planes = planeBox[index].childNodes;
    function plane() {
        
    }
    plane.prototype = {
        isReady:false
    }
    var ss = new plane();
    for (var i = 0; i < planes.length; i++) {
        
        planes[i].addEventListener('click', function () {
            if (isClicked) {
                this.style.left = x + "px";
                this.style.top = y + 'px';                
                isClicked = false;
                this.isReady = true;
                               
            }

        });
    }


  
}
var firstStep = function () {
    console.log(number);
    if (number == 6) {
        if (index == 0) {
            colorChoose(index, 430, 160);
            isClicked = true;
            
        }
        else if (index == 1) {
            colorChoose(index, 780, 40);
            isClicked = true;
        }
        else if (index == 2) {
            colorChoose(index, 550, 510);
            isClicked = true;
        }
        else if (index == 3) {
            colorChoose(index, 900, 390);
            isClicked = true;
        }
        
    }
    else {
        index++;
        if (index == 4) {
            index = 0;
        }
    }
}
var secondStep = function () {
    if (number == 1) {
        colorChoose(index, 30, 30);
    }
}