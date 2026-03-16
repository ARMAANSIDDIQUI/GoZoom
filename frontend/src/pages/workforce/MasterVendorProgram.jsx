import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const MasterVendorProgram = () => {
    const { t } = useTranslation();
    return (
        <WorkforceServiceLayout
            heroSubtitle={t('workforce_pages.master_vendor_program.heroSubtitle')}
            heroTitle={t('workforce_pages.master_vendor_program.heroTitle')}
            heroDesc={t('workforce_pages.master_vendor_program.heroDesc')}
            reasonsTitle={t('workforce_pages.master_vendor_program.reasonsTitle')}
            reasons={t('workforce_pages.master_vendor_program.reasons', { returnObjects: true })}
            caseStudyTitle={t('workforce_pages.master_vendor_program.caseStudyTitle')}
            caseStudyDesc={t('workforce_pages.master_vendor_program.caseStudyDesc')}
        />
    );
};

export default MasterVendorProgram;
