import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Signup = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // State for validation errors
  const [errors, setErrors] = useState({});
  // State for loading indicator
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for success message
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setSuccess(false); // Hide success on new input
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Simulate API call and show success message
  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setFormData({ fullName: "", email: "", password: "" });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | User Platform</title>
        <meta
          name="description"
          content="Create your account on our user platform."
        />
      </Helmet>
      <main
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8"
        aria-label="Sign up form"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-600 mt-2">Join our community today</p>
        </div>
        {/* Success message */}
        {success && (
          <div
            className="mb-4 p-3 rounded bg-green-100 text-green-800 text-center animate-fade-in"
            role="status"
          >
            Sign up successful!
          </div>
        )}
        {/* Signup form with aria-labels and semantic HTML */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Sign up form"
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              aria-label="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:shadow-outline`}
              minLength={2}
              required
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              aria-label="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:shadow-outline`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              aria-label="Password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:shadow-outline`}
              minLength={6}
              required
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.password}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Must be at least 6 characters
            </p>
          </div>
          <div>
            <button
              type="submit"
              aria-label="Sign Up"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              style={{ minHeight: "48px" }}
            >
              {isSubmitting ? (
                <span>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 inline-block text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Signing Up...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:underline transition-all duration-200"
              aria-label="Sign in"
            >
              Sign in
            </button>
          </p>
        </div>
      </main>
    </>
  );
};

export default Signup;
