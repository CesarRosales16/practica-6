var encryption = function (str) {
    let clave = ['m', 'u', 'r', 'c', 'i', 'e', 'l', 'a', 'g', 'o'];
    let cryptoWord = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < clave.length; j++) {
            if (str[i] == clave[j]) {
                cryptoWord += j;
            }
        }
        if (cryptoWord.length <= i) {
            cryptoWord += str[i];
        }
        console.log(str[i]);
    }
    return cryptoWord;
}