const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => {
    expected = 150;
    actual = sum(80, 70);
    expect(actual).toBe(expected); 
  });

  test('can add two negative numbers', () => {
    expected = -8;
    actual = sum(-3, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 7;
    actual = sum(7, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 2;
    actual = subtract(8, 6)
    expect(actual).toBe(expected);
  })

  test('can subtract two large positive numbers', () => {
    expected = 23;
    actual = subtract(55, 32);
    expect(actual).toBe(expected);
  })

  test('can subtract two negative numbers', () => {
    expected = 5;
    actual = subtract(-2, -7);
    expect(actual).toBe(expected);
  })

  test('can subtract zero', () => {
    expected = 6;
    actual = subtract(6, 0);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 14;
    actual = multiply(7, 2);
    expect(actual).toBe(expected);
  })

  test('can multiply two large positive numbers', () => {
    expected = 5044;
    actual = multiply(52, 97);
    expect(actual).toBe(expected);
  })

  test('can multiply two negative numbers', () => {
    expected = 90;
    actual = multiply(-6, -15);
    expect(actual).toBe(expected);
  })

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(6, 0);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 3;
    actual = divide(6, 2);
    expect(actual).toBe(expected);
  })

  test('can divide two large positive numbers', () => {
    expected = 26;
    actual = divide(1898, 73);
    expect(actual).toBe(expected);
  })

  test('can divide two negative numbers', () => {
    expected = 4;
    actual = divide(-12, -3);
    expect(actual).toBe(expected);
  })

  test('can divide by zero', () => {
    expected = 0;
    actual = multiply(6, 0);
    expect(actual).toBe(expected);
  })
  
});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expected = 1;
    actual = modulus(5, 2);
    expect(actual).toBe(expected);
  })

  test('can modulus two large positive numbers', () => {
    expected = 14;
    actual = modulus(92, 39);
    expect(actual).toBe(expected);
  })

  test('can modulus two negative numbers', () => {
    expected = -24;
    actual = modulus(-52, -28);
    expect(actual).toBe(expected);
  })
  
});

describe('even', () => {
  
  test('can assert true when number is even', () => {
    expected = true;
    actual = even(number = 24);
    expect(actual).toBe(expected);
  })

  test('can assert false when number is odd', () => {
    expected = false;
    actual = even(number = 31);
    expect(actual).toBe(expected);
  })

});

describe('odd', () => {

  test('can assert true when number is odd', () => {
    expected = true;
    actual = odd(number = 53);
    expect(actual).toBe(expected);
  })

  test('can assert false when number is even', () => {
    expected = false;
    actual = odd(number = 74);
    expect(actual).toBe(expected);
  })

});
