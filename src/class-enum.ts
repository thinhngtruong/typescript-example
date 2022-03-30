enum STATE {
  available,
  soldOut,
  saleOff
}

class Phone {
  name: string;
  price: number;
  star: number;
  colors: string[];
  state: STATE;
  static brand: string = 'Apple';

  constructor(name: string, price: number, star: number, colors: string[], state: STATE) {
    this.name = name;
    this.price = price;
    this.star = star;
    this.colors = colors;
    this.state = state;
  }

  toString() {
    console.log(this.name + ' ' + this.price + ' ' + this.star + ' ' + this.state);
  }
}

var phone = new Phone('Iphone 13 promax', 9000000, 4, [
  'white',
  'red',
  'blue'
], STATE.saleOff)

phone.toString();
console.log(Phone.brand);