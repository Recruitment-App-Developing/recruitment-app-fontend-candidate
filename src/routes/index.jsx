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

const publicRoutes = [
    { path: '/testUI', component: ComponentUI },

    { path: '/', component: Home, layout: DefaultLayout },
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
];
const protectedRoutes = [];

export { publicRoutes, protectedRoutes };
