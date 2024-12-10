import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {motion} from "motion/react";
import Image, {StaticImageData} from "next/image";
import styles from './style.module.css';

interface ModalProps {
    modal: {
        active: boolean;
        index: number;
    };
    projects: Project[];
}

interface Project {
    id: number,
    title: string,
    src: string | StaticImageData,
    color: string
}


export const Modal = ({modal, projects} :ModalProps) => {
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);


    useEffect(() => {
        //Move Container
        const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
        //Move cursor
        const xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        const yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
        //Move cursor label
        const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

        window.addEventListener('mousemove', (e) => {
            const {pageX, pageY} = e;
            xMoveContainer(pageX)
            yMoveContainer(pageY)
            xMoveCursor(pageX)
            yMoveCursor(pageY)
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
        })

    }, [])

    return (
        <>
            <motion.div
                ref={modalContainer}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
                className={styles.modalContainer}
            >
                <div
                    style={{ top: index * -100 + "%" }}
                    className={styles.modalSlider}
                >
                    {projects.map((project, idx) => {
                        const { src, color } = project;
                        return (
                            <div
                                className={styles.modal}
                                style={{ backgroundColor: color }}
                                key={`modal_${idx}`}
                            >
                                <Image
                                    src={src}
                                    width={300}
                                    height={0}
                                    alt="image"
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div
                ref={cursor}
                className={styles.cursor}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
            ></motion.div>
            <motion.div
                ref={cursorLabel}
                className={styles.cursorLabel}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
            >
                View
            </motion.div>
        </>
    );
}

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    enter: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}