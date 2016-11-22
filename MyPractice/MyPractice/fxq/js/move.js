var reds = document.getElementsByClassName('red');var a = [];var planeBox = document.getElementsByClassName("planeBox");var planeBox0 = document.getElementById("planeBox0");var isClicked = true;var index = -1;var nums = [];var planes;var first;var second;//var _this;var FisrtAttr = function () {
    for (var i = 0; i < planeBox.length; i++) {
        planes = planeBox[i].children;        for (var j = 0; j < planes.length; j++) {
            planes[j].isReady = false;            planes[j].step = 0;
        }
    }
}();//得到当前飞机盒子的indexvar nowIndex = function () {
    if (nums[0] !== 6 && nums[1] !== 6) {
        index++;        if (index == 4) {
            index = 0;
        }
    }
    else if (first == 6 && nums[0] !== 6) {
        index++;        if (index == 4) {
            index = 0;
        }
    }
    //if (first !== 6 && second !==6) {
    //    index++;    //        if (index == 4) {
    //            index = 0;
    //        }
    //}    //else if (first == 6 && second !== 6) {
    //    index++;    //    if (index == 4) {
    //        index = 0;
    //    }
    //}    //if (number !== 6 && first != 6 && (second != 6)) {
    //    index++;    //    if (index == 4) {
    //        index = 0;
    //    }
    //} else if (number == 6 && first == 6 && (second != 6)) {
    //    index++;    //    if (index == 4) {
    //        index = 0;
    //    }
    //}    console.log("number" + number);    console.log("index:" + index);    return index;
};var whichPlayer = function (index) {
    switch (index) {
        case -1:            alert("红色玩家该你了");            break;        case 0:            alert("红色玩家该你了");            break;        case 1:            alert("黄色玩家该你了");            break;        case 2:            alert("蓝色玩家该你了");            break;        case 3:            alert("绿色玩家该你了");            break;
    }
};$('.container').click(function () {
    change();    FirstClick();
});var FirstClick = function () {
    nums.push(number);    nums = nums.slice(nums.length - 2, nums.length);    //nums = nums.length - 2 > 0 ? nums.splice(-1, nums.length - 1) : nums;    console.log(nums);    if (nums[nums.length - 1] == 6 || nums[nums.length - 2] == 6) {
        first = 6;
    } else {
        first = nums[0];
    }    console.log("first:" + first);    if (first == 6) {
        second = nums[1];
    } else {
        second = null;
    }    var one = nums.length < 2 ? nums[0] : nums[1];    nowIndex();    console.log("second:" + second);    if (index == -1 || index == 0) {
        index = 0;        var replanes = planeBox[0].children;        console.log(one);        if (first == 6) {
            console.log(second);            for (var i = 0; i < replanes.length; i++) {
                replanes[i].addEventListener('click', colorChoose, false);
            }
        }
    }    if (index == 1) {
        var yeplanes = planeBox[1].children;        if (first == 6) {
            console.log(second);            for (var i = 0; i < yeplanes.length; i++) {
                yeplanes[i].addEventListener('click', colorChoose, false);
            }
        }
    }    if (index == 3) {
        var grplanes = planeBox[3].children;        if (first == 6) {
            console.log(second);            for (var i = 0; i < grplanes.length; i++) {
                grplanes[i].addEventListener('click', colorChoose, false);
            }
        }
    }    if (index == 2) {
        var blplanes = planeBox[2].children;        if (first == 6) {
            console.log(second);            for (var i = 0; i < blplanes.length; i++) {
                blplanes[i].addEventListener('click', colorChoose, false);
            }
        }
    }
}//第一次掷到6.点击飞机起飞var Clicktwo = function (plane) {
    var _this = plane;    _this.step += second;    console.log("step" + _this.step);    if ((index == 0 || index == -1)) {
        secondStep(_this, _this.step);        _this.removeEventListener('click', Clicktwo, false)
    } else if (index == 1) {
        secondStep(_this, _this.step);        _this.removeEventListener('click', Clicktwo, false)
    } else if (index == 2) {
        secondStep(_this, _this.step);        _this.removeEventListener('click', Clicktwo, false)
    } else if (index == 3) {
        secondStep(_this, _this.step);        _this.removeEventListener('click', Clicktwo, false)
    }
}//丢到6后再丢调用的函数var Fly = function (x, y, plane, steps) {
    switch (steps) {
        case 2: plane.step = 6;
            break;
        case 6: plane.step = 10;

    }
   

   
    plane.style.left = x + 'px';    plane.style.top = y + 'px';
    if ((160 < y && y <= 180) && (450 <= x) && (x < 570)) {
        plane.style.transform = "rotate(90deg)";
    } else if ((430 < x && x <= 570) && (60 < y && y <= 160)) {
        plane.style.transform = "rotate(0deg)";
    } else if ((570 <= x) && (x < 760) && (50 <= y && y <= 60)) {
        plane.style.transform = "rotate(90deg)";
    } else if ((760 <= x && x < 780) && (60 <= y && y < 180)) {
        plane.style.transform = "rotate(180deg)"; //14-18    } else if ((780 <= x && x < 880) && (170 <= y && y <= 180)) {
        plane.style.transform = "rotate(90deg)"; //18-21    } else if ((880 <= x && x <= 890) && (180 <= y && y < 370)) {
        plane.style.transform = "rotate(180deg)"; //21-27    } else if ((760 < x && x <= 880) && (370 <= y && y < 390)) {
        plane.style.transform = "rotate(-90deg)"; //27-31    } else if ((760 <= x && x <= 770) && (390 <= y && y < 490)) {
        plane.style.transform = "rotate(180deg)"; //31-34    } else if ((570 < x && x <= 760) && (490 <= y && y <= 500)) {
        plane.style.transform = "rotate(-90deg)"; //34-40    } else if ((550 < x && x <= 570) && (370 < y && y <= 490)) {
        plane.style.transform = "rotate(0deg)"; //40-44    } else if ((450 < x && x <= 550) && (180 < y && y <= 380)) {
        plane.style.transform = "rotate(-90deg)"; //44-47    } else if ((440 <= x && x <= 450) && (225 <= y && y < 380)) {
        plane.style.transform = "rotate(0deg)"; //47-1;    }        //黄色终点方向    else if (x == 665 && 50 <= y <= 245) {
        plane.style.transform = "rotate(180deg)";
    }        //蓝色终点方向    else if (y ==275 && 675 <= x <= 890) {
        plane.style.transform = "rotate(-90deg)";
    }        //红色终点方向    else if (y == 275 && 440 <= x <= 635) {
        plane.style.transform = "rotate(90deg)";
    }        //绿色终点方向    else if (x == 665 && 305 <= y <= 500) {
        plane.style.transform = "rotate(180deg)";
    }    console.log(plane.isReady);    isClicked = false;
}var secondStep = function (_this, steps) {
    switch (_this.className) {
        case "red": {
            switch (steps) {
                case 1:                    Fly(450, 180, _this,steps);                    break;                case 2:                                        Fly(485, 170, _this, steps);                    _this.addEventListener("transitionend",  Fly(560, 125, _this) );                                        break;                case 3:                    Fly(515, 170, _this, steps);                    break;                case 4:                    Fly(550, 180, _this, steps);                    break;                case 5:                    Fly(570, 160, _this, steps);                    break;                case 6:                    Fly(560, 125, _this, steps);                    //else {                    //    FirstMove(430, 160, _this);                    //}                    break;                case 7:                    Fly(560, 95, _this, steps);                    break;                case 8:                    Fly(570, 60, _this, steps);                    break;                case 9:                    Fly(605, 50, _this, steps);                    break;                case 10:                    Fly(635, 50, _this, steps);                    break;                case 11:                    Fly(665, 50, _this, steps);                    break;                case 12:                    Fly(695, 50, _this, steps);                    break;                case 13:                    Fly(725, 50, _this, steps);                    break;                case 14:                    Fly(760, 60, _this, steps);                    break;                case 15:                    Fly(770, 95, _this, steps);                    break;                case 16:                    Fly(770, 125, _this, steps);                    break;                case 17:                    Fly(760, 160, _this);                    break;                case 18:                    Fly(780, 180, _this);                    break;                case 19:                    Fly(815, 170, _this);                    break;                case 20:                    Fly(845, 170, _this);                    break;                case 21:                    Fly(880, 180, _this);                    break;                case 22:                    Fly(890, 215, _this);                    break;                case 23:                    Fly(890, 245, _this);                    break;                case 24:                    Fly(890, 275, _this);                    break;                case 25:                    Fly(890, 305, _this);                    break;                case 26:                    Fly(890, 335, _this);                    break;                case 27:                    Fly(880, 370, _this);                    break                case 28:                    Fly(845, 380, _this);                    break;                case 29:                    Fly(815, 380, _this);                    break;                case 30:                    Fly(780, 370, _this);                    break;                case 31:                    Fly(760, 390, _this);                    break;                case 32:                    Fly(770, 425, _this);                    break;                case 33:                    Fly(770, 455, _this);                    break;                case 34:                    Fly(760, 490, _this);                    break;                case 35:                    Fly(725, 500, _this);                    break;                case 36:                    Fly(695, 500, _this);                    break;                case 37:                    Fly(665, 500, _this);                    break;                case 38:                    Fly(635, 500, _this);                    break;                case 39:                    Fly(605, 500, _this);                    break;                case 40:                    Fly(570, 490, _this);                    break;                case 41:                    Fly(560, 455, _this);                    break;                case 42:                    Fly(560, 425, _this);                    break;                case 43:                    Fly(570, 390, _this);                    break;                case 44:                    Fly(550, 370, _this);                    break;                case 45:                    Fly(515, 380, _this);                    break;                case 46:                    Fly(485, 380, _this);                    break;                case 47:                    Fly(450, 370, _this);                    break;                case 48:                    Fly(440, 335, _this);                    break;                case 49:                    Fly(440, 305, _this);                    break;                case 50:                    Fly(440, 275, _this);                    break;                case 51:                    Fly(485, 275, _this);                    break;                case 52:                    Fly(515, 275, _this);                    break;                case 53:                    Fly(545, 275, _this);                    break;                case 54:                    Fly(575, 275, _this);                    break;                case 55:                    Fly(605, 275, _this);                    break;                case 56:                    Fly(635, 275, _this);                    break;
            }
        }
            break
        case "yellow": {
            switch (steps) {
                case 1:                    {
                        Fly(760, 60, _this);
                    }                    break;                case 2:                    {
                        Fly(770, 95, _this);
                    }                    break;                case 3:                    {
                        Fly(770, 125, _this);
                    }                    break;                case 4:                    {
                        Fly(760, 160, _this);
                    }                    break;                case 5:                    {
                        Fly(780, 180, _this);
                    }                    break;                case 6:                    {
                        if (_this.isReady == true) {
                            Fly(815, 170, _this);
                        } else {
                            Fly(780, 40, _this);
                        }
                    }                    break;                case 7:                    Fly(845, 170, _this);                    break;                case 8:                    Fly(880, 180, _this);                    break;                case 9:                    Fly(890, 215, _this);                    break;                case 10:                    Fly(890, 245, _this);                    break;                case 11:                    Fly(890, 275, _this);                    break;                case 12:                    Fly(890, 305, _this);                    break;                case 13:                    Fly(890, 335, _this);                    break;                case 14:                    Fly(880, 370, _this);                    break                case 15:                    Fly(845, 380, _this);                    break;                case 16:                    Fly(815, 380, _this);                    break;                case 17:                    Fly(780, 370, _this);                    break;                case 18:                    Fly(760, 390, _this);                    break;                case 19:                    Fly(770, 425, _this);                    break;                case 20:                    Fly(770, 455, _this);                    break;                case 21:                    Fly(760, 490, _this);                    break;                case 22:                    Fly(725, 500, _this);                    break;                case 23:                    Fly(695, 500, _this);                    break;                case 24:                    Fly(665, 500, _this);                    break;                case 25:                    Fly(635, 500, _this);                    break;                case 26:                    Fly(605, 500, _this);                    break;                case 27:                    Fly(570, 490, _this);                    break;                case 28:                    Fly(560, 455, _this);                    break;                case 29:                    Fly(560, 425, _this);                    break;                case 30:                    Fly(570, 390, _this);                    break;                case 31:                    Fly(550, 370, _this);                    break;                case 32:                    Fly(515, 380, _this);                    break;                case 33:                    Fly(485, 380, _this);                    break;                case 34:                    Fly(450, 370, _this);                    break;                case 35:                    Fly(440, 335, _this);                    break;                case 36:                    Fly(440, 305, _this);                    break;                case 37:                    Fly(440, 275, _this);                    break;                case 38:                    Fly(440, 245, _this);                    break;                case 39:                    Fly(440, 215, _this);                    break;                case 40:                    Fly(450, 180, _this);                    break;                case 41:                    Fly(485, 170, _this);                    break;                case 42:                    Fly(515, 170, _this);                    break;                case 43:                    Fly(550, 180, _this);                    break;                case 44:                    Fly(570, 160, _this);                    break;                case 45:                    {
                        if (_this.isReady == true) {
                            Fly(560, 125, _this);
                        } else {
                            Fly(430, 160, _this);
                        }
                    }                    break;                case 46:                    Fly(560, 95, _this);                    break;                case 47:                    Fly(570, 60, _this);                    break;                case 48:                    Fly(605, 50, _this);                    break;                case 49:                    Fly(635, 50, _this);                    break;                case 50:                    Fly(665, 50, _this);                    break;                case 51:                    Fly(665, 95, _this);                    break;                case 52:                    Fly(665, 125, _this);                    break;                case 53:                    Fly(665, 155, _this);                    break;                case 54:                    Fly(665, 185, _this);                    break;                case 55:                    Fly(665, 215, _this);                    break;                case 56:                    Fly(665, 245, _this);                    break;
            }
        }
            break;
        case "blue": {
            switch (steps) {
                case 1:                    {
                        Fly(880, 370, _this);
                    }                    break;                case 2:                    {
                        Fly(845, 380, _this);
                    }                    break;                case 3:                    {
                        Fly(815, 380, _this);
                    }                    break;                case 4:                    {
                        Fly(780, 370, _this);
                    }                    break;                case 5:                    {
                        Fly(760, 390, _this);
                    }                    break;                case 6:                    {
                        if (_this.isReady == true) {
                            Fly(770, 425, _this);
                        } else {
                            Fly(900, 390, _this);
                        }
                    }                    break;                case 7:                    Fly(770, 455, _this);                    break;                case 8:                    Fly(760, 490, _this);                    break;                case 9:                    Fly(725, 500, _this);                    break;                case 10:                    Fly(695, 500, _this);                    break;                case 11:                    Fly(665, 500, _this);                    break;                case 12:                    Fly(635, 500, _this);                    break;                case 13:                    Fly(605, 500, _this);                    break;                case 14:                    Fly(570, 490, _this);                    break;                case 15:                    Fly(560, 455, _this);                    break;                case 16:                    Fly(560, 425, _this);                    break;                case 17:                    Fly(570, 390, _this);                    break;                case 18:                    Fly(550, 370, _this);                    break;                case 19:                    Fly(515, 380, _this);                    break;                case 20:                    Fly(485, 380, _this);                    break;                case 21:                    Fly(450, 370, _this);                    break;                case 22:                    Fly(440, 335, _this);                    break;                case 23:                    Fly(440, 305, _this);                    break;                case 24:                    Fly(440, 275, _this);                    break;                case 25:                    Fly(440, 245, _this);                    break;                case 26:                    Fly(440, 215, _this);                    break;                case 27:                    Fly(450, 180, _this);                    break;                case 28:                    Fly(485, 170, _this);                    break;                case 29:                    Fly(515, 170, _this);                    break;                case 30:                    Fly(550, 180, _this);                    break;                case 31:                    Fly(570, 160, _this);                    break;                case 32:                    Fly(560, 125, _this);                    break;                case 33:                    Fly(560, 95, _this);                    break;                case 34:                    Fly(570, 60, _this);                    break;                case 35:                    Fly(605, 50, _this);                    break;                case 36:                    Fly(635, 50, _this);                    break;                case 37:                    Fly(665, 50, _this);                    break;                case 38:                    Fly(695, 50, _this);                    break;                case 39:                    Fly(725, 50, _this);                    break;                case 40:                    Fly(760, 60, _this);                    break;                case 41:                    Fly(770, 95, _this);                    break;                case 42:                    Fly(770, 125, _this);                    break;                case 43:                    Fly(760, 160, _this);                    break;                case 44:                    Fly(780, 180, _this);                    break;                case 45:                    Fly(815, 170, _this);                    break;                case 46:                    Fly(845, 170, _this);                    break;                case 47:                    Fly(880, 180, _this);                    break;                case 48:                    Fly(890, 215, _this);                    break;                case 49:                    Fly(890, 245, _this);                    break;                case 50:                    Fly(890, 275, _this);                    break;                case 51:                    Fly(845, 275, _this);                    break;                case 52:                    Fly(815, 275, _this);                    break;                case 53:                    Fly(785, 275, _this);                    break;                case 54:                    Fly(755, 275, _this);                    break;                case 55:                    Fly(725, 275, _this);                    break;                case 56:                    Fly(695, 275, _this);                    break;
            }
        }
            break;
        case "green": {
            switch (steps) {
                case 1:                    {
                        Fly(570, 490, _this);
                    }                    break;                case 2:                    {
                        Fly(560, 455, _this);
                    }                    break;                case 3:                    {
                        Fly(560, 425, _this);
                    }                    break;                case 4:                    {
                        Fly(570, 390, _this);
                    }                    break;                case 5:                    {
                        Fly(550, 370, _this);
                    }                    break;                case 6:                    Fly(515, 380, _this);                    break;                case 7:                    Fly(485, 380, _this);                    break;                case 8:                    Fly(450, 370, _this);                    break;                case 9:                    Fly(440, 335, _this);                    break;                case 10:                    Fly(440, 305, _this);                    break;                case 11:                    Fly(440, 275, _this);                    break;                case 12:                    Fly(440, 245, _this);                    break;                case 13:                    Fly(440, 215, _this);                    break;                case 14:                    Fly(450, 180, _this);                    break;                case 15:                    Fly(485, 170, _this);                    break;                case 16:                    Fly(515, 170, _this);                    break;                case 17:                    Fly(550, 180, _this);                    break;                case 18:                    Fly(570, 160, _this);                    break;                case 19:                    Fly(560, 125, _this);                    break;                case 20:                    Fly(560, 95, _this);                    break;                case 21:                    Fly(570, 60, _this);                    break;                case 22:                    Fly(605, 50, _this);                    break;                case 23:                    Fly(635, 50, _this);                    break;                case 24:                    Fly(665, 50, _this);                    break;                case 25:                    Fly(695, 50, _this);                    break;                case 26:                    Fly(725, 50, _this);                    break;                case 27:                    Fly(760, 60, _this);                    break;                case 28:                    Fly(770, 95, _this);                    break;                case 29:                    Fly(770, 125, _this);                    break;                case 30:                    Fly(760, 160, _this);                    break;                case 31:                    Fly(780, 180, _this);                    break;                case 32:                    Fly(815, 170, _this);                    break;                case 33:                    Fly(845, 170, _this);                    break;                case 34:                    Fly(880, 180, _this);                    break;                case 35:                    Fly(890, 215, _this);                    break;                case 36:                    Fly(890, 245, _this);                    break;                case 37:                    Fly(890, 275, _this);                    break;                case 38:                    Fly(890, 305, _this);                    break;                case 39:                    Fly(890, 335, _this);                    break;                case 40:                    Fly(880, 370, _this);                    break                case 41:                    Fly(845, 380, _this);                    break;                case 42:                    Fly(815, 380, _this);                    break;                case 43:                    Fly(780, 370, _this);                    break;                case 44:                    Fly(760, 390, _this);                    break;                case 45:                    Fly(770, 425, _this);                    break;                case 46:                    Fly(770, 455, _this);                    break;                case 47:                    Fly(760, 490, _this);                    break;                case 48:                    Fly(725, 500, _this);                    break;                case 49:                    Fly(695, 500, _this);                    break;                case 50:                    Fly(665, 500, _this);                    break                case 51:                    Fly(665, 455, _this);                    break;                case 52:                    Fly(665, 425, _this);                    break;                case 53:                    Fly(665, 395, _this);                    break;                case 54:                    Fly(665, 365, _this);                    break;                case 55:                    Fly(665, 335, _this);                    break;                case 50:                    Fly(665, 305, _this);                    break;
            }
        }
    }
    //plane.style.left = x + 'px';    //plane.style.top = y + 'px';
}//判断第二步掷到的数字，并根据步数移动调用Clicktwovar Second = function (second, plane) {
    if (plane.isReady == true) {
        plane.addEventListener('click', Clicktwo(plane), false);
    }    console.log("nowindex" + index);
}var FirstMove = function (plane, x, y) {
    plane.isReady = true;    plane.style.left = x + 'px';    plane.style.top = y + 'px';    isClicked = false;
}//function colorChoose() {
    var plane = this.className;    var _this = this;    console.log(index);    switch (plane) {
        case "red":            {
                if (_this.isReady == false) {
                    FirstMove(_this, 430, 160);
                } else {
                    Second(second, _this);
                }
            }            break;               case "yellow":            {
                if (_this.isReady == false) {
                    FirstMove(_this, 780, 40);
                } else                    Second(second, _this);
            }            break;              case "green":            {
                if (_this.isReady == false) {
                    FirstMove(_this, 550, 510);
                } else                    Second(second, _this);
            }            break;                case "blue":            {
                if (_this.isReady == false) {
                    FirstMove(_this, 900, 390);
                } else {
                    Second(second, _this);
                }
            }            break;       
    }
    for (var i = 0; i < planeBox[index].children.length; i++) {
        planeBox[index].children[i].removeEventListener("click", colorChoose);
        console.log("red" + (i + 1) + "clickRemove");
    }
}