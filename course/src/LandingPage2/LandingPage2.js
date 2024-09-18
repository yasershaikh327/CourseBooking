import {ReactComponent as BigLine2} from '../assets/BigLine2.svg';
import {ReactComponent as Card1} from '../assets/Card1.svg';
import {ReactComponent as Card2} from '../assets/Card2.svg';
import {ReactComponent as Card3} from '../assets/Card3.svg';
import {ReactComponent as Card4} from '../assets/Card4.svg';
import {ReactComponent as Scrolbr} from '../assets/Scrolbr.svg';
import '../LandingPage2/LandingPage2.css'

function LandingPage2() {
    return (
            <>
                <div id="page2">
                    <div id="msg1">
                        <h4 id='text2'><span id="mst">Most</span> Popular 
                        Course</h4>
                    </div>
                    <BigLine2/>
                    <Card1/>
                    <Card2/>
                    <Card3/>
                    <Card4/>
                    <Scrolbr/>
                </div>
            </>
        );
 }

export default LandingPage2;
