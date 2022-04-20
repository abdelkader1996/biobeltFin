import { BottleType } from "./bottleType";
import { LocalDateTime } from "./upcv3/LocalDateTime";
import { Stock } from "./stock";

export class Bottle {
  id: string = '';
  barcode: string = '';
  status: Status = Status.ENTREPOSE;
  state: State = State.FULL;
  bottleType: BottleType = null;
  bottleEvents: BottleEvent[] = [];
  lastStock:Stock;
  localisationId : string;
  localisationType: string;
  lastStatus: Status = Status.ENTREPOSE;
  rack : string = "";

  lastLocalisationId : string;
  lastLocalisationType:string;

  get statusString(): string {
    switch (this.status) {
      case Status.ENTREPOSE: return 'Entreposée';
      case Status.B1: return 'Sur B1';
      case Status.B2: return 'Sur B2';
      case Status.REVOKED: return 'Retirée';

      case Status.UNDEFINED : return 'Indéfini'

    }
  }

  get bottleString(): string {
    return this.bottleType.designationString + ' (' + this.barcode + ')'
  }

  static loadFromJSON(json): Bottle {
    var bottle: Bottle = Object.assign(new Bottle, json);
    if (json.bottleType) bottle.bottleType = BottleType.loadFromJSON(json.bottleType);
    if (json.bottleEvents) {
      bottle.bottleEvents = [];
      json.bottleEvents.forEach(jsonBottleEvent =>
        bottle.bottleEvents.push(BottleEvent.loadFromJSON(jsonBottleEvent))
      );
    }
    return bottle;
  }
}

export class BottleEvent {
  id: string = '';
  code: Code = Code.ENTREPOSAGE;
  date: LocalDateTime = new LocalDateTime();
  parameter: string = '';
  destinationId: string = '';
  destinationType : string = '';
  state : string = '';
  intervention_time :  LocalDateTime = new LocalDateTime();
  operator : string = '';
  bottle : Bottle;
  bottleEv : Bottle;
  bottleId : string;

  get codeString(): string {
    switch(this.code) {
      case Code.ENTREPOSAGE: 
      if(this.parameter === "0840ffbf-82ee-4f23-a3b9-96b1f99cefdd" || this.parameter === '1e2b0d98-44a8-4fe8-a412-299f0991919d' || this.parameter === "8eea82b3-e17c-4a62-8e4a-389a8f15e9a2" || this.parameter === "ff1c41aa-f9f7-478b-8b41-8616313f6d88"){
        return 'Ajout au stock';
      }
      else {
        return 'Ajout à la ceinture';
      }
      case Code.CONNEXION_A_B1: return 'Ajout à B1';
      case Code.CONNEXION_A_B2 : return 'Ajout à B2';
      case Code.RECEPTION: return 'Reception au stock';
      case Code.RENVOIE: return 'Suppression du stock';
    }
  }

  get parameterString(): string {
    if (this.parameter) return this.parameter;
    else return '-';
  }

  static loadFromJSON(json): BottleEvent {
    var bottleEvent = Object.assign(new BottleEvent, json);
    if (json.date) bottleEvent.date = LocalDateTime.loadFromJSON(json.date);
    return bottleEvent;
  }
}

export enum Status {
  ENTREPOSE = 'ENTREPOSE',
  B1 = 'B1',
  B2 = 'B2',
  REVOKED = 'REVOKED',
  UNDEFINED = 'UNDEFINED'
}

export enum State {
  FULL = 'FULL',
  IN_USE = 'IN_USE',
  EMPTY = 'EMPTY'
}

export enum Code {
  ENTREPOSAGE = 'ENTREPOSAGE',
  CONNEXION_A_B1 = 'CONNEXION_A_B1',
  CONNEXION_A_B2 = 'CONNEXION_A_B2',
  RECEPTION = 'RECEPTION',
  RENVOIE = 'RENVOIE'
}