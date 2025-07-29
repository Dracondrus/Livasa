"use client"
import { IPropertyReviewFormData } from "@/types/custom-interface";
import { propertyReviewSchema } from "@/schemas/validationSchema";
import { selectWideOptions } from "@/data/dropdownData";
import { yupResolver } from "@hookform/resolvers/yup";
import NiceSelect from "@/components/UI/NiceSelect";
import StarSvg from "@/components/SVG/StarSvg";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMassage";
import { toast } from "sonner";

export default function PropertyReviewForm() {
    const handleSorting = () => { }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IPropertyReviewFormData>({
        resolver: yupResolver(propertyReviewSchema),
    });

    const onSubmit = () => {
        toast.success("Review submitted successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-property-details-review">
                <p>Your rating for this property</p>
                <div className="tp-property-details-review-rating mb-40">
                    <span><StarSvg /></span>{" "}
                    <span><StarSvg /></span>{" "}
                    <span><StarSvg fillColor="#CED5E6" /></span>{" "}
                    <span><StarSvg fillColor="#CED5E6" /></span>{" "}
                    <span><StarSvg fillColor="#CED5E6" /></span>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-property-details-input">
                            <input
                                type="text"
                                placeholder="Full name"
                                {...register("name")}
                            />
                            {errors.name && <ErrorMessage message={errors.name.message} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-property-details-input">
                            <input
                                type="text"
                                placeholder="Email address"
                                {...register("email")}
                            />
                            {errors.email && <ErrorMessage message={errors.email.message} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-property-details-input">
                            <input
                                type="text"
                                placeholder="Phone number"
                                {...register("number")}
                            />
                            {errors.number && <ErrorMessage message={errors.number.message} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-property-details-select tp-select">
                            <NiceSelect
                                options={selectWideOptions}
                                defaultCurrent={0}
                                onChange={handleSorting}
                                name="Sorting"
                                cls="select wide"
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="tp-property-details-input">
                            <textarea
                                placeholder="Write your message"
                                {...register("message")}
                            />
                            {errors.message && <ErrorMessage message={errors.message.message} />}
                        </div>
                        <div className="tp-contact-input-remeber">
                            <input id="remeber" type="checkbox" />
                            <label htmlFor="remeber">By submitting this form I agree to terms of use</label>
                        </div>
                        <div className="tp-proeprty-details-btn">
                            <button type="submit" className="tp-btn">Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

