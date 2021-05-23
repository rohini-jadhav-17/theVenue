import React from 'react';

const Location = ()=>{
    return(
        <div className="location_wrapper">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60303.55045785041!2d72.84359239496088!3d19.152707116816703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b65a7edbbdb9%3A0xf447c38599143078!2sGoregaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1621783769064!5m2!1sen!2sin"
            width="100%"
            height="500"
            frameBorder="0"
            allowfullscreen=""
            title="gmaps"
            ></iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    )
}

export default Location;