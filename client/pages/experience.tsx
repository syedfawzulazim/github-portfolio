import React from "react";
import Bar from "../components/Bar";
import { techologies, tools } from "../data/data";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const experience = () => {
  return (
    <div className="flex flex-col flex-grow px-2 pt-1 pb-2 md:px-20 lg:px-4 ">
      <div>
        <motion.div variants={variants} initial="initial" animate="animate">
          <h4 className="font-bold">Experience</h4>
          <div className="p-2 space-y-2">
            <div>
              <h5>Jr. Software Engineer [2019-Oct - 2020-Dec]</h5>
              <p>-Brac IT Services Ltd. (BITs)</p>
            </div>
            <div>
              <h5>Internship [2019-Feb - 2019-July]</h5>
              <p>-Brac IT Services Ltd. (BITs)</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={variants} initial="initial" animate="animate">
          <h4 className="font-bold">Education</h4>
          <div className="p-2 space-y-2">
            <div>
              <h5>M.Sc. in High Integrity System</h5>
              <p>-Frankfurt Univerisity of Applied Science (2020-2022)</p>
            </div>
            <div>
              <h5>B.Sc. in Computer Science and Engineering</h5>
              <p>
                -Bangladesh Army Internation University of Science and
                Technology (2015-2019)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 p-8 space-y-2 lg:grid-cols-2 md:12">
        <div>
          <h5 className="my-3 text-2xl font-bold">Web Technologies</h5>
          <div className="my-2">
            {techologies.map((tech) => (
              <Bar data={tech} key={tech.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
