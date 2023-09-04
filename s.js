document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const contentSections = document.querySelectorAll(".content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
        
            contentSections.forEach(section => {
                section.style.display = "none";
            });

           
            const targetContentId = button.id.replace("Tab", "Content");
            const targetContent = document.getElementById(targetContentId);
            if (targetContent) {
                targetContent.style.display = "block";
            }
        });
    });
});

const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button, index) {
button.addEventListener('click', function(e) {
e.preventDefault();

this.parentNode.classList.toggle('on');

buttons.forEach(function(button2, index2) {
if ( index !== index2 ) {
button2.parentNode.classList.remove('on');
}
});
});
});


document.addEventListener("DOMContentLoaded", function () {
const tabButtons = document.querySelectorAll(".tab-button");
const contentSections = document.querySelectorAll(".content");

tabButtons.forEach(button => {
button.addEventListener("click", () => {
   
    contentSections.forEach(section => {
        section.style.display = "none";
    });

   
    const targetContentId = button.id.replace("Tab", "Content");
    const targetContent = document.getElementById(targetContentId);
    if (targetContent) {
        targetContent.style.display = "block";
    }
});
});

const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button, index) {
button.addEventListener('click', function (e) {
    e.preventDefault();

    this.parentNode.classList.toggle('on');

    buttons.forEach(function (button2, index2) {
        if (index !== index2) {
            button2.parentNode.classList.remove('on');
        }
    });
});
});
});


let page = 1; 

function loadPage() {

document.getElementById('content').textContent = 'Page ' + page;
}

document.getElementById('prev').addEventListener('click', function(e) {
e.preventDefault();

if (page > 1) { 
page--;
loadPage();
}
});

document.getElementById('next').addEventListener('click', function(e) {
e.preventDefault();


page++;
loadPage();
});

loadPage(); 