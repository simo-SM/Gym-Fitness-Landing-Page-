const wthsappBtn = document.querySelector('.joinWhatsapp');
const stickyWhatsappBtn = document.querySelector('.StickyWhatsApp');
const sign_up_via_whatsappBtn = document.querySelector('.Sign-Up-via-WhatsApp'); 
const Get_StartedBtn = document.querySelector('.Get-Started');
const Go_PlatinumBtn = document.querySelector('.Go-Platinum');
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

function openWhatsApp() {
    const phoneNumber = '212608173585'; // Replace with your WhatsApp number
    const message = encodeURIComponent('Hello, I would like to get in touch with you!'); // Optional pre-filled message
    const wthsappurl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(wthsappurl, '_blank');
}
wthsappBtn.addEventListener('click', openWhatsApp);
stickyWhatsappBtn.addEventListener('click', openWhatsApp);

// wa-message Input + Button → WhatsApp
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('[onclick="sendWhatsApp()"]');
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const input = document.getElementById('wa-message');
            const message = input ? input.value : '';
            const phoneNumber = '+212608173585';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
});


// Sign Up via WhatsApp
sign_up_via_whatsappBtn.addEventListener('click', ()=>{
    const message = encodeURIComponent(`Hello, I am interested in signing up for the gym membership. Please provide me with more details.\n
        $39/modone
        -All Monthly Features
        -Free Trainer Consultation
        -Nutrition Plan Included
        -2 Guest Passes Monthly\n`
    );
    const phoneNumber = '+212608173585';
    const wthsappurl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(wthsappurl, '_blank');
    console.log("Get Started button clicked, WhatsApp message sent.");
});
// Get Started Button
Get_StartedBtn.addEventListener('click', ()=>{
    const message = encodeURIComponent(`Hello, I am interested in learning more about the gym membership options. Please provide me with more details.\n
        $49/mo
        -24/7 Gym Access
        -Standard Equipment
        -Locker Room Acces`
    );   
    const phoneNumber = '212608173585';
    const wthsappurl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(wthsappurl, '_blank');
    
});
// Go Platinum Button
Go_PlatinumBtn.addEventListener('click', ()=>{
    const message = encodeURIComponent(`Hello, I am interested in the Platinum gym membership. Please provide me with more details.\n
    $99/m
    -All Elite Features
    -Weekly Personal Training
    -Recovery Zone Access
    -Free Laundry Service `
);
    const phoneNumber = '212608173585';
    const wthsappurl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(wthsappurl, '_blank');
});

// Change menu icon to close when mobile menu is open
menuBtn.addEventListener('click', () => {
    // mobileMenu.classList.toggle('hidden');
    if (menuIcon.textContent === "menu")
    {
        menuIcon.textContent = "close";
    }
    else
    {
        menuIcon.textContent = "menu";
    }
});

// ============================================================
// ============================================================

