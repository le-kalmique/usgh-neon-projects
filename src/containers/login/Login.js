import React, { useState } from 'react';
import * as qs from 'query-string';
import { Link } from 'react-router-dom';

import { loginWithFormData, logOut } from '../../utils/auth';
import Form from '../../components/Form/Form';
import Server from '../../utils/server';
import DefaultMessages from '../../utils/messages';

const Messages = Object.assign ({
    LoginFirst : "You must have signed in first",
    IncorrectAuthData : "Login or password were entered incorectly."
}, DefaultMessages);

export default function Login (props) {
    document.body.className = "background";
    document.title = "Sign in";

    const [formProps, setFormProps] = useState({
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
                    type : "password",
                    name : "password",
                    maxLength : "32",
                    placeholder : "Password",
                    className : "input_field form_input"
                }
            }
        ],
        cb : login,
        labels : {
            message : {
                text : Messages.Empty,
                color : Form.MessageColor.Default
            },
            legend : "Sign in",
            footer : <React.Fragment>Do not have an account? <Link to="/auth/register"> Register </Link></React.Fragment>
        }
    });

    function setFormInfo(messageText, messageColor = Form.MessageColor.Default) {
        const props = Object.assign({}, formProps);
        props.labels.message = {
            text : messageText,
            color : messageColor
        };
        setFormProps(props);
    }

    function getFormInfo() {
        return formProps.labels.message.text;
    }

    const query = qs.parse(props.location.search);
    if (query.info && String (query.info) === "mustLogin" && getFormInfo() !== Messages.LoginFirst) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        setFormInfo(Messages.LoginFirst);
    }

    async function login(form) {

        setFormInfo(Messages.Empty);

        const formData = new FormData(form);
        const bodyData = new URLSearchParams(formData);

        const result = await loginWithFormData(bodyData, query.redirect);

        if (result.error === Server.ErrorTypes.ServerError) {
            setFormInfo(Messages.ServerError, Form.MessageColor.Red);
            return;
        }
        if (result.error === Server.ErrorTypes.ConnecionError) {
            setFormInfo(Messages.ConnectionError, Form.MessageColor.Red);
            return;
        }
        if (result.data.error_code)
            setFormInfo(Messages.IncorrectAuthData, Form.MessageColor.Red);
    }

    return (
        <div className = "center">
            {
                localStorage.getItem("jwt") === null
                    ?
                    <Form {...formProps}/>
                    :
                    <React.Fragment>
                        <div className="text_container">
                            You have already signed in.
                        </div>
                        <div className="button_outter">
                            <div className="button" onClick={ async () => await logOut() }>
                                Sign out
                            </div>
                        </div>
                    </React.Fragment>
            }
        </div>
    );
}