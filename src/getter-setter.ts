class Hero {
  private _name: string;
  private _type: string;

  constructor(name: string, type: string) {
    this._name = name;
    this._type = type;
  }

  public get name(): string {
    return this._name
  }

  public set name(name: string) {
    this._name = name
  }

  public get type(): string {
    return this._type
  }

  public set type(type: string) {
    this._type = type
  }
}