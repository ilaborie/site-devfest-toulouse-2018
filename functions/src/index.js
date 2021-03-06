import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { saveUserData } from './users';
import { sendGeneralNotification } from './notifications';
import { scheduleNotifications } from './schedule-notifications';
import { optimizeImages } from './optimize-images';
import { mailchimpSubscribe } from './mailchimp-subscribe';

admin.initializeApp(functions.config().firebase);

export {
  saveUserData,
  sendGeneralNotification,
  scheduleNotifications,
  optimizeImages,
  mailchimpSubscribe
}
