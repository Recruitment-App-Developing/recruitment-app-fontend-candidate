import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { protectedRoutes, publicRoutes } from './routes';

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Fragment>
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                let Layout;

                                const Page = route.component;

                                if (route.layout) Layout = route.layout;
                                else Layout = Fragment;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                            {protectedRoutes.map((route, index) => {
                                let Layout;

                                const Page = route.component;

                                if (route.layout) Layout = route.layout;
                                else Layout = Fragment;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <ProtectedRoute>
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            </ProtectedRoute>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    limit={5}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </Fragment>
        </LocalizationProvider>
    );
}

export default App;
