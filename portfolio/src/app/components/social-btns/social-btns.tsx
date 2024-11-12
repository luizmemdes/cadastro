import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/luiznmendes/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/luiz-nmendes/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/luizmemdes">
                <GitHubIcon/>
            </a>
        </div>
    )
}