import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import github from "../assets/images/github.png";
import google from "../assets/images/google.png";
import loginImg from "../assets/images/login.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

  const { loginUser, updatePassword, googleLogin, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
        alert("Welcome to Star Style Hub🎉")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("please provide an email", emailRef.current.value);
      return;
    }

    updatePassword(email)
      .then(() => {
        alert("please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        alert("Google Login Successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        alert("Github Login Successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex">
      <div className="hidden  flex-1 xl:block">
        <img
          className="min-h-screen object-cover"
          src={loginImg}
          alt="Login Img"
        />
      </div>
      <div className="flex-1 bg-slate-100">
        <div className="mx-auto flex  min-h-screen w-[350px] flex-col justify-center sm:w-[450px] md:w-[600px]">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="my-3 ">Welcome Back! Please enter your details.</p>
          <form onSubmit={handleLogin}>
            <input
              className="mb-5 mt-2 w-full rounded-sm border-none p-2 outline-none"
              type="email"
              placeholder="Enter your email..."
              name="email"
              ref={emailRef}
              required
            />
            <div className="relative">
              <input
                className="w-full p-2 "
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password..."
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <div className="mt-4 font-semibold underline">
              <Link onClick={handleForgetPassword}>Forget Password?</Link>
            </div>

            <input
              className="my-4 w-full cursor-pointer rounded-sm bg-black py-2 text-white transition-all hover:space-x-2 hover:tracking-wide"
              type="submit"
              value="Login"
            />
          </form>
          <div className="my-2 flex items-center gap-1">
            <div className="h-[1px] w-1/2 bg-slate-400"></div>
            <div className="-mt-1">or</div>
            <div className="h-[1px] w-1/2 bg-slate-400"></div>
          </div>
          <div>
            <div
              onClick={handleGoogleLogin}
              className="my-5 flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-black bg-white p-1 transition-all hover:tracking-wide "
            >
              <img className="w-10" src={google} alt="Google" />
              <p className="text-[18px] font-semibold">Sign In With Google</p>
            </div>

            <div
              onClick={handleGithubLogin}
              className="my-5 flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-black bg-white p-1 transition-all hover:tracking-wide"
            >
              <img className="w-8" src={github} alt="Github" />{" "}
              <span className="text-[18px] font-semibold">
                Sign In With Github
              </span>
            </div>
          </div>

          <p className="text-center">
            New to this website? Please{" "}
            <Link className="font-bold underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
