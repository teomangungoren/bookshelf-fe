    "use client"
    import React, { useState } from "react";
    import { registerAPICall } from "@/app/services/AuthService";
    import  "./register-module.css";
    import Link from "next/link";
    import {useRouter} from "next/navigation";
    const Register = () => {
        const router=useRouter()
        const [formData, setFormData] = useState({
            name: '',
            surname: '',
            email: '',
            phoneNumber: '',
            password: '',
        });

        const handleChange =  (e:React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        };

        const handleSubmit = async (e:React.FormEvent) => {
            e.preventDefault();

            try {
                const response = await  registerAPICall(formData);
                if(response.status==201){
                   router       .push("/login")
                }
            } catch (error) {
                console.error(error);
            }
        };

        return (
            <div className="big">
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
