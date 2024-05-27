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

function redirectToPageProducte1() {
    window.location.href = "producte1.html";
}

function redirectToPageProducte2() {
    window.location.href = "producte2.html";
}

function redirectToPageProducte3() {
    window.location.href = "producte3.html";
}

function redirectToPageProducte4() {
    window.location.href = "producte4.html";
}

function redirectToPageProducte5() {
    window.location.href = "producte5.html";
}

function redirectToPageProducte6() {
    window.location.href = "producte6.html";
}

function redirectToPageProducte7() {
    window.location.href = "producte7.html";
}

function redirectToPageProducte8() {
    window.location.href = "producte8.html";
}

function redirectToPageProducte9() {
    window.location.href = "producte9.html";
}


function redirectToPageProducte10() {
    window.location.href = "producte10.html";
}

function redirectToPageProducte11() {
    window.location.href = "producte11.html";
}

function redirectToPageProducte12() {
    window.location.href = "producte12.html";
}

function redirectToPageProducte13() {
    window.location.href = "producte13.html";
}

function redirectToPageProducte14() {
    window.location.href = "producte14.html";
}

function redirectToPageProducte15() {
    window.location.href = "producte15.html";
}

function redirectToPageProducte16() {
    window.location.href = "producte16.html";
}

function redirectToPageProducte17() {
    window.location.href = "producte17.html";
}

function redirectToPageProducte18() {
    window.location.href = "producte18.html";
}

function redirectToPageProducte19() {
    window.location.href = "producte19.html";
}

function redirectToPageProducte20() {
    window.location.href = "producte20.html";
}

function redirectToPageProducte21() {
    window.location.href = "producte21.html";
}

function redirectToPageProducte22() {
    window.location.href = "producte22.html";
}

function redirectToPageProducte23() {
    window.location.href = "producte23.html";
}

function redirectToPageProducte24() {
    window.location.href = "producte24.html";
}

function redirectToPageProducte25() {
    window.location.href = "producte25.html";
}


function redirectToPageProducte26() {
    window.location.href = "producte26.html";
}

function redirectToPageProducte27() {
    window.location.href = "producte27.html";
}

function redirectToPageProducte28() {
    window.location.href = "producte28.html";
}

function redirectToPageProducte29() {
    window.location.href = "producte29.html";
}

function redirectToPageProducte30() {
    window.location.href = "producte30.html";
}

function redirectToPageProducte31() {
    window.location.href = "producte31.html";
}

function redirectToPageProducte32() {
    window.location.href = "producte32.html";
}

function redirectToPageProducte33() {
    window.location.href = "producte33.html";
}

function redirectToPageProducte34() {
    window.location.href = "producte34.html";
}

function redirectToPageProducte35() {
    window.location.href = "producte35.html";
}

function redirectToPageProducte36() {
    window.location.href = "producte36.html";
}

function redirectToPageProducte37() {
    window.location.href = "producte37.html";
}

function redirectToPageProducte38() {
    window.location.href = "producte38.html";
}

function redirectToPageProducte39() {
    window.location.href = "producte39.html";
}

function redirectToPageProducte40() {
    window.location.href = "producte40.html";
}

function redirectToPageProducte41() {
    window.location.href = "producte41.html";
}

function redirectToPageProducte42() {
    window.location.href = "producte42.html";
};
