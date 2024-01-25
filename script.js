let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".nv-links")

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-message-square-x")
  navbar.classList.toggle("active")
}

let drop = document.querySelector("#dropdwn")

drop.onclick = () => {
  drop.classList.toggle("active")
}

let reveal = document.querySelector("#reveal")

reveal.onclick = () => {
  reveal.classList.toggle("active")
}

// const navLinkEls = document.querySelectorAll('drop');

// navLinkEls.forEach(navLinkEl => {
//     navLinkEl.addEventListener('click', () => {
//         document.querySelector('.active')?.classList.remove('active');
//         navLinkEl.classList.add('active');
//     });
// });

const dropdowns = document.querySelectorAll(".dropdown-s")

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select")
  const caret = dropdown.querySelector(".caret")
  const menus = dropdown.querySelector(".menus")
  const options = dropdown.querySelectorAll(".menus li") // Use querySelectorAll to get all options
  const selected = dropdown.querySelector(".selected")

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked") // Corrected class name
    caret.classList.toggle("caret-rotate")
    menus.classList.toggle("menus-open")
  })

  options.forEach((option) => {
    // Use 'option' instead of 'Option'
    option.addEventListener("click", () => {
      selected.innerText = option.innerText
      select.classList.remove("select-clicked")
      caret.classList.remove("caret-rotate")
      menus.classList.remove("menus-open")

      options.forEach((opt) => {
        opt.classList.remove("active")
      })
      option.classList.add("active")
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  // Array of objects representing each item with a countdown
  var items = [
    { selector: ".web-development", targetCount: 3000 },
    { selector: ".cloud-computing", targetCount: 323 },
    { selector: ".ai-integrations", targetCount: 42 },
    { selector: ".apis-deployed", targetCount: 433 },
  ]

  items.forEach(function (item) {
    var counter = document.querySelector(item.selector + " .fw-bold")
    var targetCount = item.targetCount
    var count = 0
    var speed = 300 // Adjust the speed of the countdown

    function updateCount() {
      var increment = targetCount / speed

      if (count < targetCount) {
        count += increment
        counter.innerText = Math.floor(count)
        setTimeout(updateCount, 10)
      } else {
        counter.innerText = targetCount
      }
    }

    updateCount()
  })
})

function changeTestimonial(index, clientName) {
  const testimonials = [
    "I had a great experience working with your team . They were able to create a website that was both visually appealing and user-friendly. I would highly recommend them to anyone looking for web development services.",
    "Thank you guys for delivering this project;  they were  able to create a mobile app that was both functional and aesthetically pleasing. They were able to deliver the project on time and within budget",
    "I had a great experience working with their UI/UX Design team, though a little back and forth still we were able to get our job",
    "We approached this team with a complex mobile app idea, and they delivered beyond our expectations. The mobile application they developed is not only visually appealing but also incredibly functional",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit hic iusto, ea vero beatae!vero beatae! odit hic iusto odit hic iusto, ea vero",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit hic iusto, ea vero beatae! vero beatae! odit hic iusto jsdududuiouohoudh",
  ]

  // Set active class for the clicked image
  const images = document.querySelectorAll(".client-box img")
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add("active")
    } else {
      image.classList.remove("active")
    }
  })

  // Update the testimonial content
  document.getElementById(
    "clients-reviews"
  ).innerHTML = `<h3>${testimonials[index]}</h3>`

  // Update the client name
  document.getElementById("clientName").innerText = clientName
  document.getElementById("clientNameMobile").innerText = clientName
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
})


