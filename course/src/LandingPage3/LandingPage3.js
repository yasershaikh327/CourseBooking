import {ReactComponent as BigLine3} from '../assets/BigLine3.svg';
import {ReactComponent as Category} from '../assets/Category.svg';

import '../LandingPage3/LandingPage3.css'

function LandingPage3() {
    return (
            <>
                <div id="page3">
                    <h5 id="catlbl">Most <span id="text2">Popular Categorys</span></h5>
                    <h6 id="catlblmsg">Various versions have evolved over the years, sometimes by accident,</h6>
                    <Category/>
                    <BigLine3/>
                </div>
            </>
        );
 }

export default LandingPage3;
