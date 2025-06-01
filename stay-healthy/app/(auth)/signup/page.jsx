"use client";

import { createUser } from "@/lib/api/users";
import Link from "next/link";
import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function submitHandler(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error("All fields are required");
      }

      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      const res = await createUser({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });

      if (res.success) {
        console.log("User created successfully:", res.message);
        // Optionally redirect to login or dashboard
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Signup failed";
      console.error("Signup error:", message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-center text-4xl text-[#226ffe] font-bold mb-4">
        Sign Up
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      <form
        className="flex flex-col w-full gap-y-4"
        id="authform"
        onSubmit={submitHandler}
      >
        {/* Name */}
        <div>
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            minLength={6}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-[#2276fe] text-white rounded-lg py-2 text-lg font-medium mt-4 hover:bg-[#2260fe] transition-colors ${
            isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isLoading ? "Processing..." : "Register"}
        </button>

        {/* Login Link */}
        <div className="flex gap-1 items-center text-sm mt-4">
          <p>Already have an account?</p>
          <Link
            href="/login"
            className="text-[#226ffe] font-bold hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

// "use client";

// import { createUser } from "@/lib/api/users";
// import Link from "next/link";

// const SignupPage = () => {
//   async function submitHandler(e) {
//     e.preventDefault();

//     try {
//       const res = await createUser({
//         name: "Muhammad Musa Mueed",
//         email: "demo786#gmail.com",
//         password: "abc123",
//       });
//       if (res.success) {
//         // toast.success(res.message);
//         console.log(res.message)
//       } else {
//         throw new Error(res.message);
//       }
//     } catch (error) {
//       // toast.error(res.message);
//       console.log(res.message)
//     }
//   }
//   return (
//     <>
//       <h1 className="text-center text-4xl text-[#226ffe] font-bold mb-4">
//         Sign Up
//       </h1>
//       {/* <Form className="flex flex-col w-full gap-y-4" id="authform"> */}
//       <form
//         className="flex flex-col w-full gap-y-4"
//         id="authform"
//         onSubmit={submitHandler}
//       >
//         {/* name */}
//         <div>
//           <label htmlFor="name">
//             Name <span className="required -ml-1">*</span>
//           </label>
//           <input type="text" name="name" placeholder="Enter your name" />
//         </div>

//         {/* email */}

//         <div>
//           {/* <Form.Item label="Email"> */}

//           <label htmlFor="email">
//             Email<span className="required">*</span>
//           </label>
//           <input type="email" name="email" placeholder="Enter your email " />
//           {/* </Form.Item> */}
//         </div>

//         {/* password */}
//         <div>
//           <label htmlFor="password">
//             Password<span className="required">*</span>
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//           />
//         </div>

//         {/* form action - button */}
//         <button
//           type="primary"
//           className="bg-[#2276fe] text-white rounded-lg cursor-pointer hover:bg-[#2260fe] text-lg font-medium mt-6 py-1.5"
//         >
//           Register
//         </button>

//         {/* Helps */}
//         <div className="flex gap-1 items-center text-sm">
//           <p className="underline">Already have an Account</p>
//           <Link
//             href={"/login"}
//             className="text-[#226ffe] font-bold hover:underline"
//           >
//             Login
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SignupPage;
