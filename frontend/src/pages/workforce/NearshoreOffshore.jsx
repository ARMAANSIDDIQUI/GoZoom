import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const NearshoreOffshore = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.nearshore_offshore.heroSubtitle')}
            heroTitle={t('workforce_pages.nearshore_offshore.heroTitle')}
            heroDesc={t('workforce_pages.nearshore_offshore.heroDesc')}
            reasonsTitle={t('workforce_pages.nearshore_offshore.reasonsTitle')}
            reasons={t('workforce_pages.nearshore_offshore.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.nearshore_offshore.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.nearshore_offshore.caseStudyDesc')}
        />
    );
};

export default NearshoreOffshore;
