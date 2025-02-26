// Obtener el ícono del menú y la lista del menú
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

// Función para alternar la visibilidad del menú
menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active"); // Alterna la clase 'active' para mostrar/ocultar el menú
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
    if (!navList.contains(event.target) && event.target !== menuIcon) {
        navList.classList.remove("active"); // Cerrar el menú si se hace clic fuera
    }
});
