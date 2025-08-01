interface AmenityGroup {
    title: string;
    amenities: string[];
}

const amenityGroups: AmenityGroup[] = [
    {
        title: "Home safety",
        amenities: ["Air conditioning", "Built in robes", "Garage"],
    },
    {
        title: "Bedroom",
        amenities: [ "Heating", "Parking", "WiFi"],
    },
    {
        title: "Kitchen",
        amenities: ["Swimming pool", "Renovation", "Security", ],
    },
];

export function AmenityGroup({ title, amenities }: AmenityGroup) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <p>{title}</p>
            <ul>
                {amenities.map((amenity, index) => (
                    <li key={index}>
                        <div className="tp-contact-input-remeber property">
                            <input id={`amenity-${title}-${index}`} type="checkbox" />
                            <label htmlFor={`amenity-${title}-${index}`}>{amenity}</label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default function AmenitiesArea() {
    return (
        <div className="tp-dashboard-new-property mb-50">
            <h5 className="tp-dashboard-new-title">Amenities</h5>
            <div className="tp-property-details-checking tp-dashboard-new-cheking">
                <div className="row">
                    {amenityGroups.map((group, index) => (
                        <AmenityGroup key={index} {...group} />
                    ))}
                </div>
            </div>
        </div>
    );
};

