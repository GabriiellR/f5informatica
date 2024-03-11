import { motion } from 'framer-motion'

export default ((Componente) => {

    return () => (
        <>
 <Componente />
            <motion.div className='fixed top-0 left-0 w-full h-full bg-black origin-bottom z-30'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1 }} >
            </motion.div>
           

            <motion.div className='fixed top-0 left-0 w-full h-full bg-corPrimaria origin-top z-30'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1 }} >
            </motion.div>
        </>
    )
})