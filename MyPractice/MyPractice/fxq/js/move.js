var reds = document.getElementsByClassName('red');
var a = [];
var planeBox = document.getElementsByClassName("planeBox");
var isClicked = true;
var index = -1;
var nums = [];
var planes;
var first;
var second;
var angle = 0;
//var _this;
var FisrtAttr = function () {
    
    for (var i = 0; i < planeBox.length; i++) {
        planeBox[i].score = 0;
        planes = planeBox[i].children;
        for (var j = 0; j < planes.length; j++) {
            planes[j].isReady = false;
            planes[j].step = 0;


        }
    }

}();


var whichPlayer = function (index) {

    switch (index) {
        case -1:
            alert("红色玩家该你了");
            break;
        case 0:
            alert("红色玩家该你了");
            break;
        case 1:
            alert("黄色玩家该你了");
            break;
        case 2:
            alert("蓝色玩家该你了");
            break;
        case 3:
            alert("绿色玩家该你了");
            break;
    }
};

$('.container').click(function () {
    change();//骰子数变换
    FirstClick();//
});
//得到当前飞机盒子的index

var nowIndex = function () {
    nums.push(number); //将掷到的点数number放在一个数组里
    nums = nums.slice(nums.length - 2, nums.length); //让数组始终取最后两个数
    console.log(nums);
    if (nums[nums.length - 1] == 6 || nums[nums.length - 2] == 6) {
        first = 6; //只要数组里有数字等于6，first就等于6
    } else {
        first = nums[0]; //else first==nums[0];
    }
    console.log("first:" + first);
    if (first == 6) {
        second = nums[1]; //if first==6,second等于数组最后一个数
    } else {
        second = null; //否则second的值为空
    }

    if (nums[0] !== 6 && nums[1] !== 6) {
        index++;
        if (index == 4) {
            index = 0;
        }
    } else if (first == 6 && nums[0] !== 6) {
        index++;
        if (index == 4) {
            index = 0;
        }
    }
    console.log("number" + number);
    console.log("index:" + index);
    return index;
}
var FirstClick = function () {
    nowIndex(); //得到当前index;
    console.log("second:" + second);
    //找到index的盒子里面的飞机
    //如果first==6，就依次为每架飞机添加click事件，并调用colorChoose
    if (first == 6) {
        if (index == -1 || index == 0) {
            index = 0;
            var replanes = planeBox[0].children;
            console.log(second);

            for (var i = 0; i < replanes.length; i++) {

                replanes[i].addEventListener('click', colorChoose, false);
            }
        } else if (index == 1) {
            var yeplanes = planeBox[1].children;

            console.log(second);
            for (var i = 0; i < yeplanes.length; i++) {
                yeplanes[i].addEventListener('click', colorChoose, false);
            }

        } else if (index == 2) {
            var blplanes = planeBox[2].children;

            console.log(second);
            for (var i = 0; i < blplanes.length; i++) {
                blplanes[i].addEventListener('click', colorChoose, false);
            }

        } else if (index == 3) {
            var grplanes = planeBox[3].children;

            console.log(second);
            for (var i = 0; i < grplanes.length; i++) {
                grplanes[i].addEventListener('click', colorChoose, false);
            }
        }

    }
}
function colorChoose() {
    var plane = this.className;//得到当前点击飞机的class，根据不同的class设置不同的参数
    var _this = this;
    console.log(index);
    switch (plane) {
        case "red":
            {
                if (_this.isReady == false) {
                    FirstMove(_this, 430, 160);//如果飞机还没有起飞,调用FirstMove()

                } else {
                    Second(second, _this);//否则调用Second();
                }
            }
            break;
        case "yellow":
            {
                if (_this.isReady == false) {
                    FirstMove(_this, 780, 40);
                } else

                    Second(second, _this);

            }
            break;


        case "green":
            {
                if (_this.isReady == false) {
                    FirstMove(_this, 550, 510);
                } else

                    Second(second, _this);

            }
            break;


        case "blue":
            {
                if (_this.isReady == false) {
                    FirstMove(_this, 900, 390);
                } else {
                    Second(second, _this);
                }
            }
            break;
    }
    for (var i = 0; i < planeBox[index].children.length; i++) {
        planeBox[index].children[i].removeEventListener("click", colorChoose);    //得到点击的飞机后就移除colorChoose的点击事件   
    }
}
var FirstMove = function (plane, x, y) {
    

    if (second == 6 || second == null || second == undefined) {
        plane.addEventListener('click', startFly(plane, x, y), false);//满足以上条件就为飞机添加起飞点击事件
        cliPlane = plane;//保存当前点击的飞机
    } else if (plane.isReady == true) {
        plane.addEventListener('click', Clicktwo(plane), false);//如果飞机已经起飞了，就添加判断步数的事件
    }
}
//第一次掷到6.点击飞机起飞
var startFly = function (plane, x, y) {
    var ang = 0;
    if (x == 430 && y == 160) {
        ang = 90;
    }
    else if (x == 780 && y == 40) {
        ang = 180;
    }
    else if (x == 550 && y == 510) {
        ang = 0;
    }
    else {
        ang = -90;
    }

    plane.isReady = true;//将起飞属性设置为true
    plane.style.webkitTransform = 'translate(' + (x+'px')+','+(y+'px') + ')'+'rotate('+ang+'deg)';
    
    isClicked = false;
    plane.removeEventListener('click', startFly, false);//移除起飞事件
}
//如果飞机已经到达起飞点，就传入second的值，添加第二次点击事件
var Second = function (second, plane) {
    if (first == 6) {
        plane.addEventListener('click', Clicktwo(plane), false);
    }
    

    console.log("nowindex" + index);
}
var Clicktwo = function (plane) {
    var _this = plane;
    var cuStep = _this.step + second;
    if (cuStep > 56) {
        _this.step = 56 - (cuStep-56);
    }
    else {
        _this.step += second;//得到起飞飞机的行走步数
    }
    
    console.log("step" + _this.step);
    secondStep(_this, _this.step);//根据步数调用secondStep();
    _this.removeEventListener('click', Clicktwo, false);
}
var secondStep = function (_this, steps) {
    //根据飞机的class设置Fly()的参数
    
    switch (_this.className) {
        
        case "red":
            {
                switch (steps) {
                    case 1:

                        Fly(450, 180, _this, steps);
                        break;
                    case 2:                       
                        Fly(485, 170, _this, steps);                       
                        $(_this).one(transitionEvent, function () {
                            fastFly( 560, 125,_this);
                        })
                        break;
                    case 3:
                        Fly(515, 170, _this, steps);
                        break;
                    case 4:
                        Fly(550, 180, _this, steps);
                        break;
                    case 5:
                        Fly(570, 160, _this, steps);
                        break;
                    case 6:
                       
                            Fly(560, 125, _this, steps);
                            $(_this).one(transitionEvent, function () {
                                fastFly( 635, 50,_this);
                            })
                       
                       
                      
                        break;
                    case 7:
                        Fly(560, 95, _this, steps);
                        break;
                    case 8:
                        Fly(570, 60, _this, steps);
                        break;
                    case 9:
                        Fly(605, 50, _this, steps);
                        break;
                    case 10:
                        Fly(635, 50, _this, steps);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 60,_this );
                        })
                        break;
                    case 11:
                        Fly(665, 50, _this, steps);
                        break;
                    case 12:
                        Fly(695, 50, _this, steps);
                        break;
                    case 13:
                        Fly(725, 50, _this, steps);
                        break;
                    case 14:
                        Fly(760, 60, _this, steps);
                        $(_this).one(transitionEvent, function () {
                            fastFly(780, 180, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(780, 370,_this);
                            })
                        });                    
                       
                        break;
                    case 15:
                        Fly(770, 95, _this, steps);
                        break;
                    case 16:
                        Fly(770, 125, _this, steps);
                        break;
                    case 17:
                        Fly(760, 160, _this);
                        break;
                    case 18:
                        Fly(780, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(780, 370, _this);
                        })
                        break;
                    case 19:
                        Fly(815, 170, _this);
                        break;
                    case 20:
                        Fly(845, 170, _this);
                        break;

                    case 21:
                        Fly(880, 180, _this);
                        break;

                    case 22:
                        Fly(890, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 335, _this);
                        })
                        break;
                    case 23:
                        Fly(890, 245, _this);
                        break;
                    case 24:
                        Fly(890, 275, _this);
                        break;
                    case 25:
                        Fly(890, 305, _this);
                        break;
                    case 26:
                        Fly(890, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(780, 370, _this);
                        })
                        break;
                    case 27:
                        Fly(880, 370, _this);
                        break
                    case 28:
                        Fly(845, 380, _this);
                        break;
                    case 29:
                        Fly(815, 380, _this);
                        break;
                    case 30:
                        Fly(780, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 490, _this);
                        })
                        break;
                    case 31:
                        Fly(760, 390, _this);
                        break;
                    case 32:
                        Fly(770, 425, _this);
                        break;
                    case 33:
                        Fly(770, 455, _this);
                        break;

                    case 34:
                        Fly(760, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(635, 500, _this);
                        })
                        break;
                    case 35:
                        Fly(725, 500, _this);
                        break;
                    case 36:
                        Fly(695, 500, _this);
                        break;
                    case 37:
                        Fly(665, 500, _this);
                        break;
                    case 38:
                        Fly(635, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(560, 425, _this);
                        })
                        break;
                    case 39:
                        Fly(605, 500, _this);
                        break;
                    case 40:
                        Fly(570, 490, _this);
                        break;
                    case 41:
                        Fly(560, 455, _this);
                        break;
                    case 42:
                        Fly(560, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(485, 380, _this);
                        })
                        break;
                    case 43:
                        Fly(570, 390, _this);
                        break;
                    case 44:
                        Fly(550, 370, _this);
                        break;
                    case 45:
                        Fly(515, 380, _this);
                        break;
                    case 46:
                        Fly(485, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 275, _this);
                        })
                        break;
                    case 47:
                        Fly(450, 370, _this);
                        break;
                    case 48:
                        Fly(440, 335, _this);
                        break;
                    case 49:
                        Fly(440, 305, _this);
                        break;
                    case 50:
                        Fly(440, 275, _this);
                        break;
                    case 51:
                        Fly(485, 275, _this);
                        break;
                    case 52:
                        Fly(515, 275, _this);
                        break;
                    case 53:
                        Fly(545, 275, _this);
                        break;
                    case 54:
                        Fly(575, 275, _this);
                        break;
                    case 55:
                        Fly(605, 275, _this);
                        break;
                    case 56:
                        Fly(635, 275, _this);
                        break;
                    case 57:
                        Fly(605, 275, _this);
                        break;
                }
            }
            break
        case "yellow":
            {
                switch (steps) {
                    case 1:
                        {
                            Fly(760, 60, _this);
                        }
                        break;
                    case 2:
                        {
                            Fly(770, 95, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(760, 160, _this);
                            })
                        }
                        break;
                    case 3:
                        {
                            Fly(770, 125, _this);

                        }
                        break;
                    case 4:
                        {
                            Fly(760, 160, _this);

                        }
                        break;
                    case 5:
                        {
                            Fly(780, 180, _this);


                        }
                        break;
                    case 6:
                        Fly(815, 170, _this,steps);
                       
                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 245,_this);
                        })
                        break;
                    case 7:
                        Fly(845, 170, _this);
                        break;
                    case 8:
                        Fly(880, 180, _this);
                        break;

                    case 9:
                        Fly(890, 215, _this);
                        break;
                    case 10:
                        Fly(890, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(880, 370, _this);
                        })
                        break;
                    case 11:
                        Fly(890, 275, _this);
                        break;
                    case 12:
                        Fly(890, 305, _this);
                        break;
                    case 13:
                        Fly(890, 335, _this);
                        break;
                    case 14:
                        Fly(880, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 390, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(570, 390, _this);
                            })
                        });
                        break
                    case 15:
                        Fly(845, 380, _this);
                        break;
                    case 16:
                        Fly(815, 380, _this);
                        break;
                    case 17:
                        Fly(780, 370, _this);
                        break;
                    case 18:
                        Fly(760, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 390, _this);
                        })
                        break;
                    case 19:
                        Fly(770, 425, _this);
                        break;
                    case 20:
                        Fly(770, 455, _this);
                        break;

                    case 21:
                        Fly(760, 490, _this);
                        break;
                    case 22:
                        Fly(725, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(605, 500, _this);
                        })
                        break;
                    case 23:
                        Fly(695, 500, _this);
                        break;
                    case 24:
                        Fly(665, 500, _this);
                        break;
                    case 25:
                        Fly(635, 500, _this);
                        break;
                    case 26:
                        Fly(605, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 390, _this);
                        })
                        break;
                    case 27:
                        Fly(570, 490, _this);
                        break;
                    case 28:
                        Fly(560, 455, _this);
                        break;
                    case 29:
                        Fly(560, 425, _this);
                        break;
                    case 30:
                        Fly(570, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(450, 370, _this);
                        })
                        break;
                    case 31:
                        Fly(550, 370, _this);
                        break;
                    case 32:
                        Fly(515, 380, _this);
                        break;
                    case 33:
                        Fly(485, 380, _this);
                        break;
                    case 34:
                        Fly(450, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 245, _this);
                        })
                        break;
                    case 35:
                        Fly(440, 335, _this);
                        break;
                    case 36:
                        Fly(440, 305, _this);
                        break;
                    case 37:
                        Fly(440, 275, _this);
                        break;
                    case 38:
                        Fly(440, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(515, 170, _this);
                        })
                        break;
                    case 39:
                        Fly(440, 215, _this);
                        break;
                    case 40:
                        Fly(450, 180, _this);
                        break;
                    case 41:
                        Fly(485, 170, _this);
                        break;
                    case 42:
                        Fly(515, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(560, 95, _this);
                        })
                        break;
                    case 43:
                        Fly(550, 180, _this);
                        break;
                    case 44:
                        Fly(570, 160, _this);
                        break;
                    case 45:
                        Fly(560, 125, _this);
                        break;
                    case 46:
                        Fly(560, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(665, 50, _this);
                        })
                        break;
                    case 47:
                        Fly(570, 60, _this);
                        break;
                    case 48:
                        Fly(605, 50, _this);
                        break;
                    case 49:
                        Fly(635, 50, _this);
                        break;
                    case 50:
                        Fly(665, 50, _this);
                        break;
                    case 51:
                        Fly(665, 95, _this);
                        break;
                    case 52:
                        Fly(665, 125, _this);
                        break;
                    case 53:
                        Fly(665, 155, _this);
                        break;
                    case 54:
                        Fly(665, 185, _this);
                        break;
                    case 55:
                        Fly(665, 215, _this);
                        break;
                    case 56:
                        Fly(665, 245, _this);
                        break;
                }
            }
            break;
        case "blue":
            {
                switch (steps) {
                    case 1:
                        {
                            Fly(880, 370, _this);
                        }
                        break;
                    case 2:
                        {
                            Fly(845, 380, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(780, 370, _this);
                            })
                        }
                        break;
                    case 3:
                        {
                            Fly(815, 380, _this);

                        }
                        break;
                    case 4:
                        {
                            Fly(780, 370, _this);

                        }
                        break;
                    case 5:
                        {
                            Fly(760, 390, _this);


                        }
                        break;
                    case 6:                      
                        Fly(770, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(695,500, _this);
                        })
                        break;
                    case 7:
                        Fly(770, 455, _this);
                        break;

                    case 8:
                        Fly(760, 490, _this);
                        break;
                    case 9:
                        Fly(725, 500, _this);
                        break;
                    case 10:
                        Fly(695, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 490, _this);
                        })
                        break;
                    case 11:
                        Fly(665, 500, _this);
                        break;
                    case 12:
                        Fly(635, 500, _this);
                        break;
                    case 13:
                        Fly(605, 500, _this);
                        break;
                    case 14:
                        Fly(570, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(550, 370, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(550, 180, _this);
                            })
                        })
                        break;
                    case 15:
                        Fly(560, 455, _this);
                        break;
                    case 16:
                        Fly(560, 425, _this);
                        break;
                    case 17:
                        Fly(570, 390, _this);
                        break;
                    case 18:
                        Fly(550, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(550, 180, _this);
                        })
                        break;
                    case 19:
                        Fly(515, 380, _this);
                        break;
                    case 20:
                        Fly(485, 380, _this);
                        break;
                    case 21:
                        Fly(450, 370, _this);
                        break;
                    case 22:
                        Fly(440, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 215, _this);
                        })
                        break;
                    case 23:
                        Fly(440, 305, _this);
                        break;
                    case 24:
                        Fly(440, 275, _this);
                        break;
                    case 25:
                        Fly(440, 245, _this);
                        break;
                    case 26:
                        Fly(440, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(550, 180, _this);
                        })
                        break;
                    case 27:
                        Fly(450, 180, _this);
                        break;
                    case 28:
                        Fly(485, 170, _this);
                        break;
                    case 29:
                        Fly(515, 170, _this);
                        break;
                    case 30:
                        Fly(550, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 60, _this);
                        })
                        break;
                    case 31:
                        Fly(570, 160, _this);
                        break;
                    case 32:
                        Fly(560, 125, _this);
                        break;
                    case 33:
                        Fly(560, 95, _this);
                        break;
                    case 34:
                        Fly(570, 60, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(695, 50, _this);
                        })
                        break;
                    case 35:
                        Fly(605, 50, _this);
                        break;
                    case 36:
                        Fly(635, 50, _this);
                        break;
                    case 37:
                        Fly(665, 50, _this);
                        break;
                    case 38:
                        Fly(695, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(770, 125, _this);
                        })
                        break;
                    case 39:
                        Fly(725, 50, _this);
                        break;
                    case 40:
                        Fly(760, 60, _this);
                        break;
                    case 41:
                        Fly(770, 95, _this);
                        break;
                    case 42:
                        Fly(770, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(845, 170, _this);
                        })
                        break;
                    case 43:
                        Fly(760, 160, _this);
                        break;
                    case 44:
                        Fly(780, 180, _this);
                        break;
                    case 45:
                        Fly(815, 170, _this);
                        break;
                    case 46:
                        Fly(845, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 275, _this);
                        })
                        break;

                    case 47:
                        Fly(880, 180, _this);
                        break;

                    case 48:
                        Fly(890, 215, _this);
                        break;
                    case 49:
                        Fly(890, 245, _this);
                        break;
                    case 50:
                        Fly(890, 275, _this);
                        break;
                    case 51:
                        Fly(845, 275, _this);
                        break;
                    case 52:
                        Fly(815, 275, _this);
                        break;
                    case 53:
                        Fly(785, 275, _this);
                        break;
                    case 54:
                        Fly(755, 275, _this);
                        break;
                    case 55:
                        Fly(725, 275, _this);
                        break;
                    case 56: {
                        Fly(695, 275, _this);
                        planeBox[0].score++;
                        console.log(planeBox[0].score);
                    }
                       
                        break;
                }
            }
            break;
        case "green":
            {
                switch (steps) {
                    case 1:
                        {

                            Fly(570, 490, _this);

                        }
                        break;
                    case 2:
                        {
                            Fly(560, 455, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(515, 380, _this);
                            })
                        }
                        break;
                    case 3:
                        {
                            Fly(560, 425, _this);

                        }
                        break;
                    case 4:
                        {
                            Fly(570, 390, _this);

                        }
                        break;
                    case 5:
                        {
                            Fly(550, 370, _this);


                        }
                        break;
                    case 6:
                        Fly(515, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 305, _this);
                        })
                        break;
                    case 7:
                        Fly(485, 380, _this);
                        break;
                    case 8:
                        Fly(450, 370, _this);
                        break;
                    case 9:
                        Fly(440, 335, _this);
                        break;
                    case 10:
                        Fly(440, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(450, 180, _this);
                        })
                        break;
                    case 11:
                        Fly(440, 275, _this);
                        break;
                    case 12:
                        Fly(440, 245, _this);
                        break;
                    case 13:
                        Fly(440, 215, _this);
                        break;
                    case 14:
                        Fly(450, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 160, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(760, 160, _this);
                            })
                        })
                        break;
                    case 15:
                        Fly(485, 170, _this);
                        break;
                    case 16:
                        Fly(515, 170, _this);
                        break;
                    case 17:
                        Fly(550, 180, _this);
                        break;
                    case 18:
                        Fly(570, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 160, _this);
                        })
                        break;
                    case 19:
                        Fly(560, 125, _this);
                        break;
                    case 20:
                        Fly(560, 95, _this);
                        break;
                    case 21:
                        Fly(570, 60, _this);
                        break;
                    case 22:
                        Fly(605, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(725, 50, _this);
                        })
                        break;
                    case 23:
                        Fly(635, 50, _this);
                        break;
                    case 24:
                        Fly(665, 50, _this);
                        break;
                    case 25:
                        Fly(695, 50, _this);
                        break;
                    case 26:
                        Fly(725, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 160, _this);
                        })
                        break;
                    case 27:
                        Fly(760, 60, _this);
                        break;
                    case 28:
                        Fly(770, 95, _this);
                        break;
                    case 29:
                        Fly(770, 125, _this);
                        break;
                    case 30:
                        Fly(760, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(880, 180, _this);
                        })
                        break;
                    case 31:
                        Fly(780, 180, _this);
                        break;
                    case 32:
                        Fly(815, 170, _this);
                        break;
                    case 33:
                        Fly(845, 170, _this);
                        break;

                    case 34:
                        Fly(880, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 305, _this);
                        })
                        break;

                    case 35:
                        Fly(890, 215, _this);
                        break;
                    case 36:
                        Fly(890, 245, _this);
                        break;
                    case 37:
                        Fly(890, 275, _this);
                        break;
                    case 38:
                        Fly(890, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(815, 380, _this);
                        })
                        break;
                    case 39:
                        Fly(890, 335, _this);
                        break;
                    case 40:
                        Fly(880, 370, _this);
                        break
                    case 41:
                        Fly(845, 380, _this);
                        break;
                    case 42:
                        Fly(815, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(770, 455, _this);
                        })
                        break;
                    case 43:
                        Fly(780, 370, _this);
                        break;
                    case 44:
                        Fly(760, 390, _this);
                        break;
                    case 45:
                        Fly(770, 425, _this);
                        break;
                    case 46:
                        Fly(770, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(665, 500, _this);
                        })
                        break;
                    case 47:
                        Fly(760, 490, _this);
                        break;
                    case 48:
                        Fly(725, 500, _this);
                        break;
                    case 49:
                        Fly(695, 500, _this);
                        break;
                    case 50:
                        Fly(665, 500, _this);
                        break
                    case 51:
                        Fly(665, 455, _this);
                        break;
                    case 52:
                        Fly(665, 425, _this);
                        break;
                    case 53:
                        Fly(665, 395, _this);
                        break;
                    case 54:
                        Fly(665, 365, _this);
                        break;
                    case 55:
                        Fly(665, 335, _this);
                        break;
                    case 56:
                        Fly(665, 305, _this);
                        break;

                }
            }
    }


    //plane.style.left = x + 'px';
    //plane.style.top = y + 'px';
}
var Direction = function (x, y) {

    if ((160 < y && y <= 180) && (450 <= x) && (x < 570)) {
        angle = 90;
    } else if ((430 < x && x <= 570) && (60 < y && y <= 160)) {
        angle = 0;
    } else if ((570 <= x) && (x < 760) && (50 <= y && y <= 60)) {
        angle = 90;
    } else if ((760 <= x && x < 780) && (60 <= y && y < 180)) {
        angle = 180; //14-18
    } else if ((780 <= x && x < 880) && (170 <= y && y <= 180)) {
        angle = 90; //18-21
    } else if ((880 <= x && x <= 890) && (180 <= y && y < 370)) {
        angle = 180; //21-27
    } else if ((760 < x && x <= 880) && (370 <= y && y < 390)) {
        angle = 270; //27-31
    } else if ((760 <= x && x <= 770) && (390 <= y && y < 490)) {
        angle = 180; //31-34
    } else if ((570 < x && x <= 760) && (490 <= y && y <= 500)) {
        angle = 270; //34-40
    } else if ((550 < x && x <= 570) && (370 < y && y <= 490)) {
        angle = 360; //40-44
    } else if ((450 < x && x <= 550) && (180 < y && y <= 380 && y != 275)) {
        angle = 270; //44-47
    } else if ((440 <= x && x <= 450) && (225 <= y && y < 380)) {
        angle = 360; //47-1;
    }
        //黄色终点方向
    else if (x == 665 && (50 <= y && y <= 245)) {
        angle = 180;
    }
        //蓝色终点方向
    else if (y == 275 && (675 <= x && x <= 890)) {
        angle = -90;
    }
        //红色终点方向
    else if (y == 275 && (440 <= x && x <= 635)) {
        angle = 450;
    }
        //绿色终点方向
    else if (x == 665 && (305 <= y && y <= 500)) {
        angle = 180;
    }
}
function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

