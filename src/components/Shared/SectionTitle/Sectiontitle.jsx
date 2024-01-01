import React from 'react';
import { motion } from "framer-motion"

const SectionTITLE = ({ heading }) => {
    return (
        <div className='py-4 text-center'>
            <motion.h4
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                initial={{ x: -500 }}
                animate={{ x:0 }}
                


            >
                <h4 className='text-2xl font-bold text-orange-500 mb-4 border-b-orange-500 '><u>{heading}</u></h4>
            </motion.h4>


        </div>
    );
};

export default SectionTITLE;