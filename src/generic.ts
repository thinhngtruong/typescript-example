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