/* 监听变换事件! */
var transitionEvent = whichTransitionEvent();
var Fly = function (x, y, plane, steps) {
   
    //plane.style.left = x + 'px';
    //plane.style.top = y + 'px';
    Direction(x, y);
    plane.style.webkitTransform = 'translate(' + (x + 'px') + ',' + (y + 'px') + ')' + 'rotate('+angle+"deg"+')'

   
    //$(plane).animate({ left: x, top: y }, Direction(x, y, plane));
    //console.log($(plane).is(":animated"));
    
        switch (steps) {//steps等于相应值可行进到下一个同色的步数
            case 2:
                {
                    plane.step = 6;
                                
                }
                break;
            case 6:
                
                plane.step = 10;
                break;
            case 10:
                plane.step = 14;
                break;
            case 14:
                plane.step = 30;
               
                break;
            case 18:
                plane.step = 30;
                break;
            case 22:
                plane.step = 26;
                break;
            case 26:
                plane.step = 30;
                break;
            case 30:
                plane.step = 34;
                break;
            case 34:
                plane.step = 38;
                break;
            case 38:
                plane.step = 42;
                break;
            case 42:
                plane.step = 46;
          
                break;
            case 46:
                plane.step = 50;

                break;
        }
        //根据坐标转换方向

        console.log(plane.step);
}

//
var fastFly = function (x,y,plane) {

    Direction(x, y);
   plane.style.transform = 'translate(' + (x + 'px') + ',' + (y + 'px') + ')' + 'rotate('+angle+'deg'+')';
    //$(plane).animate({ left: x, top: y });
    
}