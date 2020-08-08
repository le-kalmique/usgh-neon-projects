import React, { useState } from 'react';
import * as qs from 'query-string';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUsers, faFire } from '@fortawesome/free-solid-svg-icons';

import { loginWithFormData, logOut } from '../../utils/auth';
import Form from '../../components/Form/Form';
import Server from '../../utils/server';
import DefaultMessages from '../../utils/messages';
import {faImage} from "@fortawesome/free-regular-svg-icons";

const Messages = Object.assign ({
    LoginFirst : "You must have signed in first",
    IncorrectAuthData : "Login or password were entered incorectly."
}, DefaultMessages);

export default function Login (props) {
    document.body.className = "background";
    document.title = "Create a post";

    const [formProps, setFormProps] = useState({
        inputs : [
            {
                type : Form.InputType.TextArea,
                props : {
                    required : false,
                    type : "text",
                    name : "post",
                    maxLength : "500",
                    placeholder : "Enter...",
                    className : "new-post__textarea input_field form_input"
                },
            },
            {
                type: Form.InputType.Text,
                props: {
                    required: false,
                    type: "text",
                    name: "game-link",
                    maxLength: "1000",
                    placeholder: "Enter game link",
                    className: "input_field game-link-field form_input"
                }
            },
            {
                type : Form.InputType.File,
                label : "Upload image",
                props : {
                    type : "file",
                    name : "image",
                    id : "form_image_input",
                    accept : <FontAwesomeIcon icon={faImage}/>
                }
            }
        ],
        cb : sendData,
        labels : {
            message : {
                text : Messages.Empty,
                color : Form.MessageColor.Default
            },
            legend : "Create a post"
        }
    });

    async function sendData(form) {

        return;
    }

    return (
        <div className = "center">
            {
                <Form {...formProps}/>
            }
        </div>
    );
}