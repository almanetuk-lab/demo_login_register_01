import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const registerUser = async () => {
        if (email !== "" && email.trim() !== "" && password !== "" && password.trim() !== "" 
            && name !== "" && name.trim() !== "" && confirmPassword !== "" && confirmPassword.trim() !== "") 
        {
            if(password === confirmPassword) {
                const data = {name, email, password};
                const api_url = "http://localhost:3435/api/register";
                const res = await axios.post(api_url, data);
                navigate("/",{state : {user : {name,email,password}}});
            }
            else {
                setError("Password and Confirm password should be same");
            }
        }   
        else {
            setError("Please enter all fields");
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center mb-4">Register</h2>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="enter name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="enter email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="enter password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="enter password" 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                />
                            </div>
                            
                            <button 
                                onClick={registerUser} 
                                className="btn btn-primary w-100 mb-3"
                            >
                                Register
                            </button>
                            
                            <p className="text-center mb-0">
                                If already registered then{" "}
                                <Link to="/" className="text-decoration-none">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;