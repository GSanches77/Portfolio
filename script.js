document.addEventListener('DOMContentLoaded', () => {
// Animação de digitação com quebra de linha
const line1Element = document.querySelector('.typing-line-1');
    const line2Element = document.querySelector('.typing-line-2');

    const fullText1 = "Olá, eu sou o";
    const fullText2 = "Gustavo Sanches";
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    const typingSpeed = 80;
    const delayBetweenLines = 100;

    // Cria o elemento do cursor dinamicamente
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.classList.add('cursor');

    function typeLine1() {
        if (currentIndex1 < fullText1.length) {
            // Adiciona o cursor após o texto em digitação
            line1Element.textContent = fullText1.substring(0, currentIndex1 + 1);
            line1Element.appendChild(cursor);
            currentIndex1++;
            setTimeout(typeLine1, typingSpeed);
        } else {
            // Remove o cursor da linha 1 e o adiciona na linha 2
            line1Element.removeChild(cursor);
            line2Element.appendChild(cursor);
            setTimeout(typeLine2, delayBetweenLines);
        }
    }

    function typeLine2() {
        if (currentIndex2 < fullText2.length) {
            // Adiciona o cursor após o texto em digitação
            line2Element.textContent = fullText2.substring(0, currentIndex2 + 1);
            line2Element.appendChild(cursor);
            currentIndex2++;
            setTimeout(typeLine2, typingSpeed);
        } else {
            // Quando a digitação termina, o cursor permanece no final
        }
    }

    // Inicia a animação após um pequeno delay
    setTimeout(() => {
        typeLine1();
    }, 500); 

    // 1. Navegação com scroll suave
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Animação da barra de progresso das habilidades
    function animateProgressBars() {
        const skillsSection = document.getElementById('skills');
        const progressBars = document.querySelectorAll('.progress');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0'; // Reseta a largura para animar novamente
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 500); // Pequeno delay para a animação ser visível
                    });
                    observer.disconnect(); // Desconecta o observer após a animação
                }
            });
        });

        observer.observe(skillsSection);
    }

    animateProgressBars();
    
    // 3. Validação do formulário de contato (apenas cliente-side)
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        // Validação básica - o atributo 'required' no HTML já faz a maior parte
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos do formulário.');
            e.preventDefault(); // Impede o envio do formulário
        } else {
            // Nota: Para o formulário funcionar de verdade,
            // você precisa de um serviço como Formspree.io ou um servidor.
            // A 'action="#"' não irá enviar o email.
            alert('Mensagem enviada com sucesso!');
        }
    });
});
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuIcon.addEventListener('click', () => {
        // Alterna a classe 'active' no menu e no ícone
        navLinks.classList.toggle('active');
        mobileMenuIcon.classList.toggle('active');
    });

    // Opcional: Fechar o menu ao clicar em um link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.remove('active');
        });
    });