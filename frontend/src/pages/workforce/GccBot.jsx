import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const GccBot = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.gcc_bot.heroSubtitle')}
            heroTitle={t('workforce_pages.gcc_bot.heroTitle')}
            heroDesc={t('workforce_pages.gcc_bot.heroDesc')}
            reasonsTitle={t('workforce_pages.gcc_bot.reasonsTitle')}
            reasons={t('workforce_pages.gcc_bot.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.gcc_bot.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.gcc_bot.caseStudyDesc')}
        />
    );
};

export default GccBot;
