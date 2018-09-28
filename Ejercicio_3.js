var dataTypes = function (arr) {
    let num = 0;
    let bool = 0;
    let cad = 0;
    let typeArr = [];
    arr.forEach(element => {
        console.log(typeof (element));
        switch (typeof (element)) {
            case "string":
                typeArr.push(typeof (element));
                cad++;
                break;
            case "number":
                typeArr.push(typeof (element));
                num++;
                break;
            case "boolean":
                typeArr.push(typeof (element));
                bool++;
                break;
        }
    });
    console.log('Numeros: ' + num);
    console.log('String: ' + cad);
    console.log('Boolean: ' + bool);
    return typeArr;
}