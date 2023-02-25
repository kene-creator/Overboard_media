import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const CtaForm = () => {
  const [showLabel, setShowLabel] = useState(false);

  const handleBlur = () => {
    setShowLabel(false);
  };

  return (
    <AnimatePresence>
      <form action="" className="flex">
        <div className="relative">
          {showLabel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <label
                htmlFor="ctamail"
                className="block absolute -top-[1.3rem] left-0 text-[0.8rem] ml-6 font-semibold"
              >
                Enter your email📧
              </label>
            </motion.div>
          )}
          <input
            id="ctamail"
            type="text"
            placeholder="Enter your email"
            className="bg-[#F9F9FD] px-2 py-4 rounded-[2rem] mr-2 outline-none"
            onClick={() => setShowLabel(true)}
            onBlur={handleBlur}
          />
        </div>
        <Button type="submit">Lets Talk</Button>
      </form>
    </AnimatePresence>
  );
};

export default CtaForm;
