"use strict"


const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});


const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchBtn.addEventListener("click", function () {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    video.pause();
  } else {
    switchBtn.classList.remove("slide");
    video.play();
  }
});
// sidenav==================================================
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});




// colorCode---------------------------------------------------------------
const colorBtn = document.getElementById("colorBtn")
const color = document.querySelector('.color')
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 'A','B','C','D','E','F'];
const randomColor = document.getElementById('randomColor')

colorBtn.addEventListener("click", function () {
    let hexColor = "#";
  for (let i = 0; i < 6; i++) {
        hexColor += hexCode[Math.floor(Math.random() * hexCode.length)]
        console.log(hexColor);  
    } 
    randomColor.style.backgroundColor = hexColor;
    color.innerHTML=hexColor 
})

let x = 0;
console.log(x);

// counter---------------------------------------------------------------

let conterBtn = document.querySelectorAll('#conterBtn');
let counter = document.querySelector('#counter');
let count = 0;
conterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.target.classList;
        if (style.contains('decBtn')) {
            count--;         
            console.log(count);
        }
        else if (style.contains('incBtn')) {
            count++;            
            console.log(count);
        }
        else {
            count = 0;
            console.log(count);
        }
        if (count < 0) {
            counter.style.color = "red";
        }
        if (count > 0) {
            counter.style.color = "green";
        }
        if (count == 0) {
            counter.style.color = "black";
        }
        counter.innerHTML = count;
    })
});
// counter---------------------------------------------------------------
// my daata 
const reviews = [

    {
        id: 1,
        name: "ahmed mohamed",
        job: " UI / UX Designer",
        img: "img/3.jpg",
        des:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius recusandae laborum eaque est qdignissimos nisi non nostrum sed!"

    },
    {
        id: 2,
        name: "mostfa mohamed ",
        job: " frontend developer",
        img: "img/asset 10.jpeg",
        des:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius recusandae labouia, dignissimos nisi non nostrum sed!"

    },
    {
        id: 3,
        name: "elon jax",
        job: " backend developer",
        img: "img/asset 11.jpeg",
        des:  "Lorem ipsum dolor sit amet consectetur adipisiest quia, dignissimos nisi dignissimos nis non nostrum sed!"

    },

    {
        id: 4,
        name: "leo mark",
        job: " full stack",
        img: "img/asset 8.jpeg",
        des:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius recusandae laignissimos nisi non nostrum sed!"

    },

    {
        id: 5,
        name: "maged mark",
        job: " frontend developer",
        img: "img/2.jpg",
        des:  "Lorem ipsum dolor sit amet consectetur adipisicing elitusandae laborum eaque est quia, dignissimos nisi non nostrum sed!"

    }
]

const reviewImg = document.getElementById("reviewImg");
const reviewName = document.getElementById('reviewName');
const reviewJob = document.getElementById('reviewJob');
const reviewDes = document.getElementById('reviewDes');
const next = document.getElementById("next");
const pre = document.getElementById("pre");

let reviewIndex = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(reviewIndex)
});

function showPerson(person) {
    const showPerson = reviews[person]
    reviewImg.src = showPerson.img;
    reviewName.innerHTML = showPerson.name;
    reviewJob.innerHTML = showPerson.job;
    reviewDes.innerHTML = showPerson.des;

}
next.addEventListener('click', function () {
    reviewIndex++;  
    if (reviewIndex > reviews.length-1) {
        reviewIndex = 0;
    }
    reviewImg.src = reviews[reviewIndex].img;
    reviewName.innerHTML = reviews[reviewIndex].name;
    reviewJob.innerHTML = reviews[reviewIndex].job;
    reviewDes.innerHTML = reviews[reviewIndex].des;
})

pre.addEventListener('click', function () {
    reviewIndex--;  
    if (reviewIndex < 0) {
        reviewIndex = reviews.length-1;
    }
    reviewImg.src = reviews[reviewIndex].img;
    reviewName.innerHTML = reviews[reviewIndex].name;
    reviewJob.innerHTML = reviews[reviewIndex].job;
    reviewDes.innerHTML = reviews[reviewIndex].des;
})

// Q&A-----------------------================================================


const questions = document.querySelectorAll('.question');
questions.forEach( function(question){
const btn = question.querySelector('.question-btn')
btn.addEventListener('click', function () {
    questions.forEach(function (questionx) {
        if (questionx != question) {
            questionx.classList.remove('show-text');
        }
    });

    question.classList.toggle('show-text');
}); 
});


// menu===========================================================================

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "img/menuImgs/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "img/menuImgs/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "img/menuImgs/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "img/menuImgs/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "img/menuImgs/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "img/menuImgs/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "img/menuImgs/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "img/menuImgs/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "img/menuImgs/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "lunch",
      price: 22.99,
      img: "img/menuImgs/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const selectCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function () {
  displaymenuItems(menu)
  displayFliterBtn()
});
function displaymenuItems(menuItems) {
    let displaymenu = menuItems.map(function (item) {
        return ` 

        <article class="menu-item">
         <img src="${item.img}" alt="menu item" class="photo w-100" />
         <div class="item-info">

           <header>
             <h4>${item.title}</h4>
             <h4 class="price">$${item.price}</h4>
           </header>
           <p class="item-text">
           ${item.desc}
           </p>
           </div>
      </article>  
      `
    });
    displaymenu = displaymenu.join("");
    selectCenter.innerHTML = displaymenu;
};

function displayFliterBtn() {
  const category = menu.reduce(function (values,item) {
    if(!values.includes(item.category))
values.push(item.category)
    return values
  }, ["all"])
  const catagoryBtns = category.map(function (catgory) {
    return`<button type="button" class="btn btn-outline-warning text-black btn-filter" data-id=${catgory}>${catgory}</button> `
  }).join("")
  document.querySelector("#btnFilter").innerHTML = catagoryBtns;
   selectBtn();
}

function selectBtn() {
  
const btnFilter = document.querySelectorAll('.btn-filter');

btnFilter.forEach( function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.target.dataset.id;
       const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
               return menuItem;
            };
    
        });
        if (category === "all") {
            displaymenuItems(menu);
        } else {
            displaymenuItems(menuCategory);

        }
    });
});
}

// ================about us=====================


const aboutUsBtns = document.querySelectorAll('.tab-btn');
const abooutUsArticles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {

    aboutUsBtns.forEach(function (btn) {

      btn.classList.remove('active');
      e.target.classList.add('active')
    });
    gertArtcila(id);
  };
});

function gertArtcila(id) {
  abooutUsArticles.forEach(function (article) {
    article.classList.remove('active');
    const arti = document.getElementById(id);
    arti.classList.add('active');
  })
  
}

// ================count down====================
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;





const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
