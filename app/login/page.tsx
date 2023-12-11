"use client"
import React, { useState } from "react";
import { loginAPICall } from "@/app/services/AuthService";
import Link from "next/link";
import bgImage from "path/to/your/bgImage.jpg"; // Replace with your actual image path

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = loginAPICall(formData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex">
            <div className="flex-1 p-4">
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
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

export default  Login