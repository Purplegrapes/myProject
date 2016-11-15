var reds = document.getElementsByClassName('red');
var a = [];
var planeBox = document.getElementsByClassName("planeBox");
var isClicked = true;
var index = -1;
var nums = [];
var planes;
var first;
var second;
var _this;
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
    var redplane = _this;
   
}
var yellowClick = function () {
    var yellowplane = _this;
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
    //nums = nums.length - 1> 0 ? nums.splice(-1, nums.length - 1) : nums;    
    first = nums[nums.length - 2] ? nums[nums.length - 2] : number;
    console.log(first);
    second = nums[nums.length - 2] ? nums[nums.length - 1] : null;
    if (index == 0) {      
        if (number == 6) {
            console.log(second);
            colorChoose(0, 430, 160);
            //redSecond(index);
            index--;
        }
        
    }
    if (index == 1) {
        
        if(number==6){
         colorChoose(1, 780, 40);
                isClicked = true;
                index--;
                console.log(second);
                yellowClick();
            }

                
    }

    if (index == 2) {
        switch (number) {
            case 6: {
                colorChoose(3, 900, 390);
                isClicked = true;
                index--;
            }

                break
        }
    }
    if (index == 3) {
        switch (number) {
            case 6: {
                colorChoose(4, 550, 510);
                isClicked = true;
                index--;
            }
                break
        }
    }

}
//判断红色第二步
var redSecond = function (index) {
    var planes = planeBox[index].children;
    for (var i = 0; i < planes.length; i++) {
        if(planes[i].isReady==true){
            planes[i].addEventListener('click', function () {
                switch (second) {
                    case 1: {
                        this.style.left = 450 + "px";
                        this.style.top = 180 + 'px';
                        isClicked = false;
                      
                        index++;

                    }
                        break;
                    case 2: {
                        this.style.left = 485+ "px";
                        this.style.top = 170+ 'px';
                        isClicked = false;
                        
                        index++;
                    }
                        break;
                    case 3: {
                        this.style.left = 515 + "px";
                        this.style.top = 170+ 'px';
                        isClicked = false;
                        index++;
                    }
                        break;
                    case 4: {
                        this.style.left = 550+ "px";
                        this.style.top = 180 + 'px';
                        isClicked = false;
                       
                        index++;
                    }
                        break;
                    case 5: {
                        this.style.left = 570+ "px";
                        this.style.top = 160 + 'px';
                        isClicked = false;
                     
                        index++;
                    }
                        break;
                    case 6: {
                        if (this.isReady == true) {
                            this.style.left = 560 + "px";
                            this.style.top = 125 + 'px';
                            isClicked = false;

                        }
                        else {
                            this.style.left = 430 + "px";
                            this.style.top =160 + 'px';
                            isClicked = false;
                        }
                       
                     



                    }
                        break;
                }
        })
        

           
       
        
    }
    console.log(index)
    
    }
}
var nowIndex = function () {
    nums.push(number);
    console.log(nums);

    index++;
    if (index == 4) {
        index = 0;
    }
    return index;
};

var colorChoose = function (index, x, y) {
    var planes = planeBox[index].children;
    for (var i = 0; i < planes.length; i++) 
       
        planes[i].addEventListener('click', function (e) {
            if(this.isReady==false){
                _this = this;
                var idName = e.target.id;               
                this.isReady = true;
                console.log(this.isReady);
                this.style.left = x + "px";
                this.style.top = y + 'px';
                isClicked = false;
            }
               
            })
            }
 
   
    //replanes[i].removeEventListener('click', startMove);


//var colorChooseFly = function (index, x, y) {
//    var flyplanes = planeBox[index].children;
//    for (var i = 0; i < flyplanes.length; i++) {
//        flyplanes[i].addEventListener('click', function () {

//            if (isClicked && flyplanes[i].isReady == true) {

//                console.log(this.isReady);
//                this.style.left = x + "px";
//                this.style.top = y + 'px';
//                isClicked = false;
//            }          

//        });

//    }

//    //replanes[i].removeEventListener('click', startMove);

//}


function judgeStep(a) {

    junge(a);
    var planes = planeBox[index].children;
    for (var i = 0; i < 4; i++) {
        if (planes[i].isReady == true) {
            secondStep(2);
        }
        else {
            firstStep();
        }
    }
}
var firstStep = function () {
    if (nums[0] == 6) {
        console.log(index);
        colorChoose(index + 1, 430, 160);
        junge(1);
    }
    else {
        junge(0);
    }
}
function junge(a) {
    if (nums[a] !== 6) {
        index++;
        if (index == 4) {
            index = 0;
        }
    }
    console.log(index);
    if (index == 0) {
        colorChoose(0, 430, 160);
        isClicked = true;
    }
    else if (index == 1) {
        colorChoose(1, 780, 40);
        isClicked = true;
    }
    else if (index == 2) {
        colorChoose(3, 900, 390);
        isClicked = true;

    }
    else if (index == 3) {
        colorChoose(2, 550, 510);
        isClicked = true;
    }
    return index;
}



//function redJudge(a,x,y) {
//    if (nums[a] == 6) {

//    }

//}






//var secondStep = function (a) {

//    if (nums[a] == 6) {
//        console.log(index);
//        colorChooseFly(index + 1, 830, 160);
//        junge(a);
//    }
//    else {
//        junge(0);
//    }
//}
