import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Empower your coding journey with LearnWise – where learning meets
              coding excellence!
            </h2>
            <p className="mt-6 text-gray-600">
              At LearnWise, we believe that everyone should have the opportunity
              to learn and excel in coding, regardless of their background or
              experience level. Our platform is designed to empower individuals
              with the knowledge and skills they need to thrive in the
              ever-evolving world of technology. With LearnWise, learners can
              embark on a personalized coding journey tailored to their unique
              needs and learning pace. Whether you're a complete beginner or an
              experienced coder looking to enhance your skills, our
              comprehensive curriculum and interactive learning resources
              provide the perfect environment to grow and succeed. Our team of
              experienced instructors and industry professionals are dedicated
              to guiding you every step of the way, offering support,
              encouragement, and expertise to help you reach your coding goals.
            </p>
            <p className="mt-4 text-gray-600">
              From mastering the fundamentals of programming languages to
              tackling advanced topics and real-world projects, LearnWise equips
              you with the tools and confidence to tackle any coding challenge.
              Join the LearnWise community today and unlock your full coding
              potential. Together, let's embrace the power of learning and
              innovation to shape a brighter future for ourselves and the world
              around us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
