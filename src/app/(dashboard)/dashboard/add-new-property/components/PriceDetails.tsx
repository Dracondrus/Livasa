"use client";

import { IDescription } from "../../components/GetValues";

type Props = {
  iDescription: IDescription;
  onChange: (data: IDescription) => void;
};

export default function PriceDetails({ iDescription, onChange }: Props) {
  return (
    <div className="tp-dashboard-new-property mb-50">
      <h5 className="tp-dashboard-new-title">Description</h5>
      <div className="row">
        <div className="col-lg-12">
          <div className="tp-dashboard-new-input">
            <textarea
            maxLength={160}
              placeholder="Enter description"
              value={iDescription.description}
              onChange={(e) => onChange({ description: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
