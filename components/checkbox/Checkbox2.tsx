'use client'

import { FaCheck } from "react-icons/fa6"
import { motion } from "framer-motion"

interface checkProps {
  title: string;
  desc: string;
}

const CheckBox2 = ({ title, desc }: checkProps) => {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="h-9 w-9 flex justify-center items-center rounded-full bg-blue-700 p-2">
        <FaCheck className="text-2xl text-white" />
      </div>
      <div>
        <motion.h6
          className="font-semibold"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h6>
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {desc}
        </motion.p>
      </div>
    </div>
  )
}

export default CheckBox2
