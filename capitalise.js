class Capitalise {
    firstletter(string){
        const str = string.charAt(0).toUpperCase() + string.slice(1);
        return str;
    }
}
module.exports = Capitalise;