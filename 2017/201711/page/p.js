function PageAlgorithm(pageNo,count,showNum){
            var data="";
            if(pageNo==1){
                data='{"algorithm":[{"text":"上一页","num":0,"status":"disabled"}';
            }else{
                data='{"algorithm":[{"text":"上一页","num":"'+(pageNo-1)+'","status":"abled"}';
            }
            //判断分页类型
            if(count>showNum){
                if(pageNo<=showNum+2){
                    //判断pageNo是否在要初始化显示的页码内
                    if(pageNo<=showNum){
                        for(var i=1;i<=showNum;i++){
                            if(pageNo==i){
                                data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';

                            }else{
                                data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
                            }
                        }
                        if(pageNo==showNum){
                            data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
                        }
                    }else{
                        for(var i=1;i<=pageNo;i++){
                            if(i==pageNo){
                                data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
                            }else{
                                data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
                            }
                        }
                        if(pageNo!=count){
                            data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
                        }
                    }
                    //选中最后一页时，将省略号隐藏
                    if(pageNo!=count){
                        if(pageNo!=(count-1)){
                            data+=',{"text":"…","num":"more","status":""}';
                        }
                    }
                }else if(pageNo>count-showNum){
                    data+=',{"text":"1","num":"1","status":"abled"}';
                    data+=',{"text":"2","num":"2","status":"abled"}';
                    data+=',{"text":"…","num":"more","status":"disabled"}';
                    for(var i=count-showNum+1;i<=count;i++){
                        if(pageNo==i){
                            data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
                        }else{
                            data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
                        }
                    }
                }else{
                    data+=',{"text":"1","num":"1","status":"abled"}';
                    data+=',{"text":"2","num":"2","status":"abled"}';
                    data+=',{"text":"…","num":"more","status":"disabled"}';
                    for(var i=pageNo-2;i<=pageNo+2;i++){
                        if(i==pageNo){
                            data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
                        }else{
                            data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
                        }
                    }
                    data+=',{"text":"…","num":"more","status":"disabled"}';
                }
            }else{
                for(var i=1;i<=count;i++){
                    if(pageNo==i){
                        data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
                    }else{
                        data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
                    }
                }
            }
            if(pageNo==count){
                data+=',{"text":"下一页","num":"'+(pageNo+1)+'","status":"disabled"}]}';
            }else{
                data+=',{"text":"下一页","num":"'+(pageNo+1)+'","status":"abled"}]}';
            }
            var json_return = JSON.parse(data);
            return json_return;

        }


        var a = PageAlgorithm(1,100,8)
        console.log(a)
