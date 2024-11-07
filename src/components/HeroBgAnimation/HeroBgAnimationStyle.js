import styled from 'styled-components';

export const Div = styled.div`
    width: 600px;
    height: 500px;
   
    border-radius: 12px; /* Smooth, rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: all 0.3s ease; /* Smooth transition on change */

    /* Hover effect */
    &:hover {
        transform: scale(1.02); /* Slight scaling for interactivity */
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Deepen shadow on hover */
    }

    /* Smooth fade-in effect on page load */
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;

    /* Optional keyframes for fade-in effect */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px); /* Slide in from below */
        }
        to {
            opacity: 1;
            transform: translateY(0); /* Settle in place */
        }
    }
`;
