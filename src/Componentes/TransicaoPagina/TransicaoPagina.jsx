import { motion } from 'framer-motion'

export default ((Componente) => {
    return () => (
        <>
            <Componente />

            <motion.div className='fixed top-0 left-0 w-full h-full bg-black origin-left z-30'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1 }} >
            </motion.div>

            <motion.div className='fixed top-0 left-0 w-full h-full bg-corPrimaria origin-right z-30'
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1 }} >
            </motion.div>
        </>
    )
})