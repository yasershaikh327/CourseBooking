import {ReactComponent as BigLine3} from '../assets/BigLine3.svg';
import {ReactComponent as Instructor} from '../assets/Instructor.svg';

import '../LandingPage4/LandingPage4.css'

function LandingPage4() {
    return (
            <>
                <div id="page4">
                    <h5 id="catlbl4">Our Best <span id="text2">Instructor</span></h5>
                    <h6 id="catlblmsg4">Various versions have evolved over the years, sometimes by accident,</h6>
                    <Instructor/>
                    <BigLine3/>
                </div>
            </>
        );
 }

export default LandingPage4;
