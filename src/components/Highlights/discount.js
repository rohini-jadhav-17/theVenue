import { Fade, Slide } from "react-awesome-reveal";
import React, { useEffect, useState } from "react";
import MyButton from '../utils/MyButton';

const Discount = () => {
    const end =30;
    const [start,setStart] = useState(0);
    const percentage = ()=>{
        if(start< end){
            setStart(prevCount=> prevCount+1);
        }
    }
    useEffect(()=>{
        if(start>0 && start<end){
            setTimeout(()=>{
                setStart(prevCount=>prevCount+1)
            },30)
        }
    },[start])
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
            onVisibilityChange={(inView)=>{
                if(inView){
                    percentage();
                }
            }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th JUNE</h3>
            <p>
              Culpa consequat irure Lorem velit. Eiusmod aute enim ex voluptate
              consectetur occaecat occaecat reprehenderit excepteur sit. Do
              proident cupidatat labore elit eu magna ut.
            </p>
            <MyButton
              text="Purchase Tickets"
              link="http://google.com"
              size="small"
              style={{
                background: '#ffa800',
                color: '#ffffff'
              }}
              icon_ticket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
