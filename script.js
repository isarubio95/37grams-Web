document.addEventListener("DOMContentLoaded", function () {
    const hrElements = document.querySelectorAll('.hr'); // Selecciona todos los <hr>

    // Crear el observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añadir clase al elemento visible
        }
        });
    }, { threshold: 0.8 }); // Detectar cuando el 90% del hr sea visible

    // Observar cada <hr> de la página
    hrElements.forEach(hr => {
        observer.observe(hr);
    });
});
 


const checkbox = document.getElementById('check');
const spanishText = document.getElementById('spanish');
const englishText = document.getElementById('english');

function toggleLanguage() {
    if (checkbox.checked) {
        spanishText.classList.add('hidden');
        englishText.classList.remove('hidden');
    } 
    else {
        englishText.classList.add('hidden');
        spanishText.classList.remove('hidden');
    }
}

// Escuchar el cambio en el checkbox
checkbox.addEventListener('change', toggleLanguage);

// Llamar a la función para establecer el estado inicial
toggleLanguage();




const navButton = document.getElementById('nav-button');
const navMenu = document.getElementById('links');

// Función para manejar la visibilidad del menú con efecto
function toggleMenu() {
    if (window.innerWidth >= 999) {
        // En pantallas grandes, mostrar el menú sin efectos
        navMenu.style.display = 'flex';
        navMenu.classList.remove('show', 'hide');
        navButton.checked = false; // Desmarcar el checkbox para evitar problemas
        navMenu.style.visibility = 'visible';
    } else {
        // En pantallas pequeñas, manejar el efecto de apertura/cierre
        if (navButton.checked) {
            navMenu.classList.remove('hide');
            navMenu.classList.add('show'); // Añadir la clase para abrir
        } else {
            navMenu.classList.remove('show');
            navMenu.classList.add('hide');
        }
    }
}

// Escuchar el cambio en el checkbox
navButton.addEventListener('change', toggleMenu);

// Escuchar el cambio de tamaño de la ventana
window.addEventListener('resize', toggleMenu);

// Llamar a la función para establecer el estado inicial cuando se carga la página
window.addEventListener('load', toggleMenu);

// Llamar a la función para establecer el estado inicial
toggleMenu();




