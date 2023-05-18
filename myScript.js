let btn = document.querySelector('#btn')
let sideBar = document.querySelector('.sideBar')

btn.onclick = function () {
    sideBar.classList.toggle('active');
};

const words = ["My name is Carlos, I am a web developer currently I am working in the UK."];
let i = 0;
let timer;
                        
function typingEffect() {
    let word = words[i].split("");
    let loopTyping = function() {
        if (word.length > 0) {
            document.getElementById("me").innerHTML += word.shift();
        } else {
        deletingEffect();
        return false;
        };
        timer = setTimeout(loopTyping, 150);
    };
    loopTyping();
};
                        
/*function deletingEffect() {
   let word = words[i].split("");
   let loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById("me").innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 40);
    };
    loopDeleting();
};*/
                        
                        
typingEffect();


const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
        formHeading.style.opacity ="0";
        setTimeout(() => {
            formHeading.textContent =`Your ${input.placeholder}`;
            formHeading.style.opacity ="1";
        }, 300);
    });

    formInputs.forEach((input) => {
        input.addEventListener("blur", () => {
            formHeading.style.opacity ="0";
            setTimeout(() => {
                formHeading.textContent ="Let's Talk";
                formHeading.style.opacity ="1";
            }, 300);
        });
    });
});