<<<<<<< HEAD
<<<<<<<< HEAD:src/page/client/ResetPasswordPage.tsx
import ResetPasswordForm from "../../component/Auth/ResetPasswordForm";
========
import Layout from "../../component/Layout";
import SignupForm from "../../component/Auth/SignupForm"
import Header from "../../component/Header/Header";
>>>>>>>> db857ec (forgot pw page):src/page/client/SignupPage.tsx
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Layout from "../../component/Layout";

export default function ResetPasswordPage() {
    return (
        <>
            <Header />
            <Layout>
            <ResetPasswordForm />
            </Layout>
            <Footer />
        </>
    );
}
=======
import { useNavigate } from "react-router-dom";
import ResetPasswordForm from "../../component/Auth/ResetPasswordForm"

export default function ResetPasswordPage() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center p-4">
            <div>
                <ResetPasswordForm onSuccess={() => navigate("/login")} />

                <p className="pt-4 text-center text-sm text-gray-600">
                    <span 
                        onClick={() => navigate("/login")}
                        className="text-red-500 font-medium hover:text-red-600 transition cursor-pointer"
                    >
                        Quay lại đăng nhập
                    </span>
                </p>
            </div>
        </div>
    );
}
>>>>>>> db857ec (forgot pw page)
