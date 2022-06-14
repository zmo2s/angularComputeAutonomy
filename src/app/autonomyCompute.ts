import { PuissanceDbm } from "../app/enum";
import { EnumTypesTag } from "../app/enum";
import { EnumTagFormat } from "../app/enum";
import { DTM } from "../app/enum";
import { SensibilityPir } from "../app/enum";



export class AutonomyCompute {
  
    constructor(public _version : string,
          public _isactivateTag : boolean,
          public _name : string, 
          public _recurrenceAdvertising  : number,
          public _puissanceDbm : PuissanceDbm,
          public _enumTypesTag : EnumTypesTag,
          public _enumTagFormat : EnumTagFormat,
          public _isLoggerActivate : boolean,
          public _recurrenceLog : number,
          public _recurrenceEvent : number,
          public _useModeConnected : number, 
          public _useLED : number,
          public  _useBUzzer : number,
          public _dureeEvent : number,
          public _capacitePile : number,
          public _eventTx : number,
          public _eventTxSeconde : number,
          public _DTM : DTM,
          public _periodeMesureCapteur : number,
          public _modeMag : number,
          public _sensibilitePir : SensibilityPir,
          public _dataToDownload : number,
          public _eventPeriode1 : number,
          public _eventPeriode2 : number,
          public _periodeEmissionSecondaire : number,
          public _framePLayloadNumber : number,
          public _eventDTM1 : number) {  }


}