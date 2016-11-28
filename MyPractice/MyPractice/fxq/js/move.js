var reds = document.getElementsByClassName('red');
var a = [];
var planeBox = document.getElementsByClassName("planeBox");
var dice = document.getElementsByClassName("canvas")
var isClicked = true;
var index =-1;
var nums = [];
var planes;
var first;
var second;
var angle = 0;
var reg=/\-?[0-9]+/g;
//var _this;
var FisrtAttr = function () {
    
    for (var i = 0; i < planeBox.length; i++) {
        planeBox[i].score = 0;
        
        planes = planeBox[i].children;
        for (var j = 0; j < planes.length; j++) {
            planes[j].isReady = false;
            planes[j].step = 0;
            planes[j].endStep = 0;
            planes[j].clickTime=0;
            


        }
    }

}();
var diceColor = function () {
    for (var i = 0; i < dice.length; i++) {
        switch (index) {
            case 0: dice[i].style.backgroundColor = "rgb(216,34,13)";
                break;
            case 1: dice[i].style.backgroundColor = "rgb(246,172,26)";
                break;
            case 2: dice[i].style.backgroundColor = "rgb(0,152,158)";
                break;
            case 3: dice[i].style.backgroundColor= "#339933";
        }
    }
    
}
$('.container').click(function () {
    
    change();//骰子数变换
    FirstClick();//
});
//得到当前飞机盒子的index

