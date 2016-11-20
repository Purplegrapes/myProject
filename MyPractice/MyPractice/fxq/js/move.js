

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
            planes[j].clickedtimes = 0;
            planes[j].step = 0;
        }
    }
   
}();

//得到当前飞机盒子的index

var nowIndex = function () {
    
    if (number !== 6 && first != 6&&(second!=6)) {
        index++;
        if (index == 4) {
            index = 0;
        }
    }
    else if (number == 6 && first == 6 && (second != 6)) {
        index++;
        if (index == 4) {
            index = 0;
        }
    }
   
    console.log("number" + number);
    console.log("index:" + index);
    return index;
   

};
var whichPlayer = function (index) {
   
    switch (index) {
        case -1: alert("红色玩家该你了");
            break;
        case 0: alert("红色玩家该你了");
            break;
        case 1: alert("黄色玩家该你了");
            break;
        case 2: alert("蓝色玩家该你了");
            break;
        case 3: alert("绿色玩家该你了");
            break;
    }
};

$('.container').click(function () {
    change();
    
    FirstClick();
});



var FirstClick = function () {
    nums.push(number);
   
    nums = nums.length - 2 > 0 ? nums.splice(-1, nums.length - 1) : nums;
    console.log(nums);
     if (nums[nums.length - 1] == 6||nums[nums.length-2]==6) {
        first = 6;
    }
    else {
        first = nums[0];
    }
    
    
    console.log("first:" + first);
    nowIndex();

    if (first == 6) {
        second = nums[nums.length - 1];

    }
    else {
        second = null;
    }
    console.log("second:" + second);
    if (index == -1 || index == 0) {
        index = 0;
        
        var replanes = planeBox[0].children;


        if (first == 6) {
           
            console.log(second);
            for (var i = 0; i < replanes.length; i++) {

                replanes[i].addEventListener('click', Clickone, false);
            }


        }
    }
    if (index == 1) {
        var yeplanes = planeBox[1].children;
        if (first == 6) {
            console.log(second);
            for (var i = 0; i < yeplanes.length; i++) {

                yeplanes[i].addEventListener('click', Clickone, false);

            }

        }


    }
    if (index == 3) {
        var grplanes = planeBox[3].children;
        if (first == 6) {
            console.log(second);
            for (var i = 0; i < grplanes.length; i++) {
                grplanes[i].addEventListener('click', Clickone, false);
            }

        }
    }
    if (index == 2) {
        var blplanes = planeBox[2].children;
        if (first == 6) {
            console.log(second);
            for (var i = 0; i < blplanes.length; i++) {
                blplanes[i].addEventListener('click', Clickone, false);
            }

        }
    }


}
//第一次掷到6.点击飞机起飞
function Clickone() {
   
    // console.log(this.id);
    isClicked = false;
    
    for (var i = 0; i < planeBox[index].children.length; i++) {
        switch (index) {
            case 0: {
               
                colorChoose(430, 160, this.id);
                
            }
                break;
            case 1: {
                colorChoose(780, 40, this.id);
            }
                break;
            case 2: {
                colorChoose(900, 390, this.id);
            }
                break;
            case 3: {
                colorChoose(550, 510, this.id);

            }
                break;
        }

        planeBox[index].children[i].removeEventListener("click", Clickone);
    }

}
//第一次掷到6后掷第二次，如果起飞了根据累计步数改变position执行secondStep()，
//如果isReady==false并且second==6，就执行firstMove()
//红色飞机根据步数移动
var redjudgeStep = function (steps,_this) {
    
    switch (steps) {
        case 1:
            secondStep(450, 180, _this);
            break;
        case 2:
            secondStep(485, 170, _this);       
            break;
        case 3: 
            secondStep(515, 170, _this);        
            break;
        case 4: 
            secondStep(550, 180, _this);
            break;
        case 5: 
            secondStep(570, 160, _this);
            break;
        case 6: {
            if (_this.isReady == true) {
                secondStep(560, 125, _this);
            }
            else {
                secondStep(430, 160, _this);
            }
        }
            break;
        case 7: secondStep(560, 95, _this);
            break;
        case 8: secondStep(570, 60, _this);
            break;
        case 9: secondStep(605, 50, _this);
            break;
        case 10: secondStep(635, 50, _this);
            break;
        case 11: secondStep(665, 50, _this);
            break;
        case 12: secondStep(695, 50, _this);
            break;
        case 13: secondStep(725, 50, _this);
            break;
        case 14: secondStep(760, 60, _this);
            break;
        case 15: secondStep(770, 95, _this);
            break;
        case 16: secondStep(770, 125, _this);
            break;
        case 17: secondStep(760, 160, _this);
            break;     
        case 18: secondStep(780, 180, _this);
            break;
        case 19: secondStep(815, 170, _this);
            break;
        case 20: secondStep(845, 170, _this);
            break;

        case 21: secondStep(880, 180, _this);
            break;

        case 22: secondStep(890, 215, _this);
            break;
        case 23: secondStep(890, 245, _this);
            break;
        case 24: secondStep(890, 275, _this);
            break;
        case 25: secondStep(890, 305, _this);
            break;
        case 26: secondStep(890, 335, _this);
            break;
        case 27: secondStep(880, 370, _this);
            break
        case 28: secondStep(845, 380, _this);
            break;
        case 29: secondStep(815, 380, _this);
            break;
        case 30: secondStep(780, 370, _this);
            break;
        case 31: secondStep(760, 390, _this);
            break;
        case 32: secondStep(770, 425, _this);
            break;
        case 33: secondStep(770, 455, _this);
            break;

        case 34: secondStep(760, 490, _this);
            break;
        case 35: secondStep(725, 500, _this);
            break;
        case 36: secondStep(695, 500, _this);
            break;
        case 37: secondStep(665, 500, _this);
            break;
        case 38: secondStep(635, 500, _this);
            break;
        case 39: secondStep(605, 500, _this);
            break;
        case 40: secondStep(570, 490, _this);
            break;
        case 41: secondStep(560, 455, _this);
            break;
        case 42: secondStep(560, 425, _this);
            break;
        case 43: secondStep(570, 390, _this);
            break;
        case 44: secondStep(550, 370, _this);
            break;
        case 45: secondStep(515, 380, _this);
            break;
        case 46: secondStep(485, 380, _this);
            break;
        case 47: secondStep(450, 370, _this);
            break;
        case 48: secondStep(440, 335, _this);
            break;
        case 49: secondStep(440, 305, _this);
            break;
        case 50: secondStep(440, 275, _this);
            break;
        case 51: secondStep(485, 275, _this);
            break;
        case 52: secondStep(515, 275, _this);
            break;
        case 53: secondStep(545, 275, _this);
            break;
        case 54: secondStep(575, 275, _this);
            break;
        case 55: secondStep(605, 275, _this);
            break;
        case 56: secondStep(635, 275, _this);
            break;
            










    }
}
//黄色飞机根据步数移动
var yellowjudgeStep = function (steps, _this) {
    switch (steps) {
        case 1: {
            secondStep(760, 60, _this);
        }
            break;
        case 2: {
            secondStep(770, 95, _this);

        }
            break;
        case 3: {
            secondStep(770, 125, _this);

        }
            break;
        case 4: {
            secondStep(760, 160, _this);

        }
            break;
        case 5: {
            secondStep(780, 180, _this);


        }
            break;
        case 6: {

            if (_this.isReady == true) {
                secondStep(815, 170, _this);

            }
            else {
                secondStep(780, 40, _this);
            }
        }
            break;
        case 7: secondStep(845, 170, _this);
            break;
        case 8: secondStep(880, 180, _this);
            break;

        case 9: secondStep(890, 215, _this);
            break;
        case 10: secondStep(890, 245, _this);
            break;
        case 11: secondStep(890, 275, _this);
            break;
        case 12: secondStep(890, 305, _this);
            break;
        case 13: secondStep(890, 335, _this);
            break;
        case 14: secondStep(880, 370, _this);
            break
        case 15: secondStep(845, 380, _this);
            break;
        case 16: secondStep(815, 380, _this);
            break;
        case 17: secondStep(780, 370, _this);
            break;
        case 18: secondStep(760, 390, _this);
            break;
        case 19: secondStep(770, 425, _this);
            break;
        case 20: secondStep(770, 455, _this);
            break;

        case 21: secondStep(760, 490, _this);
            break;
        case 22: secondStep(725, 500, _this);
            break;
        case 23: secondStep(695, 500, _this);
            break;
        case 24: secondStep(665, 500, _this);
            break;
        case 25: secondStep(635, 500, _this);
            break;
        case 26: secondStep(605, 500, _this);
            break;
        case 27: secondStep(570, 490, _this);
            break;
        case 28: secondStep(560, 455, _this);
            break;
        case 29: secondStep(560, 425, _this);
            break;
        case 30: secondStep(570, 390, _this);
            break;
        case 31: secondStep(550, 370, _this);
            break;
        case 32: secondStep(515, 380, _this);
            break;
        case 33: secondStep(485, 380, _this);
            break;
        case 34: secondStep(450, 370, _this);
            break;
        case 35: secondStep(440, 335, _this);
            break;
        case 36: secondStep(440, 305, _this);
            break;
        case 37: secondStep(440, 275, _this);
            break;
        case 38: secondStep(440, 245, _this);
            break;
        case 39: secondStep(440, 215, _this);
            break;
        case 40:
            secondStep(450, 180, _this);
            break;
        case 41:
            secondStep(485, 170, _this);
            break;
        case 42:
            secondStep(515, 170, _this);
            break;
        case 43:
            secondStep(550, 180, _this);
            break;
        case 44:
            secondStep(570, 160, _this);
            break;
        case 45: {
            if (_this.isReady == true) {
                secondStep(560, 125, _this);
            }
            else {
                secondStep(430, 160, _this);
            }
        }
            break;
        case 46: secondStep(560, 95, _this);
            break;
        case 47: secondStep(570, 60, _this);
            break;
        case 48: secondStep(605, 50, _this);
            break;
        case 49: secondStep(635, 50, _this);
            break;
        case 50: secondStep(665, 50, _this);
            break;
        case 51: secondStep(665, 95, _this);
            break;
        case 52: secondStep(665, 125, _this);
            break;
        case 53: secondStep(665, 155, _this);
            break;
        case 54: secondStep(665, 185, _this);
            break;
        case 55: secondStep(665, 215, _this);
            break;
        case 56: secondStep(665, 245, _this);
            break;
    }
}
var bluejudgeStep = function (steps, _this) {
    switch (steps) {
        case 1: {
            secondStep(880, 370, _this);
        }
            break;
        case 2: {
            secondStep(845, 380, _this);

        }
            break;
        case 3: {
            secondStep(815, 380, _this);

        }
            break;
        case 4: {
            secondStep(780, 370, _this);

        }
            break;
        case 5: {
            secondStep(760, 390, _this);


        }
            break;
        case 6: {

            if (_this.isReady == true) {
                secondStep(770, 425, _this);

            }
            else {
                secondStep(900, 390, _this);
            }
        }
            break;
        case 7: secondStep(770, 455, _this);
            break;

        case 8: secondStep(760, 490, _this);
            break;
        case 9: secondStep(725, 500, _this);
            break;
        case 10: secondStep(695, 500, _this);
            break;
        case 11: secondStep(665, 500, _this);
            break;
        case 12: secondStep(635, 500, _this);
            break;
        case 13: secondStep(605, 500, _this);
            break;
        case 14: secondStep(570, 490, _this);
            break;
        case 15: secondStep(560, 455, _this);
            break;
        case 16: secondStep(560, 425, _this);
            break;
        case 17: secondStep(570, 390, _this);
            break;
        case 18: secondStep(550, 370, _this);
            break;
        case 19: secondStep(515, 380, _this);
            break;
        case 20: secondStep(485, 380, _this);
            break;
        case 21: secondStep(450, 370, _this);
            break;
        case 22: secondStep(440, 335, _this);
            break;
        case 23: secondStep(440, 305, _this);
            break;
        case 24: secondStep(440, 275, _this);
            break;
        case 25: secondStep(440, 245, _this);
            break;
        case 26: secondStep(440, 215, _this);
            break;
        case 27:
            secondStep(450, 180, _this);
            break;
        case 28:
            secondStep(485, 170, _this);
            break;
        case 29:
            secondStep(515, 170, _this);
            break;
        case 30:
            secondStep(550, 180, _this);
            break;
        case 31:
            secondStep(570, 160, _this);
            break;
        case 32:           
                secondStep(560, 125, _this);    
            break;
        case 33: secondStep(560, 95, _this);
            break;
        case 34: secondStep(570, 60, _this);
            break;
        case 35: secondStep(605, 50, _this);
            break;
        case 36: secondStep(635, 50, _this);
            break;
        case 37: secondStep(665, 50, _this);
            break;
        case 38: secondStep(695, 50, _this);
            break;
        case 39: secondStep(725, 50, _this);
            break;
        case 40: secondStep(760, 60, _this);
            break;
        case 41: secondStep(770, 95, _this);
            break;
        case 42: secondStep(770, 125, _this);
            break;
        case 43: secondStep(760, 160, _this);
            break;
        case 44: secondStep(780, 180, _this);
            break;
        case 45: secondStep(815, 170, _this);
            break;
        case 46: secondStep(845, 170, _this);
            break;

        case 47: secondStep(880, 180, _this);
            break;

        case 48: secondStep(890, 215, _this);
            break;
        case 49: secondStep(890, 245, _this);
            break;
        case 50: secondStep(890, 275, _this);
            break;
        case 51: secondStep(845, 275, _this);
            break;
        case 52: secondStep(815, 275, _this);
            break;
        case 53: secondStep(785, 275, _this);
            break;
        case 54: secondStep(755, 275, _this);
            break;
        case 55: secondStep(725, 275, _this);
            break;
        case 56: secondStep(695, 275, _this);
            break;
    }
       
}
var greenjudgeStep=function(steps,_this){
    switch (steps) {
        case 1: {

            secondStep(570, 490, _this);

        }
            break;
        case 2: {
            secondStep(560, 455, _this);

        }
            break;
        case 3: {
            secondStep(560, 425, _this);

        }
            break;
        case 4: {
            secondStep(570, 390, _this);

        }
            break;
        case 5: {
            secondStep(550, 370, _this);


        }
            break;
        case 6: 
                secondStep(515, 380, _this);
            break;
        case 7: secondStep(485, 380, _this);
            break;
        case 8: secondStep(450, 370, _this);
            break;
        case 9: secondStep(440, 335, _this);
            break;
        case 10: secondStep(440, 305, _this);
            break;
        case 11: secondStep(440, 275, _this);
            break;
        case 12: secondStep(440, 245, _this);
            break;
        case 13: secondStep(440, 215, _this);
            break;
        case 14:
            secondStep(450, 180, _this);
            break;
        case 15:
            secondStep(485, 170, _this);
            break;
        case 16:
            secondStep(515, 170, _this);
            break;
        case 17:
            secondStep(550, 180, _this);
            break;
        case 18:
            secondStep(570, 160, _this);
            break;
        case 19:           
            secondStep(560, 125, _this);    
            break;
        case 20: secondStep(560, 95, _this);
            break;
        case 21: secondStep(570, 60, _this);
            break;
        case 22: secondStep(605, 50, _this);
            break;
        case 23: secondStep(635, 50, _this);
            break;
        case 24: secondStep(665, 50, _this);
            break;
        case 25: secondStep(695, 50, _this);
            break;
        case 26: secondStep(725, 50, _this);
            break;
        case 27: secondStep(760, 60, _this);
            break;
        case 28: secondStep(770, 95, _this);
            break;
        case 29: secondStep(770, 125, _this);
            break;
        case 30: secondStep(760, 160, _this);
            break;
        case 31: secondStep(780, 180, _this);
            break;
        case 32: secondStep(815, 170, _this);
            break;
        case 33: secondStep(845, 170, _this);
            break;

        case 34: secondStep(880, 180, _this);
            break;

        case 35: secondStep(890, 215, _this);
            break;
        case 36: secondStep(890, 245, _this);
            break;
        case 37: secondStep(890, 275, _this);
            break;
        case 38: secondStep(890, 305, _this);
            break;
        case 39: secondStep(890, 335, _this);
            break;
        case 40: secondStep(880, 370, _this);
            break
        case 41: secondStep(845, 380, _this);
            break;
        case 42: secondStep(815, 380, _this);
            break;
        case 43: secondStep(780, 370, _this);
            break;
        case 44: secondStep(760, 390, _this);
            break;
        case 45: secondStep(770, 425, _this);
            break;
        case 46: secondStep(770, 455, _this);
            break;

        case 47: secondStep(760, 490, _this);
            break;
        case 48: secondStep(725, 500, _this);
            break;
        case 49: secondStep(695, 500, _this);
            break;
        case 50: secondStep(665, 500, _this);
            break
        case 51: secondStep(665, 455, _this);
            break;
        case 52: secondStep(665, 425, _this);
            break;
        case 53: secondStep(665, 395, _this);
            break;
        case 54: secondStep(665, 365, _this);
            break;
        case 55: secondStep(665, 335, _this);
            break;
        case 50: secondStep(665, 305, _this);
            break;

    }
}
var Clicktwo = function () {
  
    this.step += second;
    var _this = this;
   
    console.log("step" + _this.step);
    if (index == 0 || index == -1) {
        redjudgeStep(_this.step, _this);
        this.removeEventListener('click', Clicktwo, false)
    }
    else if (index == 1) {
        yellowjudgeStep(_this.step, _this);
        
        this.removeEventListener('click', Clicktwo, false)
    }
    else if (index == 2) {
        bluejudgeStep(_this.step, _this);
        this.removeEventListener('click', Clicktwo, false)
    }
    else if (index == 3) {
        greenjudgeStep(_this.step, _this);
        this.removeEventListener('click', Clicktwo, false)
    }
}





