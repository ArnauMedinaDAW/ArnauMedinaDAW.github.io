
// FitCamp.js

// Obtener referencia al botón de login y al formulario de inicio de sesión
const loginBtn1= document.querySelector("#banner button");
const loginForm1 = document.getElementById("loginForm");

// Agregar un evento de clic al botón de login
loginBtn1.addEventListener("click", function() {
    // Si el formulario está oculto, mostrarlo; de lo contrario, ocultarlo
    if (loginForm1.style.display === "none") {
        loginForm1.style.display = "block";
    } else {
        loginForm1.style.display = "none";
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
    window.location.href = "entrenadores.html"; 
}