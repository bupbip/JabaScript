function factorial(num, callBackFunction) {
    
    var result;  
       
    if (typeof(factorial.count) != 'number') {
        factorial.count = 0;
    }
    
    factorial.count++;

    if ((num == undefined) && (typeof(this.value) == 'number')) {
        num = this.value;
    }
    
    /* if (typeof(num) == 'number'){
        num = BigInt(num);
    } */
    
    // помещаем данные в кэш.
    if (typeof(factorial.resultList) != 'object') {
        factorial.resultList = {};
    }
    
    if ((typeof num != 'number') || (typeof(this.value) != 'bigint') || (num < 0) || (num > Number.MAX_SAFE_INTEGER) || (Math.floor(num) != num)) {
        result = undefined;
    }
    
    if (num == 0) {
        return 1;
    } 
    
    result = 1;
     
    var cash;
    var cashWasUsed = false;
    var cashInd;
      
    for (var i = num; i > 0; i--) {
        if (typeof factorial.resultList[i] == 'number') {
            console.log('в кэше найден факториал для ' + i);
            cash = factorial.resultList[i];
            cashInd = i;
            cashWasUsed = true;
            break;
        }
    }

    if (cashWasUsed) {
        result = cash;
        for (var i = cashInd + 1; i <= num; i++) {
            result *= i;
        }
    } else {
        result = 1;
        for (var i = 1; i <= num; i++) {
            result *= i;
        }
    }
    
    factorial.resultList[num] = result;
    
    if (this.constructor == factorial) {
        this.value = num;
        this.factorial = result;
    } else {
        factorial.resultList[num] = result;
        console.log('поместили данные в кэш:', num, result, factorial.resultList);
        if (typeof(factorial.callBackFunction) == 'function') {
            //return undefined;
            callBackFunction(result);
        } else {
            //console.log('результат: ', result);
            callBackFunction(result);
            return result;
        }
    }
}

function CL(value, ...valueRest) {  // оператор rest
    console.log(value, ...valueRest);  // оператор spread
}

function rand(f, c) {
    
    if ((typeof f != 'number') || (f < 0) || (f > Number.MAX_SAFE_INTEGER) || 
        (Math.floor(f) != f) || (typeof c != 'number') || (c < 0) || 
        (c > Number.MAX_SAFE_INTEGER) || (Math.floor(c) != c)) {
        return undefined;
    } else if (f > c) {
        return undefined;
    } else if (f == c) {
        return f;
    } else {
        return Math.floor(Math.random() * (f - c)) + c;
    }   
}

// Array.prototype - при вызове через консоль покажет все методы аррея

/* function Str(value) {
    
}
Str.prototype = new String(); */

function a(s, ...valueRest) {
    alert(s, ...valueRest);
    return s;
}

function b(s, isClear = false) {
    var body = document.getElementsByTagName('body')[0];
    if (isClear) {
        body.innerHTML = '';
    }
    body.innerHTML += s;
    return s;
}

function c(s, ...valueRest) {
    console.log(s, ...valueRest);
    return s;
}


var _magicString = new String();

/*var f = function() { 
    var ind = r(0, this.stringList.length - 1);
    return this.stringList[ind]; 
};
_magicString.valueOf = f;
_magicString.toString = f; */

_magicString.valueOf = function() { 
    var ind = rand(0, this.getStringList().length);
    return this.getStringList()[ind]; 
};
_magicString.toString = _magicString.valueOf;

function MagicString(stringList) {
    var id = Symbol('stringList'); 
    this[id] = stringList;  //обращаться к свойствам можно не только через точку, но и через [].
    this.getStringList = function() { return this[id]; }
    // this.stringList = stringList;
}

MagicString.prototype = _magicString;
_magicString.constructor = MagicString;
_magicString.__proto__ = String;


var _magicPhrase = new Object();

_magicPhrase.valueOf = function() { 
    var result = new String;
    for (var x of this.strList) {
        var ind = rand(0, x.length);
        result += x[ind];
    }
    return result; 
};
_magicPhrase.toString = _magicPhrase.valueOf;

function MagicPhrase(strList) {
    this.strList = strList;
}

MagicPhrase.prototype = _magicPhrase;
_magicPhrase.constructor = MagicPhrase;
_magicPhrase.__proto__ = Object;


/* function randStr() {
    var s = new Str (
        'hello',
        'hi',
        'heyyy',
        'yo'
    );
    len = s.length;
    var i = Math.round(len * Math.random()) % 10;
    c(i);
    return s[i];
} */

/* function Str(...str) {
    this.str = str;
}

var _str = {
    randStr: function() {
        return this.str[Math.round((this.str.length - 1) * Math.random()) % 10];
    },
};

Str.prototype = _str;
_str.constructor = Str;
_str.__proto__ = String;

var s = new Str(
    'hello',
    'hi',
    'heyyy',
    'yo'
); 

*/