// Objeto de traducciones
const translations = {
    "es": {
        // Navegación
        "nav-services": "Servicios",
        "nav-certifications": "Certificaciones",
        "nav-academy-part1": "La Acad",
        "nav-academy-part2": "emia",
        "nav-contact": "Contacto",
        "nav-reviews": "Opiniones",

        // Título principal
        "welcome-text": "Bienvenido a",
        "description": "Como profesionales del inglés con más de 10 años de experiencia práctica, nuestro objetivo es trascender los límites del lenguaje para alcanzar un estándar lingüístico superior.",


        // Slogans
        "slogan-title-1": "CONSTANCIA",
        "slogan-text-1": "El progreso requiere perseverancia. Fomentamos un enfoque disciplinado para que cada alumno avance hacia la fluidez de manera efectiva.",
        "slogan-title-2": "DISCIPLINA",
        "slogan-text-2": "Aspiramos a la máxima calidad en cada clase, ofreciendo a los estudiantes herramientas para destacar en su entorno profesional.",
        "slogan-title-3": "EXCELENCIA",
        "slogan-text-3": "La dedicación a largo plazo es clave para el éxito. Cultivamos la perseverancia como motor del aprendizaje continuo.",

        // Servicios
        "services-title": "SERVICIOS",
        "services-description": "En 37GRAMS. ofrecemos una variedad de servicios de consultoría en inglés para empresas y particulares. Nuestro objetivo es ayudar a nuestros clientes a comunicarse de manera efectiva en inglés en entornos profesionales.",
        "service-title-1": "Negocios y Entrevistas",
        "service-text-1": "Enfocada en mejorar las habilidades de comunicación en entornos profesionales.",
        "service-title-2": "Coaching en Presentaciones",
        "service-text-2": "Ayudamos a su equipo a realizar presentaciones seguras y efectivas.",
        "service-title-3": "Redacción y Edición",
        "service-text-3": "Aseguramos que las comunicaciones de su empresa sean pulidas y profesionales.",
        "service-title-4": "Comunicación Intercultural",
        "service-text-4": "Para superar barreras lingüísticas y culturales en los negocios internacionales.",
        "service-title-5": "Preparación de Certificados",
        "service-text-5": "Domina los exámenes Cambridge, Trinity, IELTS, Aptis, TOEFL y EOI.",

        // Certificaciones
        "certificates-title": "CERTIFICACIONES OFICIALES",

        // Academia
        "office-title": "THE OFFICE",
        "office-description": "El lugar donde los objetivos y metas se cumplen. La Oficina es nuestro santuario del aprendizaje. Con una de las tasas más altas de éxito en nuestro entorno regional, entrar significa cruzar las puertas del aprendizaje definitivo. Estás invitado a entrar y charlar sin ningún compromiso.",

        // Contacto
        "contact-title": "CONTACTO",
        "label-name": "Nombre",
        "label-email": "Correo",
        "label-message": "Mensaje",
        "input-name": "Escribe tu nombre",
        "input-email": "ejemplo@dominio.com",
        "input-message": "Déjanos tu mensaje",
        "privacy-policy-text-before": "He leído y acepto la",
        "privacy-policy-link": "Política de Privacidad.",
        "button-text": "Enviar",

        // Opiniones
        "reviewer-name-1": "Carlos Pérez",
        "review-text-1": "Excelente servicio, realmente se adaptan a las necesidades de cada cliente. Las clases me ayudaron a mejorar mi nivel de inglés rápidamente.",
        "reviewer-name-2": "Ana Martínez",
        "review-text-2": "Muy profesionales y dedicados. Las sesiones son dinámicas y enfocadas en mejorar las habilidades que realmente se usan en el entorno laboral.",
        "reviewer-name-3": "David Sánchez",
        "review-text-3": "La metodología de enseñanza es clara y efectiva. Gracias a las clases, ahora me siento mucho más seguro hablando inglés en el trabajo.",
        "reviewer-name-4": "María Gómez",
        "review-text-4": "He notado un gran avance en mi fluidez. Las clases están muy bien estructuradas y enfocadas a mejorar la comunicación profesional.",
        "reviewer-name-5": "José López",
        "review-text-5": "Las clases son dinámicas y prácticas, me ayudaron mucho a mejorar mis habilidades de conversación en inglés para mi trabajo diario.",
        "reviewer-name-6": "Laura Rodríguez",
        "review-text-6": "El enfoque en situaciones reales de trabajo ha sido clave para sentirme más cómodo utilizando el inglés en mi entorno profesional.",
        "reviewer-name-7": "Sergio Fernández",
        "review-text-7": "Un servicio excelente, las clases son amenas y enfocadas en mejorar la comunicación. Definitivamente noté una mejora desde el primer mes.",
        "reviewer-name-8": "Isabel García",
        "review-text-8": "El equipo es muy profesional y atento. Las clases son personalizadas y se enfocan en los aspectos más importantes para cada alumno.",
        "reviewer-name-9": "Roberto Torres",
        "review-text-9": "Las clases me han ayudado a ganar confianza en las reuniones internacionales. La forma en que enseñan es clara y práctica.",
        "reviewer-name-10": "Elena Ramírez",
        "review-text-10": "Recomiendo totalmente este servicio. Las lecciones están muy bien organizadas y centradas en mejorar la comunicación en situaciones laborales.",

        // Footer
        "footer-location-title": "Ubicación",
        "footer-location-address": "C/República de Argentina, 44",
        "footer-location-city": "26005 Logroño (La Rioja)",

        "footer-hours-title": "Horario",
        "footer-hours-days": "Lunes a Viernes",
        "footer-hours-time": "10:00 - 20:00",

        "footer-contact-title": "Contacto",

        "footer-for-you-title": "Para ti",
        "footer-link-1": "Cambridge English",
        "footer-link-2": "Ejercicios de Listening",
        "footer-link-3": "British Council",
        "footer-link-4": "BBC",

        "footer-copyright": "&copy; 2024 37GRAMS.",
        "footer-rights": "Todos los derechos reservados.",
    },
    "en": {
        // Navegación
        "nav-services": "Services",
        "nav-certifications": "Certifications",
        "nav-academy" : "The Office",
        "nav-contact": "Contact",
        "nav-reviews": "Reviews",

        // Título principal
        "welcome-text": "Welcome to",
        "description": "As English professionals with more than 10 years of hands on experience, we aim to transcend the limits of language to acheive a higher linguistic standard.",

        // Slogans
        "slogan-title-1": "CONSISTENCY",
        "slogan-text-1": "Progress requires perseverance. We foster a disciplined approach so each student advances toward fluency effectively.",
        "slogan-title-2": "DISCIPLINE",
        "slogan-text-2": "We aspire to the highest quality in each class, offering students tools to excel in their professional environment.",
        "slogan-title-3": "EXCELLENCE",
        "slogan-text-3": "Long-term dedication is key to success. We cultivate perseverance as the engine of continuous learning.",

        // Servicios
        "services-title": "SERVICES",
        "services-description": "At 37GRAMS, we offer a variety of English consulting services for companies<br> and individuals. Our goal is to help our clients communicate<br>effectively in English in professional settings.",
        "service-title-1": "Business and Interviews",
        "service-text-1": "Focused on improving communication skills in professional environments.",
        "service-title-2": "Presentation Coaching",
        "service-text-2": "We help your team deliver confident and effective presentations.",
        "service-title-3": "Writing and Editing",
        "service-text-3": "We ensure your company's communications are polished and professional.",
        "service-title-4": "Intercultural Communication",
        "service-text-4": "To overcome linguistic and cultural barriers in international business.",
        "service-title-5": "Certificate Preparation",
        "service-text-5": "Master the Cambridge, Trinity, IELTS, Aptis, TOEFL, and EOI exams.",

        // Certificaciones
        "certificates-title": "OFFICIAL CERTIFICATIONS",

        // Academia
        "academy-title": "THE OFFICE",
        "academy-description": "The place where goals and objectives are met. The Office is our sanctuary of learning. With one of the highest success rates in our regional environment, entering means crossing the doors of definitive learning. You are invited to come in and chat without any commitment.",

        // Contacto
        "contact-title": "CONTACT",
        "label-name": "Name",
        "label-email": "Email",
        "label-message": "Message",
        "input-name": "Enter your name",
        "input-email": "example@domain.com",
        "input-message": "Leave us your message",
        "privacy-policy-text-before": "I have read and accept the",
        "privacy-policy-link": "Privacy Policy.",
        "button-text": "Send",

        // Opiniones
        "reviewer-name-1": "Carlos Perez",
        "review-text-1": "Excellent service, they really adapt to each client's needs. The classes helped me improve my English level quickly.",
        "reviewer-name-2": "Ana Martinez",
        "review-text-2": "Very professional and dedicated. The sessions are dynamic and focused on improving the skills really used in the work environment.",
        "reviewer-name-3": "David Sanchez",
        "review-text-3": "The teaching methodology is clear and effective. Thanks to the classes, I now feel much more confident speaking English at work.",
        "reviewer-name-4": "Maria Gomez",
        "review-text-4": "I have noticed a great improvement in my fluency. The classes are very well structured and focused on improving professional communication.",
        "reviewer-name-5": "Jose Lopez",
        "review-text-5": "The classes are dynamic and practical, they helped me a lot to improve my English conversation skills for my daily work.",
        "reviewer-name-6": "Laura Rodriguez",
        "review-text-6": "The focus on real work situations has been key to feeling more comfortable using English in my professional environment.",
        "reviewer-name-7": "Sergio Fernandez",
        "review-text-7": "An excellent service, the classes are enjoyable and focused on improving communication. I definitely noticed an improvement from the first month.",
        "reviewer-name-8": "Isabel Garcia",
        "review-text-8": "The team is very professional and attentive. The classes are personalized and focus on the most important aspects for each student.",
        "reviewer-name-9": "Roberto Torres",
        "review-text-9": "The classes have helped me gain confidence in international meetings. The way they teach is clear and practical.",
        "reviewer-name-10": "Elena Ramirez",
        "review-text-10": "I totally recommend this service. The lessons are very well organized and focused on improving communication in work situations.",

        // Footer
        "footer-location-title": "Location",
        "footer-location-address": "República de Argentina St., 44",
        "footer-location-city": "26005 Logroño (La Rioja)",

        "footer-hours-title": "Hours",
        "footer-hours-days": "Monday to Friday",
        "footer-hours-time": "10:00 AM - 8:00 PM",

        "footer-contact-title": "Contact",

        "footer-for-you-title": "For you",
        "footer-link-1": "Cambridge English",
        "footer-link-2": "Listening Exercises",
        "footer-link-3": "British Council",
        "footer-link-4": "BBC",

        "footer-copyright": "&copy; 2024 37GRAMS.",
        "footer-rights": "All rights reserved.",
    }
};

