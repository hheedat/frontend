function f(str){
    var res = str.match(/(([01]+?)[01]*?)\1+\2$/);
    return {
        src: str,
        tail: res[0],
        sub: res[1],
        len: res[0].length / res[1].length
    }
}
console.log(f('11111111101001001001001001'));
