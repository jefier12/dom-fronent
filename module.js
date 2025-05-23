export const validarFormulario = (e) => {
    e.preventDefault();
  
    const obj = {};
  
    // Filtrar campos requeridos
    const campos = [...e.target].filter((elemento) =>
      elemento.hasAttribute('required')
    );
  
    // Filtrar radios y checkboxes
    const radios = campos.filter((elemento) => elemento.type === "radio");
    const checkbox = campos.filter((elemento) => elemento.type === "checkbox");
  
    // Validar selección de radio
    const campo_radio = radios.find((radio) => radio.checked) || {};
  
    // Validar selección de checkboxes
    const campo_checkbox = checkbox.filter((e) => e.checked);
  
    if (campo_checkbox.length < 3) {
      obj[checkbox[0].name] = "";
      alert("Tiene que seleccionar 3 o más habilidades");
    } else {
      obj[checkbox[0].name] = campo_checkbox.map(e => e.value);
      console.log(campo_checkbox);
    }
  
    if (Object.keys(campo_radio).length === 0) {
      obj[radios[0].name] = "";
    } else {
      obj[campo_radio.name] = campo_radio.value;
    }
  
    const objeto = {};
  
    campos.forEach(campo => {
      switch (campo.tagName) {
        case 'INPUT':
          if (campo.type !== "radio") {
            objeto[campo.name] = campo.value;
          }
  
          if (
            campo.type === "text" ||
            campo.type === "tel" ||
            campo.type === "number" ||
            campo.type === "password"
          ) {
            if (campo.value.trim() === "") {
              if (campo.nextElementSibling) {
                campo.nextElementSibling.remove();
              }
              campo.classList.add('input_error');
              const mensaje = document.createElement('span');
              mensaje.classList.add('span_error');
              mensaje.textContent = 'Ingresa tu campo completo';
              campo.insertAdjacentElement('afterend', mensaje);
            } else {
              obj[campo.name] = campo.value;
            }
          }
          break;
  
        case 'SELECT':
          if (campo.selectedIndex === 0) {
            if (campo.nextElementSibling) {
              campo.nextElementSibling.remove();
            }
            campo.classList.add('input_error');
            const mensaje = document.createElement('span');
            mensaje.classList.add('span_error');
            mensaje.textContent = 'Ingresa tu campo completo';
            campo.insertAdjacentElement('afterend', mensaje);
          } else {
            objeto[campo.name] = campo.value;
          }
          break;
  
        default:
          break;
      }
    });
  
    console.log(objeto);
    return obj;
  };
  
  export const validacionSoloLetras = (event) => {
    const RegExpLetras = /[0-9]/;
    if (RegExpLetras.test(event.key)) {
      event.preventDefault();
    }
  };
  
  export const validacionSoloNumeros = (event) => {
    const RegExpNumeros = /^[a-zA-Z]$/;
    if (RegExpNumeros.test(event.key)) {
      event.preventDefault();
    }
  };
  
  export const validacionLetrasYNumeros = (event) => {
    const RegExpLetrasNumeros = /^[a-zA-Z0-9]$/;
    if (!RegExpLetrasNumeros.test(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  };
  
  export const validacionContrasena = (event) => {
    const regexCaracterPermitido = /^[a-zA-Z0-9@#$%]$/;
    if (
      !regexCaracterPermitido.test(event.key) &&
      event.key !== 'Backspace' &&
      event.key !== 'Tab'
    ) {
      event.preventDefault();
    }
  };
  
  export const limpiar = (event) => {
    if (event.target.value !== "") {
      event.target.classList.remove('input_error');
      if (event.target.nextElementSibling) {
        event.target.nextElementSibling.remove();
      }
    }
  };
  
  export const validacionDiezCaracter = (event) => {
    if (event.target.value.length === 10 && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }; 

  // module.js

export function validarCampoLetras(inputName, mensajeError) {
  const formulario = document.querySelector("form");
  const input = document.querySelector(`input[name="${inputName}"]`);

  if (!formulario || !input) return;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    input.classList.remove("input_error");

    const anterior = input.parentElement.querySelector(".span_error");
    if (anterior) anterior.remove();

    if (input.value.trim() === "") {
      input.classList.add("input_error");
      const span = document.createElement("span");
      span.classList.add("span_error");
      span.textContent = mensajeError;
      input.insertAdjacentElement("afterend", span);
    } else {
      console.log(`Campo ${inputName} válido:`, input.value);
    }
  });

  input.addEventListener("keydown", (e) => {
    const letra = e.key;
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(letra) && letra !== "Backspace") {
      e.preventDefault();
    }
  });

  input.addEventListener("blur", () => {
    input.classList.remove("input_error");
    const span = input.parentElement.querySelector(".span_error");
    if (span) span.remove();
  });
}
