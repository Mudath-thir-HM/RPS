const leftemoji = document.querySelectorAll(".leftChoice");
const leftImage = document.getElementById("leftImg");
const rightemoji = document.querySelectorAll(".rightChoice");
const rightImage = document.getElementById("rightImg");
const refresh = document.getElementById("refreshButton");
const left = document.querySelector(".leftSelect");
const right = document.querySelector(".rightSelect")
const bot = document.getElementById('bot');
const counter1 = document.getElementById("count1");
const counter2 = document.getElementById("count2");
let counter = 0;
let counterr = 0;

// refreshes the page when the refresh button is clicked
refresh.addEventListener("click", () => {
    location.reload();
})

// expands the emojis when the cursor hovers above them
leftemoji.forEach(function(element){
    element.addEventListener("mouseover", () => {
        element.classList.add('expand')
    })
    element.addEventListener("mouseout", () => {
        element.classList.remove('expand')
    })
});

// functionality when an option is chosen
for (const leftSelect of leftemoji) {
    leftSelect.addEventListener("click", () => {
        // logs the image to the big image when an option is chosen
        leftImage.src = leftSelect.src;
        leftImage.style.display="none";
        left.classList.add('click');
        left.classList.remove('draw','win','loose');        
        bot.classList.add('logged');
        randomBot()
    }); 
};

function randomBot(){
    setTimeout(() => {
        bot.classList.remove('logged');
        
        let rightSelect = rightemoji;
        let randomize = Math.floor(Math.random() * rightSelect.length);
        let innerRandom = rightSelect[randomize].src;
        rightImage.src = innerRandom;
        rightImage.style.display="none";
        right.classList.add('click');
        right.classList.remove('draw','win','loose');

    },1500)
}

document.getElementById("playButton").addEventListener("click", function(){

    left.classList.add('blink');
    right.classList.add('blink');

    setTimeout(() => {
        left.classList.remove('blink');
        right.classList.remove('blink');

        findWinner();

    }, 1500);
});

function findWinner(){

    document.getElementById("leftImg").style.display="block";
    document.getElementById("rightImg").style.display="block";
    let a = document.querySelectorAll(".leftChoice");
    let b = document.querySelectorAll(".rightChoice");

    if(leftImage.src === a[0].src && rightImage.src === b[2].src){
        left.classList.add('draw');
        right.classList.add('draw');

    }else if(leftImage.src === a[1].src && rightImage.src === b[1].src){
        left.classList.add('draw')
        right.classList.add('draw')

    }else if(leftImage.src === a[2].src && rightImage.src === b[0].src){
        left.classList.add('draw');
        right.classList.add('draw')

    }else if(leftImage.src === a[0].src && rightImage.src === b[0].src){
        left.classList.add('win')
        right.classList.add('loose')
        counter++;
        counter1.textContent = counter;
        
    }else if(leftImage.src === a[0].src && rightImage.src === b[1].src){
        left.classList.add('loose')
        right.classList.add('win')
        counterr++;
        counter2.textContent = counterr;

    }else if(leftImage.src === a[1].src && rightImage.src === b[0].src){
        left.classList.add('loose')
        right.classList.add('win')
        counterr++;
        counter2.textContent = counterr;

    }else if(leftImage.src === a[1].src && rightImage.src === b[2].src){
        left.classList.add('win')
        right.classList.add('loose')
        counter++;
        counter1.textContent = counter;

    }else if(leftImage.src === a[2].src && rightImage.src === b[1].src){
        left.classList.add('win')
        right.classList.add('loose')
        counter++;
        counter1.textContent = counter;

    }else if(leftImage.src === a[2].src && rightImage.src === b[2].src){
        left.classList.add('loose')
        right.classList.add('win')
        counterr++;
        counter2.textContent = counterr;
    }
    checkWinner();
}

function checkWinner(){
    if(counter === 3){
        declareWinner('User 1');
    }else if(counterr === 3){
        declareWinner('Computer');
    }
}

function declareWinner(winner){
    localStorage.setItem('winner', winner);
    window.location.href = 'RPS(C)/winner.html'
}