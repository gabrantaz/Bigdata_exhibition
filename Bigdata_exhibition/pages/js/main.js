// main.js

// Function to navigate through presentation slides
function navigateSlides(direction) {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    slides[currentSlide].classList.remove('active');

    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % slides.length;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    slides[currentSlide].classList.add('active');
}

// Event listeners for navigation buttons
document.getElementById('nextSlide').addEventListener('click', () => navigateSlides('next'));
document.getElementById('prevSlide').addEventListener('click', () => navigateSlides('prev'));

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para cambiar colores
    window.cambiarColor = function() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
        });
    };

    // Mostrar agradecimiento
    window.mostrarAgradecimiento = function() {
        alert('¡Gracias por visitar nuestra exposición sobre Big Data!');
    };

    // Funcionalidad para tutoriales
    window.mostrarTutoriales = function() {
        const links = [
            'https://www.youtube.com/watch?v=tutorial1',
            'https://www.youtube.com/watch?v=tutorial2'
        ];
        const lista = links.map(link => `<a href="${link}" target="_blank">Tutorial</a>`).join('<br>');
        const div = document.createElement('div');
        div.innerHTML = lista;
        document.body.appendChild(div);
    };
});

function changeColor(className, color) {
    const elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.style.backgroundColor = color;
    }
}

function showTutorials() {
    const tutorials = [
        'HTML y CSS Básico',
        'JavaScript para principiantes',
        'Desarrollo Web con Flask'
    ];
    
    const tutorialList = tutorials.map(tutorial => 
        `<li><a href="#">${tutorial}</a></li>`
    ).join('');
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Tutoriales Disponibles</h3>
            <ul>${tutorialList}</ul>
            <button onclick="this.parentElement.parentElement.remove()">Cerrar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function editPersonalInfo() {
    const infoContainer = document.querySelector('.info-container');
    const fields = infoContainer.querySelectorAll('p');
    
    fields.forEach(field => {
        const text = field.textContent;
        const label = text.split(':')[0];
        const value = text.split(':')[1].trim();
        
        field.innerHTML = `
            <strong>${label}:</strong> 
            <input type="text" value="${value}" onchange="updateField(this)">
        `;
    });
}

function showThankYou() {
    alert('¡Gracias por visitar nuestra exposición sobre Big Data!');
}

function enableEditing(className) {
    const container = document.querySelector('.' + className);
    const elements = container.querySelectorAll('p, li');
    
    elements.forEach(element => {
        element.contentEditable = true;
        element.style.border = '1px dashed #ccc';
    });
}

function showVideoTutorials() {
    window.open('https://www.youtube.com/playlist?list=TU_PLAYLIST_ID', '_blank');
}

function showCourses() {
    window.open('https://www.coursera.org/browse/computer-science', '_blank');
}