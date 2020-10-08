import React from 'react'; 
import {Button} from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            {/* <p>What are you waiting for?</p> */}
            <p className="subtext">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle = 'btn--outline' buttonSize ='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle = 'btn--primary' buttonSize ='btn--large'>
                    WATCH TRAILER <i className='fa fa-play-circle-o'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