//丢到6后再丢调用的函数
var secondStep = function (x, y, plane) {
    console.log(plane.isReady);
    
    plane.style.left = x + 'px';
    plane.style.top = y + 'px';
    switch (plane.className) {
        case "red": {
            if ((550 + 'px') < (plane.style.left) && (plane.style.left) <= (570 + 'px')) {
                plane.style.transform ="rotate(0deg)";
            }
            else if ((570 + 'px') < (plane.style.left) && (plane.style.left) <= (760 + 'px')) {
                plane.style.transform = "rotate(180deg)";
            }
            else if ((760 + 'px') < (plane.style.left) && (plane.style.left) <= (780 + 'px')) {
                plane.style.transform = "rotate(180deg)";
            }
            else if ((780 + 'px') < (plane.style.left) && (plane.style.left) <= (880 + 'px')) {
                plane.style.transform = "rotate(90deg)";
            }
            else if ((880 + 'px') < (plane.style.left) && (plane.style.left) <= (890 + 'px')) {
                plane.style.transform = "rotate(180deg)";
            }
        }
    }
    
    console.log(plane.className);
  
    isClicked = false;
   
}
//判断第二步掷到的数字，并根据步数移动调用Clicktwo
var Second = function (second, plane) {

   
    if (plane.isReady == true) {
        plane.addEventListener('click', Clicktwo, false);
    }
    
    
    console.log("nowindex" + index);
}



