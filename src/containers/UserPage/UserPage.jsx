import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import './user.css'
import User, { getRoleName } from '../../utils/models/user';
import { getCurrentUser, logOut } from '../../utils/auth';
import Server from '../../utils/server';
import Message from '../../utils/messages';
import ConfirmationForm from '../../components/confirmationForm/ConfirmationForm';

const WarningType = {
    None : 0,
    ServerError : 1,
    Unauthorized : 2,
    NotFound : 3,
    Loading : 4,
    ConnecionError : 5
}

export default function UserPage (props) {

    document.body.className = "";
    const id = props.match.params.id;
    const [user, setUser] = useState ({
        isLoaded : false,
        data : {}
    });
    const [warning, setWarning] = useState(WarningType.Loading);
    const [confirm, setConfirm] = useState(false);
    document.title = user.data.fullname ? user.data.fullname : "User";

    if (!user.isLoaded || user.data.id !== id)
        User.getById(id)
            .then(result => {
                const error = result.error;
                if (error) {
                    user.isLoaded = true;
                    switch (error) {
                        case Server.ErrorTypes.Unauthorized:
                            setWarning(WarningType.Unauthorized);
                            break;

                        case Server.ErrorTypes.ConnecionError:
                            setWarning(WarningType.ConnecionError);
                            break;

                        case Server.ErrorTypes.NotFound:
                            setWarning(WarningType.NotFound);
                            break;

                        default:
                            setWarning(WarningType.ServerError);
                    } 
                    return;
                }
                const foundUser = result.data.user;
                foundUser.showExtended = sessionUser.role === User.UserRoles.Admin || sessionUser.id === foundUser.id;
                setUser({
                    isLoaded : true,
                    data : foundUser
                });
                setWarning(Server.ErrorTypes.None);
            });

    const confirmationForm = {
        message : "Are you sure?",
        onConfirm : () => {
            User.deleteById(id)
                .then(() => {
                    if (sessionUser.id === user.data.id)
                        logOut();
                    else
                        document.location = '/users';
                });
        },
        onDecline : () => {
            setConfirm(false);
        }
    }

    const sessionUser = getCurrentUser();
    console.log(sessionUser);
    if (!sessionUser)
        return <Redirect to={ "/auth/login?info=mustLogin&redirect=" + props.location.pathname }/>
    
    const owner = sessionUser.id === id;
    
    return (
        <React.Fragment>
        {
            warning ?
            <div className="center">
                { (warning === WarningType.ServerError) ? Message.ServerError : '' }
                { (warning === WarningType.Unauthorized) ? <Redirect to= { "/auth/login?info=mustLogin&redirect=" + props.location.pathname } /> : '' }
                { (warning === WarningType.ConnecionError) ? Message.ConnecionError : '' }
                { (warning === WarningType.NotFound) ? Message.NotFound : '' }
                { (warning === WarningType.Loading) ? Message.Loading : '' }
            </div> 
            :
            <React.Fragment>
                <div id = "greet_container">
                        <div id="greetings">
                            <p className = "emphasized" id="greet_fullname">
                                { owner ? "Hi, " : ""}
                                { user.data.fullname }
                            </p>
                            <p id = "greet_username">
                                { owner ? "Your " : ""}
                                username is&nbsp;
                                { user.data.username }
                            </p>
                        </div>
                        {
                            owner ?
                            <div id="logout_button_outter">
                                <div className="button light_shadow white_button" onClick={logOut} >
                                    Sign out
                                </div>
                            </div>
                            : ""
                        }
                    </div>
                <div id="user_container">
                    <div className="feature_item">
                        <div className="faded">
                            ROLE
                        </div>
                        <div className="feature_detail">
                            { getRoleName(user.data.role) }
                        </div>
                    </div>
                    <div className="feature_item">
                        <div className="faded">
                            SING UP DATE
                        </div>
                        <div className="feature_detail">
                            {new Date (user.data.registeredAt).toLocaleDateString()}
                        </div>
                    </div>
                    <div className="feature_item">
                        <div className="faded">
                            ORDERS NUMBER
                        </div>
                        <div className="feature_detail">
                            { user.data.amountOfOrders }
                        </div>
                    </div>
                    {
                        user.data.showExtended ?
                        <React.Fragment>
                            <div className="feature_item">
                                <div className="faded">
                                    Telegram ID
                                </div>
                                <div className="feature_detail">
                                    {user.data.telegramId ? user.data.telegramId : "-"}
                                </div>
                            </div>
                            <div className="feature_item">
                                <div className="faded">
                                    PREFERED LANGUAGE
                                </div>
                                <div className="feature_detail">
                                    English
                                </div>
                            </div>
                            <div className="feature_item">
                                <div className="faded">
                                    PAYMENT METHOD
                                </div>
                                <div className="feature_detail">
                                    -
                                </div>
                            </div>
                        </React.Fragment>
                        : ''
                    }
                </div>
                {
                    user.data.showExtended ?
                    <div id="button_box">
                        <Link to={props.location.pathname + "/edit"} className="button user_action_button no_link">
                            Edit
                        </Link>
                        {
                            owner ?
                            <Link to="/orders" className="button user_action_button no_link">
                                Order history
                            </Link>
                            :
                            <Link to={"/order?user_id=" + user.data.id} className="button user_action_button no_link">
                                Current order
                            </Link>
                        }
                        <div className="button user_action_button" onClick = {() => setConfirm(true)}>
                            <font style={{color : "red"}}>
                                Delete account
                            </font>
                        </div>
                    </div>
                    : ''
                }
                {
                    confirm ?
                        <ConfirmationForm {...confirmationForm}/>
                    : ''
                }
            </React.Fragment>
        }
        </React.Fragment>
    )
}