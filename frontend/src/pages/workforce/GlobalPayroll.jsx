import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const GlobalPayroll = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.global_payroll.heroSubtitle')}
            heroTitle={t('workforce_pages.global_payroll.heroTitle')}
            heroDesc={t('workforce_pages.global_payroll.heroDesc')}
            reasonsTitle={t('workforce_pages.global_payroll.reasonsTitle')}
            reasons={t('workforce_pages.global_payroll.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.global_payroll.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.global_payroll.caseStudyDesc')}
        />
    );
};

export default GlobalPayroll;
