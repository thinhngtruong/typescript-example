function view<T>(x: T): T {
  return x;
}

console.log(view<string>('Hello world'));

console.log(view<number>(100));

class Computer {
  static viewInfo<T>(info: T[]): void {
    console.log(info);
  }
}

Computer.viewInfo(['Dell', 'Apple', 'Asus']);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
console.log(makeArrXY(1, 2));
console.log(makeArrXY('a', 2));

const makeFullName = <T extends { firstName: string; lastName: string }>(obj: T) => ({
  ...obj,
  fullName: obj.firstName + ' ' + obj.lastName,
});

makeFullName({ firstName: 'Thinh', lastName: 'Nguyen' });

const addNewEmployee = <T extends object>(epl: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...epl,
    uid,
  };
};

const employee = addNewEmployee({ name: 'Thinh', age: 25, male: true });
console.log(employee.name);

// Generic in interface
interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const resource1: Resource<string> = {
  uid: 1,
  name: 'Thinh',
  data: 'Hello world',
};

const resource2: Resource<object> = {
  uid: 1,
  name: 'Thinh',
  data: {
    type: 1,
  },
};

const resource3: Resource<string[]> = {
  uid: 1,
  name: 'Thinh',
  data: ['Honda', 'Suzuki', 'Yamaha'],
};
