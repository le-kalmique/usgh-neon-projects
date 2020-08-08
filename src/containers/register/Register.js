import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { registerWithFormData } from '../../utils/auth';
import Server from '../../utils/server';
import Form from '../../components/Form/Form';
import DefaultMessages from '../../utils/messages';

const Messages = Object.assign ({
    LoginIsAlreadyUsed : "Entered login is already used.",
    PasswordMustMatch : "Passwords must match"
}, DefaultMessages)

export default function Register() {
    const [formProps, setFormProps] = useState ({
        inputs : [
            {
                type : Form.InputType.Text,
                props : {
                    required : true,
                    type : "text",
                    name : "username",
                    maxLength : "32",
                    pattern : "^[a-zA-Z0-9]+$",
                    placeholder : "Login",
                    className : "input_field form_input"
                }
            },
            {
                type : Form.InputType.Text,
                props : {
                    required : true,
                    type : "text",
                    name : "fullname",
                    maxLength : "32",
                    placeholder : "Full name",
                    className : "input_field form_input"
                }
            },
            {
                type : Form.InputType.Text,
                props : {
                    required : true,
                    type : "password",
                    name : "password",
                    maxLength : "32",
                    placeholder : "Password",
                    className : "input_field form_input"
                }
            },
            {
                type : Form.InputType.Text,
                props : {
                    required : true,
                    type : "password",
                    name : "confirm_password",
                    maxLength : "32",
                    placeholder : "Confirm password",
                    className : "input_field form_input"
                }
            }
        ],
        cb : register,
        labels : {
            message : {
                text : Messages.Empty,
                color : Form.MessageColor.Default
            },
            legend : "Sign up",
            footer : <React.Fragment>Already have an account? <Link to="/auth/login"> Login </Link></React.Fragment>
        }
    });

    function setFormInfo(messageText, messageColor = Form.MessageColor.Red) {
        const props = Object.assign({}, formProps);
        props.labels.message = {
            text : messageText,
            color : messageColor
        };
        setFormProps(props);
    }

    if (localStorage.getItem('jwt'))
        return <Redirect to="login" />

    document.body.className = "background";
    document.title = "Registration";

    async function register(form) {
        setFormInfo(Messages.Empty);

        const formData = new FormData(form);
        const bodyData = new URLSearchParams(formData);

        const password_value = bodyData.get("password");
        const confirm_value = bodyData.get("confirm_password");


        if (password_value !== confirm_value) {
            setFormInfo(Messages.PasswordMustMatch);
            return;
        }

        const result = await registerWithFormData(bodyData);

        if (result && result.data && !result.data.error_code)
            return;

        if (result.error) {
            switch (result.error) {
                case Server.ErrorTypes.ConnecionError:
                    setFormInfo(Messages.ConnectionError);
                    break;

                case Server.ErrorTypes.NotAcceptable:
                    switch (Number(result.data.error_code)) {
                        case 7:
                            setFormInfo(Messages.LoginIsAlreadyUsed);
                            break;

                        default:
                            setFormInfo(Messages.ServerError);
                            break;
                    }
                    break;

                default:
                    setFormInfo(Messages.ServerError);
            }
            return;
        }
    }

    return (
        <div className="center">
            <Form {...formProps} />
        </div>
    );
}