import React from 'react';
import styled from 'styled-components';

const Button = () => {
    return (
        <StyledWrapper>
        <div className="main">
            <div className="up">
                <a href="https://wa.link/rbaquu" target="_blank" rel="noopener noreferrer">
                    <button className="card1">
                        <svg 
                            className="whatsapp" 
                            xmlns="https://wa.link/rbaquu" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                        </svg>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/andres-camilo-pedraza-suarez-0718a12b0/" target="_blank" rel="noopener noreferrer">
                    <button className="card2">
                        <svg 
                            className="linkedin" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </button>
                </a>
            </div>
            <div className="down">
                <a href="https://github.com/Pedraza03" target="_blank" rel="noopener noreferrer">
                    <button className="card3">
                        <svg 
                            className="github" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </button>
                </a>
                <a href="https://discord.com/channels/camingo9934" target="_blank" rel="noopener noreferrer">
                    <button className="card4">
                        <svg 
                            className="discord" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .main {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .up {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    .down {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    .card1, .card2, .card3, .card4 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 90px;
        outline: none;
        border: none;
        background: white;
        transition: 0.2s ease-in-out;
        position: relative;
    }

    svg {
        position: absolute;
    }

    .card1 {
        border-radius: 90px 5px 5px 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    .whatsapp {
        top: 43%;
        left: 43%;
        fill: #25D366;
    }

    .card2 {
        border-radius: 5px 90px 5px 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    .linkedin {
        top: 45%;
        right: 45%;
        fill: #0077b5;
    }

    .card3 {
        border-radius: 5px 5px 5px 90px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    .github {
        bottom: 43%;
        left: 43%;
    }

    .card4 {
        border-radius: 5px 5px 90px 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    .discord {
        bottom: 43%;
        right: 43%;
        fill: #8c9eff;
    }

    .whatsapp, .github, .discord, .linkedin {
        width: 25px;
        height: 25px;
    }

    .card1:hover {
        cursor: pointer;
        scale: 1.1;
        background-color: #00ff00;
    }

    .card1:hover .whatsapp {
        fill: white;
    }

    .card2:hover {
        cursor: pointer;
        scale: 1.1;
        background-color: #0077b5;
    }

    .card2:hover .linkedin {
        fill: white;
    }

    .card3:hover {
        cursor: pointer;
        scale: 1.1;
        background-color: black;
    }

    .card3:hover .github {
        fill: white;
    }

    .card4:hover {
        cursor: pointer;
        scale: 1.1;
        background-color: #8c9eff;
    }

    .card4:hover .discord {
        fill: white;
    }`;

export default Button;
