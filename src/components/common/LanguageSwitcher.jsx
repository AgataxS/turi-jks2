import { useTranslation } from "react-i18next";

const langs = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const change = (lng) => i18n.changeLanguage(lng);
  return (
    <div className="flex gap-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => change(l.code)}
          className={`px-2 py-1 rounded text-xs font-semibold transition ${
            i18n.resolvedLanguage === l.code
              ? "bg-slate-700 text-white dark:bg-white/90 dark:text-slate-900"
              : "hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}