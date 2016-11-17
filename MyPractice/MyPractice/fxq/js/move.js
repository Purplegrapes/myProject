

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
    console.log("红色玩家请投掷");
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
$('.container').click(function () {
    change();
   
    FirstClick();



});



var FirstClick = function () {
    nums.push(number);
    console.log(nums);
    nums = nums.length - 2 > 0 ? nums.splice(-1, nums.length - 2) : nums;
     if (nums[nums.length - 1] == 6) {
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
//第一次掷到6后掷第二次，如果起飞了执行secondStep()，
//如果isReady==false并且second==6，就执行firstMove()
var Clicktwo = function () {
    console.log(index);
    var froIndex = index;
    if (froIndex == 0 || froIndex == -1) {
        switch (second) {
            case 1: {
                secondStep(450, 180, this);
            }
                break;
            case 2: {
                secondStep(485, 170, this);

            }
                break;
            case 3: {
                secondStep(515, 170, this);

            }
                break;
            case 4: {
                secondStep(550, 180, this);

            }
                break;
            case 5: {
                secondStep(570, 160, this);


            }
                break;
            case 6: {

                if (this.isReady == true) {
                    secondStep(750, 180, this);

                }
                else {
                    secondStep(450, 180, this);
                }
            }
                break;
        }
        this.removeEventListener('click', Clicktwo, false)
    }
    else if (froIndex == 1) {
        switch (second) {
            case 1: {
                secondStep(760, 60, this);
            }
                break;
            case 2: {
                secondStep(770, 95, this);

            }
                break;
            case 3: {
                secondStep(770, 125, this);

            }
                break;
            case 4: {
                secondStep(760, 160, this);

            }
                break;
            case 5: {
                secondStep(780, 180, this);


            }
                break;
            case 6: {

                if (this.isReady == true) {
                    secondStep(815, 170, this);

                }
                else {
                    secondStep(780, 40, this);
                }
            }
                break;
        }
        this.removeEventListener('click', Clicktwo, false)
    }
    else if (froIndex == 2) {
        switch (second) {
            case 1: {
                secondStep(370, 880, this);
            }
                break;
            case 2: {
                secondStep(380, 845, this);

            }
                break;
            case 3: {
                secondStep(380, 815, this);

            }
                break;
            case 4: {
                secondStep(370, 780, this);

            }
                break;
            case 5: {
                secondStep(390, 760, this);


            }
                break;
            case 6: {

                if (this.isReady == true) {
                    secondStep(425, 770, this);

                }
                else {
                    secondStep(900, 390, this);
                }
            }
                break;
        }
        this.removeEventListener('click', Clicktwo, false)
    }
    else if (froIndex == 3) {
        switch (second) {
            case 1: {
                secondStep(570, 490, this);
            }
                break;
            case 2: {
                secondStep(560, 465, this);

            }
                break;
            case 3: {
                secondStep(560, 425, this);

            }
                break;
            case 4: {
                secondStep(570, 390, this);

            }
                break;
            case 5: {
                secondStep(550, 370, this);


            }
                break;
            case 6: {

                if (this.isReady == true) {
                    secondStep(515, 380, this);

                }
                else {
                    secondStep(550, 510, this);
                }
            }
                break;
        }
        this.removeEventListener('click', Clicktwo, false)
    }
}





//丢到6后再丢调用的函数
var secondStep = function (x, y, plane) {
    console.log(plane.isReady);
    plane.style.left = x + 'px';
    plane.style.top = y + 'px';
    isClicked = false;
}
//判断第二步掷到的数字，并根据步数移动调用Clicktwo
var Second = function (second, planes) {

    console.log(planes.isReady);
    
    if (planes.isReady == true) {
        planes.addEventListener('click', Clicktwo, false);
    }
    
    
    console.log("nowindex" + index);
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





