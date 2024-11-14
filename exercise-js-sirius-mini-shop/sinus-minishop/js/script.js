// 1. Byt namn på första hoodien från Ash till Potato.
document.querySelector("article > h3").innerText = "Potato";

// 2. Byt namn på Home till Start.

document.querySelector("nav > a").innerText = "Start";

// 3. Byt namn på Contact till Mail Us.

document.querySelector("nav a:nth-child(3)").innerText = "Mail us"; 

// 4. Byt ut informationen om Sinus Hoodie - Fire.

document.querySelector(".art-2 > p").innerText = "Annan information";

// 5. Byt bakgrundsfärg och text på en knapp.

let button1 = document.querySelector("button");
button1.style.backgroundColor = "red";
button1.innerText = "dont buy";

// 6. Byt bakgrundsfärg på någon av produkterna.

document.querySelector("figure").style.backgroundColor = "white";

// 7. Byt ut adressen på sidan.

document.querySelector("footer > section > article > p").innerText = "Drickabiragata 20";

// 8. Byt färg på samtliga <p>.

document.querySelectorAll("p").forEach(paragraph => {
    paragraph.style.color = "red";
});

// 9. Ändra text på samtliga knappar till add to cart.

document.querySelectorAll("button").forEach(button => {
    button.innerText = "add to cart";
    
});

// 10. Lägg till classen active på menyalternativet home.


const footerHomeLink = document.querySelector('footer article:nth-of-type(1) a');
footerHomeLink.classList.add('active');

// 11. Ta bort classen logo på logotypen.

// document.querySelector("header > img").classList.remove("logo");

// 12. Lägg till ett nytt menyalternativ.

const newMenuItem = document.createElement("a");
newMenuItem.innerHTML = 'Navigation';
document.querySelector("nav").insertAdjacentElement("afterbegin", newMenuItem);


// 13. Lägg till en ny produkt med följande info.

const mainElement = document.querySelector('main');

mainElement.insertAdjacentHTML('beforeend', `
    <article class="art-4">
        <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
        <h2>Sinus Hoodie</h2>
        <h3>Forrest</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
        <button>buy</button>
    </article>
`);

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";

const logo = document.querySelector(".logo"); 
logo.addEventListener("click", function(){
    console.log("found you!")
});


// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".


document.querySelector(".art-1").addEventListener("click", function(){
    console.log("Hi im article potato");
});

document.querySelector(".art-2").addEventListener("click", function(){
    console.log("Hi im article fire");
});

document.querySelector(".art-3").addEventListener("click", function(){
    console.log("Hi im article water");
});

document.querySelector(".art-4").addEventListener("click", function(){
    console.log("Hi im article forrest");
});
