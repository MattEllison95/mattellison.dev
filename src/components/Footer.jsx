import github from '../assets/github.png';
import { RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
    return (
        <div className="text-white bottom-0 w-full p-4 z-10 relative">
            <a href={"https://github.com/MattEllison95"}><img src={github} alt={"Github logo"}
                                                              className="w-8 h-8 inline-block p-2 box-content"/></a>
            <a href={"https://www.linkedin.com/in/matt-ellison-835a01b9/"}><RiLinkedinBoxFill className={"inline-block w-8 h-8 p-2 box-content"}/></a>
            <p className={"text-white absolute bottom-4 right-4"}>Copyright &copy; 2024 Matt Ellison</p>
        </div>
    );
};