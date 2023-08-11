import React from 'react';

export default function footer() {
    return (
        <div style={{
            fontWeight: "bold",
            textDecoration: "none",
            display: "flex",
            height: "70px",
            opacity: "0.5",
            color: "#000000",
            transition: "background-color 1s ease 0s",
            fontFamily: "system-ui",
            fontSize: "x-small",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff75"
        }}> DigitLight © {new Date().getFullYear()}. Tous droits réservés.</div>
    )
}