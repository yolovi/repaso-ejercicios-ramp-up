// Ejercicios
// Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.

function multiplicar(a, b) {
  return a * b;
}

// Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.

const edad = prompt("¿Cuál es tu edad?");
const numEdad = Number(edad);

// const edad = parseInt(prompt("¿Cuál es tu edad?"))
// Diferencia entres parseInt vs Number???

if (numEdad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

function sumaTresNumeros(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log("Debe ser ejecutada con números");
  }
}

// Otra posibilidad:
// function sumaTresNumeros(a, b, c){
//     if (typeof a !== "number" || typeof b !== "number" ||typeof c !== "number"){
//         console.log("Debo ser ejecutada con números")
//     } else {
//         console.log(a+b+c)
//     }
// }

// Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.

function primerosTresCaracteres(str) {
  if (typeof str !== "string") {
    console.log("Debe ser ejecutada con un string");
  } else {
    console.log(str.slice(0, 3));
  }
}

primerosTresCaracteres("mesa");

// Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.

function getPrecioMostrarIVA(precio) {
  if (typeof precio !== "number") {
    console.log("no es un formato correcto");
  } else {
    let iva = (precio * 21) / 100;
    console.log(precio + iva);
  }
}

getPrecioMostrarIVA(10);

// ----------------------------------------

// Ejercicios EXTRAS
// Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.

function penultimoCaracter(str) {
  if (typeof str !== "string") {
    console.log("Debo ser ejecutada con un string");
  } else {
    if (str.length > 2) {
      console.log(str[str.length - 2]);
    } else {
      console.log(str.charAt(0));
    }
  }
}

penultimoCaracter("Juan");

// Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".


  function cuentaVocales(palabra){
    if (typeof palabra !== "string") return console.log("Debo ser ejecutada con un string");
  
        const vocales = "aáeéiíoóuú";
      let cantidadVocales = 0;
      for (const letra of palabra) {
          if (vocales.includes(letra.toLowerCase())) {
              cantidadVocales++;
          }
      }
      return cantidadVocales;
      
  }
  console.log(cuentaVocales("Juana"))

// Otra posibilidad:
//   function cuentaVocales(palabra){
//     if (typeof palabra !== "string") {
//         console.log("Debo ser ejecutada con un string");
//       } else {
//         const vocales = "aáeéiíoóuú";
//       let cantidadVocales = 0;
//       for (const letra of palabra) {
//           if (vocales.includes(letra.toLowerCase())) {
//               cantidadVocales++;
//           }
//       }
//       return cantidadVocales;
        
//       }
//   }
//   console.log(cuentaVocales("Juana"))
  

// ----------------------------------------

// Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.

function potencia(num1, num2){
    return num1**num2
  }
  
  console.log(potencia(2,3))
  


// Ejercicio extra de DOM
// Haz lo siguiente:
// Crea un botón en tu archivo HTML
// Llama a ese botón en tu archivo js y muestralo por consola
// Crea una función que cuando se ejecute muestra un alert que diga “Hola”
// addEventListener. Implementa que cuando el usuario haga “click” en el botón se ejecute la función que habías creado.

