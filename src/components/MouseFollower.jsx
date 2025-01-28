import { motion } from "framer-motion";
import "./MouseFollower.css";

const MouseFollower = ({ position }) => {
  return (
    <motion.div
      className="mouse-follower"
      animate={{ x: position.x-20, y: position.y -80 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    >
      <div className="follower-dot"></div>
    </motion.div>
  );
};

export default MouseFollower;