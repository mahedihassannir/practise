import React, { Children, useState } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {

    let user = { name: "mahedi" }

    if (!user) {
        return <NavLink to="Login"></NavLink>
    }
    return children


    let [visible, setVisible] = useState(true)


    let [validate, SetValidate] = useState("")

    let handleLoding = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.username.value
        let password = form.password.value
        console.log(email, password);


        if (password.length < 6) {
            let vale = password.length
            SetValidate(vale)
        }

        else {
            SetValidate("")
        }


    }



    return (
        <div>
            <div>
                <div>

                    <form onSubmit={handleLoding} action="" method="post">
                        <label>
                            <span>username</span>
                        </label>
                        <input type="email" id="username" name="username" required />

                        <label >

                            <span>password</span>
                        </label>
                        <input type={visible ? "text" : "password"} id="password" name="password" required />

                        <input type="submit" />
                    </form>

                    {validate &&
                        <span style={{ color: "red" }}> password must be 6 character {validate}</span>

                    }


                    <div onClick={() => setVisible(!visible)}>
                        {

                            visible ? "Hide" : "Show"

                        }
                    </div>

                </div>

            </div>

        </div >
    );
};

export default About;