import { useState } from "react";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
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
