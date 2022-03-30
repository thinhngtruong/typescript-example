abstract class Telephone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract sendMessage(): void;

  abstract call(): void;
}

enum MobileType {
  Android,
  iOS,
}

class Mobile extends Telephone {
  type: MobileType;

  constructor(name: string, type: MobileType) {
    super(name);
    this.type = type;
  }

  
  public sendMessage(): void {
    console.log('Send message');
  }

  public call(): void {
    console.log('Call');
  }
}

var mobile = new Mobile('Iphone 13 promax', MobileType.iOS);
