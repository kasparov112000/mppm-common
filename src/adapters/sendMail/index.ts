import { INotificationsConfig } from "../../models/inotificationsConfig";
import * as sendGridMail from '@sendgrid/mail'

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

export class SendMailAdapter {

    async usingTemplate(toEmail: string, notificationTemplate: INotificationsConfig) {
        (async () => 
        { 
            await sendGridMail.send({
                to: `${toEmail}`,
                from: `${process.env.SENDGRID_FROM_EMAIL}`,
                subject: `${notificationTemplate.subjectLine}`,
                html: `${notificationTemplate.body}`,
            }); 
        })();
      }
}