import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result =>{

            // Update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const logInInfo = {email, lastSignInTime};

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(logInInfo)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                
            })
        })
        .catch(error =>{

        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
        <h1 className="text-3xl font-bold text-center mt-5">Sign In Now</h1>
       <form onSubmit={handleSignIn} className="card-body">
           <div className="form-control">
           <label className="label">
               <span className="label-text">Email</span>
           </label>
           <input type="email" name="email" placeholder="email" className="input input-bordered" required />
           </div>
           <div className="form-control">
           <label className="label">
               <span className="label-text">Password</span>
           </label>
           <input type="password" name="password" placeholder="password" className="input input-bordered" required />
           <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
           </div>
           <div className="form-control mt-6">
           <button className="btn btn-primary">Sign In</button>
           </div>
           <p>New to coffee drinker: <Link to="/SignUp">Sign Up</Link></p>
       </form>
   </div>
    );
};

export default SignIn;