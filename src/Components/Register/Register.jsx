// import PhoneInput from "react-country-phone-input";
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [regFormData, setRegFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const [formErrors, setFormErrors] = useState({});

    const handleValueChange = (e) => {
        setRegFormData({
            ...regFormData,
            [e.target.name]: e.target.value
        })
    }

    const hanldeRegFormSubmit = () => {
        let hasError = false;
        const newErrors = {};

        for (const field in regFormData) {
            const hasValue = regFormData[field].toString().trim();
            console.log("hasvalue", hasValue);
            
            if (!hasValue) {
                hasError = true;
                newErrors[field] = {
                    hasError: true,
                    message: "Field is required"
                }
            }
        }

        setFormErrors(newErrors);

        if (!hasError) {
            // Proceed with form submission logic
            console.log("Registration Successful", regFormData);
            navigate('/login');
        }

    }



    return (
        <div className="flex items-start justify-start sm:items-center sm:justify-center">
            <div className="w-full sm:w-[80%] md:w-[45%] shadow-lg p-2 rounded mt-10 bg-gray-100">
                <h1 className="font-bold text-xl">Register Your Account</h1>
                <div className="mt-4 px-4 flex flex-col gap-1 items-start justify-center">
                    <div className="font-normal text-md ">
                        <label htmlFor="name">Name<span className="text-red-500">*</span>:</label>
                    </div>
                    <div className="w-full">
                        <input
                            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            name="name"
                            value={regFormData.name}
                            onChange={handleValueChange}
                            required
                        />
                        {formErrors?.name?.hasError && (
                            <p className="text-left text-red-500 text-sm mt-1">{formErrors.name.message}</p>
                        )}
                    </div>
                </div>
                <div className="mt-4 px-4 flex flex-col gap-1 items-start justify-center">
                    <div className="font-normal text-md ">
                        <label htmlFor="email">Email<span className="text-red-500">*</span>:</label>
                    </div>
                    <div className="w-full">
                        <input
                            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            value={regFormData.email}
                            onChange={handleValueChange}
                            placeholder="Enter your email"
                            required
                        />
                        {formErrors?.email?.hasError && (
                            <p className="text-left text-red-500 text-sm mt-1">{formErrors.email.message}</p>
                        )}
                    </div>
                </div>
                <div className="mt-4 px-4 flex flex-col gap-1 items-start justify-center">
                    <div className="font-normal text-md ">
                        <label htmlFor="phone">Phone<span className="text-red-500">*</span>:</label>
                    </div>
                    <div className="w-full">
                        <PhoneInput
                            placeholder="Enter phone number"
                            containerClass='register-phone-input'
                            country={'in'}
                            countryCodeEditable={false}
                            containerStyle={{
                                border: '1px solid #99a1af',
                                padding: '4px',
                                borderRadius: '4px',
                            }}
                            inputStyle={{ width: '100%', background: '#f5f5f5', border: 'none', outline: 'none' }}
                            inputProps={{
                                name: 'phone',
                                required: true,
                            }}
                            disableDropdown
                            value={regFormData.phone}
                            onChange={phone => setRegFormData({ ...regFormData, phone: phone })}

                        />
                        {formErrors?.phone?.hasError && (
                            <p className="text-left text-red-500 text-sm mt-1">{formErrors.phone.message}</p>
                        )}
                    </div>
                </div>
                <div className="mt-4 px-4">
                    <button type='button'
                        onClick={hanldeRegFormSubmit}
                        className="cursor-pointer w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-500">
                        Register
                    </button>
                </div>
                <div className="mt-2 px-4 text-sm">
                    <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}