// nav bar code set up
const navToggle = document.querySelector(".toggle");
const navContainer = document.querySelector(".main");
 const navList = document.querySelector(".list");
 const navListTwo = document.querySelector('.list-one');
 const navListThree = document.querySelector('.list-two');

navToggle.addEventListener("click", function(){
    if(navContainer.classList.contains('show-link')){
        navContainer.classList.remove('show-link');
    }else{
        navContainer.classList.add('show-link');
    };
   if(navList.classList.contains('list')){
       navList.classList.remove('list');
   }else{
       navList.classList.add('list');
   };
   if(navListTwo.classList.contains('list')){
    navListTwo.classList.remove('list');
}else{
    navListTwo.classList.add('list');
};
if(navListThree.classList.contains('list')){
    navListThree.classList.remove('list');
}else{
    navListThree.classList.add('list');
};
  
  
});


//java script for simpl calculator


//range animation and ui

const slider = document.querySelector(".form-range");
const valueOfRange = document.querySelector(".value");
valueOfRange.textContent= slider.value;
slider.oninput = function(){
    valueOfRange.textContent= `${this.value} ${"%"}`;
}

//interest calculator



const amount = document.querySelector("#amount");
const interestRate = slider.value;
const year = document.querySelector("#year");
const compoundBtn = document.querySelector(".compound-btn");
const clearBtn = document.querySelector(".clear-btn");
const calText = document.querySelector('.calculation-text');




compoundBtn.addEventListener('click',function(){
 const money = amount.value;
const yearOfInvest = year.value;
const rate = interestRate/10;  
const returnOfInvest = money*rate*yearOfInvest;
calText.innerHTML = `you Invest ${money} Rs. After ${yearOfInvest}year of invest. your return of investment is ${returnOfInvest} Rs`;


if(calText.classList.contains('hide-text')){
    calText.classList.remove('hide-text');

};
if(clearBtn.classList.contains('show-btn')){
    clearBtn.classList.remove('show-btn');
}
 

});
clearBtn.addEventListener('click', function(){
    if(calText.classList.contains('hide-text')){
        alert("please calculate interest rate then clear");
    }else{
        calText.classList.add('hide-text');
    }
    amount.value = NaN;
    year.value = NaN;

}
);

//review section 
//selection of DOM
const image = document.querySelector('#image');
const job = document.getElementById('name');
const reviewText = document.querySelector('#review');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

//create array
const reviewContent = [
    {
        id:1,
        imgPerson:"images/old man.jpg",
        namePerson:"Jose hood",
        review:"Lorem ipsum dolor sitit amet consectetur adipisicing elit. Quaerat.",
        
    },

    {
        id:2,
        imgPerson:"images/women.jpg",
        namePerson:"Lora musk",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ,i wana re glad to say hike is so help full to invest.",

    },
    {
        
        id:3,
        imgPerson:"images/happy dad.jpg",
        namePerson:"Adam Mill",
        review:"hi i'm Adam mill. Quaerat ,i wana re glad to say hike is so help full to invest.",
    },
    {
        id:4,
        imgPerson:"images/old women.jpg",
        namePerson:"Wanda giangi",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit i need to apointed hike.",

    }

];

let currentItem = 0;
//window reload function
window.addEventListener("DOMContentLoaded", function(){
    const peronInfo = reviewContent[currentItem];
    job.textContent= peronInfo.namePerson;
    reviewText.textContent= peronInfo.review;
    image.src=peronInfo.imgPerson;

});


//show person by array
function personList(item){
    const peronInfo= reviewContent[item];
    job.textContent= peronInfo.namePerson;
    reviewText.textContent= peronInfo.review;
    image.src=peronInfo.imgPerson;
}
//next button function
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviewContent.length-1){
        currentItem = 0;
    }
    personList(currentItem);
})

//prev button function
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviewContent.length-1;
    }
    personList(currentItem);

});


//year update
const yearDate = document.querySelector('.year-date');
yearDate.innerHTML = new Date().getFullYear();


