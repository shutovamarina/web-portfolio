const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

//анимация
gsap.from(".title_js", {
    text: {
        value: "Шутова Марина",
    },
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.05,
    y: 50,
    opacity: 0,
    delay: 1
});


gsap.from(".title_js_48", {
    scale: 0.8,
    opacity: 0,
    blur: 5,
    duration: 2,
    ease: "power2.out",
    delay: 2.5,
    onStart: () => gsap.to(".title_js_48", { blur: 0, duration: 1 })
});


gsap.registerPlugin(ScrollTrigger);


gsap.from(".title__section-title", {
    scrollTrigger: ".title__section-title",
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
    stagger: 1
});

gsap.from(".about__text", {
    scrollTrigger: ".about__text",
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power1.out"
});

gsap.from(".resume__item", {
    scrollTrigger: ".resume__item",
    y: 150,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power1.out"
});


//Start of Tawk.to Script

var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6821ef375fa91f190c49bc5c/1ir28sseo';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

//End of Tawk.to Script/

//форма отправки писем
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
});



gsap.from(".price", {
    scrollTrigger: {
        trigger: ".price",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});
gsap.from(".price__item", {
    scrollTrigger: {
        trigger: ".price",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
});


gsap.from(".skills", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});
gsap.from(".skills__item", {
    scrollTrigger: {
        trigger: ".skills__item",
        start: "top 85%",
        toggleActions: "play none none none",
    },
    scale: 0.9,
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});


gsap.from(".contacts", {
    scrollTrigger: {
        trigger: ".contacts",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});
gsap.from(".contacts__input, .contacts__textarea, .contacts__btn", {
    scrollTrigger: {
        trigger: ".contacts",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
});

gsap.from(".portfolio .title__section-title", {
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",

});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactsModal');
    const thanksBlock = document.querySelector('.thanks-contacts');
    const contactForm = document.querySelector('#contacts-form');

    // 1. Показ модального окна благодарности, если флаг в sessionStorage
    if (sessionStorage.getItem('showThanks') === '1') {
        if (thanksBlock) thanksBlock.style.display = 'block';
        if (modal) modal.style.display = 'flex';
        sessionStorage.removeItem('showThanks');
    }

    // 2. Обработка отправки формы
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);

            formData.append('access_key', 'd8b960b5-d8a0-4194-a006-a50b4d9c1102');


            formData.append('subject', 'Новое письмо с сайта-портфолио');
            formData.append('from_name', 'Марина (портфолио)');

            fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        contactForm.reset();
                        sessionStorage.setItem('showThanks', '1'); // Устанавливаем флаг
                        location.reload(); // Обновляем страницу (модалка покажется по флагу)
                    } else {
                        alert('Ошибка при отправке сообщения.');
                    }
                })
                .catch(() => {
                    alert('Ошибка сети при отправке сообщения.');
                });
        });
    }

    // 3. Закрытие окна благодарности по кнопке
    document.querySelectorAll('.close-contacts, .close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    });

    // 4. Закрытие по клику на фон
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});