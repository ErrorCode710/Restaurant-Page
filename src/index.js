import "./reset.css";
import "./main.css";
import "./navbar.css";
import "./navbar.js";
import "./menu-list.css";
import "./about.css";
import toggleMenu from "./menu.js";

const content = document.querySelector(".main-content");
const homeButton = document.querySelector("#homePage");
const menuButton = document.querySelector("#menuPage");
const menuContainer = document.getElementById("menu-container");
// const menulist = document.querySelector("#menu-container-list");
const aboutButton = document.querySelector("#aboutPage");
const aboutContainer = document.querySelector("#about-container");

// Page state
let homeState = true;
let menuState = false;
let aboutStae = false;
// Button
// if homeState is true change it to f
homeButton.addEventListener("click", () => createHomePage(content));
menuButton.addEventListener("click", () => createMenuPage());
aboutButton.addEventListener("click", () => createAboutPage());

function createHomePage(parent) {
  // Clear existing content
  parent.innerHTML = "";
  menuContainer.style.display = "none"; // Hide menu container when on homepage
  aboutContainer.style.display = "none";
  content.classList.remove("main-content-hide");

  // Create elements
  const heroContent = document.createElement("div");
  heroContent.className = "hero-content";

  const contentInfo = document.createElement("div");
  contentInfo.className = "content-information";

  const heading = document.createElement("h1");
  heading.className = "hook";
  heading.innerHTML = "Enjoy Our <br />Freshly Baked Breads<br />";

  const paragraph = document.createElement("p");
  paragraph.className = "description";
  paragraph.textContent =
    "Discover the warmth and aroma of our artisan breads. Crafted with the finest ingredients, each loaf offers a unique taste experience, perfect for any meal or occasion. Savor the simple pleasure of freshly baked goodness.";

  contentInfo.appendChild(heading);
  contentInfo.appendChild(paragraph);

  const heroImg = document.createElement("div");
  heroImg.className = "hero-img";

  const img = document.createElement("img");
  img.src = require("./image/Hero.png");
  img.alt = "Pan de coco";

  heroImg.appendChild(img);

  heroContent.appendChild(contentInfo);
  heroContent.appendChild(heroImg);

  // Append to parent
  parent.appendChild(heroContent);
}

function createMenuPage() {
  content.innerHTML = ""; // Clear previous content

  aboutContainer.innerHTML = "";
  menuContainer.innerHTML = "";

  menuContainer.style.display = "block"; // Show menu container
  content.classList.add("main-content-hide");
  aboutContainer.classList.add("about-container-hide");
  // menulist.innerHTML = "";
  // Add Food Menu
  // let menuTitle = menuContainer.querySelector(".menu-title");
  // if (!menuTitle) {
  //   menuTitle = document.createElement("h1");
  //   menuTitle.className = "menu-title";
  //   menuTitle.textContent = "Food Menu";
  //   menuContainer.prepend(menuTitle);
  // }
  // createTitleHeader();
  // menuContainer.prepend(menuTitle);
  createTitleHeader("menu", menuContainer);

  let ulContainer = document.createElement("ul");
  ulContainer.className = "menu-container";
  ulContainer.id = "menu-container-list";
  menuContainer.append(ulContainer);

  const menulist = document.querySelector("#menu-container-list");
  const menuItems = [
    {
      name: "Cocode Classics",
      price: "$5.99",
      image: require("./image/menu-pic/Classic.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Cocodenot Cake",
      price: "$3.49",
      image: require("./image/menu-pic/Cocodenot cake crumbs.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Cocode & Crust",
      price: "$4.29",
      image: require("./image/menu-pic/Ginataan-Bilo-Bilo-kitchenconfidante.com-0676-Edit-1170x580.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Cocode Mama",
      price: "$2.99",
      image: require("./image/menu-pic/CoCoMa.jpg"),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  menuItems.forEach((item) => {
    const menuItemHTML = `
      <li class="menu-list">
        <div class="square-image-container">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="menu-info">
          <div class="food-content">
            <p class="menu-name">${item.name}</p>
            <p class="menu-price">${item.price}</p>
          </div>
          <hr />
          <p class="menu-description">
            ${item.description}
          </p>
        </div>
      </li>
    `;

    menulist.innerHTML += menuItemHTML;
  });
}

function createTitleHeader(pageState, container) {
  if (pageState === "menu") {
    let containerTitle = container.querySelector(`menu-title`);
    if (!containerTitle) {
      containerTitle = document.createElement("h1");
      containerTitle.className = "menu-title";
      containerTitle.textContent = `Food Menu`;
      container.prepend(containerTitle);
    }
    container.prepend(containerTitle);
  } else if (pageState === "about") {
    let containerTitle = container.querySelector(`about-title`);
    if (!containerTitle) {
      containerTitle = document.createElement("h1");
      containerTitle.className = "about-title";
      containerTitle.textContent = `About`;
      container.prepend(containerTitle);
    }
    container.prepend(containerTitle);
  }
}
function createAboutPage() {
  // Clearing Previous
  content.innerHTML = "";
  menuContainer.innerHTML = "";
  aboutContainer.innerHTML = "";

  aboutContainer.style.display = "block";
  content.classList.add("main-content-hide");
  menuContainer.classList.add("menu-page-hide");

  // Add Page Title

  // About Page Content
  // const aboutContent = document.querySelector(".about-container");

  // Create Element
  const aboutContentContainer = document.createElement("div");
  aboutContentContainer.className = "about-container";
  aboutContainer.append(aboutContentContainer);

  createTitleHeader("about", aboutContainer);

  const template = `
  
    <div id="about-content">
      <section id="our-story">
        <h2>Our Story</h2>

        <p>
          Our story begins with a passion for baking and a commitment to quality. From humble beginnings...
        </p>
      </section>

      <section id="the-owner">
        <h2>The Owner</h2>

        <p>
          Meet the owner, who brings years of experience and a love for baking to every loaf...
        </p>
      </section>

      <section id="unique-recipes">
        <h2>Unique Recipes</h2>

        <p>
          Our recipes are crafted with care and creativity, bringing you a unique blend of flavors...
        </p>
      </section>

      <section id="our-team">
        <h2>Our Team</h2>

        <p>
          Meet the dedicated team behind our bakery, each with their own expertise and passion...
        </p>
      </section>

      <section id="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            "The best bread I've ever had! The flavors are incredible and the quality is unmatched."
          </p>
          <footer>- Happy Customer</footer>
        </blockquote>
      </section>

      <section id="community">
        <h2>Community Involvement</h2>

        <p>
          We are actively involved in community events and support local initiatives...
        </p>
      </section>

      <section id="call-to-action">
        <h2>Visit Us!</h2>
        <p>
          Come visit our bakery and experience the freshness for yourself!
        </p>
        <p>Biringan City, 6969</p>
      </section>
    </div>
  
  `;

  // Update the innerHTML of the aboutContent element
  aboutContentContainer.innerHTML = template;
}
function checkScreenSize() {
  if (window.innerWidth <= 768) {
    alert("This website is not optimized for mobile devices.");
  }
}

window.onload = checkScreenSize;

window.onresize = checkScreenSize;
createHomePage(content);
toggleMenu();
