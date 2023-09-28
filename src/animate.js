export const animateContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
            //  staggerChildren 0.2
            duration: 2,
        },
    },
};

export const animateItem = {
    hidden: { y: "100%" },
    show: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

