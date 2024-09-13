
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
document.addEventListener("DOMContentLoaded", function() {
    const skillSections = document.querySelectorAll('.technical-skills_wrapper .skills-section');

    function handleScroll() {
        skillSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load in case sections are already in view
});

document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const textArray = [
        'const Faizan = ( name) =>',
        'Hello, my name is'
    ];
    const typingSpeed = 100; // Speed of typing in ms
    const erasingSpeed = 50; // Speed of erasing in ms
    const newTextDelay = 1500; // Delay before new text starts typing in ms
    const section = document.getElementById('intro');

    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let isPaused = false;

    function type() {
        if (textIndex === textArray.length) return; // Exit if all text is processed

        if (isTyping) {
            typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            if (charIndex === textArray[textIndex].length) {
                isTyping = false;
                if (textIndex === 1) {
                    isPaused = true; // Pause after the second text
                }
                setTimeout(() => {
                    if (!isPaused) {
                        erase(); // Start erasing text if not paused
                    }
                }, newTextDelay);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    function erase() {
        if (!isTyping) {
            typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isTyping = true;
                textIndex = (textIndex + 1) % textArray.length;
                if (textIndex === 0 && !isPaused) {
                    startTypingEffect(); // Restart typing effect if not paused
                } else {
                    setTimeout(type, newTextDelay);
                }
            } else {
                setTimeout(erase, erasingSpeed);
            }
        }
    }

    function startTypingEffect() {
        textIndex = 0;
        charIndex = 0;
        isTyping = true;
        isPaused = false;
        typewriterElement.textContent = '';
        type();
    }

    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (isPaused) {
                    startTypingEffect();
                }
            }
        });
    }

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
    observer.observe(section);

    // Clean up observer when not needed
    window.addEventListener('beforeunload', () => {
        observer.disconnect();
    });

    // Initial start of typing effect
    startTypingEffect();
});

function semdmain(){

    let params={
        from_name: document.getElementById("from_name").value,
  email_id: document.getElementById("email_id").value,
  message: document.getElementById("message").value,
 }
 emailjs.send("service_az6wksp","template_fzmdhbl",params).then(alert("Email send !!"));
 
 }