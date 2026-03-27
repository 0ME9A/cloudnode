"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LANGUAGES = [
  { label: "العربية", code: "ar" },
  { label: "Azerbaijani", code: "az" },
  { label: "Català", code: "ca" },
  { label: "中文", code: "zh-CN" },
  { label: "Hrvatski", code: "hr" },
  { label: "Čeština", code: "cs" },
  { label: "Dansk", code: "da" },
  { label: "Nederlands", code: "nl" },
  { label: "English", code: "en" },
  { label: "Estonian", code: "et" },
  { label: "Persian", code: "fa" },
  { label: "Français", code: "fr" },
  { label: "Deutsch", code: "de" },
  { label: "עברית", code: "iw" },
  { label: "Magyar", code: "hu" },
  { label: "Italiano", code: "it" },
  { label: "Macedonian", code: "mk" },
  { label: "Norwegian", code: "no" },
  { label: "Português", code: "pt" },
  { label: "Română", code: "ro" },
  { label: "Русский", code: "ru" },
  { label: "Español", code: "es" },
  { label: "Svenska", code: "sv" },
  { label: "Türkçe", code: "tr" },
  { label: "Українська", code: "uk" },
];

export function GoogleTranslate() {
  const [isClient, setIsClient] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");

  useEffect(() => {
    setIsClient(true);

    // Check if there is an active translation in cookies
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match) {
      const code = match[1];
      const lang = LANGUAGES.find((l) => l.code === code);
      if (lang) setCurrentLang(lang.label);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    if (
      !document.querySelector(
        'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]',
      )
    ) {
      const addScript = document.createElement("script");
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }
  }, []);

  const handleLangChange = (langCode: string) => {
    if (langCode === "en") {
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=." +
        location.hostname +
        "; path=/;";
    } else {
      document.cookie = "googtrans=/en/" + langCode + "; path=/";
      document.cookie =
        "googtrans=/en/" +
        langCode +
        "; domain=." +
        location.hostname +
        "; path=/";
    }
    window.location.reload();
  };

  if (!isClient) {
    return <div className="w-[80px] h-6 animate-pulse bg-muted rounded-md" />;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-xs font-medium hover:opacity-80 transition-opacity outline-none ring-0">
          {currentLang}{" "}
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[300px] sm:w-[400px] md:w-[500px] p-4 bg-background border-border shadow-xl grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1"
        >
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className="cursor-pointer font-medium hover:bg-accent hover:text-accent-foreground text-sm py-2 px-3 rounded-md transition-colors"
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Hidden underlying Google struct */}
      <div id="google_translate_element" className="hidden" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Exhaustive hiding of the top banner and iframes */
        iframe.goog-te-banner-frame {
            display: none !important;
            visibility: hidden !important;
        }
        .goog-te-banner-frame.skiptranslate {
            display: none !important;
        }
        body > .skiptranslate {
            display: none !important;
        }
        /* Prevent body shift */
        body {
            top: 0px !important; 
            position: static !important;
        }
        html {
            height: 100% !important;
        }
        /* Hide all tooltip elements */
        #goog-gt-tt, .goog-te-balloon-frame {
            display: none !important;
        }
        .goog-tooltip, .goog-tooltip:hover {
            display: none !important;
        }
        /* Remove highlight on translated text */
        .goog-text-highlight {
            background-color: transparent !important;
            border: none !important; 
            box-shadow: none !important;
        }
        /* Hide newer Google Translate popups */
        .VIpgJd-Zvi9od-aZ2wEe, .VIpgJd-Zvi9od-aZ2wEe-wohhRb {
            display: none !important;
        }
      `,
        }}
      />
    </>
  );
}
