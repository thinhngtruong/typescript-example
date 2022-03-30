interface IPeople {
  name: string;
  age: number;
  university?: string;
}

function viewProfile(people: IPeople) {
  console.log(people.name + ' ' + people.age);
}

viewProfile({ name: 'Thinh', age: 25 });

interface ICat {
  name: string;
  age: number;

  run(): void;
  eat(food: string): void;
}

class Cat implements ICat {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run(): void {
    console.log('Cat run');
  }
  eat(food: string): void {
    console.log('Cat eat ' + food);
  }
}

var cat = new Cat('Meow', 1);
cat.run();
cat.eat('meat');