document.addEventListener("DOMContentLoaded", function() {
    const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
    const imageContainers = document.querySelectorAll(".image-container");
    const gallery = document.querySelector(".gallery");

    function applyFilters() {
        const checkedFilters = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute("data-filter"));

        let filteredContainers = Array.from(imageContainers);

        if (!checkedFilters.includes("all")) {
            filteredContainers = filteredContainers.filter(container =>
                checkedFilters.some(filter => container.querySelector("img").classList.contains(filter))
            );
        }

        // Ordenar los contenedores filtrados por el texto descriptivo
        filteredContainers.sort((a, b) => {
            const textA = a.querySelector(".image-description").textContent.trim().toLowerCase();
            const textB = b.querySelector(".image-description").textContent.trim().toLowerCase();
            return textA.localeCompare(textB);
        });

        // Limpiar la galería y añadir los contenedores ordenados
        gallery.innerHTML = "";
        filteredContainers.forEach(container => gallery.appendChild(container));
    }

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", applyFilters);
    });

    // Aplicar filtros inicialmente
    applyFilters();
});
