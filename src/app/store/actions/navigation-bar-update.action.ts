export class NavigationBarUpdate {

  static readonly type = 'Navigation bar header update';

  constructor(public header: string, public links = []) { }

}
