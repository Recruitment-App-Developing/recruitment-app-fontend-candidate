import Footer from './Footer';
import Header from './Header';

export default function DefaultLayout({ children }) {
    return (
        <div className="flex w-screen flex-col items-center justify-center bg-[#f4f5f5]">
            <Header />
            <div className="container flex w-[1140px] items-center justify-center">
                {children}
            </div>
            <Footer />
        </div>
    );
}
