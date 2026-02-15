// Placeholder for future interactivity
console.log("3D Wizard Loaded");
console.log("About Us page loaded");


document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

console.log("3D Technologies page loaded");

console.log("3D Scanning page loaded");

console.log("Vacuum Casting page loaded");

console.log("3D Printing detail page loaded");

console.log("Colours & Finishes page loaded");


window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});


// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');
  const body = document.body;
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);
  
  // Toggle menu function
  function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
  }
  
  // Hamburger menu click event
  hamburgerMenu.addEventListener('click', toggleMenu);
  
  // Close menu when clicking overlay
  overlay.addEventListener('click', toggleMenu);
  
  // Close menu when clicking on a link (for single page navigation)
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Close menu if it's open
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Close menu on window resize (optional)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767 && navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
  
  // Sticky navbar functionality (if not already present)
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");
  const body = document.body;

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close menu when clicking any link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });
});


document.addEventListener("click", (e) => {
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger-menu");

  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});



function sendToWhatsApp(button) {

    let phoneNumber = "917506120031"; // Without +

    let message = "";

    // 🔹 IF button has product data → PRODUCT PAGE
    if (button && button.hasAttribute("data-name")) {

        const name = button.getAttribute("data-name");
        const volume = button.getAttribute("data-volume");
        const material = button.getAttribute("data-material");
        const machines = button.getAttribute("data-machines");

        message = `Hi 👋

I want to place an order for:

Product: ${name}
Print Volume: ${volume}
Materials: ${material}
Available Machines: ${machines}

Please share more details.`;
    }

    // 🔹 OTHERWISE → CONTACT FORM PAGE
    else {

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const userMessage = document.querySelector('textarea[name="message"]').value;

        message = `Hi 👋

📩 New Contact Form Message

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📝 Subject: ${subject}
💬 Message: ${userMessage}`;
    }

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

