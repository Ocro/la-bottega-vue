// TODO utiliser. et faire avec typescript et tout typer.
// TODO trim les valeurs (soit dans le backend, soit mnt).
export default class {
  constructor(service, price, archived, id=null) {
    this.id = id;
    this.service = service;
    this.price = price;
    this.archived = archived;
  }
}
