import NiceSelect from "@/components/UI/NiceSelect";
import { ISortingHandlerProps } from "@/types/custom-interface";

export default function PriceDetails({ handleSorting }: ISortingHandlerProps) {
    return (
        <div className="tp-dashboard-new-property mb-50">
            <h5 className="tp-dashboard-new-title">Вescription</h5>
            <div className="row">
               
                 <div className="col-lg-12">
                    <div className="tp-dashboard-new-input">
                       
                        <textarea  />
                    </div>
                </div>
            </div>
        </div>
    );
};
