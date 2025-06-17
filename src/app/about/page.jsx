"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>
        {/* Text */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* Bio */}
          <div className="flex flex-col justify-center gap-12">Bio</div>
          {/* Skills */}
          <div>Skills</div>
          {/* Experience */}
          <div>Experience</div>
        </div>
        {/* Svg */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
