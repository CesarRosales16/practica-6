var incerteza = function (arr) {
    let sum = 0;
    let squared = 0;
    let prom = 0;
    let incerteza = 0;
    arr.forEach(element => {
        sum += element;
    });
    prom = sum / arr.length;
    arr.forEach(element => {
        squared += (element - prom) ** (2);
    });
    incerteza = ((1/(arr.length-1))*squared)**(1/2);
    console.log("Promedio: "+prom+"\nIncerteza: "+incerteza);
}