import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const DirectSourcing = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.direct_sourcing.heroSubtitle')}
            heroTitle={t('workforce_pages.direct_sourcing.heroTitle')}
            heroDesc={t('workforce_pages.direct_sourcing.heroDesc')}
            reasonsTitle={t('workforce_pages.direct_sourcing.reasonsTitle')}
            reasons={t('workforce_pages.direct_sourcing.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.direct_sourcing.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.direct_sourcing.caseStudyDesc')}
        />
    );
};

export default DirectSourcing;
