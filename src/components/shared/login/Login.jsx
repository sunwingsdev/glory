// src/login/Login.jsx
const Login = ({ onClose, onRegisterClick }) => {
  return (
    <div className="w-full md:w-[360px] h-[500px] bg-white rounded-xl overflow-hidden relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 text-gray-400 text-xl"
      >
        ✕
      </button>

      {/* Right Side (Form) */}
      <div className="w-full px-4 py-6 flex flex-col justify-center">
        <h2 className="text-gray-600 text-center text-xl font-medium mb-4">
          Sign in
        </h2>

        <input
          type="text"
          placeholder="Email"
          className="text-black px-4 py-2 mb-3 border rounded-xl outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-black px-4 py-2 mb-3 border outline-none rounded-xl"
        />
        <span className="mb-4 text-right text-gray-500 text-sm cursor-pointer">
          Forgot Password?
        </span>

        <button className="text-sm font-semibold bg-blue-600 text-white py-3 rounded-xl mb-6 uppercase">
          Sign in
        </button>

        <p className="text-sm  text-black text-center">
          Don{"'"}t have an account yet?{" "}
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={onRegisterClick}
          >
            Sign up
          </span>
        </p>
        <span className="mt-2 text-center text-blue-600 text-base cursor-pointer uppercase">
          Help
        </span>
      </div>
    </div>
  );
};

export default Login;