var FirstMove = function (plane, x, y) {

    plane.isReady = true;
   
   
    plane.style.left = x + 'px';
    plane.style.top = y + 'px';
   
    isClicked = false;

}
//
var colorChoose = function (x, y, plane) {

    switch (plane) {
        case "red1": {
            if (red1.isReady == false) {
                red1.addEventListener('click', FirstMove(red1, x, y));

            }
            else if (index == 0 || index == -1) {
                index = 0;
                Second(second, red1);
            }
        }
            break;

        case "red2": {
            if (red2.isReady == false) {
                FirstMove(red2, x, y);
            }
            else if (index == 0 || index == -1) {
                Second(second, red2);
            }
        }
            break;


        case "red3": {
            if (red3.isReady == false) {
                FirstMove(red3, x, y);
            }
            else if (index == 0 || index == -1) {
                Second(second, red3);
            }
        }
            break;

        case "red4": {
            if (red4.isReady == false) {
                FirstMove(red4, x, y);

            }
            else if (index == 0 || index == -1) {

                Second(second, red4);
            }
        }
            break;
        case "yellow1": {
            if (yellow1.isReady == false) {
                FirstMove(yellow1, x, y);
            }
            else {

                Second(second, yellow1);
            }
        }
            break;

        case "yellow2": {
            if (yellow2.isReady == false) {
                FirstMove(yellow2, x, y);
            }
            else {
                Second(second, yellow2);
            }
        }
            break;


        case "yellow3": {
            if (yellow3.isReady == false) {
                FirstMove(yellow3, x, y);
            }
            else {
                Second(second, yellow3);
            }
        }
            break;

        case "yellow4": {
            if (red4.isReady == false) {
                FirstMove(yellow4, x, y);
            }
            else {

                Second(second, yellow4);
            }
        }
            break;
        case "green1": {
            if (green1.isReady == false) {
                FirstMove(green1, x, y);
            }
            else {

                Second(second, green1);
            }
        }
            break;

        case "green2": {
            if (green2.isReady == false) {
                FirstMove(green2, x, y);
            }
            else {
                Second(second, green2);
            }
        }
            break;


        case "green3": {
            if (green3.isReady == false) {
                FirstMove(green3, x, y);
            }
            else {
                Second(second, green3);
            }
        }
            break;

        case "green4": {
            if (green4.isReady == false) {
                FirstMove(green4, x, y);
            }
            else {

                Second(second, green4);
            }
        }
            break;
        case "blue1": {
            if (blue1.isReady == false) {
                FirstMove(blue1, x, y);
            }
            else {

                Second(second, blue1);
            }
        }
            break;

        case "blue2": {
            if (blue2.isReady == false) {
                FirstMove(blue2, x, y);
            }
            else {
                Second(second, blue2);
            }
        }
            break;


        case "blue3": {
            if (blue3.isReady == false) {
                FirstMove(blue3, x, y);
            }
            else {
                Second(second, blue3);
            }
        }
            break;

        case "blue4": {
            if (blue.isReady == false) {
                FirstMove(blue4, x, y);
            }
            else {

                Second(second, blue4);
            }
        }
            break;

    }
}





