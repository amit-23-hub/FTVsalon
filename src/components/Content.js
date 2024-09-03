import React from "react";
import onlineImage from "../images/online1.jpg";
import image2 from "../images/2.jpg";
import "./Content.css";

const Content = () => {
  return (
    <div>
      <div className="box2">
        <div className="container">
          <a href="/" className="link">Home</a> | 
          <a href="/" className="link">Online Learning Program</a>
        </div>
      </div>

      <div className="con3">
        <div className="online">
          <h1>ONLINE LEARNING PROGRAM</h1>
          <p>
            We know the first question which comes to your mind after hearing about online learning programs is “How is it possible in case of beauty education where practical is the essence of everything?” Yes! you are absolutely right to ask this question as this was the same curious doubt everyone might have had before the introduction of Artificial Intelligence, Machine Learning, and the Internet of Things in Education. With no delay in time, we had put our global research team of best software engineers, teachers to design online education modules and after a long array of efforts, we are proud to announce that yes, we are the first to do it in India.
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
        These online classes are a blessing to those who live or work at distances far away from our academies and who are willing to learn skills and earn <br></br>
        &nbsp; &nbsp;  &nbsp; a diploma in beauty education from the market leaders of the Fashion & Beauty Industry. These classes will serve the purpose of taking our  <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  teachings to every corner of the world and produce finest quality professionals even from the smallest of streets.
      </div>

      <div className="box6">
        <div className="box7">
          <div className="box9">
          <img 
        src={image2} 
        alt="" 
        style={{ marginTop: '-50%' }} // Added inline CSS for top margin
      />          </div>
        </div>

      
        <div className="box8">
          By introducing 100% interactive online and hybrid learning, programs 
          for the first time in India, we provide you the wholesome learning 
          experience at the comfort of your home & time. We have a ready 
          Artificial Intelligence-based platform which may be utilized to deliver 
          the 100% real digital learning and get you skilled even through 
          distance. 

          These classes will be completely interactive and you will be provided 
          credits and accreditations on fulfilment of given practical tasks also 
          we will provide an exclusive online faculty to be available for your 
          doubts throughout the course period.

          You will have an option to choose and blend among various options of 
          online recorded and live interactive sessions. You will also get an 
          opportunity to have a feel and experience of the physical classroom 
          sessions in your nearby academy depending upon your need and 
          schedules of availability.
        </div>
      </div>


      <div className="so">
      <p>So, enjoy this freedom of learning at your time, your way and at your pace and comfort. And begin your journey towards becoming a certified <br></br> beautician.</p>

      </div>
    </div>
  );
};

export default Content;
