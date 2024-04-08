// Obtener referencia al enlace de login
const loginLink = document.querySelector("nav ul.menu-horizontal li:first-child a");

// Agregar un evento de clic al enlace de login
loginLink.addEventListener("click", function(event) {
    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault();
    // Mostrar u ocultar el formulario de inicio de sesión
    const loginForm = document.getElementById("loginForm");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
});

// Obtener referencia a los elementos del formulario y al botón de registro
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");

// Agregar un evento de cambio a los campos de entrada de usuario y contraseña
usernameInput.addEventListener("input", checkCredentials);
passwordInput.addEventListener("input", checkCredentials);

// Función para verificar las credenciales ingresadas
function checkCredentials() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Realizar una solicitud AJAX para leer el archivo JSON
    fetch('JSON.json')
        .then(response => response.json())
        .then(data => {
            // Verificar si las credenciales coinciden con alguna entrada en el archivo JSON
            const userExists = data.usuarios.some(user => user.usuario === username && user.contraseña === password);
            var users = data.usuarios;
            // Si las credenciales no existen, mostrar el botón de registro
            if (!userExists) {
                registerBtn.style.display = "block";
            } else {
                registerBtn.style.display = "none";
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Agregar un evento de envío al formulario de inicio de sesión para prevenir la recarga de la página
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
})


//Cambiar de html
function redirectToPageINFO() {
    window.location.href = "info.html"; 
}

function redirectToPageBlog() {
    window.location.href = "blog.html"; 
}

function redirectToPagePlanes() {
    window.location.href = "planes.html"; 
}

function redirectToPageEntrenadores() {
    window.location.href = "nosotros.html"; 
}
function redirectToPagePlanNutricion() {
    window.location.href = "PlanNutricion.html"; 
}
function redirectToPagePlanEntrenamiento() {
    window.location.href = "PlanEntrenamiento.html"; 
}

