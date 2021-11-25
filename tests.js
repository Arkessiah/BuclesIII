// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Bucles III', () => {
  it('La variables longitud debe estar definida', () => {
    expect(longitud).to.not.be.an('undefined');
  });

  it('La variable longitud vale 51 después del bucle', () => {
    expect(longitud).to.equal(51);
  });
});
