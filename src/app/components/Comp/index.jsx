import styles from "./Comp.module.scss";
import Code from "../Code";

const Comp = ({ children, type, props }) => {
    const Element = type === 'code' ? Code : type ;

    const elProps = props || {}

    return (
        <div className={styles.Comp}>
            <Element className={styles.element} {...elProps} >
                {children}
            </Element>
        </div>
    );
};

export default Comp;
