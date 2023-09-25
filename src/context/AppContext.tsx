import * as React from 'react';
import { AppSettingContextType, IAppSetting } from '../interface/appSetting.interface';
import { initAppSettingData } from '../data/initAppSettingData';

interface Props {
    children: React.ReactNode;
}

export const AppContext = React.createContext<AppSettingContextType | null>(null);

const AppProvider: React.FC<Props> = ({ children }) => {
    const [appSetting, setAppSetting] = React.useState<IAppSetting>(initAppSettingData);

    return (
        <AppContext.Provider value={{ appSetting, saveLang, saveTheme }}>
          {children}
        </AppContext.Provider>
      );

      function saveLang() {

      }

      function saveTheme() {
        
      }
}

export default AppProvider;