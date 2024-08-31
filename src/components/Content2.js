import React from "react";
import onlineImage from "../images/3.jpg";
import image2 from "../images/4.jpg";
import "./Content2.css";

const Content2 = () => {
  return (
    <div>
      

      <div className="con3">
        <div className="online">
          <h1>FREE LIFETIME LEARNING</h1>
          <p>
          At F Salon Academy we never let our students run out of skills, which are needed to sustain as a world-class beauty professional in the market. Our students are never left to fight a battle on their own, and in a sector like “Beauty and Wellness” the battle to equip yourself with new skills is never over. This industry demands a new set of skills now and then in such situations, no course is enough to teach you all the required skills in a fixed time period. That is why F Salon Academy courses come with a unique Free Lifetime Learning program, in which students can learn and grab new skills, fully free of cost, at any F Salon academy nationwide or online by attending selective complementary workshops at any time of their lives, even after being an ex-student.
          </p>
        </div>

        <div className="con4">
        <img 
         src={onlineImage} 
         alt="" 
      style={{ 
         transform: 'scale(0.8)',  // Zoom out by scaling down to 80% of the original size
         transformOrigin: 'center', // Optional: sets the origin of the scaling transformation
         marginTop: '-5%', // Adjusts the vertical position if needed
         border: '20px solid #9B4242' // Optional: adds a border around the image
  }} 
/>

        </div>
      </div>

      <div className="con5">
      You will be regularly notified of these special free workshops on your updated mobile number and email id about the upcoming new trends and technologies in your domain of expertise and you will be able to enjoy these learnings without paying even a single penny more


      </div>

      <div className="box6">
        <div className="box7">
          <div className="box9">
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="box8">

        Not only these, besides our free courses, you will also be able to look for alumni scholarships for customised learnings in future, which you will love to do along with your job in a weekend batch with us. We run a unique concept of one/two-day weekend batches to ensure advanced learning to those who just did learn basics only in the past for unavoidable reasons and want themselves to have higher skills along with a job.

     <br></br>   <br></br>    So, when associated with us you are never short on skills required to meet the demands of the beauty and wellness industry.



        </div>
      </div>



      <div class="container11">
<h1>GET TO KNOW   <br></br> THE RIGHT COURSE FOR YOU?
</h1>
<div class="buttons">
<button className="b1">Enquiry Now</button>
<button className="b2">Contact Us</button>
</div>
</div>





    </div>
  );
};

export default Content2;
