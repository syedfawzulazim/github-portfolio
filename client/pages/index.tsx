import type { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { services } from "../data/data";

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

const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const Home: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-2 pt-1 md:px-20 lg:px-4 ">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, esse
        quibusdam blanditiis commodi dicta assumenda doloribus quaerat
        temporibus. Nihil doloribus adipisci assumenda porro provident.
        Similique totam accusantium saepe libero dolorum!
      </h5>
      <div className="flex-grow p-1 pb-3 mt-5 ">
        <h6 className="font-bold">What I Offer</h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 p-2 bg-gray-900 lg:grid-cols-2 "
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={variants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

// export const getStaticProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch("http://localhost:3000/api/service");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.servicces,
//     },
//   };
// };
