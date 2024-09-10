import { I18n } from "i18n";
import {
  ACCEPT_LANGUAGE,
  ACCEPT_LANGUAGE_HEADER_KEY,
  LANGUAGE_DIR,
} from "../config";

export const i18n = new I18n({
  locales: ACCEPT_LANGUAGE,
  directory: LANGUAGE_DIR,
  defaultLocale: "en",
  header: ACCEPT_LANGUAGE_HEADER_KEY,
  autoReload: true,
  objectNotation: true,
});

export const translate = i18n.__.bind(i18n);
