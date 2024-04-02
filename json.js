// Suponiendo que tienes el JSON almacenado en una variable llamada 'data'

// Obtener el array de usuarios del JSON
const usuarios = data.usuarios;

// Suponiendo que has obtenido el usuario y la contraseña del inicio de sesión y los has almacenado en variables llamadas 'usuarioInicioSesion' y 'contraseñaInicioSesion' respectivamente
const usuarioInicioSesion = "usuario1"; // Supongamos que es el usuario que intenta iniciar sesión
const contraseñaInicioSesion = "contraseña1"; // Supongamos que es la contraseña que intenta iniciar sesión

// Variable para verificar si el usuario existe
let usuarioExiste = false;

// Recorrer los usuarios para comprobar si el usuario ya existe
usuarios.forEach(usuario => {
  if (usuario.usuario === usuarioInicioSesion && usuario.contraseña === contraseñaInicioSesion) {
    usuarioExiste = true;
    return; // Salir del bucle forEach ya que hemos encontrado al usuario
  }
});

// Verificar el resultado
if (usuarioExiste) {
  console.log("El usuario ya existe y la contraseña es correcta.");
} else {
  console.log("El usuario no existe o la contraseña es incorrecta.");
}
