// IMPORTACIONES
import { validarFormulario, validacionSoloLetras, validacionSoloNumeros, validacionLetrasYNumeros, validacionContrasena, limpiar, validacionDiezCaracter } from "./module.js";
// VARIABLES
const formulario = document.querySelector('form');
const boton = document.querySelector('#btn_validar');
const nombre = document.querySelector('[name = "nombre"]');
const apellido = document.querySelector('[name = "apellido"]');
const telefono = document.querySelector('[name = "telefono"]');
const documento = document.querySelector('[name = "documento"]');
const usuario = document.querySelector('[name = "usuario"]');
const contrasena = document.querySelector('[name="genero"]');
// const ciudad = document.querySelector('[name="ciudad"]');
// const lenguaje = document.querySelector('[name="lenguaje"]');
// const genero = document.querySelector('[name="genero"]');
const politicas = document.querySelector('#politicas');

// FUNCIONES


const validarBoton = (event) => {
  if (!politicas.checked) {
    boton.setAttribute('disabled', '');
  }
  else {
    boton.removeAttribute('disabled')
  }
}

const isValid = () => {
  let data = validar(e);
  console.log(data);
}

// EVENTOS
addEventListener('DOMContentLoaded', validarBoton);
politicas.addEventListener('change', validarBoton);

formulario.addEventListener('submit', isValid);
formulario.addEventListener('submit', validarFormulario);

nombre.addEventListener('keydown', validacionSoloLetras);
apellido.addEventListener('keydown', validacionSoloLetras);
telefono.addEventListener('keydown', validacionSoloNumeros);
documento.addEventListener('keydown', validacionSoloNumeros);
usuario.addEventListener('keydown', validacionLetrasYNumeros);
contrasena.addEventListener('keydown', validacionContrasena);
// ciudad.addEventListener('keydown',validacionSoloLetras);
// genero.addEventListener('keydown',validacionSoloLetras);
// lenguaje.addEventListener('keydown',validacionSoloLetras);

nombre.addEventListener('blur', limpiar);
apellido.addEventListener('blur', limpiar);
telefono.addEventListener('blur', limpiar);
documento.addEventListener('blur', limpiar);
usuario.addEventListener('blur', limpiar);
contrasena.addEventListener('blur', limpiar);
// ciudad.addEventListener('blur', limpiar);
// genero.addEventListener('blur', limpiar);
// lenguaje.addEventListener('blur', limpiar);

nombre.addEventListener('keypress', validacionDiezCaracter);


const path = window.location.pathname;

if (path.includes("ciudades.html")) {
  validacionSoloLetras('[name="ciudad"]', "Ingrese una ciudad válida");
} else if (path.includes("genero.html")) {
  validacionSoloLetras('[name="genero"]', "Ingrese un género válido");
} else if (path.includes("lenguajes.html")) {
  validacionSoloLetras('[name="lenguaje"]', "Ingrese un lenguaje válido");
}