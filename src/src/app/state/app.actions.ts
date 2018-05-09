export class AddItem { 
  static readonly type = '[app] Add Item';
    constructor(public id: number, public name: string) {}
}