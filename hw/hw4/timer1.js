
let count=0;
let id= setInterval(function(msg) { console.log(msg,new Date())
 count++;
 if(count==10){
    console.log("타이머 종료")
    clearInterval(id)
 }
},1000,"현재시각")


