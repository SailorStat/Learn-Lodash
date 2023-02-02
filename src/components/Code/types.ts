export type Language = "js" | "ts" | "html" | "css";

export interface CodeProps {
  children: string;
  language: Language;
  id: string;
}
