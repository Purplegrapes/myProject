var reds = document.getElementsByClassName('red');
var a = [];
var planeBox = document.getElementsByClassName("planeBox");
var planeBox0 = document.getElementById("planeBox0");
var isClicked = true;
var index = -1;
var nums = [];
var planes;
var first;
var second;
//var _this;
var FisrtAttr = function () {
    for (var i = 0; i < planeBox.length; i++) {
        planes = planeBox[i].children;
        for (var j = 0; j < planes.length; j++) {
            planes[j].isReady = false;
           
            
        }
    }

}();

$('.container').click(function () {
    change();
  
        FirstClick();
    
    

});
var redClick = function () {
    //var redplane = _this;

}
function aa() {
    colorChoose(430, 160, this.id);
    isClicked = false;
    for (var i = 0; i < planeBox[0].children.length; i++) {
        planeBox[0].children[i].removeEventListener("click", aa);
    }
    
}
var yellowClick = function () {
    //var yellowplane = _this;
    switch (second) {
        case 1: {
            console.log(second);
            if (yellowplane.isReady == true) {
                colorChoose(1, 450, 180);
            }


            index++;

        }
            break;
        case 2: {
            console.log(second);
            console.log(yellowplane.isReady);
            if (yellowplane.isReady == true) {
                colorChoose(1, 485, 170);
            }
            index++;
        }
            break;
        case 3: {
            console.log(second);
            console.log(yellowplane.isReady);
            if (yellowplane.isReady == true) {
                colorChoose(1, 505, 185);
            }
            index++;
        }
            break;
        case 4: {
            console.log(second);
            console.log(yellowplane.isReady);
            if (yellowplane.isReady == true) {
                colorChoose(1, 550, 180);
            }


            index++;
        }
            break;
        case 5: {
            console.log(second);
            console.log(yellowplane.isReady);
            if (yellowplane.isReady == true) {
                colorChoose(0, 570, 160);
            }
            index++;
        }
            break;
        case 6: {
            console.log(second);
            console.log(yellowplane.isReady);
            if (yellowplane.isReady == false) {
                colorChoose(0, 430, 160);
            }
            else {
                colorChoose(0, 560, 125);
            }



        }
            break;
    }
}
var FirstClick = function () {
    nowIndex();
    console.log(number);
    console.log(index);
    nums = nums.length - 2 > 0 ? nums.splice(-1, nums.length - 2) : nums;
    if (nums.length > 1) {
        first = nums[nums.length-1];
    }
    else {
        first = nums[0];
    }
    
    
    console.log(first);
    second = nums[nums.length - 2] ? nums[1] : null;
    console.log(second);
    if (index == -1 || index == 0) {
        
        var replanes = planeBox[0].children;
        
       
        if (first == 6) {          
            console.log(second);
            for (var i = 0; i < replanes.length; i++) {
               
                replanes[i].addEventListener('click', aa,false)
                //replanes[i].addEventListener('click', function (e) {
                //    e = e || window.event;
                //    var el = e.srcElement;
                //    colorChoose(430, 160, el.id);
                //    isClicked = false;
                //  replanes[i].removeEventListener("click", this)
                //}, false)
               
            }
           

        }
    }
    if (index == 1) {
        var yeplanes = planeBox[1].children;
        if (first == 6) {
            console.log(second);
            for (var i = 0; i < yeplanes.length; i++) {
                yeplanes[i].addEventListener('click', function (e) {
                    e = e || window.event;
                    var el = e.srcElement;

                    colorChoose(780,40, el.id);


                })
            }

        }


    }
    if (index == 2) {
        var grplanes = planeBox[2].children;
        if (first == 6) {
            console.log(second);
            for (var i = 0; i < grplanes.length; i++) {
                grplanes[i].addEventListener('click', function (e) {
                    e = e || window.event;
                    var el = e.srcElement;
                    colorChoose(550, 510, el.id);


                })
            }

        }
    }
    if (index == 3) {
        var blplanes = planeBox[3].children;
        if (first == 6) {
            console.log(second);
            for (var i = 0; i < blplanes.length; i++) {
                blplanes[i].addEventListener('click', function (e) {
                    e = e || window.event;
                    var el = e.srcElement;

                    colorChoose(900, 390, el.id);


                })
            }

        }
    }
   

}
//判断红色第二步
var redSecond = function (second,planes) {
    index = 0;
    console.log(planes.isReady);
    if (planes.isReady = true) {
        planes.onclick = function () {
            console.log(second);
            switch (second) {
                case 1: {
                    console.log(planes.isReady);
                    planes.style.left = 450 + "px";
                    planes.style.top = 180 + 'px';
                    isClicked = false;


                }
                    break;
                case 2: {
                    console.log(planes.isReady);
                    planes.style.left = 485 + "px";
                    planes.style.top = 170 + 'px';
                    isClicked = false;

                }
                    break;
                case 3: {
                    console.log(planes.isReady);
                    planes.style.left = 515 + "px";
                    planes.style.top = 170 + 'px';
                    isClicked = false;
                   
                }
                    break;
                case 4: {
                    console.log(planes.isReady);
                    planes.style.left = 550 + "px";
                    planes.style.top = 180 + 'px';
                    isClicked = false;

                }
                    break;
                case 5: {
                    console.log(planes.isReady);
                    planes.style.left = 570 + "px";
                    planes.style.top = 160 + 'px';
                    isClicked = false;

                  
                }
                    break;
                case 6: {
                   
                    if (planes.isReady == true) {
                        planes.style.left = 450 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;

                    }
                    else {
                        planes.style.left = 750 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;
                    }





                }
                    break;
            }
    }
        planes.onclick();
        console.log(index)

    }
    
    
               
            }

