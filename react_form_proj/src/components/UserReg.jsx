import { useState } from "react";

const UserForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        signUp: "",
    });

    const [errors, setErrors] = useState([]);

    const validate = () => {
        let errors = [];
        if (user.name.length === 0) {
            errors.push("Name Cant Be Empty");
        }
        if (user.email.length === 0) {
            errors.push("Must be Valid Email");
        }
        if (user.phoneNumber.length !== 0) {
            if (user.phoneType === "home" || user.phoneType === "mobile" || user.phoneType === "work") {

            } else {
                errors.push("If Phone Number is presented, MUST select Phone Type.")
            }
        }
        return errors;
    };

    
    const handleChange = (field) => {
        return (e) => {
            setUser({ ...user, [field]: e.target.value });
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            setErrors([])
            console.log(JSON.stringify(user))
            console.log(user)
        }
    }

    const showErrors = () => {
        if (!errors.length) {
            return null;
        } 
        return (
            <ul>
                {errors.map(err => <li>{err}</li>)}
            </ul>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Sign Up Form!</h1>
                {showErrors()}
                <label>
                    Name:
                    <input
                        type="text"
                        value={user.name}
                        onChange={handleChange("name")}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="text"
                        value={user.email}
                        onChange={handleChange("email")}
                    />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={user.phoneNumber}
                        onChange={handleChange("phoneNumber")}
                    />
                </label>
                <br />
                <label>
                    Phone Type:
                    <select
                        name="phoneType"
                        value={user.phoneType}
                        onChange={handleChange("phoneType")}
                    >
                        <option>Select Phone Type</option>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label>
                <br />

                <label>
                    Staff:
                    <br />
                    <input
                        type="radio"
                        name="staff"
                        value="instructor"
                        onChange={handleChange("staff")}
                    />
                    instructor
                    <br />
                    <input
                        type="radio"
                        name="staff"
                        value="student"
                        onChange={handleChange("staff")}
                    />
                    student
                </label>
                <br />

                <label>
                    Bio:
                    <textarea
                        type="text"
                        value={user.bio}
                        onChange={handleChange("bio")}
                    />
                </label>
                <br />
                <label>
                    Sign Up for Email Notifications:
                    <input
                        type="checkbox"
                        name="signUp"
                        onChange={handleChange("signUp")}
                    />
                </label>
                <br />
                <button>Sign Up!</button>
            </div>
        </form>
    );
};

export default UserForm;
