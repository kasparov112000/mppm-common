import { INotificationsConfig } from "../../models/inotificationsConfig";
import * as sendGridMail from '@sendgrid/mail'

export class SendMailAdapter {

    private _sendgridFromEmail: string;

    constructor (sendgridApiKey: string, sendgridFromEmail: string){
        sendGridMail.setApiKey(sendgridApiKey);
        this._sendgridFromEmail = sendgridFromEmail;
    }

    async usingTemplate(toEmail: string, notificationTemplate: INotificationsConfig) {
        (async () => 
        { 
            await sendGridMail.send({
                to: `${toEmail}`,
                from: `${this._sendgridFromEmail}`,
                subject: `${notificationTemplate.subjectLine}`,
                html: `${notificationTemplate.body}`,
            }); 
        })();
      }
}