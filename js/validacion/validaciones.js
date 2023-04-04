export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove('form__label-invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        input.parentElement.classList.add('form__label-invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
]

const mensajesDeError = {
    name: {
        valueMissing: "Este campo no puede estar vacío"
    },
    price: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Solo debe ingresar numeros"
    },
    img: {
        valueMissing: "Este campo no puede estar vacío"
    },
    description: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La descripción debe tener al entre 1 y 30 caracteres",
        tooShort: "Esta descripción es muy corta"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
    },
}

function mostarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}