function changeLanguage() {
    const language = checkbox.checked ? 'en' : 'es';
    
    // Iterar sobre todas las claves del idioma seleccionado
    for (const key in translations[language]) {
        const element = document.getElementById(key);
        if (element) {
            const text = translations[language][key];
            if (element.placeholder !== undefined) {
                element.placeholder = text;
            } else if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                // Nada, ya manejado
            } else if (element.hasAttribute('href') && key.startsWith('footer-link')) {
                element.textContent = text;
            } else {
                element.innerHTML = text;
            }
        }
    }

    // Cambiar el texto del botón de idioma
    document.getElementById('spanish').classList.toggle('hidden', language === 'en');
    document.getElementById('english').classList.toggle('hidden', language === 'es');
}

// Escuchar el cambio en el checkbox
checkbox.addEventListener('change', changeLanguage);

// Establecer el idioma inicial al cargar la página
window.addEventListener('load', changeLanguage);




// Selecciona todos los libros solo una vez
const books = document.querySelectorAll('.book');

// Función para abrir/cerrar un libro al hacer clic en móvil o pantallas pequeñas
function bookInteract(event) {
    const book = event.currentTarget; // El libro específico que fue clicado
    book.classList.toggle('open');    // Alterna entre abierto y cerrado
    book.classList.toggle('closed');  // Alterna la clase cerrada
}

// Detecta si es un dispositivo táctil
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Si es un dispositivo táctil, deshabilita hover y usa clic
if (isTouchDevice) {
    books.forEach(book => {
        book.classList.add('closed')
        book.addEventListener('click', bookInteract);
    });
}
