import { MailService, MailDataRequired, ClientResponse } from '@sendgrid/mail'

export class SendGridEmailAdapter {
    private _sendgridFromEmail: string;
    private _mailService: MailService;

    constructor (sendgridApiKey: string, sendgridFromEmail: string) {
      this._mailService = new MailService();
      this._mailService.setApiKey(sendgridApiKey);
      this._sendgridFromEmail = sendgridFromEmail;
    }

    async sendEmail(mailData: MailDataRequired, isMultiple: boolean = false): Promise<ClientResponse> {
      const res = await this._mailService.send(mailData,isMultiple);
      return res[0];
    }
}