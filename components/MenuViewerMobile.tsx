import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export interface MenuViewerMobileProps {
  className: "string";
}

export default function MenuViewerMobile({ className }: MenuViewerMobileProps) {
  // State
  const [activeMenu, setActiveMenu] = useState("Lunch & Dinner");

  const onMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const styles = {
    menuButtonActive: {
      backgroundColor: "#163632",
      borderRadius: "10px",
      color: "#f2f5ea",
      fontSize: "14px",
      margin: "10px",
      padding: "10px 20px",
      textAlign: "center",
      width: "80%",
    },
    menuButton: {
      backgroundColor: "#235751",
      borderRadius: "10px",
      color: "#f2f5ea",
      fontSize: "14px",
      margin: "10px",
      padding: "10px 20px",
      textAlign: "center",
      width: "80%",
    },
    downloadLink: {
      backgroundColor: "#163632",
      borderRadius: "10px",
      color: "#f2f5ea",
      margin: "15px",
      padding: "5px 20px 5px 15px",
      textAlign: "center",
      textDecoration: "none",
      width: "100%",
    },
  };
  return (
    <div className={className}>
      <a
        href={`/${activeMenu}.pdf`}
        download={`${activeMenu}.pdf`}
        //@ts-ignore
        style={styles.downloadLink}
      >
        <FontAwesomeIcon icon={faDownload} />
        {` Download ${activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}
       Menu`}
      </a>
      <button
        onClick={() => onMenuClick("Breakfast")}
        //@ts-ignore
        style={
          activeMenu == "Breakfast"
            ? styles.menuButton
            : styles.menuButtonActive
        }
      >
        Breakfast
      </button>
      <button
        onClick={() => onMenuClick("Lunch & Dinner")}
        //@ts-ignore
        style={
          activeMenu == "Lunch & Dinner"
            ? styles.menuButton
            : styles.menuButtonActive
        }
      >
        Lunch & Dinner
      </button>
      <button
        onClick={() => onMenuClick("Drinks")}
        //@ts-ignore
        style={
          activeMenu == "Drinks" ? styles.menuButton : styles.menuButtonActive
        }
      >
        Drinks
      </button>
      <button
        onClick={() => onMenuClick("Pizza")}
        //@ts-ignore
        style={
          activeMenu == "Pizza" ? styles.menuButton : styles.menuButtonActive
        }
      >
        Pizza
      </button>
      <button
        onClick={() => onMenuClick("Kids")}
        //@ts-ignore
        style={
          activeMenu == "Kids" ? styles.menuButton : styles.menuButtonActive
        }
      >
        Kids 10 & Under
      </button>
    </div>
  );
}
