import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ isScrolled, mobile }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getButtonClass = (lng) => {
    // Determine if the current language matches, ignoring any region codes if present
    const currentLang = i18n.language || 'en';
    const isActive = currentLang.startsWith(lng);
    
    if (mobile) {
      return `px-3 py-1.5 text-[13px] font-bold rounded-full transition-all ${
        isActive ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
      }`;
    }

    return `px-2.5 py-1 text-[12px] font-bold rounded-md transition-all ${
      isActive 
        ? 'bg-cyan-500 text-white shadow-sm' 
        : isScrolled 
          ? 'text-white hover:text-cyan-300 hover:bg-white/10' 
          : 'text-white/90 hover:text-white hover:bg-white/20'
    }`;
  };

  return (
    <div className={`flex items-center gap-1 ${mobile ? 'justify-center w-full' : 'ml-4 border-l border-white/20 pl-4'}`}>
      <button onClick={() => changeLanguage('en')} className={getButtonClass('en')}>
        EN
      </button>
      <button onClick={() => changeLanguage('fr')} className={getButtonClass('fr')}>
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;