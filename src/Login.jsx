import React, { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear the error message when the user starts typing in the input field again
        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            valid = false;
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };


    const handleLogin = (event) => {
        event.preventDefault();
        const { email, password } = formData;

        // Check if email and password match existing user data
        // const user = users.find(user => user.email === email && user.password === password);
        // if (user) {
        //     // Redirect to home if email and password match
        //     history.push("/home");
        // } else {
        //     // Display appropriate error message if email or password is incorrect
        //     if (!user) {
        //         setErrors({ email: "User not registered" });
        //     } else {
        //         setErrors({ password: "Password did not match" });
        //     }
        // }
    };


    return (
        <div className="login">
            <h1>Log In</h1>
            <form onSubmit={handleLogin} noValidate>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ borderColor: errors.email ? 'red' : formData.email ? 'green' : '' }}
                />
                {errors.email && <div className="error" style={{ color: 'red' }}>{errors.email}</div>}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ borderColor: errors.password ? 'red' : formData.password ? 'green' : '' }}
                />
                {errors.password && <div className="error" style={{ color: 'red' }}>{errors.password}</div>}
                <input type="submit" value="Log In" />
                <div className="btm-auth">
                    <span>or continue with</span>
                    <div class="auth">
                        <div class="i" style={{ border: "1px solid lightgray", padding: "3px", borderRadius: "5px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                        </div>
                        <div class="i" style={{ border: "1px solid lightgray", padding: "3px", borderRadius: "5px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Not have an account no need to worry!<a href="/signup">Sign Up</a> </span>
                </div>
            </form>

        </div>
    );
};

export default Login;
