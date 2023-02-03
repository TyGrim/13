import styles from "./Invitation.module.css";
import React from "react";

const ticketData = {
    title: "Your presence is required October, Friday the 13th.",
    heading: "Bear witness as two souls make 'The Unbreakable Vow'. Celebrate them in their quest to love & be loved for eternity.",
    paragraph: "The stars are aligning, & fate will guide us into the Unknown. Listen closely as the union of 2 hearts beating as one, amidst a hint of eerie elegance."
};

const Invitation = () => { 
    return (
            <div className={styles.cardContainer}>
                <div className={styles.cardHeader}>{ticketData.title}</div>
                <div className={styles.cardBody}>
                <h2 className={styles.cardHeading}>{ticketData.heading}</h2>
                <p className={styles.cardParagraph}>{ticketData.paragraph}</p>
                </div>
                <div className={styles.cardFooter}>FOOTER</div>
            </div>
)};

export default Invitation;

