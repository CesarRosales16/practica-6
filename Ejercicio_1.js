var ocurrencias = function (data, arr) {
    let cont=0;
    arr.forEach(element => {
        if(element==data) {
            cont++;
        }
    });
    return cont;
}