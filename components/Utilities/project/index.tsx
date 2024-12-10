import styles from './style.module.css';

// Define the type for the props
interface ProjectsProps {
    index: number;
    title: string;
    role: string;
    time: string;
    setModal: (modalState: { active: boolean; index: number }) => void;
}

export const ProjectGalleryItem = ({index, title, role, time, setModal}: ProjectsProps) => {
    return (
        <div
            onMouseEnter={() => setModal({active: true, index})}
            onMouseLeave={() => setModal({active: false, index})}
            className={styles.project}
        >
            <h2 className={"paragraph-3-5em"}>{title}</h2>
            <div className={"flex gap-2"}>
                <p className={"hidden md:block"}>{role}</p>
                <p>{time}</p>
            </div>
        </div>
    );
}