// animations.js - GSAP ScrollTrigger ONLY - Each box animates on scroll
// NO entrance animations, NO hover effects - Only scroll-based reveals

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // NAVIGATION - Background on scroll only
    // ==========================================
    
    ScrollTrigger.create({
        trigger: "body",
        start: "top -100",
        end: 99999,
        toggleClass: { className: "nav-scrolled", targets: "nav" }
    });

    gsap.to("nav", {
        scrollTrigger: {
            trigger: "body",
            start: "top -100",
            end: "top -100",
            toggleActions: "play none none reverse"
        },
        backgroundColor: "rgba(10, 10, 12, 0.95)",
        backdropFilter: "blur(20px)",
        duration: 0.3
    });

    // ==========================================
    // HERO - Parallax + fade out on scroll only
    // ==========================================
    
    // Background parallax
    gsap.to("header .absolute.inset-0 img", {
        scrollTrigger: {
            trigger: "header",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: 100,
        scale: 1.1,
        ease: "none"
    });

    // Content fade out
    gsap.to("header .relative.z-10", {
        scrollTrigger: {
            trigger: "header",
            start: "top top",
            end: "50% top",
            scrub: 1
        },
        opacity: 0,
        y: -50,
        ease: "none"
    });

    // ==========================================
    // PROGRAMS SECTION - ScrollTrigger only
    // ==========================================
    
    // Header
    gsap.from("#programs .flex.flex-col h2", {
        scrollTrigger: {
            trigger: "#programs .flex.flex-col",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.from("#programs .flex.flex-col p.text-4xl", {
        scrollTrigger: {
            trigger: "#programs .flex.flex-col",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out"
    });

    gsap.from("#programs .max-w-md", {
        scrollTrigger: {
            trigger: "#programs .flex.flex-row",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
    });

    // EACH PROGRAM CARD - ScrollTrigger wa7da
    const programCards = document.querySelectorAll("#programs .grid > div");
    
    programCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 80,
            rotateX: 10,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });

    // ==========================================
    // WHY CHOOSE US - ScrollTrigger only
    // ==========================================
    
    // Image
    gsap.from("#Coaches .relative", {
        scrollTrigger: {
            trigger: "#Coaches",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.9,
        x: -80,
        duration: 1,
        ease: "power3.out"
    });

    // Badge
    gsap.from("#Coaches .absolute.bottom-6", {
        scrollTrigger: {
            trigger: "#Coaches",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0,
        y: 30,
        duration: 0.6,
        delay: 0.5,
        ease: "back.out(1.7)"
    });

    // Text content
    gsap.from("#Coaches h2", {
        scrollTrigger: {
            trigger: "#Coaches h2",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"
    });

    gsap.from("#Coaches h3", {
        scrollTrigger: {
            trigger: "#Coaches h3",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.out"
    });

    // EACH feature item
    const featureItems = document.querySelectorAll("#Coaches .space-y-6 > div");
    
    featureItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: 50,
            duration: 0.6,
            delay: index * 0.15,
            ease: "power3.out"
        });

        // Icon
        gsap.from(item.querySelector(".material-icons"), {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            scale: 0,
            duration: 0.4,
            delay: (index * 0.15) + 0.2,
            ease: "back.out(2)"
        });
    });

    // ==========================================
    // PRICING - ScrollTrigger only
    // ==========================================
    
    // Section header
    gsap.from("#Pricing .text-center", {
        scrollTrigger: {
            trigger: "#Pricing",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"
    });

    // EACH PRICING CARD
    const pricingCards = document.querySelectorAll("#Pricing .grid > div");
    
    pricingCards.forEach((card, index) => {
        let fromVars = { opacity: 0, y: 80, duration: 0.8 };
        
        if (index === 0) {
            fromVars.x = -50;
        } else if (index === 1) {
            fromVars.scale = 0.8;
            fromVars.y = 100;
        } else {
            fromVars.x = 50;
        }

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            ...fromVars,
            delay: index * 0.15,
            ease: "power3.out"
        });

        // Price counter
        const price = card.querySelector(".text-6xl");
        if (price) {
            const finalValue = price.textContent;
            gsap.from(price, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                textContent: 0,
                duration: 1.5,
                delay: 0.3 + (index * 0.1),
                ease: "power1.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                    this.targets()[0].textContent = Math.ceil(this.targets()[0].textContent);
                }
            });
        }
    });

    // ==========================================
    // LOCATION - ScrollTrigger only
    // ==========================================
    
    // Left content
    gsap.from("#Locations .w-full.md\\\\:w-1\\\\/2:first-child", {
        scrollTrigger: {
            trigger: "#Locations",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out"
    });

    // EACH info item
    const locationItems = document.querySelectorAll("#Locations .space-y-4 > div");
    
    locationItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -30,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out"
        });
    });

    // Map
    gsap.from("#Locations iframe", {
        scrollTrigger: {
            trigger: "#Locations iframe",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 60,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
    });

    // ==========================================
    // FOOTER - ScrollTrigger only
    // ==========================================
    
    const footerCols = document.querySelectorAll("footer .grid > div");
    
    footerCols.forEach((col, index) => {
        gsap.from(col, {
            scrollTrigger: {
                trigger: col,
                start: "top 95%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });

    // Social icons
    const socialIcons = document.querySelectorAll("footer .flex.gap-4 a");
    
    socialIcons.forEach((icon, index) => {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: icon,
                start: "top 95%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            scale: 0,
            duration: 0.4,
            delay: index * 0.1,
            ease: "back.out(2)"
        });
    });

    // ==========================================
    // REFRESH ON RESIZE
    // ==========================================
    
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });

    console.log("GSAP ScrollTrigger Loaded - Only scroll-based animations!");
});

// ==========================================
// MOBILE MENU - GSAP (NOT scroll-based)
// ==========================================



if (menuBtn && mobileMenu) {
    let isOpen = false;

    gsap.set(mobileMenu, {
        y: -40,
        opacity: 0,
        display: "none"
    });

    menuBtn.addEventListener("click", () => {
        if (!isOpen) {
            mobileMenu.style.display = "block";

            gsap.to(mobileMenu, {
                y: 0,
                opacity: 1,
                duration: 0.45,
                ease: "power3.out"
            });

            if (menuIcon) menuIcon.textContent = "close";
            isOpen = true;

        } else {
            gsap.to(mobileMenu, {
                y: -40,
                opacity: 0,
                duration: 0.35,
                ease: "power3.in",
                onComplete: () => {
                    mobileMenu.style.display = "none";
                }
            });

            if (menuIcon) menuIcon.textContent = "menu";
            isOpen = false;
        }
    });
}
