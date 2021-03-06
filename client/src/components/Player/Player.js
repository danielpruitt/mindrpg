import React from "react";
// import "./Player.css";

import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';



const Player = props => (



    <div className="playerDiv" {...props}>{props.children}
        <Button disabled={props.isDisabled} variant="extendedFab" aria-label={props.action} className="playerDiv">
            <NavigationIcon className="actionBtn" />
            <span className="actionBtn" style={{fontFamily: "'VT323', monospace", fontSize: '18px'}}>{props.action}</span>
        </Button>

        {/* the critical and defend button are commented out for now until we have the logic for it. I know Cody has been working on it and the logic will be coming from the users page. We'll have to pull that into these classes so that they are different from the attack stat.  */}
        {/* <Button variant="extendedFab" aria-label="Critical" className="playerDiv">
            <NavigationIcon className="" />
            Critical!
        </Button>
        <Button variant="extendedFab" aria-label="Defend" className="playerDiv">
            <NavigationIcon className="" />
            Defend!
        </Button> */}
    </div>
)

export default Player;