import styles from "./Invitation.module.css";
import React from "react";

const ticketData = {
    title: "Creepy Friday the 13th Event",
    heading: "A Night of Terror and Delight",
    paragraph: "Join us for a spooky evening at the speakeasy. Dress to impress in your best Friday the 13th attire and be prepared for a night of terror and delight. Limited tickets available, so get yours now before they're gone!"
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

