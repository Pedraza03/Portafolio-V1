const particlesConfig = {
    background: {
        color: {
            value: "#000000",
        },
    },
    particles: {
        number: {
            value: window.matchMedia('(max-width: 767px)').matches ? 30 : 80,
            density: {
                enable: true,
                value_area: 800,
                factor: {
                    xs: 0.1,
                    sm: 0.2,
                    md: 0.4,
                    lg: 0.8,
                    xl: 1,
                },
            },
        },
        color: {
            value: "#ffffff",
        },
        links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
        },
        move: {
            enable: true,
            speed: 1,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
};

export default particlesConfig;