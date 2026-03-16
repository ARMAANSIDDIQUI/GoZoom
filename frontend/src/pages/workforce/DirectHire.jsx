import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const DirectHire = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.direct_hire.heroSubtitle')}
            heroTitle={t('workforce_pages.direct_hire.heroTitle')}
            heroDesc={t('workforce_pages.direct_hire.heroDesc')}
            reasonsTitle={t('workforce_pages.direct_hire.reasonsTitle')}
            reasons={t('workforce_pages.direct_hire.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.direct_hire.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.direct_hire.caseStudyDesc')}
        />
    );
};

export default DirectHire;
