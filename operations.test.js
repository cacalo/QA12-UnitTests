import * as operations from "./operations.js";

test('texto', () => {
  expect(operations.texto("text")).toBe("text");
});

test('suma', () => {
  expect(operations.suma(33,66)).toBe(99);
});

test('resta', () => {
  expect(operations.resta(2,3)).toBe(-1);
});

test('multiplicacion', () => {
  expect(operations.multiplicacion(3,4)).toBe(12);
});

describe('Divisiones', () => {
  test('división sobre 0', () => {
    expect(operations.division(2,0)).toBe("No se puede dividir por 0");
  });
  test('división correcta', () => {
    expect(operations.division(2,2)).toBe(1);
  });
});

describe('Tablas de multiplicaciones', () => {
  test('tablaMultiplicar correcto', () => {
    expect(operations.tablaMultiplicar(3,4)).toEqual(0,3,6,9,12);
  });
  test('tablaMultiplicar undefined', () => {
    expect(operations.tablaMultiplicar(5)).toEqual(0,5,10,15,20,25,30,35,40,45,50);
  });
});

test('potencia', () => {
  expect(operations.potencia(2,3)).toBe(8);
});

test('map', () => {
  expect(operations.map(operations.a, operations.array)).toEqual([0,1,8,27,343,729,1000]);
});

test('anidada', () => {
  expect(operations.anidada(2,3)).toBe(13);
});

/*  --Test removed--
test('scope', () => {
  expect(operations.scope(230)).toBe();
});
*/

test('cerosIzq', () => {
  expect(operations.cerosIzq(24,6)).toBe("000024");
});