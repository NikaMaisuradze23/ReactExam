import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h1>About Us</h1>
    <p>This is the about page of our SPA.</p>
  </motion.div>
);

export default About;
