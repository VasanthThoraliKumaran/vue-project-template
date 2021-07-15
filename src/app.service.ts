import { Framework } from "vuetify";
import App from "../src/App.vue";
export const appService = {
  get appInstance() {
    const res = (App as any).instance;
    return res;
  },

  get vuetifyInstance() {
    return this.appInstance.getVuetifyInstance() as Framework;
  },

  getDarkTheme() {
    return this.vuetifyInstance.theme.dark;
  },

  setDarkTheme(isDarkTheme: boolean) {
    this.vuetifyInstance.theme.dark = isDarkTheme;
    return this.vuetifyInstance.theme.dark;
  },

  switchTheme() {
    return this.setDarkTheme(!this.getDarkTheme());
  },
};
