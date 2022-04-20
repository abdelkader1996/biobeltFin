import { LocalDateTime } from "./upcv3/LocalDateTime";

export class Commentaires {
  id : number;
  date : LocalDateTime= new LocalDateTime();

  mess : string;

  objet : string;

  ceintureId : number;

  auteur : string;

  showDashboard : number;

  done : number;

  edited : boolean = false;

  static loadFromJSON(json): Commentaires {
    return Object.assign(new Commentaires, json)
  }
}