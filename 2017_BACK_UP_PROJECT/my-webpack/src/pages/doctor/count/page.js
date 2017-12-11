import { getRandom } from '../../../public-resource/libs/util.js'
(function(){
    console.log(getRandom())
    let [a, b, c] = new Set(["a", "b", "c"]);
    // console.log(a); // a
    // console.log(b); // b
    // console.log(c); // c
    console.log('1111111')
    function* fibs() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    };
    var [first, second, third, fourth, fifth, sixth] = fibs();
    console.log(first); // 5
})()
