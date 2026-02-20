document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animação de digitação com quebra de linha
    const line1Element = document.querySelector('.typing-line-1');
    const line2Element = document.querySelector('.typing-line-2');

    const fullText1 = "Olá, eu sou o";
    const fullText2 = "Gustavo Sanches";
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    const typingSpeed = 80;
    const delayBetweenLines = 100;

    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.classList.add('cursor');

    function typeLine1() {
        if (currentIndex1 < fullText1.length) {
            line1Element.textContent = fullText1.substring(0, currentIndex1 + 1);
            line1Element.appendChild(cursor);
            currentIndex1++;
            setTimeout(typeLine1, typingSpeed);
        } else {
            line1Element.removeChild(cursor);
            line2Element.appendChild(cursor);
            setTimeout(typeLine2, delayBetweenLines);
        }
    }

    function typeLine2() {
        if (currentIndex2 < fullText2.length) {
            line2Element.textContent = fullText2.substring(0, currentIndex2 + 1);
            line2Element.appendChild(cursor);
            currentIndex2++;
            setTimeout(typeLine2, typingSpeed);
        } else {
            // Animação finalizada, o cursor permanece piscando
        }
    }

    setTimeout(() => {
        typeLine1();
    }, 500); 

    // 2. Navegação com scroll suave
    const scrollLinks = document.querySelectorAll('.nav-links a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Lógica do Menu Mobile
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-links');

    if (mobileMenuIcon && navMenu) {
        mobileMenuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuIcon.classList.toggle('active');
        });

        // Fecha o menu mobile ao clicar em algum link
        scrollLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuIcon.classList.remove('active');
            });
        });
    }

});