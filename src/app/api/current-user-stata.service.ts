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

  setId(userId: number, userIdRoom: number) {
    this.sendEmailCommand.idUser = userId;
    this.sendEmailCommand.idRoom = userIdRoom;
  }

  constructor() { }

}
