import {useEffect, useRef} from "react";
import style from './ScrollToTop.module.scss'
export default function ScrollToTop() {
    const buttonRef = useRef()
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                buttonRef?.current?.style?.display = "flex";
            } else {
                buttonRef?.current?.style?.display = "none";
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div ref={buttonRef} className={style.scroll_to_top} onClick={scrollToTop}>
            <div>
                <i className="fas fa-angle-up"/>
            </div>
        </div>

    );
}

