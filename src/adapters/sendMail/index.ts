import { MailService, MailDataRequired, ClientResponse } from '@sendgrid/mail'

export class SendGridEmailAdapter {
    private _mailService: MailService;

    constructor (sendgridApiKey: string) {
      this._mailService = new MailService();
      this._mailService.setApiKey(sendgridApiKey);
    }

    async sendEmail(mailData: MailDataRequired, isMultiple: boolean = false): Promise<ClientResponse> {
      const res = await this._mailService.send(mailData,isMultiple);
      return res[0];
    }
}