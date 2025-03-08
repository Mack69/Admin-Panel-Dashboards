import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLS} = useAuth();
  const navigate = useNavigate();

  //Handling Input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  //Handling Submission of values
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("after login: ", responseData);
        storeTokenInLS(responseData.token);
        setLogin({email: "", password: "" });
        navigate("/");
      }else {
        alert("Invalid Credentials");
      }
    }catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="reg-left">
              <div className="reg-image">
                <img
                  src="/images/login.png"
                  alt="404"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="reg-right">
              <div className="reg-form">
                <h1 className="main-heading">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email"> Email </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email "
                      id="email"
                      required
                      value={login.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password"> Password </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="Enter Password"
                      id="password"
                      required
                      value={login.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="sumbit" className="reg-btn">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
