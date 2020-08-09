import React, {useState} from "react";
import "./poll.css";

import InformationForm from "../../InformationForm/InformationForm"

function Poll({options}) {
    function cb() {
        document.getElementById("background").style.opacity = 1;
        document.getElementById("background").style.zIndex = 8;
    }
    return (
        <div className="poll">
            <div class="inputGroup">
                <input id="radio1" name="radio" type="radio"/>
                <label for="radio1">Great job! Riot must hire you!</label>
            </div>
            <div class="inputGroup">
                <input id="radio2" name="radio" type="radio"/>
                <label for="radio2">Guy, go to sleep..</label>
            </div>
            
            <div className="poll_submit_button_outter">
                <div className="button poll_submit_button light_shadow" onClick={cb}>
                    Submit
                </div>
            </div>
            <div id="background" className="background">
                <p className = "emphasized poll_thanks">
                    Thanks for your vote!
                </p>
            </div>
        </div>);
}

export default Poll;