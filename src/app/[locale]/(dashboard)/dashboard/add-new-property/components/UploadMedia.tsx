"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  images: File[];
  onChange: (images: File[]) => void;
};

type UploadedImage = {
  src: string;
  file: File;
};

export default function UploadMedia({ images, onChange }: Props) {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallDevice(window.innerWidth < 1024); // 1024px — порог для ПК
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const newUploadedImages = images.map((file) => ({
      src: URL.createObjectURL(file),
      file,
    }));
    setUploadedImages(newUploadedImages);

    return () => {
      newUploadedImages.forEach((img) => URL.revokeObjectURL(img.src));
    };
  }, [images]);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files) return;

      const totalFiles = files.length + images.length;
      if (totalFiles > 10) {
        alert("Maximum 10 photos allowed");
        return;
      }

      const newFiles = Array.from(files);
      const newUploaded: UploadedImage[] = newFiles.map((file) => ({
        src: URL.createObjectURL(file),
        file,
      }));

      setUploadedImages((prev) => [...prev, ...newUploaded]);
      onChange([...images, ...newFiles]);
    },
    [images, onChange]
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      const newImages = [...images];
      newImages.splice(index, 1);
      onChange(newImages);
    },
    [images, onChange]
  );

  if (isSmallDevice) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#ff4444" }}>
        <h3>Your device screen is too small for a comfortable experience.</h3>
        <p>Please use a PC or laptop.</p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <h5 style={{ fontSize: 18, marginBottom: 12 }}>Upload Media</h5>

      <div
        style={{
          border: "2px dashed #ccc",
          padding: 20,
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        <span style={{ display: "inline-block", marginBottom: 8 }}>
          <input
            id="upload-file-input"
            type="file"
            accept="image/png, image/jpeg"
            multiple
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <label
            htmlFor="upload-file-input"
            style={{
              padding: "8px 16px",
              backgroundColor: "#262B35",
              color: "#fff",
              cursor: "pointer",
              borderRadius: 6,
            }}
          >
            Select Images
          </label>
        </span>
        <p style={{ fontSize: 14, color: "#666" }}>
          or drag photos here <br /> (Up to 10 photos)
        </p>

        {uploadedImages.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginTop: 20,
            }}
          >
            {uploadedImages.map((img, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 200,
                  aspectRatio: "2/1",
                  borderRadius: 8,
                  overflow: "hidden",
                  minWidth: 120,
                  flex: "1 1 120px",
                }}
              >
                <Image
                  src={img.src}
                  alt={`uploaded-image-${index + 1}`}
                  fill
                  style={{ objectFit: "cover", borderRadius: 8 }}
                  sizes="(max-width: 600px) 100vw, 200px"
                />
                {index === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 4,
                      left: 4,
                      backgroundColor: "#222",
                      color: "#fff",
                      fontSize: 12,
                      padding: "2px 6px",
                      borderRadius: 6,
                      fontWeight: "bold",
                    }}
                  >
                    Preview
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  style={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    background: "rgba(0,0,0,0.5)",
                    border: "none",
                    borderRadius: "50%",
                    color: "#fff",
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
