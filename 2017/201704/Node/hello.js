// exports.world = function(){
//     console.log("测试是否通过")
// }

function Hello(){
    var name;
    this.setName = function(n){
        name = n;
    };
    this.getName = function(){
        console.log("Hello" + name);
    }
}

module.exports = Hello;
