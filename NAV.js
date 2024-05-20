document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al enlace de login
    const loginLink = document.getElementById("loginLink");

    // Obtener referencia al formulario de inicio de sesión
    const loginForm = document.getElementById("loginForm");

    // Agregar un evento de clic al enlace de login
    loginLink.addEventListener("click", function(event) {
        // Evitar el comportamiento predeterminado del enlace
        event.preventDefault();
        // Mostrar u ocultar el formulario de inicio de sesión
        if (loginForm.style.display === "none" || loginForm.style.display === "") {
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    });

    // Obtener referencia a los elementos del formulario y al mensaje de login
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");

    // Agregar un evento de envío al formulario de inicio de sesión para prevenir la recarga de la página
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Obtener los valores del nombre de usuario y la contraseña ingresados
        const username = usernameInput.value;
        const password = passwordInput.value;
        // Verificar las credenciales y mostrar el mensaje de login
        if ((username === "Arnau" && password === "Arnau") || (username === "David" && password === "David")) {
            
            window.location.href = "PlanNutricion.html"; 

        } else {
            loginMessage.textContent = "Nombre de usuario o contraseña incorrectos";
        }
        // Limpiar los campos de entrada
        usernameInput.value = "";
        passwordInput.value = "";
    });
});

    // Funciones de redirección
    window.redirectToPagePlanNutricion = function() {
        window.location.href = "PlanNutricion.html"; 
    }

    window.redirectToPagePlanEntrenamiento = function() {
        window.location.href = "PlanEntrenamiento.html"; 
    }

    window.redirectToPageProductos = function() {
        window.location.href = "productos.html"; 
    }

    window.redirectToPageBlog = function() {
        window.location.href = "blog.html"; 
    }

    window.redirectToPageNosotros = function() {
        window.location.href = "nosotros.html"; 
    }

    window.redirectToPageINFO = function() {
        window.location.href = "info.html"; 
    }

    window.redirectToPageIndex = function() {
        window.location.href = "index.html"; 
    }

