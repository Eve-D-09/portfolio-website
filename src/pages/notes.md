
 # page transition with framer motion:

 # 1.  npm i framer-motion in terminal. 

 # import motion to component? which one? app.jsx or page component like Home? 
 # 2. import { motion } from "framer-motion" into home component
 # 3. for the Home component  - make a divs as much as you need
 # 4. make contact page and import { motion } as well, make divs as much as you need

 # 5. HOME page:
 # change div by apending <motion.div></motion.div>
 # - it means change the whole page which renders

 # defining properties to motion.div - the main who renders page
 # <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 0.75, ease: "easeOut" }} classname="what you need" >
 # adding position absolute top 0 and left 0 to this div - makes the whole page render on screen - exept - nav ( or header does not show up)
 # add position relative to the header to render it all the time on screen
 # make initial state to other pages as well
# import { motion } from framer-motion as well to every page I need

# we need exit animation too - 
# App.jsx - where the Screens are - import { AnimatePresence } from  framer-motion
# wrap Screens component into <AnimatePresence></AnimatePresence>
# need to add recognisible id: <Screens key={router.pathname}> I have route.path ? 

# homepage - motion.div exit={{ opacity: 1 }}
# <AnimatePresence mode={"wait"}> - not necessery

# in homepage make changes to slide pages  <motion.div initial={{ y: "100%"}} animate={{ y: "100%"}} transition={{the same rules}} exit={{ opacity: 1 }}>
# make the same changes to other pages as well

# TRANSITION the text divs:

# to <motion.h1 animate={{ y: 0}} initial={{ y: "100%"}} transition={{ delay: 0.5, duration: 0.5}}
# wrap h1 into another div and add rules to this div in css: overflow: hidden

# in contact page: wrap list item in div and add overflow: hidden in css rules
# to pop divs in one by one:

# create animation.js file--> 
# 1. first will be for the whole container
export const container = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        }
    }
}

# 2. second export will be for children:
export const item = {
    hidden: { y: "100%" },
    show: { y: "100%", transition: { duration: 0.5 }},
}

# 3. back conatct.jsx page: import {container, item} from "../animation.js";
# apply container rules to the parent container of items:

# <motion.ul variants={container} initial="hidden" animate="show">
# <motion.li variants={item}>