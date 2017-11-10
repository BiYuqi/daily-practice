import '../css/index.css';

function comp (){
    var elem = document.createElement('div');
    elem.innerHTML = '测试';
    return elem;
}


document.body.appendChild(comp())
