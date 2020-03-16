class CheckTypes {
    isNan(variable) {
        return Number.isNaN(variable);
    }

    isNum(variable) {
        return typeof(variable) === 'number';
    }

    isString(variable) {
        return typeof(variable) === 'string';
    }

    isBoolean(variable) {
        return typeof(variable) === 'boolean';
    }

    isObject(variable) {
        return typeof(variable) === 'object';
    }

    isUndefined(variable) {
        return typeof(variable) === 'undefined';
    }

    isNull(variable) {
        return variable === null;
    }

    isSymbol(variable) {
        return typeof(variable) === 'symbol';
    }


    strToArr(str, limit) {
        return str.split(limit);
    } 

    arrToStr(arr, limit = '') {
        return arr.join(limit);
    }
    
    strToNum(str) {
        return +str;
    }

    numToStr(num) {
        return `${num}`;
    }
}

const _ = new CheckTypes();

