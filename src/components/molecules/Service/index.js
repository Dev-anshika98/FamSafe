import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mobile from "../../../assets/mobile.png";
import map from "../../../assets/map.png";

import urgent from "../../../assets/urgent.png";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Automated Inactivity Alert",
      src: mobile,
      description:
        "Never miss a beat with our automated inactivity alert feature. Our system intelligently monitors your phone activity and prompts you with a ringing alert if it detects extended periods of inactivity. In case of no response, designated family members are automatically notified, ensuring that help is always just a tap away.",
    },
    
    {
      id: 2,
      title: "Nearby Contacts Sharing",
      src: map,
      description:
        "When emergencies strike, it's essential to have access to local assistance. Our app allows you to share nearby contacts with your trusted network, enhancing emergency response efficiency. Whether you need medical help or roadside assistance, help is just a tap away with our nearby contacts sharing feature.",
    },
    {
      id:3,
      title:"SOS Messaging",
      src:urgent,
      description:
      "In times of emergency, every second counts. With our SOS messaging feature, you can send urgent distress messages to your family members or trusted contacts with just a few taps. Choose from predefined messages and share your real-time location, enabling swift assistance even when you're unreachable."

    },
    // {
    //   id:4,
    //   title:" Location History and Analysis",
    //   src:target,
    //   description:
    //   " Our system meticulously records recent location data, offering users a valuable reference point. Through sophisticated analysis of movements and behavior, it provides actionable insights for enhanced safety. Should the need arise, it effortlessly retraces steps, ensuring easy recall of past locations or activities. With these features, users can navigate their world with confidence and peace of mind."

    // }


  ];
  return (
    <div className="py-20 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          Our<span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-gray-200 shadow-lg"
              : "bg-gray-200 text-black shadow-md"
            } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <img src={service.src} alt={service.title} className="inline-block h-20 mx-auto mb-4" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-black">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
