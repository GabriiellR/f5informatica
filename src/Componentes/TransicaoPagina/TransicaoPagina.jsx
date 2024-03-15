import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default ((Componente) => {

    return () => (
        <>
            <Componente />

            <motion.div className='fixed top-0 left-0 w-full h-full bg-corPrimaria origin-left z-30'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0], transition: { duration: 2 } }}
                exit={{ scaleY: 0 }}
            // onAnimationComplete={}
            >
            </motion.div>
        </>
    )
})