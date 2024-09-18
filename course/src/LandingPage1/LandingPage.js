import { ReactComponent as Sparkle } from '../assets/Sparkle.svg'; 
import { ReactComponent as PurpleDot } from '../assets/PurpleDot.svg'; 
import { ReactComponent as PurpleDot1 } from '../assets/PurpleDot1.svg'; 
import {ReactComponent as SmallLine} from '../assets/SmallLine.svg';
import {ReactComponent as BigLine} from '../assets/BigLine.svg';
import {ReactComponent as Yellowspark} from '../assets/Yellowspark.svg';
import {ReactComponent as Temp1} from '../assets/Temp1.svg';
import {ReactComponent as Temp2} from '../assets/Temp2.svg';
import {ReactComponent as Zipzag} from '../assets/Zipzag.svg';
import {ReactComponent as Rating} from '../assets/Rating.svg';
import {ReactComponent as Search} from '../assets/Search.svg';
import '../LandingPage1/LandingPage.css'

function LandingPage() {
    return (
            <>
                <Sparkle />
                <h4>START TO SUCCESS</h4>
                <PurpleDot/>
                <div id="bigmsg" >
                        <h5>Access To <span class='fivek'>5000+<BigLine/> </span>Courses
                        from <span class='fivek'>300</span> Instructors   
                        & Institutions</h5><SmallLine/>
                </div>
                <Yellowspark/>
                <Temp1/>
                <Temp2/>
                <Zipzag/>
                <Rating/>
                    <h4 id="text1">Various versions have evolved over the years, sometimes by accident,</h4>
                    <input type='text' />
                    <Search/>
                    <PurpleDot1/>
            </>
        );
 }

export default LandingPage;
