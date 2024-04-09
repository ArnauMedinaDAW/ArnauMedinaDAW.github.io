document.addEventListener("DOMContentLoaded", function() {
    const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
    const galleryImages = document.querySelectorAll(".gallery img");

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            const checkedFilters = Array.from(filterCheckboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.getAttribute("data-filter"));

            galleryImages.forEach(image => {
                const imageClasses = Array.from(image.classList);
                if (checkedFilters.includes("all") || imageClasses.some(filter => checkedFilters.includes(filter))) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });
});
