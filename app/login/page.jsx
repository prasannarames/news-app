import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <section
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700
        "
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  Your email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  required
                  id="email"
                  name="email"
                  placeholder="abc@xyz.com"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  required
                  id="password"
                  name="password"
                  placeholder="••••••••"
                />
              </div>
              <button
                className="border-2 rounded-md p-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
