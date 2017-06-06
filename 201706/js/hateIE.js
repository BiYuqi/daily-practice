(function(window,document){
    var csstext = '*{\
                margin: 0;\
                padding:0;\
                /*box-sizing: border-box;\
                -ms-box-sizing: border-box;*/\
            }\
            body{\
                font-size: 14px;\
                font-family: "Microsoft Yahei";\
            }\
            .is-lower-ie{\
                width: 100%;\
                height: 100%;\
                position: fixed;\
                top: 0;\
                left:0;\
                z-index: 9996;\
            }\
            .is-lower-ie .corver{\
                width: 100%;\
                height: 100%;\
                position: fixed;\
                top: 0;\
                left:0;\
                background-color: #000;\
                opacity: 0.8;\
                filter: alpha(opacity=80);\
                z-index: 9997;\
            }\
            .ie-inner{\
                width: 600px;\
                height: 400px;\
                position: absolute;\
                top: 50%;\
                left: 50%;\
                margin-left: -320px;\
                margin-top: -260px;\
                padding: 40px;\
                background-color: #fff;\
                z-index: 9998;\
            }\
            .ie-inner h2{\
                text-align: center;\
                margin-top: 50px;\
                padding-bottom: 25px;\
                border-bottom: 1px solid #eee;\
            }\
            .ie-inner .ie-text{\
                height: 80px;\
                padding: 10px 25px;\
                line-height: 157%;\
                text-align: center;\
                color: #333;\
                font-size: 16px;\
                border-bottom: 1px solid #eee;\
            }\
            .download-brower{\
                text-align: center;\
                padding: 18px;\
                font-size: 14px;\
                color: #999;\
            }\
            .download-brower .pic{\
                text-align: center;\
                height: 90px;\
                padding-top: 30px;\
            }\
            .download-brower .pic a{\
                width: 56px;\
                height: 56px;\
                display: inline-block;\
                margin: 0 15px;\
                text-decoration: none;\
            }\
            .download-brower .pic img{\
                width: 100%;\
                height: 100%;\
                display: block;\
                border: none;\
            }\
            .download-brower .pic span{\
                color: #999;\
            }';
    var strhtml = '<div class="is-lower-ie">\
        <div class="corver"></div>\
        <div class="ie-inner">\
            <h2>抱歉，您的浏览器太落后了</h2>\
            <div class="ie-text">\
                本网站采用国际标准的网页技术创建;而您的浏览器版本太低,已经无法正常显示本网站的内容.\
            </div>\
            <div class="download-brower">\
                <p>请升级到以下任何一种新款浏览器,以获得正常的浏览体验:</p>\
                <div class="pic">\
                    <a href="http://xiazai.sogou.com/detail/34/0/6262355089742005676.html" target="_blank">\
                        <img src="http://oiukswkar.bkt.clouddn.com/chrome.png" alt="">\
                        <span>谷歌</span>\
                    </a>\
                    <a href="http://xiazai.sogou.com/detail/34/8/7523416857584765116.html" target="_blank">\
                        <img src="http://oiukswkar.bkt.clouddn.com/foxfire.png" alt="">\
                        <span>火狐</span>\
                    </a>\
                    <a href="http://xiazai.sogou.com/detail/34/8/-3726774318030095000.html?uID=A2BB5BDE4750900A0000000058C25D9A&w=2111" target="_blank">\
                        <img src="http://oiukswkar.bkt.clouddn.com/qq.png" alt="">\
                        <span>QQ</span>\
                    </a>\
                </div>\
            </div>\
        </div>\
    </div>';
    function inert(s){
        var p = document.createElement("div");
        p.id = 'super-modal-wrap';
        p.innerHTML = s;
        document.body.appendChild(p);
    }
    function setCss(cssCode){
        var style = document.createElement('style');
            style.type = 'text/css';
        if(style.styleSheet){
            style.styleSheet.cssText = cssCode;
        }else{
            style.innerHTML = cssCode;
        }
        document.getElementsByTagName("head")[0].appendChild(style);
    }
    function isLowerIE(){
        var UA = window.navigator.userAgent.toLowerCase();
        var isFlag = false;
        var isIE6 = UA.indexOf('msie 6.0') > 0;
        var isIE7 = UA.indexOf('msie 7.0') > 0;
        if(isIE6 || isIE7){
            isFlag = true;
        }
        return isFlag;
    }
    if(isLowerIE()){
        setCss(csstext);
        inert(strhtml)
    }


})(window,document)
