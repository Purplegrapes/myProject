(function () {
    var WIDTH = 42;
    var HEIGHT = 42;
    var sText = document.getElementById("sText");
    var btn = document.getElementById("btn");
    var controller = (function () {
        function mkMaze(container, config) {
            var x = config.x;
            var y = config.y;
            var i, j;
            var el = document.createDocumentFragment();//创建文档碎片
            
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
            container.style.width = config.x * HEIGHT + config.x - 1 + 'px'; 
            container.style.heigth = config.y * WIDTH + config.y - 1 + 'px';
            container.appendChild(el);
            return _mkAction(container, config);
        }
        function _createDiv(obj) {
            var oDiv = document.createElement('div');
            oDiv.className = 'maze-block';
            if (obj.i === 0 && obj.j !== 0) {
                oDiv.style.clear = "both";
            }
            if (obj.j === obj.y - 1) {
                oDiv.className += " bottom-maze-block";
            }
            if (obj.i === obj.x - 1) {
                oDiv.className += " right-maze-block";
            }
            return oDiv;

        }
        function _mkAction(container, obj) {
            var ox = Math.floor(Math.random() * obj.x + 0);
            var oy = Math.floor(Math.random() * obj.y + 0);
            var action = _createAction(ox, oy);
            container.appendChild(action);
            return {
                x: ox,
                y: oy,
                action: action,
                turn: 0,
                rotate: 0

            }
        }
        function _createAction(ox, oy) {
            var oAction = document.createElement('div');
            oAction.className = "Action";
            oAction.style.position = "absolute";
            oAction.style.left = ox * (WIDTH + 1) + 'px';
            oAction.style.top = oy * (HEIGHT + 1) + 'px';
            return oAction;
        }
        var controller = (function () {
            var pos = mkMaze(document
                .getElementById('container'), {
                    x: 10,
                    y: 10,
                });
            function move() {
                var turn = pos.turn;
                if (turn === 0) {
                    pos.y > 0 && pos.y--;
                } else if (turn === 1) {
                    pos.x < 9 && pos.x++;
                } else if (turn === 2) {
                    pos.y < 9 && pos.y++;
                } else if (turn === 3) {
                    pos.x > 0 && pos.x--;
                }
                pos.action.style.left = pos.x * (WIDTH + 1) + 'px';
                pos.action.style.top = pos.y * (HEIGHT + 1) + 'px';
            }
            function turn(type) {
                if (type === 1) {
                    pos.rotate -= 90;
                } else if (type === 2) {
                    pos.rotate += 90;
                } else if (type === 3) {
                    pos.rotate += 180;
                }
                if (pos.rotate >= 360) {
                    pos.rotate -= 360;
                }
                if (pos.rotate <= -360) {
                    pos.rotate += 360;
                }
                if (pos.rotate >= 0) {
                    pos.turn = pos.rotate / 90;
                } else {
                    pos.turn = 4 + pos.rotate / 90;
                }
                pos.action.style.transform = 'rotate(' + pos.rotate + 'deg)';
            }
            return {
                move: move,
                turn: turn
            };
        }());
        return controller;
        }());

    btn.addEventListener('click', function () {
        var text = sText.value;
        if (text === "GO") {
            controller.move();
        } else if (text === "TUN LEF") {
            controller.turn(1);
        } else if (text === "TUN RIG") {
            controller.turn(2);
        } else if (text === "TUN BAC") {
            controller.turn(3);
        }
    })

}())