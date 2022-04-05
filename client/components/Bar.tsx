import React, { FC } from "react";
import { Skill } from "../type";
import { motion } from "framer-motion";

const Bar: FC<{ data: Skill }> = ({ data: { Icon, level, name } }) => {
  const width = `${level}%`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-800 rounded-full">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-gray-900 to-gray-200"
        style={{ width: width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