var yeSecond = function (second, planes) {
    index = 1;
    console.log(planes.isReady);
    if (planes.isReady = true) {
        planes.onclick = function () {
            console.log(second);
            switch (second) {
                case 1: {
                    console.log(planes.isReady);
                    planes.style.left = 680 + "px";
                    planes.style.top = 30 + 'px';
                    isClicked = false;

                    

                }
                    break;
                case 2: {
                    console.log(planes.isReady);
                    planes.style.left = 720 + "px";
                    planes.style.top = 50 + 'px';
                    isClicked = false;

                    
                }
                    break;
                case 3: {
                    console.log(planes.isReady);
                    planes.style.left = 720 + "px";
                    planes.style.top = 70 + 'px';
                    isClicked = false;
                   
                }
                    break;
                case 4: {
                    console.log(planes.isReady);
                    planes.style.left = 680 + "px";
                    planes.style.top = 70 + 'px';
                    isClicked = false;

                    
                }
                    break;
                case 5: {
                    console.log(planes.isReady);
                    planes.style.left = 690 + "px";
                    planes.style.top = 90 + 'px';
                    isClicked = false;

                    
                }
                    break;
                case 6: {
                    console.log(planes);
                    if (this.isReady == true) {
                        planes.style.left = 450 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;

                    }
                    else {
                        planes.style.left = 450 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;
                    }





                }
                    break;
            }
        }
        planes.onclick();
        console.log(index)

    }



}
var grSecond = function (second, planes) {
    index = 1;
    console.log(planes.isReady);
    if (planes.isReady = true) {
        planes.onclick = function () {
            console.log(second);
            switch (second) {
                case 1: {
                    console.log(planes.isReady);
                    planes.style.left = 560 + "px";
                    planes.style.top = 490 + 'px';
                    isClicked = false;

                    index++;

                }
                    break;
                case 2: {
                    console.log(planes.isReady);
                    planes.style.left = 480 + "px";
                    planes.style.top = 170 + 'px';
                    isClicked = false;

                    index++;
                }
                    break;
                case 3: {
                    console.log(planes.isReady);
                    planes.style.left = 515 + "px";
                    planes.style.top = 170 + 'px';
                    isClicked = false;
                    index++;
                }
                    break;
                case 4: {
                    console.log(planes.isReady);
                    planes.style.left = 550 + "px";
                    planes.style.top = 180 + 'px';
                    isClicked = false;

                    index++;
                }
                    break;
                case 5: {
                    console.log(planes.isReady);
                    planes.style.left = 570 + "px";
                    planes.style.top = 160 + 'px';
                    isClicked = false;

                    index++;
                }
                    break;
                case 6: {
                    console.log(planes);
                    if (this.isReady == true) {
                        planes.style.left = 450 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;

                    }
                    else {
                        planes.style.left = 450 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;
                    }





                }
                    break;
            }
        }
        planes.onclick();
        console.log(index)

    }



}

