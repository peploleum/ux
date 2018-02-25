export class NavbarItem {
  icon: string;
  text: string;
  active:boolean = false;

  constructor(icon: string, text: string) {
    this.icon = icon;
    this.text = text;
  }
}
