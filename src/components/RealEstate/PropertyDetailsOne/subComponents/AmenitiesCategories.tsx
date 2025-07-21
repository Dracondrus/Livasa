import { CheckSvg } from "@/components/SVG";

interface AmenityItemProps {
    label: string;
}

const amenities: string[] = [
    "Air conditioning",
    "Built in robes",
    "Garage",
    "Outdoor spa",
    "Intercom",
    "Heating",
    "Parking",
    "WiFi",
    "Swimming pool",
    "Renovation",
    "Security",
    "Garden"
];

function AmenityItem({ label }: AmenityItemProps) {
    return (
        <li>
            <div className="tp-contact-input-remeber property tp-property-category">
                <CheckSvg />
                <span>{label}</span>
            </div>
        </li>
    );
}

export default function AmenitiesCategories() {
    const chunkSize = 4;
    const columns = Array.from({ length: Math.ceil(amenities.length / chunkSize) }, (_, i) =>
        amenities.slice(i * chunkSize, i * chunkSize + chunkSize)
    );

    return (
        <div className="tp-property-details-checking">
            <div className="row">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="col-12 col-md-6 col-lg-4">
                        <ul>
                            {column.map((amenity, index) => (
                                <AmenityItem key={index} label={amenity} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}