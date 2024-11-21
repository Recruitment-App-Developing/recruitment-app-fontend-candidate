import FormLogin from '~/components/FormLogin';

function Login() {
    return (
        <section className="flex h-screen w-screen items-center justify-center bg-gray-50 pb-10 pt-10">
            <div className="flex h-full w-3/4 flex-row gap-20 rounded-2xl bg-gray-100 p-5 shadow-lg">
                <div className="w-[600px]">
                    <h2 className="text-success mb-2 text-left text-xl font-semibold leading-7">
                        Chào mừng bạn đã quay trở lại
                    </h2>
                    <h3 className="pb-6 leading-5">
                        Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội
                        sự nghiệp lý tưởng
                    </h3>
                    <FormLogin />
                    <div className="container mt-3 flex w-[600px] items-center justify-center">
                        <p className="text-sm">
                            Bạn chưa có tài khoản?{' '}
                            <a href="#" className="text-green-600">
                                Đăng kí ngay
                            </a>
                        </p>
                    </div>
                    <div
                        className="mt-3 w-[600px] border-t-2 border-t-stone-200 pt-3 text-sm leading-5
                            text-[#6f7882]"
                    >
                        <p className="text-center font-bold text-black">
                            Bạn gặp khó khăn khi tạo tài khoản?
                        </p>
                        <p className="text-center">
                            Vui lòng gọi tới số{' '}
                            <a
                                href="#"
                                className="font-bold leading-5 text-green-600"
                            >
                                (024) 6680 5588
                            </a>{' '}
                            (giờ hành chính).
                        </p>
                    </div>
                </div>
                <div
                    className="bg-auth-bg-image relative flex h-full w-full grow flex-row gap-0 rounded-2xl
                        shadow-lg"
                >
                    <div className="container justify-center">
                        <div className="container absolute left-9 top-[50%] w-3/5 translate-y-[-50%]">
                            <a href="#">
                                <img
                                    src="https://static.topcv.vn/v4/image/auth/topcv_white.png"
                                    alt="logo"
                                />
                            </a>
                            <h1 className="mt-4 text-4xl font-bold text-white">
                                Tiếp lợi thế
                                <br />
                                Nối thành công
                            </h1>
                            <p className="text-sm font-normal leading-6 text-white">
                                TopCV - Hệ sinh thái nhân sự tiên phong ứng dụng
                                công nghệ tại Việt Nam
                            </p>
                        </div>
                    </div>
                    <div className="bg-auth-arrow w-2/5"></div>
                </div>
            </div>
        </section>
    );
}
export default Login;
