var sumProm = function (arr) {
    let suma = 0;
    arr.forEach(element => {
        suma += element;
    });
    console.log("La suma de los elementos del arreglo es: " + suma);
    if (arr.length != 0) {
        console.log("\nEl promedio es: " + suma / arr.length);
    }
    else {
        console.log("\nEl promedio es: 0");
    }
}