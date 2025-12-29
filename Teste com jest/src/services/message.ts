import { MessageProtocol } from '../classes/interface/message-protocol';

export class Message implements MessageProtocol {
  sendMessage(msg: string) {
    console.log(msg);
  }
}
