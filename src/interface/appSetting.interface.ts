export interface IAppSetting {
    lang: string;
    theme: string;
}

export type AppSettingContextType = {
    appSetting: IAppSetting;
    saveLang: (lang: string) => void;
    saveTheme: (theme: string) => void;
};