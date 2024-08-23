import React from 'react';
import './Service.css';

function ServicePage() {
  return (
    <div className="service-page">
      {/* <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Our Blogs</Link></li>
          <li><Link target='_blank' to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/sign-up">SignUp</Link></li>
          </ul>
        </nav>
      </header> */}
      <main>
        <section className="online-booking-and-scheduling">
          <h2>Online Booking and Scheduling</h2>
          <p>Schedule appointments at your convenience.</p>
        </section>
        <section className="service-menu-and-pricing">
          <h2>Service Menu and Pricing</h2>
          <p>Browse detailed service offerings and transparent pricing.</p>
        </section>
        <section className="virtual-consultations-and-styling-suggestions">
          <h2>Virtual Consultations and Styling Suggestions</h2>
          <p>Get expert advice from the comfort of your home.</p>
        </section>
        <section className="in-app-payments-and-loyalty-programs">
          <h2>In-App Payments and Loyalty Programs</h2>
          <p>Seamless transactions and rewarding loyalty benefits.</p>
        </section>
        <section className="salon-management-system-integration">
          <h2>Salon Management System Integration</h2>
          <p>Ensuring a smooth operational flow from online to in-salon service.</p>
        </section>
        <section className="real-time-updates-and-notifications">
          <h2>Real-Time Updates and Notifications</h2>
          <p>Stay updated with the latest at Naturals.</p>
        </section>
        <section className="customer-reviews-and-ratings">
          <h2>Customer Reviews and Ratings</h2>
          <p>Share and read experiences to ensure service quality.</p>
        </section>
        <section className="analytics-and-reporting">
          <h2>Analytics and Reporting</h2>
          <p>Powerful insights at both user and management levels.</p>
        </section>
        <section className="innovative-and-engaging-features">
          <h2>Innovative and Engaging Features</h2>
          <p>
            <ul>
              <li>Home Salon Tips and Tutorials: DIY beauty like never before.</li>
              <li>Beauty Try-On and Virtual Makeovers: Augmented reality that lets you preview and perfect.</li>
              <li>AI-Powered Skin and Hair Analysis: Customized product recommendations based on advanced AI diagnostics.</li>
              <li>Beauty Product Marketplace: An integrated e-commerce platform for all beauty needs.</li>
              <li>Community Forums and Social Networking: A vibrant community space for beauty lovers.</li>
              <li>Gamification and Challenges: Engage and win with beauty challenges and quizzes.</li>
            </ul>
          </p>
        </section>
        <section className="futuristic-features">
          <h2>Futuristic Features</h2>
          <p>
            <ul>
              <li>Smart Mirror Integration: Real-time style previews integrating AR technology.</li>
              <li>IoT-Enabled Personalized Environment Controls: Customize your salon visit atmosphere via the app.</li>
              <li>Virtual Reality Hair and Beauty Consultations: Plan and preview complex makeovers using VR.</li>
              <li>Predictive Analytics for Beauty Trends: Stay ahead with AI-driven beauty trend forecasting.</li>
              <li>Blockchain for Loyalty Programs and Payments: Enhanced security and seamless loyalty integration.</li>
              <li>Real-Time Crowd Management: Visit at the perfect time with live traffic management.</li>
            </ul>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Service Page</p>
      </footer>
    </div>
  );
}

export default ServicePage;