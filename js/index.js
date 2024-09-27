const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");//created a variable and assigned to find on our html the logo-img ID
logo.setAttribute('src', siteContent["nav"]["img-src"])//this calls in the logo img 

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])//this calls in the header img

let mainImg = document.getElementById("middle-img");//created a variable to find the id middle-img in our html doc
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);//then used the new variable to change the src on the html file by using setAttribute

//navigation 
const navTop = document.querySelectorAll("a");
navTop[0].textContent = siteContent["nav"]["nav-item-1"];
navTop[1].textContent = siteContent["nav"]["nav-item-2"];
navTop[2].textContent = siteContent["nav"]["nav-item-3"];
navTop[3].textContent = siteContent["nav"]["nav-item-4"];
navTop[4].textContent = siteContent["nav"]["nav-item-5"];
navTop[5].siteContent = siteContent["nav"]["nav-item-6"];

navTop.forEach(function(currentValue) { currentValue.style.color = "green";});
const navi = document.querySelector("nav");

const newA = document.createElement("a");//created new element empty
newA.setAttribute('href', '#');// added the href and # using setAttribute
newA.textContent = "Start";// added text to the to the new element
navi.prepend(newA); //.prepend put the new element add the beginning
newA.style.color = "green";
newA.style.cursor = "pointer";

const lastA = document.querySelector("a:last-child");//created a new variable and assigned to find the last a child in the html doc
lastA.textContent = "Contact";//this edits the text inside the last child

const newA2 = document.createElement("a")
newA2.textContent = "End";
navi.appendChild(newA2); //here i added a new a tag at the end of the nav
newA2.style.color = "green";
newA2.style.cursor = "pointer";

// Top section .cta, div, .cta-text, h1, button, img #cta-img
document.querySelector('.cta h1').textContent = siteContent.cta.h1;// first it looks into the html file for the class .cta h1 and then it inserts the textcontent from the sitecontent
document.querySelector('.cta button').textContent = siteContent.cta.button;

// Main section 
const newArrH4 = document.querySelectorAll('.main-content h4'); // this calls the content to from the main-content siteContent into the html doc
newArrH4[0].textContent = siteContent['main-content']['features-h4'];
newArrH4[1].textContent = siteContent['main-content']['about-h4'];
newArrH4[2].textContent = siteContent['main-content']['services-h4'];
newArrH4[3].textContent = siteContent['main-content']['product-h4'];
newArrH4[4].textContent = siteContent['main-content']['vision-h4'];

const newArrP = document.querySelectorAll('.main-content p');
newArrP[0].textContent = siteContent['main-content']['features-content'];
newArrP[1].textContent = siteContent['main-content']['about-content'];
newArrP[2].textContent = siteContent['main-content']['services-content'];
newArrP[3].textContent = siteContent['main-content']['product-content'];
newArrP[4].textContent = siteContent['main-content']['vision-content'];

//contact section 
const newArrCont = document.querySelectorAll('.contact h4');
newArrCont.textContent = siteContent['contact']['contact-h4'];

const newArrContP = document.querySelectorAll('.contact p');
newArrContP[0].textContent = siteContent['contact']['address'];
newArrContP[1].textContent = siteContent['contact']['phone'];
newArrContP[2].textContent = siteContent['contact']['email'];

//footer 
document.querySelector('footer p').textContent = siteContent.footer.copyright;








