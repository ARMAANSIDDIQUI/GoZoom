import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const ContingentStaffing = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.contingent_staffing.heroSubtitle')}
            heroTitle={t('workforce_pages.contingent_staffing.heroTitle')}
            heroDesc={t('workforce_pages.contingent_staffing.heroDesc')}
            reasonsTitle={t('workforce_pages.contingent_staffing.reasonsTitle')}
            reasons={t('workforce_pages.contingent_staffing.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.contingent_staffing.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.contingent_staffing.caseStudyDesc')}
        />
    );
};

export default ContingentStaffing;

