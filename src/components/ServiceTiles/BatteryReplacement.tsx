import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    >
      <h1>THis is Battrey</h1>
    </motion.div>
  );
};

export default BatteryReplacement;
