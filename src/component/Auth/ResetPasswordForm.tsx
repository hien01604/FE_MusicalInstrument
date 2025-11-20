import { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import InputField from "./InputField"; // Đảm bảo rằng InputField có xử lý lỗi

export default function ResetPasswordForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Kiểm tra các trường mật khẩu
        if (!password || !confirmPassword) {
            setError("Please enter both password fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Xử lý logic gọi API reset password tại đây
        // await resetPasswordAPI(password)... 

        // Giả lập thành công
        setSuccess("Your password has been reset successfully!");
        // setPassword(""); // Clear password inputs if needed
        // setConfirmPassword(""); // Clear confirm password input if needed
    };

    return (
        <div className="flex justify-center items-center p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-xl shadow-xl"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Enter your new password and confirm it to reset your password.
                    </p>
                </div>

                {error && (
                    <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}

                {/* Hiển thị thông báo thành công */}
                {success && (
                    <div className="p-3 text-sm text-green-700 bg-green-100 rounded-lg">
                        {success}
                    </div>
                )}

                <InputField
                    label="New Password"
                    required
                    type="password"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <InputField
                    label="Confirm Password"
                    required
                    type="password"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full py-2.5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-150 shadow-md"
                >
                    Reset Password
                </button>

                <p className="text-center text-sm text-gray-600">
                    Remember your password?
                    <Link
                        to="/login"
                        className="ml-1 font-medium text-red-500 hover:text-red-600 transition duration-150"
                    >
                        Back to Login
                    </Link>
                </p>
            </form>
        </div>
=======
import InputField from "./InputField";

export default function ResetPasswordForm({ onSuccess }: { onSuccess?: () => void }) {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!password || !confirm) {
            setError("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (password !== confirm) {
            setError("Mật khẩu không khớp.");
            return;
        }

        alert("Đặt lại mật khẩu thành công!");
        onSuccess && onSuccess();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl p-8 space-y-4 bg-white border border-gray-200 rounded-xl shadow-xl"
        >
            <h2 className="text-2xl font-semibold text-center text-gray-800 pb-2">
                Đặt lại mật khẩu
            </h2>

            <InputField
                label="Mật khẩu mới"
                required
                type="password"
                placeholder="Nhập mật khẩu mới"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <InputField
                label="Xác nhận mật khẩu"
                required
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                error={error ?? undefined}
            />

            <button
                type="submit"
                className="w-full py-2.5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-150 shadow-md"
            >
                Xác nhận
            </button>
        </form>
>>>>>>> db857ec (forgot pw page)
    );
}
