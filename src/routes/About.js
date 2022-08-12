import React from "react";
import "./About.css"

function About (props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
            "The best love is the kind that awakens the soul and makes us reach for more, 
            that plants a fire in our hearts and brings peace to our minds. 
            And that's what you've given me. 
            
            That's what I'd hoped to give you forever"
            </span>
            <span>Nicholas, The Notebook.</span>
        </div>
    );
}

export default About;