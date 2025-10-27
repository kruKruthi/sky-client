import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

type NotificationContextType = {
  notification: any;
  setNotification: (notification: any) => void;
};

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

type NotificationContextProviderProps = {
  children: ReactNode;
};

export const NotificationContextProvider = (props: NotificationContextProviderProps) => {
  const [notification, setNotification] = useState<any>(null);

  const contextValue: NotificationContextType = {
    notification,
    setNotification,
  };

  return <NotificationContext.Provider value={contextValue}>{props.children}</NotificationContext.Provider>;
};
