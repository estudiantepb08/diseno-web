const items = document.querySelectorAll('.btn_home');

// Función para marcar un elemento como activo
function marcarActivo(elemento) {
  // Eliminar la clase "active" de todos los elementos
  items.forEach(item => item.classList.remove('active'));

  // Agregar la clase "active" al elemento seleccionado
  elemento.classList.add('active');
}

// Añadir un evento click a cada elemento de la lista
items.forEach(item => {
  item.addEventListener('click', () => {
    marcarActivo(item);
  });
});