var nowIndex = function () {
    nums.push(number); //将掷到的点数number放在一个数组里
    nums = nums.slice(nums.length - 2, nums.length); //让数组始终取最后两个数
    console.log(nums);
   
       first = nums[0]; //else first==nums[0];
    
    console.log("first:" + first);
    second = nums[1];
    if (nums[0] !== 6 && nums[1] !== 6) {
        index++;
        if (index == 4) {
            index = 0;
        }
    } else if (number == 6 && nums[0] !== 6) {
        index++;
        if (index == 4) {
            index = 0;
        }
    //if (index>=0) {
    //    index++;
    //    if (index == 4) {
    //        index = 0;
    //    }
    //    else if (number==6) {
    //        index--;
    //} 
       
    }
    diceColor();
    console.log("number" + number);
    console.log("index:" + index);
   
    return index;
}
var FirstClick = function () {
    nowIndex(); //得到当前index;
    console.log("second:" + second);
    //找到index的盒子里面的飞机
    //如果first==6，就依次为每架飞机添加click事件，并调用colorChoose

     
        if ( index == 0||index==-1) {
            index = 0;
            var replanes = planeBox[0].children;
            console.log(second);

            for (var i = 0; i < replanes.length; i++) {
                if (number == 6){
                    replanes[i].addEventListener('click', colorChoose);
                    
                }
                else if (replanes[i].isReady == true) {
                    second = number;
                    replanes[i].addEventListener('click', colorChoose);
                }
               
                
            }
        } else if (index == 1) {
            var yeplanes = planeBox[1].children;

            console.log(second);
            for (var i = 0; i < yeplanes.length; i++) {
                if (number == 6) {
                    yeplanes[i].addEventListener('click', colorChoose, false);
                }

                else if (yeplanes[i].isReady == true) {
                    second = number;
                    yeplanes[i].addEventListener('click', colorChoose);
                }
            }
        } else if (index == 2) {
            var blplanes = planeBox[2].children;

            console.log(second);
            for (var i = 0; i < blplanes.length; i++) {
                if(number==6){
                    blplanes[i].addEventListener('click', colorChoose, false);
                }
                
            else if (blplanes[i].isReady == true) {
                    second = number;
                    blplanes[i].addEventListener('click', colorChoose);
                }
            }

        } else if (index == 3) {
            var grplanes = planeBox[3].children;

            console.log(second);
            for (var i = 0; i < grplanes.length; i++) {
                if (number == 6) {
                    grplanes[i].addEventListener('click', colorChoose, false);
                }
                else if (grplanes[i].isReady == true) {
                    second == number;
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

        planeBox[index].children[i].removeEventListener("click", colorChoose);

        //得到点击的飞机后就移除colorChoose的点击事件   
    }

}
var FirstMove = function (plane, x, y) {


    if (number) {
        $(plane).one('click', startFly(plane, x, y), false);//满足以上条件就为飞机添加起飞点击事件
        cliPlane = plane;//保存当前点击的飞机
        
    }
    //else if (cliPlane.isReady == true) {
    //    $(cliPlane).one('click', Clicktwo(cliPlane), false);//如果飞机已经起飞了，就添加判断步数的事件
    //}
    //else if (second !== 6) {
    //    $(cliPlane).one('click', colorChoose, false);
    //}
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
        ang = 360;
    }
    else {
        ang = -90;
    }

    plane.isReady = true;//将起飞属性设置为true

    plane.style.webkitTransform = 'translate(' + (x + 'px') + ',' + (y + 'px') + ')' + 'rotate(' + ang + 'deg)';

    isClicked = false;
    //plane.removeEventListener('click', startFly, false);//移除起飞事件
}
//如果飞机已经到达起飞点，就传入second的值，添加第二次点击事件
var Second = function (second, plane) {

    $(plane).one('click', Clicktwo(plane), false);
    console.log("nowindex" + index);
}
var Clicktwo = function (plane) {

    console.log(index);
    var _this = plane;
    _this.endStep = _this.step;
    _this.step = _this.step + second;
    //得到起飞飞机的行走步数
    secondStep(_this, _this.step);//根据步数调用secondStep();



    console.log("step" + _this.step);

    if (_this.step == 56) {
        
        switch (index) {
            case 0: {
                planeBox[0].score++;
                
                if (planeBox[0].score == 4) {
                    setTimeout(function () {
                        alert("红色玩家获得胜利")
                    }, 1000);
                }

            }
                break;
            case 1: {
                planeBox[1].score++;
                if (planeBox[1].score == 4) {
                    setTimeout(function () {
                        alert("黄色玩家获得胜利")
                    }, 1000);
                }
            }
                break;
            case 2: {
                planeBox[2].score++;
                if (planeBox[2].score == 4) {
                    setTimeout(function () {
                        alert("蓝色玩家获得胜利")
                    }, 1000);
                }
            }
                break;
            case 3:
                {
                    planeBox[3].score++;
                    if (planeBox[3].score == 4) {
                        setTimeout(function () {
                            alert("绿色玩家获得胜利")
                        }, 1000);
                    }
                }
                break;
        }


    }

}
var secondStep = function (_this, steps) {
    //根据飞机的class设置Fly()的参数

    switch (_this.className) {

        case "red":
            {
                switch (steps) {
                    case 1:
                        {
                            Fly(450, 180, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                       
                        break;
                    case 2:
                        Fly(485, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(560, 125, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 3:
                        Fly(515, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 4:
                        Fly(550, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 5:
                        Fly(570, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 6:

                        Fly(560, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(635, 50, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })



                        break;
                    case 7:
                        Fly(560, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 8:
                        Fly(570, 60, _this);
                        Collision(_this);
                        break;
                    case 9:
                        Fly(605, 50, _this);
                        Collision(_this);
                        break;
                    case 10:
                        Fly(635, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 60, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 11:
                        Fly(665, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 12:
                        Fly(695, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 13:
                        Fly(725, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 14:
                        Fly(760, 60, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(780, 180, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(780, 370, _this);
                                $(_this).one(transitionEvent, function () {
                                    Collision(_this);
                                })
                            })
                        });

                        break;
                    case 15:
                        Fly(770, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 16:
                        Fly(770, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 17:
                        Fly(760, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 18:
                        Fly(780, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(780, 370, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 19:
                        Fly(815, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 20:
                        Fly(845, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 21:
                        Fly(880, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 22:
                        Fly(890, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 335, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 23:
                        Fly(890, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 24:
                        Fly(890, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 25:
                        Fly(890, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 26:
                        Fly(890, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(780, 370, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 27:
                        Fly(880, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break
                    case 28:
                        Fly(845, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 29:
                        Fly(815, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 30:
                        Fly(780, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 490, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 31:
                        Fly(760, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 32:
                        Fly(770, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 33:
                        Fly(770, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 34:
                        Fly(760, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(635, 500, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 35:
                        Fly(725, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 36:
                        Fly(695, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 37:
                        Fly(665, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 38:
                        Fly(635, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(560, 425, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 39:
                        Fly(605, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 40:
                        Fly(570, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 41:
                        Fly(560, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 42:
                        Fly(560, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(485, 380, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 43:
                        Fly(570, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 44:
                        Fly(550, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 45:
                        Fly(515, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 46:
                        Fly(485, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 275, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 47:
                        Fly(450, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 48:
                        Fly(440, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 49:
                        Fly(440, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 50:
                        Fly(440, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 51:
                        Fly(485, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 52:
                        Fly(515, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 53:
                        Fly(545, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 54:
                        Fly(575, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 55:
                        Fly(605, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 56:
                        Fly(635, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            _this.className+=" opacity"
                        })
                        break;
                    case 57:
                        Fly(635, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(605, 275, _this);
                        })                        
                        break;
                    case 58:
                        Fly(635, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(575, 275, _this);
                        })
                        break;
                    case 59:
                        Fly(635, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(545, 275, _this);
                        })
                        break;
                    case 60:
                        Fly(635, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(515, 275, _this);
                        })
                        break;
                    case 61:
                        Fly(635, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(485, 275, _this);

                        })
                        break;
                        //case 62:
                        //    Fly(455, 275, _this);
                        //    $(_this).one(transitionEvent, function () {
                        //        fastFly(485, 170, _this);
                        //    })

                        //    break
                        //case 63:
                        //    Fly(455, 245, _this);

                        //    break;
                        //case 64:
                        //    Fly(455, 215, _this);

                        //    break;
                }
            }
            break
        case "yellow":
            {
                switch (steps) {
                    case 1:
                        {
                            Fly(760, 60, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 2:
                        {
                            Fly(770, 95, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(815, 170, _this);
                                $(_this).one(transitionEvent, function () {
                                    Collision(_this);
                                })
                            })
                        }
                        break;
                    case 3:
                        {
                            Fly(770, 125, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 4:
                        {
                            Fly(760, 160, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 5:
                        {
                            Fly(780, 180, _this);

                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 6:
                        Fly(815, 170, _this, steps);

                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 245, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 7:
                        Fly(845, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 8:
                        Fly(880, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 9:
                        Fly(890, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 10:
                        Fly(890, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(880, 370, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 11:
                        Fly(890, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 12:
                        Fly(890, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 13:
                        Fly(890, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 14:
                        Fly(880, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 390, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(570, 390, _this);
                                $(_this).one(transitionEvent, function () {
                                    Collision(_this);
                                })
                            })
                        });
                        break
                    case 15:
                        Fly(845, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 16:
                        Fly(815, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 17:
                        Fly(780, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 18:
                        Fly(760, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 390, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 19:
                        Fly(770, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 20:
                        Fly(770, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 21:
                        Fly(760, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 22:
                        Fly(725, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(605, 500, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 23:
                        Fly(695, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 24:
                        Fly(665, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 25:
                        Fly(635, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 26:
                        Fly(605, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 390, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 27:
                        Fly(570, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 28:
                        Fly(560, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 29:
                        Fly(560, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 30:
                        Fly(570, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(450, 370, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 31:
                        Fly(550, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 32:
                        Fly(515, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 33:
                        Fly(485, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 34:
                        Fly(450, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 245, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 35:
                        Fly(440, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 36:
                        Fly(440, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 37:
                        Fly(440, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 38:
                        Fly(440, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(515, 170, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 39:
                        Fly(440, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 40:

                        Fly(450, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 41:
                        Fly(485, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 42:
                        Fly(515, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(560, 95, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 43:
                        Fly(550, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 44:
                        Fly(570, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 45:
                        Fly(560, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 46:
                        Fly(560, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(665, 50, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 47:
                        Fly(570, 60, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 48:
                        Fly(605, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 49:
                        Fly(635, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 50:
                        Fly(665, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 51:
                        Fly(665, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 52:
                        Fly(665, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 53:
                        Fly(665, 155, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 54:
                        Fly(665, 185, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 55:
                        Fly(665, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 56:
                        Fly(665, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            _this.className += " opacity"
                        })
                        break;
                    case 57:
                        Fly(665, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 215, _this);
                        })
                        break;
                    case 58:
                        Fly(665, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 185, _this);
                        })
                        break;
                    case 59:
                        Fly(665, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 155, _this);
                        })
                        break;
                    case 60:
                        Fly(665, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 125, _this);
                        })
                        break;
                    case 61:
                        Fly(665, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 95, _this);
                        })
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
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 2:
                        {
                            Fly(845, 380, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(770, 425, _this);
                                $(_this).one(transitionEvent, function () {
                                    Collision(_this);
                                })
                            })
                        }
                        break;
                    case 3:
                        {
                            Fly(815, 380, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 4:
                        {
                            Fly(780, 370, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 5:
                        {
                            Fly(760, 390, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })

                        }
                        break;
                    case 6:
                        Fly(770, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(695, 500, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 7:
                        Fly(770, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 8:
                        Fly(760, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 9:
                        Fly(725, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 10:
                        Fly(695, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 490, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 11:
                        Fly(665, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 12:
                        Fly(635, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 13:
                        Fly(605, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 14:
                        Fly(570, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(550, 370, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(550, 180, _this);
                                $(_this).one(transitionEvent, function () {
                                    Collision(_this);
                                })
                            })
                        })
                        break;
                    case 15:
                        Fly(560, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 16:
                        Fly(560, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 17:
                        Fly(570, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 18:
                        Fly(550, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(550, 180, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 19:
                        Fly(515, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 20:
                        Fly(485, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 21:
                        Fly(450, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 22:
                        Fly(440, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 215, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 23:
                        Fly(440, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 24:
                        Fly(440, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 25:
                        Fly(440, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 26:
                        Fly(440, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(550, 180, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 27:
                        Fly(450, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 28:
                        Fly(485, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 29:
                        Fly(515, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 30:
                        Fly(550, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 60, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 31:
                        Fly(570, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 32:
                        Fly(560, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 33:
                        Fly(560, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 34:
                        Fly(570, 60, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(695, 50, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 35:
                        Fly(605, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 36:
                        Fly(635, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 37:
                        Fly(665, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 38:
                        Fly(695, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(770, 125, _this);
                        })
                        break;
                    case 39:
                        Fly(725, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 40:
                        Fly(760, 60, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 41:
                        Fly(770, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 42:
                        Fly(770, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(845, 170, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 43:
                        Fly(760, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 44:
                        Fly(780, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 45:
                        Fly(815, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 46:
                        Fly(845, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 275, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;

                    case 47:
                        Fly(880, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 48:
                        Fly(890, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 49:
                        Fly(890, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 50:
                        Fly(890, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 51:
                        Fly(845, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 52:
                        Fly(815, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 53:
                        Fly(785, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 54:
                        Fly(755, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 55:
                        Fly(725, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 56: {
                        Fly(695, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            _this.className += " opacity"
                        })

                    }

                        break;
                    case 57: {
                        Fly(695, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(725, 275, _this);
                        })
                    }

                        break;
                    case 58: {
                        Fly(695, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(755, 275, _this);
                        })
                    }

                        break;
                    case 59: {
                        Fly(695, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(785, 275, _this);
                        })
                    }

                        break;
                    case 60: {
                        Fly(695, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(815, 275, _this);
                        })
                    }

                        break;
                    case 61: {
                        Fly(695, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(845, 275, _this);
                        })
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
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 2:
                        {
                            Fly(560, 455, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(515, 380, _this);
                                $(_this).one(transitionEvent, function () {
                                    Collision(_this);
                                })
                            })
                        }
                        break;
                    case 3:
                        {
                            Fly(560, 425, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 4:
                        {
                            Fly(570, 390, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 5:
                        {
                            Fly(550, 370, _this);

                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        }
                        break;
                    case 6:
                        Fly(515, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(440, 305, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 7:
                        Fly(485, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 8:
                        Fly(450, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 9:
                        Fly(440, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 10:
                        Fly(440, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(450, 180, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 11:
                        Fly(440, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 12:
                        Fly(440, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 13:
                        Fly(440, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 14:
                        Fly(450, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(570, 160, _this);
                            $(_this).one(transitionEvent, function () {
                                fastFly(760, 160, _this);
                                $(_this).one(transitionEvent, function () {
                                    Collision(_this);
                                })
                            })
                        })
                        break;
                    case 15:
                        Fly(485, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 16:
                        Fly(515, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 17:
                        Fly(550, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 18:
                        Fly(570, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 160, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 19:
                        Fly(560, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 20:
                        Fly(560, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 21:
                        Fly(570, 60, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 22:
                        Fly(605, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(725, 50, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 23:
                        Fly(635, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 24:
                        Fly(665, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 25:
                        Fly(695, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 26:
                        Fly(725, 50, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(760, 160, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 27:
                        Fly(760, 60, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 28:
                        Fly(770, 95, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 29:
                        Fly(770, 125, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 30:
                        Fly(760, 160, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(880, 180, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 31:
                        Fly(780, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 32:
                        Fly(815, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 33:
                        Fly(845, 170, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;

                    case 34:
                        Fly(880, 180, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(890, 305, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;

                    case 35:
                        Fly(890, 215, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 36:
                        Fly(890, 245, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 37:
                        Fly(890, 275, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 38:
                        Fly(890, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(815, 380, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 39:
                        Fly(890, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 40:
                        Fly(880, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break
                    case 41:
                        Fly(845, 380, _this);
                        Collision(_this);
                        break;
                    case 42:
                        Fly(815, 380, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(770, 455, _this);
                            $(_this).one(transitionEvent, function () {
                                Collision(_this);
                            })
                        })
                        break;
                    case 43:
                        Fly(780, 370, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 44:
                        Fly(760, 390, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 45:
                        Fly(770, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 46:
                        Fly(770, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            fastFly(665, 500, _this);
                        })
                        break;
                    case 47:
                        Fly(760, 490, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 48:
                        Fly(725, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 49:
                        Fly(695, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 50:
                        Fly(665, 500, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break
                    case 51:
                        Fly(665, 455, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 52:
                        Fly(665, 425, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 53:
                        Fly(665, 395, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 54:
                        Fly(665, 365, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 55:
                        Fly(665, 335, _this);
                        $(_this).one(transitionEvent, function () {
                            Collision(_this);
                        })
                        break;
                    case 56:
                        Fly(665, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            _this.className += " opacity"
                        })
                        break;
                    case 57:
                        Fly(665, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 335, _this);
                        })
                        break;
                    case 58:
                        Fly(665, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 365, _this);
                        })
                        break;
                    case 59:
                        Fly(665, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 395, _this);
                        })
                        break;
                    case 60:
                        Fly(665, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 425, _this);
                        })
                        break;
                    case 61:
                        Fly(665, 305, _this);
                        $(_this).one(transitionEvent, function () {
                            Fly(665, 455, _this);
                        })
                        break;

                }
            }

    }
    if (steps > 56) {
        _this.step = _this.endStep - (second - (56 - _this.endStep) * 2);
        console.log(_this.step);
    }


    //plane.style.left = x + 'px';
    //plane.style.top = y + 'px';
}
var Direction = function (x, y,plane) {
   
    var cuclass = $(plane).attr("class");
    console.log(cuclass);
    if ((160 < y && y <= 180) && (450 <= x) && (x < 570)) {
        angle = 90;
    } else if ((430 < x && x <= 570) && (60 < y && y <= 160)) {
        angle = 0;
    } else if ((570 <= x) && (x < 760) && (50 <= y && y <= 60) && (cuclass !== "yellow" && x !== 665)) {
        angle = 90;
    } else if ((760 <= x && x < 780) && (60 <= y && y < 180)) {
        angle = 180; //14-18
    } else if ((780 <= x && x < 880) && (170 <= y && y <= 180)) {
        angle = 90; //18-21
    } else if ((880 <= x && x <= 890) && (180 <= y && y < 370) && (cuclass !== "blue" &&  y !== 275)) {
        angle = 180; //21-27
    } else if ((760 < x && x <= 880) && (370 <= y && y < 390)) {
        angle = 270; //27-31
    } else if ((760 <= x && x <= 770) && (390 <= y && y < 490)) {
        angle = 180; //31-34
    } else if ((570 < x && x <= 760) && (490 <= y && y <= 500) && (cuclass !== "green" && x !== 665)) {
        angle = 270; //34-40
    } else if ((550 <=x && x <= 570) && (370 <= y && y <= 490)) {
        angle = 360; //40-44
    } else if ((450 < x && x <= 550) && (380 <=y && y <= 400 && y != 275)) {
        angle = 270; //44-47
    } else if ((440 <= x && x <= 450) && (215 <= y && y < 380) && (cuclass!== "red" &&  y !== 275)) {
        angle = 360; //47-1;
    }
        //黄色终点方向
    else if (x == 665 && (50 <= y && y <= 245)){
        angle = 180;
    }
        //蓝色终点方向
    else if (y == 275 && (675 <= x && x <= 890)) {
        angle =270;
    }
        //红色终点方向
    else if (y == 275 && (440 <= x && x <= 635)) {
        angle = 450;
    }
        //绿色终点方向
    else if (x == 665 && (305 <= y && y <= 500)) {
        angle = 360;
    }
}
var endDirection = function () {
    switch (index) {

        case 0: {
            angle = 270;
        }
            break;
        case 1: {
            angle = 0;
        }
            break;
        case 2: {
            angle = 90;
        }
            break;
        case 3:
            {
                angle = 180;
            }
            break;
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
var Fly = function (x, y, plane) {

    //根据坐标转换方向
    console.log(plane.step);
    console.log(angle);
    if (plane.step <= 56 && plane.endStep <= 56) {
        Direction(x, y,plane);
    }


    else {

        endDirection();
    }

    console.log(angle);
    plane.style.webkitTransform = 'translate(' + (x + 'px') + ',' + (y + 'px') + ')' + 'rotate(' + angle + "deg" + ')';


}

//跳跃规则
var fastFly = function (x, y, plane) {
    //飞棋
    if (plane.step == 18) {
        plane.step = plane.step + 12;
    }
        //跳子
    else {
        plane.step = plane.step + 4;
    }

    Direction(x, y,plane);
    plane.style.transform = 'translate(' + (x + 'px') + ',' + (y + 'px') + ')' + 'rotate(' + angle + 'deg' + ')';
   
    //$(plane).animate({ left: x, top: y });

}
//撞机规则
var Collision = function (plane) {
    var _this=plane;
    //for (var i = 0; i < planeBox.length; i++) {
    //    for (var j = 0; j < planeBox.length-1; j++) {
    //        var backPlane1 = planeBox[i].children[j];
    //        var backPlane2 = planeBox[i].children[j + 1];
           
    //        var trans1 = backPlane1.style.transform.match(reg);
    //        var trans2 = backPlane2.style.transform.match(reg);
    //        var trans = _this.style.transform.match(reg);
            
            
    //        //如果有飞机与当前飞机位置重合，则被撞回基地
    //       if(trans1[0]==trans2[0]&&trans1[1]==trans2[1]&&_this.className!==backPlane1.className){
    //            if (trans[0] == trans2[0] && trans[1] == trans2[1]) {
                    
    //                switch (backPlane1.id) {

    //                    case "red1":
    //                        backPlane1.style.transform = 'translate(445px,55px) rotate( 90deg)';
    //                        break;
    //                    case "red2":
    //                        backPlane1.style.transform = 'translate(495px,55px) rotate(90deg)';

    //                        break;
    //                    case "red3":
    //                        backPlane1.style.transform = 'translate(445px,105px) rotate(90deg)';

    //                        break;
    //                    case "red4":
    //                        backPlane1.style.transform = 'translate(495px,105px) rotate(90deg)';

    //                        break;
    //                    case "yellow1":
    //                        backPlane1.style.transform = 'translate(835px,55px) rotate(180deg)';

    //                        break;
    //                    case "yellow2":
    //                        backPlane1.style.transform = 'translate(885px,55px) rotate(180deg)';

    //                        break;
    //                    case "yellow3":
    //                        backPlane1.style.transform = 'translate(835px,105px) rotate(180deg)';


    //                        break;
    //                    case "yellow4":
    //                        backPlane1.style.transform = 'translate(885px,105px) rotate(180deg)';

    //                        break;
    //                    case "blue1":
    //                        backPlane1.style.transform = 'translate(885px,445px) rotate(-90deg)';

    //                        break;
    //                    case "blue2":
    //                        backPlane1.style.transform = 'translate(835px,445px) rotate(-90deg)';

    //                        break;
    //                    case "blue3":
    //                        backPlane1.style.transform = 'translate(835px,495px) rotate(-90deg)';

    //                        break;
    //                    case "blue4":
    //                        backPlane1.style.transform = 'translate(885px,495px) rotate(-90deg)';

    //                        break;
    //                    case "green1":
    //                        backPlane1.style.transform = 'translate(445px,445px) rotate(0deg)';

    //                        break;
    //                    case "green2":
    //                        backPlane1.style.transform = 'translate(445px,495px) rotate(0deg)';

    //                        break;
    //                    case "green3":
    //                        backPlane1.style.transform = 'translate(495px,495px) rotate(0deg)';

    //                        break;
    //                    case "green4":
    //                        backPlane1.style.transform = 'translate(495px,445px) rotate(0deg)';

    //                        break;
    //                }
    //                switch (backPlane2.id) {

    //                    case "red1":
    //                        backPlane2.style.transform = 'translate(445px,55px) rotate( 90deg)';
    //                        break;
    //                    case "red2":
    //                        backPlane2.style.transform = 'translate(495px,55px) rotate(90deg)';

    //                        break;
    //                    case "red3":
    //                        backPlane2.style.transform = 'translate(445px,105px) rotate(90deg)';

    //                        break;
    //                    case "red4":
    //                        backPlane2.style.transform = 'translate(495px,105px) rotate(90deg)';

    //                        break;
    //                    case "yellow1":
    //                        backPlane2.style.transform = 'translate(835px,55px) rotate(180deg)';

    //                        break;
    //                    case "yellow2":
    //                        backPlane2.style.transform = 'translate(885px,55px) rotate(180deg)';

    //                        break;
    //                    case "yellow3":
    //                        backPlane2.style.transform = 'translate(835px,105px) rotate(180deg)';


    //                        break;
    //                    case "yellow4":
    //                        backPlane2.style.transform = 'translate(885px,105px) rotate(180deg)';

    //                        break;
    //                    case "blue1":
    //                        backPlane2.style.transform = 'translate(885px,445px) rotate(-90deg)';

    //                        break;
    //                    case "blue2":
    //                        backPlane2.style.transform = 'translate(835px,445px) rotate(-90deg)';

    //                        break;
    //                    case "blue3":
    //                        backPlane2.style.transform = 'translate(835px,495px) rotate(-90deg)';

    //                        break;
    //                    case "blue4":
    //                        backPlane2.style.transform = 'translate(885px,495px) rotate(-90deg)';

    //                        break;
    //                    case "green1":
    //                        backPlane2.style.transform = 'translate(445px,445px) rotate(0deg)';

    //                        break;
    //                    case "green2":
    //                        backPlane2.style.transform = 'translate(445px,495px) rotate(0deg)';

    //                        break;
    //                    case "green3":
    //                        backPlane2.style.transform = 'translate(495px,495px) rotate(0deg)';

    //                        break;
    //                    case "green4":
    //                        backPlane2.style.transform = 'translate(495px,445px) rotate(0deg)';

    //                        break;
    //                }
    //                switch (_this.id) {

    //                    case "red1":
    //                        _this.style.transform = 'translate(445px,55px) rotate( 90deg)';
    //                        break;
    //                    case "red2":
    //                        _this.style.transform = 'translate(495px,55px) rotate(90deg)';

    //                        break;
    //                    case "red3":
    //                        _this.style.transform = 'translate(445px,105px) rotate(90deg)';

    //                        break;
    //                    case "red4":
    //                        backPlane2.style.transform = 'translate(495px,105px) rotate(90deg)';

    //                        break;
    //                    case "yellow1":
    //                        _this.style.transform = 'translate(835px,55px) rotate(180deg)';

    //                        break;
    //                    case "yellow2":
    //                        _this.style.transform = 'translate(885px,55px) rotate(180deg)';

    //                        break;
    //                    case "yellow3":
    //                        backPlane2.style.transform = 'translate(835px,105px) rotate(180deg)';


    //                        break;
    //                    case "yellow4":
    //                        _this.style.transform = 'translate(885px,105px) rotate(180deg)';

    //                        break;
    //                    case "blue1":
    //                        _this.style.transform = 'translate(885px,445px) rotate(-90deg)';

    //                        break;
    //                    case "blue2":
    //                        _this.style.transform = 'translate(835px,445px) rotate(-90deg)';

    //                        break;
    //                    case "blue3":
    //                        _this.style.transform = 'translate(835px,495px) rotate(-90deg)';

    //                        break;
    //                    case "blue4":
    //                        _this.style.transform = 'translate(885px,495px) rotate(-90deg)';

    //                        break;
    //                    case "green1":
    //                        _this.style.transform = 'translate(445px,445px) rotate(0deg)';

    //                        break;
    //                    case "green2":
    //                        _this.style.transform = 'translate(445px,495px) rotate(0deg)';

    //                        break;
    //                    case "green3":
    //                        _this.style.transform = 'translate(495px,495px) rotate(0deg)';

    //                        break;
    //                    case "green4":
    //                        _this.style.transform = 'translate(495px,445px) rotate(0deg)';
    //                        break;
    //                }
    //                backPlane1.isReady = false;
    //                backPlane1.step = 0;
    //                backPlane2.isReady = false;
    //                backPlane2.step = 0;
    //                _this.isReady = false;
    //               _this.step = 0;

                    
    //            }
    //        }
          
    //    }
    //}
    for (var m = 0; m < planeBox.length; m++) {
        for (var n = 0; n < planeBox.length; n++) {
            var backPlane = planeBox[m].children[n];   
            var transo1= backPlane.style.transform.match(reg);           
            var transo = _this.style.transform.match(reg);


            //如果有飞机与当前飞机位置重合，则被撞回基地
            if (transo1[0] == transo[0] && transo1[1] == transo[1] && backPlane.className !== _this.className) {
                switch (backPlane.id) {

                    case "red1":
                        backPlane.style.transform = 'translate(445px,55px) rotate( 90deg)';
                        break;
                    case "red2":
                        backPlane.style.transform = 'translate(495px,55px) rotate(90deg)';

                        break;
                    case "red3":
                        backPlane.style.transform = 'translate(445px,105px) rotate(90deg)';

                        break;
                    case "red4":
                        backPlane.style.transform = 'translate(495px,105px) rotate(90deg)';

                        break;
                    case "yellow1":
                        backPlane.style.transform = 'translate(835px,55px) rotate(180deg)';

                        break;
                    case "yellow2":
                        backPlane.style.transform = 'translate(885px,55px) rotate(180deg)';

                        break;
                    case "yellow3":
                        backPlane.style.transform = 'translate(835px,105px) rotate(180deg)';


                        break;
                    case "yellow4":
                        backPlane.style.transform = 'translate(885px,105px) rotate(180deg)';

                        break;
                    case "blue1":
                        backPlane.style.transform = 'translate(885px,445px) rotate(-90deg)';

                        break;
                    case "blue2":
                        backPlane.style.transform = 'translate(835px,445px) rotate(-90deg)';

                        break;
                    case "blue3":
                        backPlane.style.transform = 'translate(835px,495px) rotate(-90deg)';

                        break;
                    case "blue4":
                        backPlane.style.transform = 'translate(885px,495px) rotate(-90deg)';

                        break;
                    case "green1":
                        backPlane.style.transform = 'translate(445px,445px) rotate(0deg)';

                        break;
                    case "green2":
                        backPlane.style.transform = 'translate(445px,495px) rotate(0deg)';

                        break;
                    case "green3":
                        backPlane.style.transform = 'translate(495px,495px) rotate(0deg)';

                        break;
                    case "green4":
                        backPlane.style.transform = 'translate(495px,445px) rotate(0deg)';

                        break;
                }
                backPlane.isReady = false;
                backPlane.step = 0;
            }

         

        }
    }
}
