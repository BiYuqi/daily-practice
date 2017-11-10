(function(){
    //应用外部模板 外部模板先注释
    // var data = {
    //     Admin:true,
    //     list:[
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
    //         {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"}
    //     ],
    // }
    // var html = template('tpl',data);
    // document.querySelector('.list').innerHTML = html;

    //引用内置模板
    var $str = `
        {{if Admin}}
            {{each list as value index}}
                <div class="items">
                    <a href="https://www.baidu.com/s?wd={{value.keyword}}&rsv_spt=1&rsv_iqid=0xc5c1f25b0000fd30&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=13&rsv_sug1=10&rsv_sug7=100&rsv_sug2=0&inputT=2505&rsv_sug4=8672" class="filgure">
                        <img src="{{value.imgSrc}}" alt="">
                    </a>
                    <div class="it-text">
                        <p>{{value.text}}</p>
                    </div>
                </div>
            {{/each}}
        {{/if}}
    `;
    var data = {
        Admin:true,
        list:[
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"},
            {"imgSrc":"https://placeimg.com/350/350/people/grayscale","text":"封锁地方搜附近就删掉飞机死哦打飞机死哦地方","keyword":"特种兵"}
        ],
    }
    //渲染方式不一样
    var render = template.compile($str);
    var html = render(data);
    document.querySelector('.list').innerHTML = html;
})()
