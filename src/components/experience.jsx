import companyLogo from '../assets/travelstorys.png';
import uccsLogo from '../assets/uccs.jpg';
import { useDynamicStyles } from './AuroraBackground.jsx';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';

function Experience() {
    const { border, boxShadow } = useDynamicStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [isMdOrLarger, setIsMdOrLarger] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMdOrLarger(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="h-auto">
            <h1 className="text-center mt-16 text-2xl md:text-4xl font-light">Experience</h1>
            <motion.div
                style={{border, boxShadow}}
                className={`p-4 mx-auto rounded-lg cursor-pointer relative z-20 overflow-hidden w-full max-w-96 md:max-w-6xl bg-skyColor  ${isMdOrLarger ? 'h-100' : 'h-auto'} mt-16`}
                onClick={toggleOpen}
                animate={{ height: isOpen ? (isMdOrLarger ? 'auto' : '750px') : (isMdOrLarger ? '100px' : '150px') }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileHover={{scale: 1.05}}>
                <div className="flex items-center">
                    <img src={companyLogo} alt="TravelStorysGPS, LLC" className="w-12 h-12 mr-4"/>
                    <div className="flex flex-col relative w-full text-center md:text-left">
                        <h1 className="text-lg m-0">TravelStorysGPS, LLC</h1>
                        <h2 className="text-base m-0 font-light">Lead Software Engineer</h2>
                        <p className="text-sm md:text-base text-white md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">November 2017 - Present</p>
                    </div>
                    <motion.div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}>
                        <FiArrowDown className="w-6 h-6 mt-2 animate-bounce"/>
                    </motion.div>
                </div>
                <motion.div
                    className={`p-4 pb-15 md:p-4 rounded-lg text-left`}
                    animate={{ paddingTop: isOpen ? '1rem' : '4rem' }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}>
                    <p>
                        As a full-stack developer with mobile expertise, I play a key role in the development and growth
                        of TravelStorysGPS, serving as the lead developer and maintainer of the mobile apps and internal
                        tools.
                        I built the TravelStorysGPS API using Java SpringBoot and Kotlin Multiplatform, ensuring
                        seamless integration across Android, iOS, and the web.
                        I spearhead the development of new features and maintenance of both the Android and iOS apps,
                        introducing innovative features such as indoor tour capabilities using Bluetooth
                        beacons.<br/><br/>
                        Furthermore, I rebuilt the TravelStorysGPS website from scratch using HTML, CSS, and JavaScript,
                        increasing the visibility of new tours and overall user engagement.
                        My contributions also include significant SEO enhancements using tools like SEMRush, maintaining
                        SQL databases, and ensuring efficient project execution through Agile development methodologies.
                    </p>
                </motion.div>
            </motion.div>
            <h1 className="text-center mt-16 text-2xl md:text-4xl font-light">Education</h1>
            <motion.div
                style={{border, boxShadow}}
                className="p-4 mx-auto rounded-lg relative z-20 overflow-hidden w-full max-w-96 md:max-w-6xl bg-skyColor h-100 md:h-auto mt-16"
                whileHover={{scale: 1.05}}>
                <div className="flex items-center">
                    <img src={uccsLogo} alt="UCCS logo" className="w-14 h-12 mr-4"/>
                    <div className="flex flex-col relative w-full text-left">
                        <h1 className="text-[15px] m-0">University of Colorado Colorado Springs</h1>
                        <h2 className="text-base m-0 font-light hidden">Bachelor of Innovation Game Design and Development</h2>
                        <h2 className="text-base m-0 font-light md-hidden">Bachelor of Innovation<br/>Game Design and Development</h2>
                        <p className="text-sm md:text-base text-white md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">August 2015 - May 2019</p>
                    </div>
                </div>
            </motion.div>
            <a href="https://innovation.uccs.edu/about/faq"><h3 className="text-center mt-16 underline">What is a Bachelor of Innovation?</h3></a>
        </div>
    );
}

export default Experience;