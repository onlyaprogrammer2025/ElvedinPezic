document.addEventListener("DOMContentLoaded", function () {
    let books = ["knigadiv", "knigadiv1", "knigadiv2", "knigadiv3"];
    let currentIndex = 0;
    
    function showBook(index) {
        books.forEach((id, i) => {
            let book = document.getElementById(id);
            if (i === index) {
                book.style.display = "block";
                book.style.opacity = 0;
                setTimeout(() => {
                    book.style.transition = "opacity 0.8s ease-in-out";
                    book.style.opacity = 1;
                }, 50);
            } else {
                book.style.transition = "opacity 0.5s ease-in-out";
                book.style.opacity = 0;
                setTimeout(() => {
                    book.style.display = "none";
                }, 500);
            }
        });
    }
    
    document.getElementById("right").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % books.length;
        showBook(currentIndex);
    });
    
    document.getElementById("left").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + books.length) % books.length;
        showBook(currentIndex);
    });
    
    showBook(currentIndex);
});
document.getElementById("option1").addEventListener("click", function() {
    let knjigaDiv1 = document.getElementById("knigadiv1");
    
    // Proveravamo da li je skriven, ako jeste - prikazujemo ga
    if (knjigaDiv1.style.display === "none") {
        knjigaDiv1.style.display = "block";
    }

    // Skrolujemo do elementa
    knjigaDiv1.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("option2").addEventListener("click", function() {
    document.getElementById("biografija").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("option3").addEventListener("click", function() {
    document.getElementById("predavanja").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("option4").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});



function openfb(){
    open("https://www.facebook.com/pezicelvedin?locale=hr_HR");
}
function opentk(){
    open("https://www.tiktok.com/@elvedinpezicofficial");
}

function buy1(){
    open("https://imbeshop.com/proizvod/slast-dove/");
}
function buy2(){
    open("https://imbeshop.com/proizvod/namaz-radost-oka-moga/");
}
function buy3(){
    open("https://imbeshop.com/proizvod/islam-u-vremenu/");
}
function buy4(){
    open("https://imbeshop.com/proizvod/islamski-prirucnik-bracne-intime/");
}