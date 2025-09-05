// import { useState } from "react";


// function Login() {
//     const [FormData, setFormData] = useState(
//         {
//             email:'',
//             password:'',
//             remember:false
//         }
//     );
//     const onChangeHandler = (event) => {
//         setUsername(event.target.value);
//     }

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//         console.log(username);
//     }
//     return (
//         <>
//             <form onSubmit={onSubmitHandler}>
//                 <div className="row"> 
//                     <div className="col-sm-4"></div>
//                     <div className="col-sm-4"></div>
//                     <div className="col-sm-4"></div>

//                 </div>
                

//                 <div className="mb-3 mt-3">
//                     <label for="email" className="form-label">Email:</label>
//                     <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={FormData.email} onChange={onChangeHandler}/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="pwd" className="form-label">Password:</label>
//                     <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={FormData.password} onChange={onChangeHandler}/>
//                 </div>
//                 <div className="form-check mb-3">
//                     <label className="form-check-label">
//                         <input className="form-check-input" type="checkbox" name="remember"/> Remember me
//                     </label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </>
//     );
// }
// export default Login;