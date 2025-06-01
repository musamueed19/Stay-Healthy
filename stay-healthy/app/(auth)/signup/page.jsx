"use client"

import Link from "next/link";

const SignupPage = () => {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      <h1 className="text-center text-4xl text-[#226ffe] font-bold mb-4">
        Sign Up
      </h1>
      {/* <Form className="flex flex-col w-full gap-y-4" id="authform"> */}
      <form
        className="flex flex-col w-full gap-y-4"
        id="authform"
        onSubmit={submitHandler}
      >
        {/* name */}
        <div>
          <label htmlFor="name">
            Name <span className="required -ml-1">*</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>

        {/* email */}

        <div>
          {/* <Form.Item label="Email"> */}

          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email " />
          {/* </Form.Item> */}
        </div>

        {/* password */}
        <div>
          <label htmlFor="password">
            Password<span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        {/* form action - button */}
        <button
          type="primary"
          className="bg-[#2276fe] text-white rounded-lg cursor-pointer hover:bg-[#2260fe] text-lg font-medium mt-6 py-1.5"
        >
          Register
        </button>

        {/* Helps */}
        <div className="flex gap-1 items-center text-sm">
          <p className="underline">Already have an Account</p>
          <Link
            href={"/login"}
            className="text-[#226ffe] font-bold hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignupPage;
