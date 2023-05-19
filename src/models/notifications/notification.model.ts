import { NotificationDestinations } from "./notificationDestinations.enum"
import { NotificationEmailPayload } from "./notificationEmailPayload.model"
import { NotificationTypes } from "./notificationTypes.enum"

export type Notification = {
    notificationType: NotificationTypes,
    destination: NotificationDestinations,
    payload: NotificationEmailPayload
}
