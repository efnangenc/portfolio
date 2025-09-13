import React, { createContext, useContext, useState } from "react";
import tr from "../locales/tr.json";
import en from "../locales/en.json";

// 1) Context oluşturuluyor — dil verisini paylaşmak için bir "konteyner"
const LanguageContext = createContext();

// 2) Çeviri mesajları (basit JSON)
const messages = { tr, en };
// const messages = {

//   tr: { hello: "Merhaba", projects: "Projelerim" },
//   en: { hello: "Hello", projects: "My Projects" }
// };

// 3) Provider bileşeni: uygulamanın hangi kısmının bu dili kullanacağını sarmalıyor
export function LanguageProvider({ children }) {
  // 4) lang state'i: hangi dilin seçili olduğunu tutar (başlangıç 'tr')
  const [lang, setLang] = useState("en");

  // 5) t fonksiyonu: verilen anahtara (key) göre çeviri döndürüyor
  //    messages[lang][key] yoksa key'i geri döndürüyor (basit fallback)
  const t = (key) => messages[lang][key] || key;  //messages[lang]?.[key] ?? key

  // 6) Provider üzerinden value (lang, setLang, t) paylaşılıyor
  // value, children bileşenlere aktarılacak şey.
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 7) useLang adlı yardımcı hook: herhangi bir bileşenden context'e erişim sağlar
export const useLanguage = () => useContext(LanguageContext);
