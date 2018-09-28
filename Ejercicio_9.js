var adivinador = function () {
    let arr = [];
    let num;
    for(let i=0;i<20;i++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    console.log(arr);
    while(true){
        num = Number(prompt("Ingrese el número a adivinar: "));
        if(arr.includes(num)) {
            break;
        }
    }
    console.log("Ganaste");
}