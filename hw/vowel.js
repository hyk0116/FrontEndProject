let text="When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."; 

let count=0//모음 카운트

for(let i=0; i<text.length; i++){
    if(text[i].search(/[^aeiou]/i)){//정규식을 이용하여 모음찾기
    count++;
    console.log(count+"번째 모음 "+text[i]+"는 "+i+"번째위치");
    }
}
