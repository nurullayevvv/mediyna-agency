// Forma ochilishi uchun funksiya
function openForm() {
    const button = document.querySelector('.btn-register');
    const form = document.getElementById('form-container');

    if (button && form) {
        button.style.display = 'none';
        form.style.display = 'block';
    } else {
        console.error('Element(lar) topilmadi.');
    }
}

// EmailJS-ni boshlash
(function () {
    emailjs.init("YTHPJTksst8N2HSEj"); // Public Key'ni EmailJS'dan oling
})();

// Formani jo'natish hodisasini qo'shish
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formani avtomatik jo'natishni to'xtatish

    // EmailJS orqali yuborish
    emailjs.sendForm("service_99x4hur", "template_39lwa0r", this)
        .then(function (response) {
            alert("Ma'lumot muvaffaqiyatli yuborildi!");
            console.log("SUCCESS!", response.status, response.text);

            // Formani tozalash va o'chirish
            document.getElementById("contactForm").reset();
            document.getElementById("form-container").style.display = 'none';
            document.querySelector('.btn-register').style.display = 'block';
        }, function (error) {
            alert("Xatolik yuz berdi! " + JSON.stringify(error));
            console.error("FAILED...", error);
        });
});
// Forma ochilishi uchun funksiya
function openForm() {
    const button = document.querySelector('.btn-register');
    const form = document.getElementById('form-container');

    if (button && form) {
        button.style.display = 'none';
        form.style.display = 'block';
    } else {
        console.error('Element(lar) topilmadi.');
    }
}

// EmailJS-ni boshlash
(function () {
    emailjs.init("YTHPJTksst8N2HSEj"); // Public Key'ni EmailJS'dan oling
})();

// Formani jo'natish hodisasini qo'shish
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formani avtomatik jo'natishni to'xtatish

    // EmailJS orqali yuborish
    emailjs.sendForm("service_99x4hur", "template_39lwa0r", this)
        .then(function (response) {
            alert("Ma'lumot muvaffaqiyatli yuborildi!");
            console.log("SUCCESS!", response.status, response.text);

            // Formani tozalash va o'chirish
            document.getElementById("contactForm").reset();
            document.getElementById("form-container").style.display = 'none';
            document.querySelector('.btn-register').style.display = 'block';
        }, function (error) {
            alert("Xatolik yuz berdi! " + JSON.stringify(error));
            console.error("FAILED...", error);
        });
});


