var reds = document.getElementsByClassName('red');
var a = [];
var planeBox = document.getElementsByClassName("planeBox");

var isClicked = true;
var index = -1;
var nums = [];


function Parent() {
    this.isReady = false;   
    this.onWay = false;
}

$('.container').click(function () {
        change();
        judgeStep(0);
    });
var colorChoose = function (index, x, y) {
    var planes = planeBox[index].children;
     
    for (var i = 0; i < planes.length; i++) {
               
            planes[i].addEventListener('click', function () {               
                planes[i]= new Parent();
                if (isClicked&&planes[i].isReady==false){
                    this.isReady = true;          
                    console.log(this.isReady);
                    this.style.left = x + "px";
                    this.style.top = y + 'px';
                    isClicked = false;
                }
                else {
                    
                }
               
            });
        
        }

        //replanes[i].removeEventListener('click', startMove);

    }


function judgeStep(a){
   
    junge(a);
    var planes=planeBox[index].children;
    for(var i=0;i<4;i++){
        if(planes[i].isReady==true){
            secondStep();
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
    if (nums[a]==6&&index == 0) {
        colorChoose(0, 430, 160);
        isClicked = true;
    }
    else if (nums[a+1] == 6 && index == 1) {
        colorChoose(1, 780, 40);
        isClicked = true;
    }
    else if (nums[a + 2] == 6 && index == 2) {
        colorChoose(3, 900, 390);
        isClicked = true;

    }
    else if (nums[a + 3] == 6 && index == 3) {
        colorChoose(2, 550, 510);
        isClicked = true;
    }
    return index;
}



function redJudge(a,x,y) {
    if (nums[a] == 6) {

    }

}






var secondStep = function (a, step) {
   
        if (nums[a] == 6) {
            for (var j = 0; j < planes.length; j++) {
                if (planes[j].isReady == false) {
                    planes[i].addEventListener('click', redJudge(0));

                }
                else {
                    planes[i]
                }
            }
        }
    }
