"use client";

import { AuthUserSvg } from "@/components/SVG";
import { forgotSchema } from "@/schemas/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMassage";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";

interface FormData {
  email: string;
}

export default function ForgotForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(forgotSchema),
  });

  const onSubmit = () => {
    toast.success("Email sent successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="tp-sign-in-input-box">
            <div className="tp-sign-in-input p-relative">
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your email"
              />
              <i><AuthUserSvg /></i>
            </div>
            <ErrorMessage message={errors?.email?.message || ""} />
          </div>
        </div>
        <div className="col-12">
          <div className="tp-sign-in-from-btn mb-30">
            <button type="submit" className="tp-btn w-100 text-center">
              Send Mail
            </button>
          </div>
          <div className="tp-sign-in-from-register">
            <p>
              Remember password? <Link href="/sign-in">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
