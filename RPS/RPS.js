const leftemoji = document.querySelectorAll(".leftChoice");
const leftImage = document.getElementById("leftImg");
const rightemoji = document.querySelectorAll(".rightChoice");
const rightImage = document.getElementById("rightImg");
const refresh = document.getElementById("refreshButton");
const left = document.querySelector(".leftSelect");
const right = document.querySelector(".rightSelect")
const counter1 = document.getElementById("count1");
const counter2 = document.getElementById("count2");
let counter = 0;
let counterr = 0;

refresh.addEventListener("click", () => {
    location.reload();
})

leftemoji.forEach(function(element){
    element.addEventListener("mouseover", () => {
        element.classList.add('expand')
    })
    element.addEventListener("mouseout", () => {
        element.classList.remove('expand')
    })
});

rightemoji.forEach(function(element){
    element.addEventListener("mouseover", () => {
        element.classList.add('expand');
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove('expand');
    });
});

for (const leftSelect of leftemoji) {
    leftSelect.addEventListener("click", () => {
        leftImage.src = leftSelect.src;
        leftImage.style.display="none";
        left.classList.add('click');
        left.classList.remove('draw','win','loose');
    }); 
};

for(const rightSelect of rightemoji){
    rightSelect.addEventListener("click", () => {
        rightImage.src = rightSelect.src;
        rightImage.style.display="none";
        right.classList.add('click');
        right.classList.remove('draw','win','loose');
    })
}

document.getElementById("playButton").addEventListener("click", function(){

    left.classList.add("blink");
    right.classList.add("blink");

    setTimeout(function(){
        left.classList.remove("blink");
        right.classList.remove("blink");

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
        
    },1500);
})

function checkWinner(){
    if(counter === 3){
        declareWinner('User 1');
    }else if(counterr === 3){
        declareWinner('User 2');
    }
}

function declareWinner(winner){
    localStorage.setItem('winner', winner);
    window.location.href = 'RPS/winner.html'
}