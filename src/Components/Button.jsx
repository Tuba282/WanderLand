import React from "react";

const Button = ({ text, href, className }) => {
    const styles = {
        link: {
            color: "inherit",
            padding:"3px",
            background: "linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(to right, rgba(0, 0, 0), rgba(0, 0, 0), rgba(0, 0, 0))",
            backgroundSize: "100% 1px, 0 1px",
            backgroundPosition: "100% 100%, 0 100%",
            backgroundRepeat: "no-repeat",
            transition: "background-size 400ms",
        },
        hover: {
            backgroundSize: "0 1px, 100% 1px",
        },
        /*
        agr button hamesha center mein lana hai to 
        container: {
            display: "grid",
            placeItems: "center",
        },
        */ 
    };

    return (
        <div style={styles.container}>
            <a
                href={href}
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.backgroundSize = styles.hover.backgroundSize)}
                onMouseLeave={(e) => (e.target.style.backgroundSize = styles.link.backgroundSize)}
                className={`capitalize ${className}`}
            >
                {text}
            </a>
        </div>
    );
};

export default Button;
