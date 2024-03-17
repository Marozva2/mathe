import React from "react";
import { motion } from "framer-motion";
import testimonialImage1 from "/src/assets/images/testimonialImage1.jpg";
import testimonialImage2 from "/src/assets/images/testimonialImage2.jpg";
import testimonialImage3 from "/src/assets/images/testimonialImage3.jpg";

function Testimonials() {
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Testimonials</h2>
        <motion.div
          className="row"
          initial="hidden"
          animate="visible"
          variants={testimonialVariants}
        >
          <div className="col-md-4">
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={testimonialImage1}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt="Testimonial 1"
              />
              <div className="card-body">
                <p className="card-text">
                  "I was amazed by the quality and care put into cleaning my
                  clothes. The service exceeded my expectations!"
                </p>
                <p className="text-muted">- Jane Doe</p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={testimonialImage2}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt="Testimonial 2"
              />
              <div className="card-body">
                <p className="card-text">
                  "Great customer service and quick turnaround time. I'm
                  impressed with how clean and fresh my clothes came back!"
                </p>
                <p className="text-muted">- John Smith</p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={testimonialImage3}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt="Testimonial 3"
              />
              <div className="card-body">
                <p className="card-text">
                  "I've been using this laundry service for years and have
                  always been satisfied with the results. Highly recommend!"
                </p>
                <p className="text-muted">- Emily Johnson</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
