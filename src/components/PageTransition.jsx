import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[calc(100vh-5rem)]"
      exit={{ opacity: 0, y: 18 }}
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
