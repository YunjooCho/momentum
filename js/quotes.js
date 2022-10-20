const quoteView = document.querySelector("#quote span:first-child");
const authorView = document.querySelector("#quote span:last-child");

const quotesList = [
    {
        quotes : "삶이 있는 한 희망은 있다",
        author : "키케로"
    }
    ,{
        quotes : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author : "사무엘존슨"
    }
    ,{
        quotes : "언제나 현재에 집중할수 있다면 행복할 것이다",
        author : "파울로 코엘료"
    }
    ,{
        quotes : "행복한 삶을 살기위해 필요한 것은 거의 없다",
        author : "마르쿠스 아우렐리우스 안토니우스"
    }
    ,{
        quotes : "피할수 없으면 즐겨라",
        author : "로버트 엘리엇"
    }
    ,{
        quotes : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author : "엘버트 허버드"
    }
    ,{
        quotes : "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다",
        author : "L론허바드"
    }
    ,{
        quotes : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author : "앙드레 말로"
    }
    ,{
        quotes : "자신감 있는 표정을 지으면 자신감이 생긴다",
        author : "찰스다윈"
    }
    ,{
        quotes : "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
        author : "괴테"
    }
    ,{
        quotes : "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
        author : "호라티우스"
    }
    ,{
        quotes : "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author : "헨리 포드"
    }
];

function randomQuotes(){
    const quotesIndex = Math.floor(Math.random()*quotesList.length);
    const nowQuotes =  quotesList[quotesIndex];
    quoteView .innerText = nowQuotes.quotes;
    authorView.innerText = `By.${nowQuotes.author}`;
}

randomQuotes();