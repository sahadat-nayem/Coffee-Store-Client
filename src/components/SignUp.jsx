import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result =>{
            console.log(result.user);

            const createAt = result?.user?.metadata?.creationTime;

            const newUser = {name, email, createAt}
            // save new user info to the database
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    
                }
            })
            
        })
        .catch(error =>{
            console.log(error);
            
        })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
             <h1 className="text-3xl font-bold text-center mt-5">Sign Up Now</h1>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                </div>
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
                <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;