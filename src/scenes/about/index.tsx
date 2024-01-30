import React from 'react'
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import BenefitsPageGraphic from "@/assets/about.png";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ABOUT)}
      >
        <div className="items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Welcome to Zain Fitness Center, where your journey to a healthier and more vibrant life begins. We're not just a typical gym; we're a community dedicated to your well-being. Our cutting-edge facility is designed to inspire and support your fitness goals. Whether you're a seasoned athlete or just starting your fitness journey, our experienced trainers and diverse range of classes are here to guide and challenge you.
              </p>
              <p className="mb-5">
                we believe that fitness is more than just a physical pursuit; it's a path to self-discovery and empowerment. Our welcoming atmosphere fosters a sense of belonging, making it easy to connect with like-minded individuals who share your passion for a healthier lifestyle. Join us at Zain Fitness Center and embark on a transformative journey where your potential knows no limits. Your story of strength, perseverance, and success starts here.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-8">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
