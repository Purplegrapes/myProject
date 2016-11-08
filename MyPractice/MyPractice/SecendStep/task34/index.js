(function () {
    var WIDTH = 42;
    var HEIGHT = 42;
    var sText = document.getElementById("sText");
    var btn = document.getElementById("btn");
    var refresh = document.getElementById("refresh");
    var rowList = document.getElementById('show-row');
    var controller = (function () {
        function mkMaze(container, config) {
            var x = config.x;
            var y = config.y;
            var i, j;
           
            var el = document.createDocumentFragment();
            for (j = 0; j < y; j++) {
                for (i = 0; i < x; i++) {
                    el.appendChild(_createDiv({
                        x: x,
                        y: y,
                        i: i,
                        j: j
                    }));
                }
            }
            container.style.width = x * WIDTH +x - 1 + 'px';
            container.appendChild(el);
            return _mkAction(container, config);
            
        }
        function _createDiv(obj) {
            var oDiv = document.createElement("div");
            oDiv.className= "maze-block";
            if (obj.i == obj.x - 1) {
                oDiv.className += " right-maze-block";
               
            } else if (obj.j == obj.y - 1) {
                oDiv.className += " bottom-maze-block";
            }
            return oDiv;

        }
        function _mkAction(container,obj) {
            var ox = Math.floor(Math.random() * obj.x);
            var oy = Math.floor(Math.random() * obj.y);
            var action = _createAction(ox, oy);
            container.appendChild(action);
            return {
                x:ox,
                y:oy,
                action,
                turn: 0,
                rotate: 0,

            }
        }
        function _createAction(ox, oy) {
            var oAction = document.createElement("div");
            oAction.className = "Action";
            oAction.style.position = "absolute";
            oAction.style.top = oy * (HEIGHT + 1) + 'px';
            oAction.style.left = ox * (WIDTH + 1) + 'px';
            return oAction;

        }
        return (function () {
            var pos = mkMaze(document.getElementById("container"), {
                x: 10,
                y: 10
            });
            function move(force,num) {
                var turn = force || pos.turn;
                if (turn == 0) {
                    pos.y >0 && pos.y--;
                } else if (turn ==1) {
                    pos.x < 9 && pos.x++;
                } else if (turn == 2) {
                    pos.y < 9 && pos.y++;
                }
                else if (turn == 3) {
                    pos.x >0 && pos.x--;
                }
                pos.action.style.top = pos.y * (WIDTH + 1) + 'px';
                pos.action.style.left = pos.x * (HEIGHT + 1) + 'px';
                
            }
            function turn(type, rotate) {
                if (rotate === undefined) {
                    if (type == 1) {
                        pos.rotate -=90;
                    } else if (type == 2) {
                        pos.rotate += 90;
                    } else if (type == 3) {
                        pos.rotate += 180;
                    }
                    if (pos.rotate >= 360) {
                        pos.rotate -= 360;
                    }
                    if (pos.rotate <= -360) {
                        pos.rotate += 360;
                    }
                    
                } else {
                    pos.rotate = rotate;
                }
                if (pos.rotate >= 0) {
                    turn = pos.rotate / 90;
                } else {
                    turn = 4 + pos.rotate / 90;
                }
                pos.action.style.transform = 'rotate(' + pos.rotate + 'deg)';
            }
            return {
                move: move,
                turn: turn
            };
        }())

    }());
    var handler = {
        'GO': function () {
            controller.move();
        },
        'TUN LEF':function(){
            controller.turn(1);
        },
        'TUN RIG':function(){
            controller.turn(2);
        },
        'TUN BAC': function () {
            controller.turn(3);
        },
        'TRA LEF': function () {
            controller.move(3);
        },
        'TRA RIG': function () {
            controller.move(1);
        },
        'TRA TOP': function () {
            controller.move(0);
        },
        'TRA BOT': function () {
            controller.move(2);
        },
        'MOV LEF': function () {
            controller.turn(null,270);
            controller.move(3);
            
        },
        'MOV RIG': function () {
            controller.turn(null, 90);
            controller.move(1);
        },
        'MOV TOP': function () {
            controller.turn(null, 0);
            controller.move(0);
        },
        'MOV BOT': function () {
            controller.turn(null, 180);
            controller.move(2);
        }
    }
    var handTextArea = (function () {
        var matchEnterExp = /\r|\n/g;
        var matchConsoleExp = /\n/g;
        var row = 0;
        function _addRow(enterNum) {
            if (row !== enterNum) {
                var el;
                var temp = document.createDocumentFragment();
                rowList.innerHTML = '';
                for (var i = 0; i <=enterNum; i++) {
                    el = document.createElement("div");
                    el.className = "row-el";
                    el.innerHTML = i;
                    temp.appendChild(el);
                }
                rowList.appendChild(temp);
                row = enterNum;
            }
        }
        return {
            matchEnter: function () {
                var value = sText.value;
                var enterNum = value.match(matchEnterExp) && value.match(matchConsoleExp).length;
                _addRow(enterNum);
            },
            matchConsole: function () {
                var value = sText.value;
                var consoleArr = value.split(matchConsoleExp);
                console.log(consoleArr);
                return consoleArr;
            },
            
        }
    })

    btn.addEventListener('click', function () {
        var text = sText.value;
        text = text.replace(/^\s+|\s+$/g, '').toUpperCase();
        handler[text] && handler[text]();
    });
    refresh.addEventListener('click', function () {
        sText.value='';

    })
    
}())