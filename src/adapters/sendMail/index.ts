import { MailService } from '@sendgrid/mail'

export class SendGridEmailAdapter {
    private _sendgridFromEmail: string;
    private _mailService: MailService = new MailService();

    constructor (sendgridApiKey: string, sendgridFromEmail: string) {
      this._mailService.setApiKey(sendgridApiKey);
      this._sendgridFromEmail = sendgridFromEmail;
    }

    async sendEmail(toList: string[], ccList: string[], subjectLine: string, body:string): Promise<number> {
      return await this._mailService.sendMultiple({
        to: toList,
        cc: ccList,
        from: this._sendgridFromEmail,
        subject: subjectLine,
        html: body
      })[0]?.statusCode;
    };
}