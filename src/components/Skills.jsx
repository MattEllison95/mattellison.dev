import {FaReact, FaJava, FaPhp, FaJs, FaSwift} from 'react-icons/fa';
import {SiCsharp, SiMysql, SiKotlin, SiSpringboot, SiApple, SiTailwindcss} from 'react-icons/si';
import { useDynamicStyles } from "./AuroraBackground.jsx";
import { motion, useMotionTemplate } from "framer-motion";

const skillsData = [
    { name: 'C#', icon: SiCsharp, proficiency: 80 },
    { name: 'PHP', icon: FaPhp, proficiency: 100 },
    { name: 'JavaScript', icon: FaJs, proficiency: 100 },
    { name: 'mySQL', icon: SiMysql, proficiency: 90 },
    { name: 'Java', icon: FaJava, proficiency: 100 },
    { name: 'Kotlin', icon: SiKotlin, proficiency: 100 },
    { name: 'Spring Boot', icon: SiSpringboot, proficiency: 100 },
    { name: 'Kotlin Multiplatform', icon: SiKotlin, proficiency: 60 },
    { name: 'Swift', icon: FaSwift, proficiency: 100 },
    { name: 'Objective-C', icon: SiApple, proficiency: 100 },
    { name: 'React JS', icon: FaReact, proficiency: 20 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 20 },
];

export const Skills = () => {
    const { color, border, boxShadow } = useDynamicStyles();
    const backgroundColor = useMotionTemplate`${color}`;

    return (
        <>
            <h1 className={"text-3xl mb-4 text-center font-light mt-28"}>Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-4 max-w-6xl m-auto">
                {skillsData.map((skill, index) => (
                    <motion.div key={index}
                                className="flex flex-col items-center justify-center p-4 rounded-lg shadow bg-skyColor"
                                style={{border, boxShadow}}
                                whileHover={{scale: 1.1}}>
                        <div className="text-4xl mb-2">
                            <skill.icon/>
                        </div>
                        <div className="text-lg mb-2">{skill.name}</div>
                        <div className="w-full bg-gray-200 rounded-full h-7 relative">
                            <motion.div
                                className="h-7 rounded-full"
                                initial={{width: 0}}
                                animate={{width: `${skill.proficiency}%`}}
                                transition={{duration: 1}}
                                style={{backgroundColor}}
                            />
                            <div className="absolute inset-0 flex items-center justify-center"
                                 style={{color: skill.proficiency < 50 ? 'black' : 'white'}}>
                                {skill.proficiency}%
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};