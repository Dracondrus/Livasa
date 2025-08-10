"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IGetAllValueProperty } from "../../components/GetValues";

interface IProps {
  property: IGetAllValueProperty;
}

export default function DashboardPropertyItem({ property }: IProps) {
  const images =
    property.images?.length > 0
      ? property.images
      : [{ url: "/no-image.jpg", public_id: "none" }];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-RU").format(price);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);


  const renderPermissionIcon = () => {
    switch (property.permission) {
      case "pending":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#facc15" strokeWidth="2" fill="none" />
            <path d="M12 6v6l4 2" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "rejected":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" fill="none" />
            <line x1="8" y1="8" x2="16" y2="16" stroke="#ef4444" strokeWidth="2" />
            <line x1="16" y1="8" x2="8" y2="16" stroke="#ef4444" strokeWidth="2" />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="none" />
            <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
    }
  };
const handleDelete = async () => {
  if (!confirm("Are you sure you want to delete this property?")) return;

  try {
    const res = await fetch(`/api/properties/delete/${property.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Ошибка ${res.status}: ${text}`);
    }

    // Перезагрузка страницы
    window.location.reload();
  } catch (err) {
    console.error("Ошибка при удалении:", err);
    alert("Failed to delete property.");
  }
};
  return (
    <>
      <div style={styles.cardContainer}>
        <span style={{ ...styles.badge, backgroundColor: "#fff" }}>
          {renderPermissionIcon()}
        </span>

        <div style={styles.carousel}>
          <div style={styles.imageWrapper}>
            <Image
              src={images[currentSlide].url}
              alt={`Slide ${currentSlide + 1}`}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              priority={currentSlide === 0}
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
                }
                style={{ ...styles.arrow, left: 10 }}
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % images.length)
                }
                style={{ ...styles.arrow, right: 10 }}
              >
                ›
              </button>
            </>
          )}
        </div>
        <div style={styles.cardContent}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={styles.title}>
              {property.information.country}, {property.information.neighborhood}
            </h3>
            <div style={styles.price}>
              {formatPrice(property.iAInformation.price)} UZS
            </div>
          </div>
          <div style={styles.address}>{property.information.typeProperty}</div>
          <div style={styles.secondary}>{property.information.address}</div>
<div style={styles.secondary}><b>Reason : </b> {property.review}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button style={styles.viewBtn} onClick={() => setShowModal(true)}>
            Details
          </button>
        
       <button style={styles.viewBtn} onClick={handleDelete}>
  Delete
</button>
        
        </div>
        </div>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal} ref={modalRef}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {renderPermissionIcon()}
              <h2 style={{ marginBottom: 12 }}>{property.information.typeProperty}</h2>
            </div>
            <p><b>Address:</b> {property.information.address}</p>
            <p><b>Country:</b> {property.information.country}</p>
            <p><b>Neighborhood:</b> {property.information.neighborhood}</p>
            <p><b>Price:</b> {formatPrice(property.iAInformation.price)} UZS</p>
            <p><b>Size:</b> {property.iAInformation.size} m²</p>
            <p><b>Rooms:</b> {property.iAInformation.rooms}</p>
            <p><b>Bathrooms:</b> {property.iAInformation.bathrooms}</p>
            <p><b>Year Built:</b> {property.iAInformation.yearBuilt}</p>
            <p><b>Description:</b> {property.iDescription.description}</p>
            
            <button style={styles.closeBtn} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  cardContainer: {
    width: "300px",
    maxWidth: 400,
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  carousel: {
    position: "relative",
    width: "100%",
    height: 220,
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontWeight: 800,
    color: "#a1a1a1ff",
    border: "none",
    borderRadius: "50%",

    cursor: "pointer",
    fontSize: 27,
    zIndex: 2,
 
  },
  cardContent: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: 600,
    margin: 0,
  },
  address: {
    fontSize: "1rem",
    fontWeight: 500,
    marginTop: 4,
  },
  secondary: {
    color: "#666",
    fontSize: "0.9rem",
    marginBottom: 10,
  },
  viewBtn: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "8px 14px",
    cursor: "pointer",
    alignSelf: "flex-start",
    marginTop: 10,
    fontWeight: 600,
  },
  price: {
    fontWeight: 700,
    fontSize: "1rem",
    color: "#333",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    padding: 16,
  },
  modal: {
    background: "#fff",
    padding: 24,
    borderRadius: 12,
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    maxWidth: 500,
    width: "100%",
    textAlign: "left",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: "#555",
    border: "none",
    padding: "10px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
    color: "#fff",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 6,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    zIndex: 10,
  },
};
