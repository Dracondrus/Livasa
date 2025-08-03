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

  // Обновляем preview src при изменении внешнего `images`
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
        alert("Максимум 10 фотографий");
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

  return (
    <div className="tp-dashboard-new-property mb-50">
      <h5 className="tp-dashboard-new-title">Upload Media</h5>

      <div className="tp-dashboard-new-um">
        <div className="tp-dashboard-new-um-content">
          <span className="upload-btn">
            <input
              id="tp-dashboard-new-um-file-input"
              type="file"
              accept="image/png, image/jpeg"
              multiple
              onChange={handleImageUpload}
            />
            <label htmlFor="tp-dashboard-new-um-file-input">Select Image</label>
          </span>
          <p>
            or drag photos here <br /> (Up to 10 photos)
          </p>
        </div>

        {uploadedImages.length > 0 && (
          <>
    
            <div className="tp-dashboard-new-um-img-box d-flex d-flex-direction-wrap flex-wrap   " style={{ justifyContent:"center"}} >
              {uploadedImages.map((img, index) => (
                <div key={index} className="tp-dashboard-new-um-img">
                  <Image
                    src={img.src}
                    alt={`uploaded-image-${index + 1}`}
                    width={90}
                    height={90}
                  />
                  {index === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 4,
                        left: 4,
                        backgroundColor: "#222",
                        color: "#fff",
                        fontSize: 10,
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}
                    >
                      Preview
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <i className="fal fa-trash-alt"></i>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
