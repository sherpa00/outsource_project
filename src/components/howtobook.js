import {FcBusinessContact,FcAssistant,FcCollaboration,FcApproval} from "react-icons/fc";
import {RiNumber1} from "react-icons/ri"

function HowToBook() {
    return (
        <div id="howtobook">
            <h2>
                How to order our services?
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultricies massa. Cras imperdiet libero sit amet lacus pulvinar blandit. Curabitur quis velit ante. Pellentesque imperdiet diam sit amet interdum dignissim. Fusce nisl felis, convallis et risus at, fermentum malesuada leo.
            </p>
            
            <ul>
                <li>
                    <span>
                        1
                    </span>
                    <FcBusinessContact id="step_icon" />
                    <h4>
                        You send us a quote or booking
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
                <li>
                    <span>
                        2
                    </span>
                    <FcAssistant id="step_icon" />
                    <h4>
                        Get Answers from Proffesionals
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
                <li>
                    <span>
                        3
                    </span>
                    <FcCollaboration id="step_icon" />
                    <h4>
                        Collabrate with our Proffesionals
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
                <li>
                    <span>
                        4
                    </span>
                    <FcApproval id="step_icon" />
                    <h4>
                        Get our Verified Cleaning Services
                    </h4>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </li>
            </ul>
        </div>
    )
}

export default HowToBook;