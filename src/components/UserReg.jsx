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

        return errors;
    };

    
    const handleChange = (field) => {
        return (e) => {
            setUser({ ...user, [field]: e.target.value });
        };
    };

    return (
        <form>
            <div>
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
            </div>
        </form>
    );
};

export default UserForm;
