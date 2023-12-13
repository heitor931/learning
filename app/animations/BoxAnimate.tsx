"use client"

import { motion } from "framer-motion"


function BoxAnimate() {
    return (
        <motion.div  initial={{rotate: "0deg"}} animate={{rotate: "360deg"}} transition={{duration: 1, ease: "easeInOut"}} exit={{rotate: "0deg", backgroundColor: "blueviolet"}} className="w-80 rounded flex centerize h-80 bg-white p-2">
            <p className="text-3xl text-red-700 font-bold">I am Life</p>
        </motion.div>
    );
}

export default BoxAnimate;