"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";

import ErrorMessage from "./ErrorMassage";
import { IleaveMessageFormValues } from "@/types/custom-interface";
import { leaveMessageSchema } from "@/schemas/validationSchema";

export default function LeaveMessageForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IleaveMessageFormValues>({
        resolver: yupResolver(leaveMessageSchema),
    });

    const onSubmit = () => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-team-details-info-input-box">

                <div className="tp-team-details-info-input">
                    <input type="text" {...register("name")} placeholder="Full name" />
                    {errors.name && <ErrorMessage message={errors.name.message} />}
                </div>

                <div className="tp-team-details-info-input">
                    <input type="text" {...register("phone")} placeholder="Phone number" />
                    {errors.phone && <ErrorMessage message={errors.phone.message} />}
                </div>

                <div className="tp-team-details-info-input">
                    <input type="text" {...register("email")} placeholder="Email address" />
                    {errors.email && <ErrorMessage message={errors.email.message} />}
                </div>

                <div className="tp-team-details-info-input">
                    <textarea placeholder="Your message" {...register("message")}></textarea>
                    {errors.message && <ErrorMessage message={errors.message.message} />}
                </div>

                <button type="submit" className="tp-btn w-100">Send Message</button>
            </div>
        </form>
    );
}
