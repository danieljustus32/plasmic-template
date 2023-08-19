import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import styles from "./MenuViewer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faRefresh } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ClockLoader } from "react-spinners";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export interface MenuViewerProps {
  className: string;
}

export default function MenuViewer(props: MenuViewerProps) {
  // State
  const [activeMenu, setActiveMenu] = useState("Breakfast");
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setPageNumber(1);
    setNumPages(numPages);
  };

  return (
    <div className={props.className}>
      <div className={styles.tabs}>
        <button className={styles.tab} onClick={() => onMenuClick("Breakfast")}>
          Breakfast
        </button>
        <button
          className={styles.tab}
          onClick={() => onMenuClick("Lunch & Dinner")}
        >
          Lunch & Dinner
        </button>
        <button className={styles.tab} onClick={() => onMenuClick("Pizza")}>
          Pizza
        </button>
        <button className={styles.tab} onClick={() => onMenuClick("Drinks")}>
          Drinks
        </button>
        <button className={styles.tab} onClick={() => onMenuClick("Kids")}>
          Kids
        </button>
      </div>
      <div className={styles.pdfContainer}>
        <button
          className={styles.ctrlButton}
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)}
        >
          <Image
            src="/harpoon-left.png"
            alt="A left-facing whaling harpoon (Click to go to the previous page)"
            height={128}
            width={128}
          />
        </button>
        <Document
          file={`/${activeMenu}.pdf`}
          error={
            <div className={styles.loaderContainer}>
              <FontAwesomeIcon
                icon={faRefresh}
                onClick={() => {
                  location.reload();
                }}
                style={{ color: "white" }}
              />
              <span style={{ color: "white" }}>
                Failed to load file. Please try refreshing your browser.
              </span>
            </div>
          }
          loading={
            <div className={styles.loaderContainer}>
              <ClockLoader color="#f2f5ea" />
            </div>
          }
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.document}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <button
          className={styles.ctrlButton}
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}
        >
          <Image
            src="/harpoon-right.png"
            alt="A right-facing whaling harpoon (Click to go to the next page)"
            height={128}
            width={128}
          />
        </button>
      </div>
      <p style={{ textAlign: "center" }}>
        Page <strong>{pageNumber}</strong> of <strong>{numPages}</strong>
      </p>
      <a
        href={`/${activeMenu}.pdf`}
        download={`${activeMenu}.pdf`}
        //@ts-ignore
        className={styles.downloadLink}
      >
        <FontAwesomeIcon icon={faDownload} />
        {` Download ${
          activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)
        } Menu`}
      </a>
    </div>
  );
}
