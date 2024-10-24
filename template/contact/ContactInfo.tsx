import { ReactNode } from "react";
import styles from "./contactPageStyle.module.css";

interface ContactInfoProps {
  icon: ReactNode;
  children: ReactNode;
}

export default function ContactInfo({ icon, children }: ContactInfoProps) {
  return (
    <div style={{ display: "flex" }}>
      <span className={styles.contactIcon}>{icon}</span>
      <p style={{ display: "flex", alignItems: "center" }}>{children}</p>
    </div>
  );
}
