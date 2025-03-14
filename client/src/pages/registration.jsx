import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { storeTokenInLS} = useAuth();
  const navigate = useNavigate();

  //Handling Input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //Handling Submission of values
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        storeTokenInLS(responseData.token);
        alert("registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
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
                  src="/images/register.png"
                  alt="404"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="reg-right">
              <div className="reg-form">
                <h1 className="main-heading">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username"> Username </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Name"
                      id="username"
                      required
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email"> Email </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email "
                      id="email"
                      required
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone"> Phone </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter Phone"
                      id="phone"
                      required
                      value={user.phone}
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
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="sumbit" className="reg-btn">
                    Sign Up
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
