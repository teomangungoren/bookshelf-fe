"use client"
import React, { useState } from "react";
import { registerAPICall } from "@/app/services/AuthService";
import "./register-module.css";
import Link from "next/link";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        password: '',
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit =  (e:React.FormEvent) => {
        e.preventDefault();

        try {
            const response =  registerAPICall(formData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="text-black">
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <label key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                        <input
                            type={key === 'password' ? 'password' : 'text'}
                            name={key}
                            value={value}
                            onChange={handleChange}
                        />
                    </label>
                ))}
                <div>
                <button>Register</button>
                <p className="mt-2"> Do you have account ? <Link href={"/login"}><b>Login</b></Link></p>
                </div>
             </form>
        </div>
    );
};

export default Register;
