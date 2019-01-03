import { MainInterface } from "electron";

declare module "vue/types/vue" {
  interface Vue {
    $electron: MainInterface;
  }
}
