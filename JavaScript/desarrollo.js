function contarCaracteres() {
    const input = document.getElementById("inputUsuario")
    const salida = document.getElementById("txtSalida")
    const texto = input.value
    salida.innerHTML = "El número de caracteres es: " + texto.length
}

function getTipo() {
    const input = document.getElementById("inputValor")
    const salida = document.getElementById("textSalida")

    let tipo
    if (isNaN(input.value)) {
        tipo = typeof(input.value)
    } else {
        tipo = 'number'
    }
    salida.innerHTML = "El tipo es: " + tipo
}

function mayorEdad() {
    const inputNombre = document.getElementById("inputNombre")
    const inputEdad = document.getElementById("inputEdad")
    const salida = document.getElementById("txtoSalida")

    if (inputEdad.value >= 18) {
        salida.innerHTML = "Hola " + inputNombre.value + ", eres mayor de edad"
    } else if (inputEdad.value < 18 && inputEdad.value > 0) {
        salida.innerHTML = "Hola " + inputNombre.value + ", no eres mayor de edad"
    } else {
        salida.innerHTML = "No es una edad válida"
    }
}

function notas() {
    const nombreEstudiante = document.getElementById("inputEstudiante")
    const materia = document.getElementById("inputMateria")
    const nota1 = document.getElementById("inputNota1")
    const nota2 = document.getElementById("inputNota2")
    const nota3 = document.getElementById("inputNota3")
    const resultado = document.getElementById("salidaPromedio")

    const promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3

    if (promedio >= 3.0) {
        // resultado.innerHTML = "Felicitaciones " + nombreEstudiante.value + ", su nota es " + promedio.toFixed(2) + ", pasaste la materia " + materia.value + "."
        resultado.innerHTML = "Felicitaciones " + nombreEstudiante.value + ", " + "<span style='color:#00ff00'>" + "su nota es " + promedio.toFixed(2) + "</span>" + ". Pasaste la materia " + materia.value + "." 
    } else {
        resultado.innerHTML = "Lo siento " + nombreEstudiante.value + ", " + "<span style='color:#ff0000'>" + "su nota es " + promedio.toFixed(2) + "</span>" + ". No pasaste la materia " + materia.value + "." 
    }

}

function parImpar() {
    const input = document.getElementById("inputNumero")
    const salida = document.getElementById("textoSalida")

    if ((input.value - Math.floor(input.value)) !== 0) {
        if (input.value < 0) {
            salida.innerHTML = "Debe ingresar números enteros positivos."
            return
        } else {
            salida.innerHTML = "Debe ingresar números enteros."
            return
        }
    } else if (input.value < 0) {
        salida.innerHTML = "Debe ingresar números positivos."
        return
    }

    if (input.value % 2 === 0) {
        salida.innerHTML = "Par."
    } else {
        salida.innerHTML = "Impar."
    }
}

function buscarContenido() {
    let texto = document.getElementById("inputTexto").value
    let contenidoBuscar = document.getElementById("inputBuscar").value
    let mostrar = document.getElementById("mostrarContenido")

    texto = texto.replaceAll(contenidoBuscar, '<span style="color:#ff0000">'+contenidoBuscar+'</span>')
    mostrar.innerHTML = texto

}

function divisible() {
    const numero_1 = document.getElementById("inputNumero1")
    const numero_2 = document.getElementById("inputNumero2")
    const salida = document.getElementById("divisibleSalida")

    let noEnteroNumero_1 = false, noEnteroNumero_2 = false, negativoNumero_1 = false, negativoNumero_2 = false
    if ((numero_1.value - Math.floor(numero_1.value)) !== 0) noEnteroNumero_1 = true;
    if ((numero_2.value - Math.floor(numero_2.value)) !== 0) noEnteroNumero_2 = true;
    if (numero_1.value < 0) negativoNumero_1 = true;
    if (numero_2.value < 0) negativoNumero_2 = true;

    if (noEnteroNumero_1 && noEnteroNumero_2) {
        if (negativoNumero_1 && negativoNumero_2) {
         salida.innerHTML = `Los números ${numero_1.value} y ${numero_2.value} no son enteros positivos`
         return
        } else if (negativoNumero_1) {
            salida.innerHTML = "El número " + numero_1.value + " no es un entero positivo"
            return
        } else if (negativoNumero_2) {
            salida.innerHTML = "El número " + numero_2.value + " no es un entero positivo"
            return
        } else {
            salida.innerHTML = "Los números " + numero_1.value + " y " + numero_2.value + " no son enteros"
            return
        }
    } else if (noEnteroNumero_1) {
        salida.innerHTML = "El número " + numero_1.value + " no es entero"
        return
    } else if (noEnteroNumero_2) {
        salida.innerHTML = "El número " + numero_2.value + " no es entero"
        return
    } else if (negativoNumero_1) {
        salida.innerHTML = "El número " + numero_1.value + " no es positivo"
        return
    } else if (negativoNumero_2) {
        salida.innerHTML = "El número " + numero_2.value + " no es positivo"
        return
    }

    if (numero_1.value % numero_2.value === 0) {
        salida.innerHTML = "El número " + numero_1.value + " es divisible entre el número " + numero_2.value
    } else {
        salida.innerHTML = "El número " + numero_1.value + " no es divisible entre el número " + numero_2.value
    }
}

function listaNumeros() {
    const numeros = document.getElementById("inputNumeros")
    const salida = document.getElementById("txtSalida")
    const lista = document.getElementById("listaPuntoOcho")

    const listaNumeros = numeros.value.split(',')
    listaNumeros.forEach(numero => {
        const li = document.createElement("li")
        if ((numero - Math.floor(numero)) !== 0 || isNaN(numero)) {
            li.innerHTML = `${numero} no es un número entero`
        } else {
            if (numero % 2 == 0) {
                li.innerHTML = `${numero} es número par`
            } else {
                li.innerHTML = `${numero} es número impar`
            }
        }
        lista.appendChild(li)
    })
}