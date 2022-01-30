import { Injectable } from '@angular/core';
import {SendEmailCommand} from "./send-email-command";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserStataService {

  private sendEmailCommand: SendEmailCommand = {idUser: 0, idRoom: 0};

  getCommand(): SendEmailCommand {
    return this.sendEmailCommand;
  }

  setUserId(userId: number) {
    this.sendEmailCommand.idUser = userId;
  }

  setURoomId(userRoom: number) {
    this.sendEmailCommand.idRoom = userRoom;
  }


  constructor() { }

}
