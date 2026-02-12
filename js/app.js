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