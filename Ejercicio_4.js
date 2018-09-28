var firstLastSum = function (arr) {
    arrAux = [];
    while (arr.length > 2) {
        arrAux.push(arr.pop()+arr.shift());
    }
    if(arr.length==2) {
        arrAux.push(arr.pop()+arr.shift());
    }
    else {
        arrAux.push(arr.pop()*2);
    }
    return arrAux;
}