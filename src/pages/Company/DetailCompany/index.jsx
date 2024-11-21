import { useParams } from 'react-router-dom';
import CompanyContactInfor from './CompanyContactInfor';
import CompanyCover from './CompanyCover';
import CompanyIntro from './CompanyIntro';
import CompanyJobList from './CompanyJobList';
import { useEffect, useState } from 'react';
import { fetchDetailCompany } from '~/services/companyService';

export default function DetailCompany() {
    const { companyId } = useParams();

    const [detailCompany, setDetailCompany] = useState({});
    useEffect(() => {
        fetchDetailCompany(companyId).then((data) => {
            setDetailCompany(data.data);
        });
    }, []);

    return (
        <div>
            <CompanyCover data={detailCompany} />
            <div className="flex flex-row gap-7">
                <div className="basis-2/3">
                    <CompanyIntro content={detailCompany?.detailIntro} />
                    <CompanyJobList companyId={companyId} />
                </div>
                <div className="basis-1/3">
                    <CompanyContactInfor
                        headQuaters={detailCompany?.headQuaters}
                        subAddress={detailCompany?.subAddress}
                    />
                </div>
            </div>
        </div>
    );
}
