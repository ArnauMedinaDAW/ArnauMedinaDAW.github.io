document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const galleryImages = document.querySelectorAll(".gallery img");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filterValue = this.getAttribute("data-filter");

            // Remueve la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Agrega la clase 'active' al botón clickeado
            this.classList.add("active");

            // Muestra u oculta las imágenes basadas en el filtro
            galleryImages.forEach(image => {
                if (filterValue === "all" || image.classList.contains(filterValue)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });
});
