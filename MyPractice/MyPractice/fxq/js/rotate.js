﻿var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var arr = $('.canvas');
var number;
var width = 50;
one.width = width;
two.width = width;
three.width = width;
four.width = width;
five.width = width;
six.width = width;
one.height = width;
two.height = width;
three.height = width;
four.height = width;
five.height = width;
six.height = width;
var height = one.height;
//1点
ctx1 = one.getContext('2d');
ctx1.beginPath();
ctx1.arc(width / 2, width / 2, width / 10, 0, 2 * Math.PI, false);
ctx1.fillStyle = "#fff";
ctx1.fill();
//2点
ctx2 = two.getContext('2d');
ctx2.arc(width / 4, width / 2, width / 10, 0, 2 * Math.PI, false);
ctx2.arc(width * 3 / 4, width / 2, width / 10, 0, 2 * Math.PI, false);
ctx2.fillStyle = "#fff";
ctx2.fill();
//3点
ctx3 = three.getContext('2d');
ctx3.beginPath();
ctx3.arc(width / 2, width / 5, width / 10, 0, 2 * Math.PI, false);
ctx3.arc(width / 2, width / 2, width / 10, 0, 2 * Math.PI, false);
ctx3.arc(width / 2, width * 4 / 5, width / 10, 0, 2 * Math.PI, false);
ctx3.fillStyle = "#fff";
ctx3.fill();
//4点
ctx4 = four.getContext('2d');
ctx4.beginPath();
ctx4.arc(width / 4, width / 4, width / 10, 0, 2 * Math.PI, false);
ctx4.arc(width * 3 / 4, width / 4, width / 10, 0, 2 * Math.PI, false);
ctx4.closePath();
ctx4.arc(width / 4, width * 3 / 4, width / 10, 0, 2 * Math.PI, false);
ctx4.closePath();
ctx4.arc(width * 3 / 4, width * 3 / 4, width / 10, 0, 2 * Math.PI, false);
ctx4.fillStyle = "#fff";
ctx4.fill();
//5点
ctx5 = five.getContext('2d');
ctx5.beginPath();
ctx5.arc(width / 4, width / 4, width / 10, 0, 2 * Math.PI, false);
ctx5.arc(width * 3 / 4, width / 4, width / 10, 0, 2 * Math.PI, false);
ctx5.closePath();
ctx5.arc(width / 4, width * 3 / 4, width / 10, 0, 2 * Math.PI, false);
ctx5.closePath();
ctx5.arc(width * 3 / 4, width * 3 / 4, width / 10, 0, 2 * Math.PI, false);
ctx5.arc(width / 2, width / 2, width / 10, 0, 2 * Math.PI, false);
ctx5.fillStyle = "#fff";
ctx5.fill();
//6点
ctx6 = six.getContext('2d');
ctx6.beginPath();
ctx6.arc(width / 4, width / 5, width / 10, 0, 2 * Math.PI, false);
ctx6.arc(width * 3 / 4, width / 5, width / 10, 0, 2 * Math.PI, false);
ctx6.closePath();
ctx6.arc(width / 4, width / 2, width / 10, 0, 2 * Math.PI, false);
ctx6.closePath();
ctx6.arc(width * 3 / 4, width / 2, width / 10, 0, 2 * Math.PI, false);
ctx6.closePath();
ctx6.arc(width / 4, width * 4 / 5, width / 10, 0, 2 * Math.PI, false);
ctx6.closePath();
ctx6.arc(width * 3 / 4, width * 4 / 5, width / 10, 0, 2 * Math.PI, false);
ctx6.fillStyle = "#fff";
ctx6.fill();
var a=0;
function change() {
    $('.container').addClass('animate');
    //console.log($('.container').hasClass('animate'))
    
    for (var i = 0; i < arr.length; i++) {
        var random = Math.floor(Math.random() * arr.length);
        var temp = arr[random];
        arr[random] = arr[i];
        arr[i] = temp;
    }
    $('.container').html(arr);
    //if (a == 0) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 1) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 2) {
    //    number = 4;
    //    a++;
    //}
    //else if (a == 3) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 4) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 5) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 6) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 7) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 8) {
    //    number = 6;
    //    a++;

    //}
    //else if (a == 9) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 10) {
    //    number = 6;
    //    a++;
    //}
    //else if (a == 11) {
    //    number = 5;
    //    a++;
    //}



    
        number = parseInt(arr[1].getAttribute("data-num"));
    
    
    
    $('.container').get(0).addEventListener("animationend", function () {
        $('.container').removeClass('animate');
    })
    
}