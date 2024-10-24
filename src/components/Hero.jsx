import { useDynamicStyles } from '../components/AuroraBackground.jsx';
import mattImage from '../assets/matt.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import {FiArrowDown, FiMail, FiPhone} from 'react-icons/fi';
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

export const Hero = () => {
    const { border, boxShadow } = useDynamicStyles();
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);


    return (
        <motion.div style={{opacity}}
                    className="flex flex-col items-center justify-center h-screen text-center z-10 mx-auto mb-24 relative">
            <motion.div
                style={{border, boxShadow}}
                className="w-52 rounded-full transition-shadow duration-200 ease-in-out"
            >
                <img src={mattImage} alt="Matt Ellison" className="w-full h-full rounded-full"/>
            </motion.div>
            <h1 className="text-4xl mt-4">Matt Ellison</h1>
            <h2 className="font-light mt-2 text-xl">Software Engineer</h2>
            {/*<p className={"max-w-2xl mt-4"}>I am a software engineer with a passion for creating innovative solutions to complex problems. I specialize in full-stack development, with expertise in Java, Kotlin, Swift, and JavaScript.</p>*/}
            <hr className="w-36 mt-4"/>
            <a href="mailto:matt@ellison.email" className="flex items-center space-x-2 mt-4">
                <FiMail className="text-lg text-white"/>
                <h2 className="text-lg text-white">matt@ellison.email</h2>
            </a>
            <div className="flex justify-center space-x-4 mt-4">
                <motion.a href="https://github.com/MattEllison95" whileHover={{scale: 1.1}}>
                    <RiGithubFill className="w-8 h-8 p-2 box-content"/>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/matt-ellison-835a01b9/" whileHover={{scale: 1.1}}>
                    <RiLinkedinBoxFill className="w-8 h-8 p-2 box-content"/>
                </motion.a>
            </div>
            <motion.div style={{opacity}} className="absolute bottom-8 flex items-center space-x-2">
                <FiArrowDown className="w-6 h-6 mt-2 animate-bounce inline-block"/>
                <span className="text-lg">Scroll To Get to Know Me</span>
                <FiArrowDown className="w-6 h-6 mt-2 animate-bounce inline-block"/>
            </motion.div>
        </motion.div>
    );
};