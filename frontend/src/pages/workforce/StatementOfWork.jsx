import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const StatementOfWork = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.statement_of_work.heroSubtitle')}
            heroTitle={t('workforce_pages.statement_of_work.heroTitle')}
            heroDesc={t('workforce_pages.statement_of_work.heroDesc')}
            reasonsTitle={t('workforce_pages.statement_of_work.reasonsTitle')}
            reasons={t('workforce_pages.statement_of_work.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.statement_of_work.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.statement_of_work.caseStudyDesc')}
        />
    );
};

export default StatementOfWork;
