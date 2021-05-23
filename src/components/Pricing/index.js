import React from 'react';
import MyButton from '../utils/MyButton';
import {Zoom} from 'react-awesome-reveal';

const Pricing = ()=>{
    const priceState={
        prices:[100,150,200],
        position:['Balcony','Medium','Star'],
        desc:[
            'Velit reprehenderit in ea tempor nisi.Esse reprehenderit in cupidatat laboris reprehenderit.Sunt ipsum cupidatat minim aliqua id elit dofrff.',
            'Ex et laboris adipisicing proident.Nisi quis sit reprehenderit culpa tempor esse reprehenderit et.Nostrud ad laboris veniam sit duis ess.',
            'Mollit pariatur velit exercitation veniam ea sint voluptate amet dolor velit.Lorem dolore excepteur elit eu aliquip nostrud eiusmod esse.'
        ],
        linkto:['http://sales.info/b','http://sales.info/m','http://sales.info/s'],
        delay:[500,0,500]
    }

    const showBoxes= ()=>(
        priceState.prices.map((box,index)=>(
            <Zoom key={index} className="pricing_item" delay={priceState.delay}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            size="samll"
                            link={priceState.linkto[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )
    
    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>
            </div>

        </div>
    )
}

export default Pricing;

