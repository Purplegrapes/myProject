var reds = document.getElementsByClassName('red');
var a = [];
var planeBox = document.getElementsByClassName("planeBox");
var isClicked = true;
var index = -1;
var nums = [];
var planes;
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
var SecondClick = function () {
    
}
var FirstClick=function(){
    nowIndex();
    console.log(number);
    
    console.log(index);
    if (index == -1) {
        colorChoose(0, 430, 160);
        isClicked = true;
        index--;
    }
    if (index == 0) {
        switch (number) {
            case 6: {
                colorChoose(0, 430, 160);
                isClicked = true;
                index--;
            }
                break
        }
    }
    if (index == 1) {
        switch (number) {
            case 6: {
                colorChoose(1, 780, 40);
                isClicked = true;
                index--;
            }

                break
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
    for (var i = 0; i < planes.length; i++) {              
            planes[i].addEventListener('click', function () {               
                
                if (isClicked){
                    this.isReady = true;          
                    console.log(this.isReady);
                    this.style.left = x + "px";
                    this.style.top = y + 'px';
                    isClicked = false;
                }
                
               
            });
        
        }

        //replanes[i].removeEventListener('click', startMove);

    }
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


function judgeStep(a){
   
    junge(a);
    var planes=planeBox[index].children;
    for(var i=0;i<4;i++){
        if(planes[i].isReady==true){
            secondStep(2);
        }
        else{
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
