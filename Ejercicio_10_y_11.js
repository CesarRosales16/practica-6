var objectsArr = [];

var objectCreator = function (nombre,apellido,fecha,telefono,email) {
    return {
        Nombre:nombre,
        Apellido:apellido,
        Fecha:fecha,
        Telefono:telefono,
        Email:email,
    };
}

var arrayOfObj = function (nombre,apellido,fecha,telefono,email) {
    objectsArr.push(objectCreator(nombre,apellido,fecha,telefono,email));
    return objectsArr; 
}