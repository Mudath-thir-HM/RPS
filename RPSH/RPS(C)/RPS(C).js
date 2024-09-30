const leftemoji = document.querySelectorAll(".leftChoice");
const leftImage = document.getElementById("leftImg");
const rightemoji = document.querySelectorAll(".rightChoice");
const rightImage = document.getElementById("rightImg");
const refresh = document.getElementById("refreshButton");
const left = document.querySelector(".leftSelect");
const right = document.querySelector(".rightSelect")
const bot = document.getElementById('bot');
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

        bot.classList.add('logged');

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
    }); 
};

document.getElementById("playButton").addEventListener("click", function(){

    left.classList.add('blink');
    right.classList.add('blink');

    setTimeout(() => {
        left.classList.remove('blink');
        right.classList.remove('blink');

        document.getElementById("leftImg").style.display="block";
        document.getElementById("rightImg").style.display="block";
        let a = document.querySelectorAll(".leftChoice");
        let b = document.querySelectorAll(".rightChoice");
        let counter1 = document.getElementById("count1");
        let counter2 = document.getElementById("count2");
    
        a[0] = 1; a[1] = 2; a[2] = 3;
        b[0] = 1; b[1] = 2; b[2] = 3;
    
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

    }, 1500);

})