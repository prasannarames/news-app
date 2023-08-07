import React from "react";

const page = () => {
  return (
    <>
      <>
        <section>
          <div>
            <h1>Login to your account</h1>
          </div>
          <form>
            <div>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="abc@xyz.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                name="password"
                placeholder="••••••••"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
      </>
    </>
  );
};

export default page;
