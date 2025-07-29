import Image from "next/image";
import image1 from "../../../../../../public/assets/img/listing/home-2/listing-2-1.jpg";
import image2 from "../../../../../../public/assets/img/listing/home-2/listing-2-2.jpg";
import image3 from "../../../../../../public/assets/img/listing/home-2/listing-2-3.jpg";
import image4 from "../../../../../../public/assets/img/listing/home-2/listing-2-4.jpg";

const uploadedImages = [image1, image2, image3, image4];

export default function UploadMedia() {
    return (
        <div className="tp-dashboard-new-property mb-50">
            <h5 className="tp-dashboard-new-title">Upload Media</h5>

            <div className="tp-dashboard-new-um">
                {/* Upload Area */}
                <div className="tp-dashboard-new-um-content">
                    <span className="upload-btn">
                        <input
                            id="tp-dashboard-new-um-file-input"
                            type="file"
                            accept="image/png, image/jpeg"
                        />
                        <label htmlFor="tp-dashboard-new-um-file-input">Select Image</label>
                    </span>
                    <p>
                        or drag photos here <br /> (Up to 10 photos)
                    </p>
                </div>

                {/* Image Preview Area */}
                <div className="tp-dashboard-new-um-img-box d-flex">
                    {uploadedImages.map((img, index) => (
                        <div key={index} className="tp-dashboard-new-um-img">
                            <Image src={img} alt={`uploaded-image-${index + 1}`} />
                            <button>
                                <i className="fal fa-trash-alt"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
