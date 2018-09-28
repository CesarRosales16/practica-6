var arrayOfType = function (arr,type) {
    let arrAux=[];
    arr.forEach(element => {
        if(typeof(element)==type) {
            arrAux.push(element);
        }
    });
    return arrAux;
}