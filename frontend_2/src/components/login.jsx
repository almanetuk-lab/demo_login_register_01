import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const loginUser = async () => {
        if (email !== "" && email.trim() !== "" && password !== "" && password.trim() !== "") {
            const data = { email, password };
            const api_url = "http://localhost:3435/api/login";
            const res = await axios.post(api_url, data);
            navigate("/profile",{state : {user : res.data.user}});
            setError("Invalid email or password");
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
                            <h2 className="card-title text-center mb-4">Login</h2>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
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
                            
                            <button 
                                onClick={loginUser} 
                                className="btn btn-primary w-100 mb-3"
                            >
                                Login
                            </button>
                            
                            <p className="text-center mb-0">
                                If not registered yet then{" "}
                                <Link to="/register" className="text-decoration-none">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;