var blSecond = function (second, planes) {
    index = 1;
    console.log(planes.isReady);
    if (planes.isReady = true) {
        planes.onclick = function () {
            console.log(second);
            switch (second) {
                case 1: {
                    console.log(planes.isReady);
                    planes.style.left = 450 + "px";
                    planes.style.top = 180 + 'px';
                    isClicked = false;

                    index++;

                }
                    break;
                case 2: {
                    console.log(planes.isReady);
                    planes.style.left = 485 + "px";
                    planes.style.top = 170 + 'px';
                    isClicked = false;

                    index++;
                }
                    break;
                case 3: {
                    console.log(planes.isReady);
                    planes.style.left = 515 + "px";
                    planes.style.top = 170 + 'px';
                    isClicked = false;
                    index++;
                }
                    break;
                case 4: {
                    console.log(planes.isReady);
                    planes.style.left = 550 + "px";
                    planes.style.top = 180 + 'px';
                    isClicked = false;

                    index++;
                }
                    break;
                case 5: {
                    console.log(planes.isReady);
                    planes.style.left = 570 + "px";
                    planes.style.top = 160 + 'px';
                    isClicked = false;

                    index++;
                }
                    break;
                case 6: {
                    console.log(planes);
                    if (this.isReady == true) {
                        planes.style.left = 450 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;

                    }
                    else {
                        planes.style.left = 450 + "px";
                        planes.style.top = 180 + 'px';
                        isClicked = false;
                    }





                }
                    break;
            }
        }
        planes.onclick();
        console.log(index)

    }



}
        
      

    

var FirstMove = function (plane, x, y) {
    
        plane.isReady = true;
        
        plane.style.left = x + 'px';
        plane.style.top = y + 'px';
        isClicked = false;
       
}

var colorChoose = function (x, y, plane) {
 switch (plane) {
        case "red1": {
            if (red1.isReady == false) {
                red1.addEventListener('click', FirstMove(red1, x, y));
               
            }
            else if (index == 0 || index == -1) {
                redSecond(second, red1);
            }
        }
            break;
        
        case "red2": {
            if (red2.isReady == false) {
                FirstMove(red2, x, y);
            }
            else if (index == 0||index==-1) {
                redSecond(second, red2);
            }
        }
            break;
           
        
        case "red3": {
            if (red3.isReady == false) {
                FirstMove(red3, x, y);
            }
            else if (index == 0 || index == -1) {
                redSecond(second, red3);
            }
        }
            break;
        
        case "red4": {
            if (red4.isReady == false) {
                FirstMove(red4, x, y);
                
            }
            else if (index == 0 || index == -1) {
                
                redSecond(second, red4);
            }
        }
            break;
     case "yellow1": {
         if (yellow1.isReady == false) {
             FirstMove(yellow1, x, y);
         }
         else {

             yeSecond(second, red1);
         }
     }
         break;

     case "yellow2": {
         if (yellow2.isReady == false) {
             FirstMove(yellow2, x, y);
         }
         else {
             yeSecond(second, yellow2);
         }
     }
         break;


     case "yellow3": {
         if (yellow3.isReady == false) {
             FirstMove(yellow3, x, y);
         }
         else {
             yeSecond(second, yellow3);
         }
     }
         break;

     case "yellow4": {
         if (red4.isReady == false) {
             FirstMove(yellow4, x, y);
         }
         else {

             yeSecond(second, yellow4);
         }
     }
         break;
     case "green1": {
         if (green1.isReady == false) {
             FirstMove(green1, x, y);
         }
         else {

             blSecond(second, green1);
         }
     }
         break;

     case "green2": {
         if (green2.isReady == false) {
             FirstMove(green2, x, y);
         }
         else {
             blSecond(second, green2);
         }
     }
         break;


     case "green3": {
         if (green3.isReady == false) {
             FirstMove(green3, x, y);
         }
         else {
             blSecond(second, green3);
         }
     }
         break;

     case "green4": {
         if (green4.isReady == false) {
             FirstMove(green4, x, y);
         }
         else {

             blSecond(second, green4);
         }
     }
         break;
     case "blue1": {
         if (blue1.isReady == false) {
             FirstMove(blue1, x, y);
         }
         else {

             blSecond(second, blue1);
         }
     }
         break;

     case "blue2": {
         if (blue2.isReady == false) {
             FirstMove(blue2, x, y);
         }
         else {
             blSecond(second, blue2);
         }
     }
         break;


     case "blue3": {
         if (blue3.isReady == false) {
             FirstMove(blue3, x, y);
         }
         else {
             blSecond(second, blue3);
         }
     }
         break;

     case "blue4": {
         if (blue.isReady == false) {
             FirstMove(blue4, x, y);
         }
         else {

             blSecond(second, blue4);
         }
     }
         break;

    }
}

//得到当前飞机盒子的index
var nowIndex = function () {
    nums.push(number);
    console.log(nums);
    if (number !== 6) {
        index++;
        if (index == 4) {
            index = 0;
        }
    }
    
    return index;
};
