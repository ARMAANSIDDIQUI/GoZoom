import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const Rpo = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.rpo.heroSubtitle')}
            heroTitle={t('workforce_pages.rpo.heroTitle')}
            heroDesc={t('workforce_pages.rpo.heroDesc')}
            reasonsTitle={t('workforce_pages.rpo.reasonsTitle')}
            reasons={t('workforce_pages.rpo.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.rpo.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.rpo.caseStudyDesc')}
        />
    );
};

export default Rpo;
