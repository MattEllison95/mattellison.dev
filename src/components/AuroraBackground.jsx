import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion';
import {useEffect} from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const useDynamicStyles = () => {
    const color = useMotionValue(COLORS[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0 0 10px 5px ${color}`;

    useEffect(() => {
        animate(color, COLORS, {
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        });
    }, []);

    return { color, border, boxShadow };
};

export const AuroraBackground = () => {
    const { color } = useDynamicStyles();
    const backgroundImage = useMotionTemplate`radial-gradient(135% 135% at 50% 0%, #020617 50%, ${color})`;

    return (
        <motion.section
            style={{ backgroundImage }}
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden text-gray-200"
        >
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                </Canvas>
            </div>
        </motion.section>
    );
};

