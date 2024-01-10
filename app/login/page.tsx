"use client"
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthProvider, { useAuth } from "@/app/hooks/auth";
import { loginAPICall } from "@/app/services/AuthService";
import "./login.css"


const Login = () => {
    const [isLogin, setLogin] = useState(false);
    const router = useRouter();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const email = emailRef.current?.value;
            const password = passwordRef.current?.value;

            const response = await loginAPICall({ email, password });

            if (response) {
                setLogin(true);
                router.push("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-page min-h-screen flex">
            <div className="flex-1 p-4">
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" name="email" ref={emailRef} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" ref={passwordRef} />
                    </label>
                    <div>
                        <button type="submit">Login</button>
                        <p className="mt-2">
                            Don't have an account?{" "}
                            <Link href="/register">
                                <b>Register</b>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
            <div className="flex-1 bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/a0/2b/fd/a02bfdce02ce5493942e5d21661198d3.jpg)' }} />
        </div>
    );
};

// Wrap the Login component with the AuthProvider component
export default function LoginWrapper() {
    return (
        <AuthProvider>
            <Login />
        </AuthProvider>
    );
}
