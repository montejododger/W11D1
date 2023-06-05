import {useState} from "react";

const UserForm = () => {
    const [user, setUser] = useState ({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        signUp: "",

    })

    return (
        <form>
            <div>
                <label>Name:
                    <input type="text" value={user.name} onChange="" />

                </label>
                <br/>
                <label>Email:
                    <input type="text" value={user.email} onChange="" />

                </label>
                <br/>
                <label>Phone Number:
                    <input type="text" value={user.phoneNumber} onChange="" />

                </label>
                <br/>
                <label>Phone Type:
                    <select name="phoneType" value={user.phoneType}>
                        <option>Select Phone Type</option>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>

                </label>
                <br/>

                <label>Instructor:
                    <input type="radio" value="instructor" checked=""/>
                </label>
                <label>Student:
                    <input type="radio" value="student" checked=""/>
                </label>
                <br />

                <label>Bio:
                    <textArea type="text" value={user.bio}/>
                </label>


            </div>
        </form>
    )
}

export default UserForm;
