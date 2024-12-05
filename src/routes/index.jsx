// Layouts
import { DefaultLayout } from '~/Layout';

// Pages
import Login from '~/pages/Login';

// Pages use DefaultLayout
import Home from '~/pages/Home';
import JobDetail from '~/pages/JobDetail';
import ComponentUI from '~/Test/ComponentUI';
import { CompanyList, DetailCompany } from '~/pages/Company';
import { AddAJob } from '~/pages/AddJob';
import CvProfile from '~/pages/CvProfile';
import RegisterAccount from '~/pages/RegisterAccount';
import JobSearchPage from '~/pages/JobSearchPage';
import ManageCvPage from '~/pages/ManageCv';
import MyInfor from '~/pages/MyInfor';
import ApplcationHistory from '~/pages/ApplicationHistory';

const publicRoutes = [
    { path: '/testUI', component: ComponentUI },

    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/search-job', component: JobSearchPage, layout: DefaultLayout },
    { path: '/job-detail/:jobId', component: JobDetail, layout: DefaultLayout },
    { path: '/add-job', component: AddAJob, layout: DefaultLayout },
    { path: '/company', component: CompanyList, layout: DefaultLayout },
    {
        path: '/company-detail/:companyId',
        component: DetailCompany,
        layout: DefaultLayout,
    },

    { path: '/login', component: Login },
    { path: '/register', component: RegisterAccount },
    {
        path: '/cv-profile/:cvProfileId',
        component: CvProfile,
        layout: DefaultLayout,
    },
    { path: '/my-infor', component: MyInfor, layout: DefaultLayout },
    { path: '/manage-cv', component: ManageCvPage, layout: DefaultLayout },
    {
        path: '/application-history',
        component: ApplcationHistory,
        layout: DefaultLayout,
    },
];
const protectedRoutes = [];

export { publicRoutes, protectedRoutes };
