import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    remember: false,
  });

  // Validation rules
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstname":
        if (!value.trim()) error = "First Name is required!";
        break;
      case "email":
        if (!value.trim()) error = "Email is required!";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email format!";
        break;
      case "password":
        if (!value) error = "Password is required!";
        else if (value.length < 6 || value.length > 12)
          error = "Password must be between 6 and 12 characters!";
        break;
      default:
        break;
    }

    return error;
  };

  // Handle input change + live validation
  const onChangeHandler = (event) => {
    const { name, type, value, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    // update form
    setFormData({
      ...FormData,
      [name]: newValue,
    });

    // validate the changed field
    const error = validateField(name, newValue);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // Submit form
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // validate all fields at once
    const newErrors = {};
    Object.keys(FormData).forEach((key) => {
      const error = validateField(key, FormData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Submitted Data:", FormData);

      // reset only if valid
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        country: "",
        remember: false,
      });

      navigate("/success"); // redirect to success page
    }
  };

  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <form onSubmit={onSubmitHandler}>
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
              name="firstname"
              value={FormData.firstname}
              onChange={onChangeHandler}
            />
            {errors.firstname && (
              <small className="text-danger">{errors.firstname}</small>
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
              name="lastname"
              value={FormData.lastname}
              onChange={onChangeHandler}
            />
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
              name="email"
              value={FormData.email}
              onChange={onChangeHandler}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
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
              name="password"
              value={FormData.password}
              onChange={onChangeHandler}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          {/* Country */}
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Select Country
            </label>
            <select
              className="form-select"
              name="country"
              value={FormData.country}
              onChange={onChangeHandler}
            >
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="Usa">Usa</option>
              <option value="Japan">Japan</option>
              <option value="Russia">Russia</option>
              <option value="Austria">Austria</option>
            </select>
          </div>

          {/* Remember Me */}
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                checked={FormData.remember}
                onChange={onChangeHandler}
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

      <p>{JSON.stringify(FormData)}</p>
    </div>
  );
}

export default Register;
