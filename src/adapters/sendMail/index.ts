import * as sendGridMail from '@sendgrid/mail'

export class SendMailAdapter {

    private _sendgridFromEmail: string;

    constructor (sendgridApiKey: string, sendgridFromEmail: string){
        sendGridMail.setApiKey(sendgridApiKey);
        this._sendgridFromEmail = sendgridFromEmail;
    }

    async sendEmail(toList: string[], ccList: string[], subjectLine: string, body:string): Promise<number> {
        return await sendGridMail.sendMultiple({
            to: toList,
            cc: ccList,
            from: this._sendgridFromEmail,
            subject: subjectLine,
            html: body,
            })
            .then( response => {  
                return response[0].statusCode;
            }); 
        };
}