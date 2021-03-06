// 1
const texto = (texto) => {
  return texto
}
// texto('text')

// 2
const suma = (sumandoA, SumandoB) => {
  return sumandoA + SumandoB;
}
// suma(33,66)

// 3
const resta = (minuendo, sustraendo) => {
  return minuendo - sustraendo;
}
// resta(2,3)

// 4
const multiplicacion = (factorA, factorB) => {
  return factorA * factorB;
}
// multiplicacion(3,4)

// 5
const division = (dividendo, divisor) => {
  if  ( divisor === 0)  {
    return 'No se puede dividir por 0';
  } else  {
    return dividendo / divisor;
  }
}
// division(2,0)

// 6
const tablaMultiplicar = (multiplicando, multiplicador) => {
  if (multiplicador === undefined) multiplicador = 10;
  for (let i = 0; i <= multiplicador; i++){
    //console.log(multiplicando + " x", i + " = ", multiplicando * i);
    return multiplicando * i
  }
}
// tablaMultiplicar(3,4)

// 7
const potencia = (base, exponente) => {
  return Math.pow(base, exponente)
}
// potencia(2,3)

//8
const map = (a, b) => {
  let result = [];
  let i;
  for (i = 0; i != b.length; i++)
    result[i] = a(b[i]);
  return result;
}
const a = (x) => {
  return x * x * x;
}
const array = [0, 1 , 2 , 3 , 7 , 9, 10]
// map(a, array);

// 9
function anidada(a,b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
// anidada(2,3)
/*
//10
const scope = () => {
  var x = 10;
  function dentro(x) {
    return x;
  }
  return dentro;
}
resultado = scope()(230);
// console.log("resultado",resultado)
*/
//11
// Esta función devuelve una cadena con ceros a la izquierda
const cerosIzq = (num, totalLength) => {
  var numStr = num.toString();
  var numCeros = totalLength - numStr.length;
  for (var i = 1; i <= numCeros; i++) {
      numStr = "0" + numStr;
  }
  return numStr;
}
// cerosIzq(24,6)

export {texto, suma, resta, multiplicacion, division, tablaMultiplicar, potencia, map, a, array, anidada, cerosIzq};
