export type NotificationEmailPayload = {
    toList: string[],
    ccList: string[],
    subjectLine: string,
    body: string,
    signatureLine: string,
}
