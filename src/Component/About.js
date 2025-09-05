import { useForm } from "react-hook-form";

function About() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // Stop refresh and get form data
  const myHandleSubmit = (data) => {
    console.log("✅ Submitted Data:", data);
  };

  return (
    <>
      <p>This is my About page!</p>
      <p>This is my registration page using react-hook-form library!</p>

      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form onSubmit={handleSubmit(myHandleSubmit)}>
            {/* First Name */}
            <div className="mb-3 mt-3">
              <label htmlFor="firstname" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="Enter First Name"
                {...register("firstname", { required: "First Name is required" })}
              />
              {errors.firstname && (
                <p style={{ color: "red" }}>{errors.firstname.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-3 mt-3">
              <label htmlFor="lastname" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Enter Last Name"
                {...register("lastname")}
              />
              {/* Lastname is optional → no error */}
            </div>

            {/* Age */}
            <div className="mb-3 mt-3">
              <label htmlFor="age" className="form-label">
                Age:
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter age"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 18, message: "Minimum age should be 18" },
                  max: { value: 75, message: "Maximum age should be 75" }
                })}
              />
              <p style={{ color: "yellowgreen" }}>{errors.age?.message}</p>
            </div>

            {/* Mobile */}
            <div className="mb-3 mt-3">
              <label htmlFor="mobile" className="form-label">
                Mobile:
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="Enter Mobile"
                {...register("mobile", { required: "Mobile is required" })}
              />
              {errors.mobile && (
                <p style={{ color: "red" }}>{errors.mobile.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 4, message: "Minimum length is 4" },
                  maxLength: { value: 12, message: "Maximum length is 12" }
                })}
              />
              <p style={{ color: "orange" }}>{errors.password?.message}</p>
            </div>

            {/* Country */}
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Select Country
              </label>
              <select
                className="form-select"
                {...register("country", { required: "Please select a country" })}
              >
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="Usa">Usa</option>
                <option value="Japan">Japan</option>
                <option value="Russia">Russia</option>
                <option value="Austria">Austria</option>
              </select>
              {errors.country && (
                <p style={{ color: "red" }}>{errors.country.message}</p>
              )}
            </div>

            {/* Remember me */}
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  {...register("remember")}
                />{" "}
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
}

export default About;
