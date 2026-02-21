/* Oldingi barcha CSS kodlaring saqlanadi, faqat buni oxiriga qo'sh: */

#daho-entry {
    opacity: 0;
    transition: 1s ease-in-out;
}

.premium-btn {
    background: var(--accent) !important;
    color: var(--bg) !important;
    border: none !important;
    padding: 20px 50px !important;
    font-size: 22px !important;
    letter-spacing: 2px;
    box-shadow: 0 0 20px var(--accent);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 10px var(--accent); }
    50% { box-shadow: 0 0 35px var(--accent); transform: scale(1.05); }
    100% { box-shadow: 0 0 10px var(--accent); }
}
