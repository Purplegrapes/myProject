       
compare = function (x, y) {    
    var result = true;
    for (var p in y) {    //遍历y对象中的属性    
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {//如果y中有对象x中没有的属性，直接返回false
            return false;
        }
        if (y.hasOwnProperty(p) && x.hasOwnProperty(p)) {//如果对象y含有的属性x都有
            if (typeof (y[p]) =='object') {//对象y的属性是一个对象，进行递归深度遍历
                console.log(p + ':' + Object.keys(y[p]));
                console.log(p + ':' + Object.keys(x[p]));               
                if (!compare(x[p], y[p])) {
                    return false;
                }
            }
            else {               
                console.log(p + ':' + y[p]);
                console.log(p + ':' + x[p]);               
                isEqual(x[p], y[p]);               
            }
        }
    }
    function isEqual(a, b) {
        if (a != b) {//如果x y属性值不等直接返回false
            result = false;            
        }        
    }       
        return result;
};
//简单比较
const object1 = {
    id: 1,
    name: 'test',
    updatedAt: 'now'
};
const object1A = {
    name: 'test'
};
const object1B = {
    name: 'anotherTest'
};


//深度比较：
const object2 = {
    id: 1,
    name: 'test',
    product: {
        id: 1,
        name: 'product'
    },
    updatedAt: 'now'
};
const object2A = {
    name: 'test',
    product: {
        name: 'product'
    }
};
const object2B = {
    name: 'test',
    product: {
        name: 'anotherProduct'
    }
};
//比较 Array：
const array = [{
    id: 1,
    name: 'test',
    product: {
        id: 1,
        name: 'product'
    },
    updatedAt: 'now'
}];
const arrayA = [{
    name: 'test',
    product: {
        name: 'product'
    }
}];
const arrayB = [{
    name: 'test',
    product: {
        name: 'anotherProduct'
    }
}];
//Object 中嵌套 Array：
const  object3 = {
    id: 1,
    name: 'test',
    products: [{
        id: 1,
        name: 'product'
    }],
    updatedAt: 'now'
};
const object3A = {
    name: 'test',
    products: [{
        name: 'product'
    }]
};
const object3B = {
    name: 'test',
    products: [{
        name: 'anotherProduct'
    }]
};


      
        

