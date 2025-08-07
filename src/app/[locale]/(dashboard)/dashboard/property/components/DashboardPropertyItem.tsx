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

  // Автослайдер
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Закрытие модалки по клику вне
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

  // Выбор стиля бейджа по статусу
  const getBadgeStyle = () => {
    switch (property.permission) {
      case "No permission":
        return { ...styles.badge, ...styles.badgeYellow };
      case "Reject":
        return { ...styles.badge, ...styles.badgeRed };
      default:
        return { ...styles.badge, ...styles.badgeGreen };
    }
  };

  return (
    <>
      <div style={styles.cardContainer}>
        {/* Бейдж с permission */}
        <span style={getBadgeStyle()}>{property.permission}</span>

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

          <button style={styles.viewBtn} onClick={() => setShowModal(true)}>
            Details
          </button>
        </div>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal} ref={modalRef}>
            <h2 style={{ marginBottom: 12 }}>{property.information.typeProperty}</h2>
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
    width: 40,
    height: 40,
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

  // Новый блок: бейджи
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: "4px 10px",
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    color: "#fff",
    textTransform: "capitalize",
    zIndex: 10,
  },
  badgeYellow: {
    backgroundColor: "#facc15", // Жёлтый
    color: "#000",
  },
  badgeRed: {
    backgroundColor: "#ef4444", // Красный
  },
  badgeGreen: {
    backgroundColor: "#22c55e", // Зелёный
  },
};
