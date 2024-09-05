// src/components/notificationHelper.js
import * as Notifications from 'expo-notifications';

export const scheduleTodoNotification = async (todoText, time) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Todo Reminder',
      body: `Don't forget: ${todoText}`,
    },
    trigger: { time },
  });
};
