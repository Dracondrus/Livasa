"use client"
import { AuthFacebookSvg, AuthGoogleSvg, AuthLockSvg, AuthUserSvg, ClosedEyeSvg, OpenEyeSvg } from "@/components/SVG";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "@/schemas/validationSchema";
import ErrorMessage from "../ErrorMassage";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

interface FormData {
    userNameOrEmail: string;
    password: string;
}

export default function SignInForm() {
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(signInSchema),
    });

    const onSubmit = () => {
        toast.success("Sign in successfully!")
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Email or Username Field */}
                <div className="col-12">
                    <div className="tp-sign-in-input-box">
                        <div className="tp-sign-in-input p-relative">
                            <input
                                {...register("userNameOrEmail")}
                                type="text"
                                placeholder="Email or Username"
                            />
                            <i><AuthUserSvg /></i>
                        </div>
                        <ErrorMessage message={errors?.userNameOrEmail?.message || ""} />
                    </div>
                </div>

                {/* Password Field */}
                <div className="col-12">
                    <div className="tp-sign-in-input-box">
                        <div className="tp-sign-in-input p-relative">
                            <div className="password-input p-relative">
                                <input
                                    {...register("password")}
                                    type={showPass ? "text" : "password"}
                                    placeholder="Password"
                                />
                                <div className="tp-sign-in-input-eye password-show-toggle" onClick={() => setShowPass(!showPass)}>
                                    <i><AuthLockSvg /></i>
                                    <span
                                        id="open-eye"
                                        className="open-eye open-eye-icon"
                                        style={{ display: showPass ? "block" : "none" }}
                                    >
                                        <OpenEyeSvg />
                                    </span>

                                    <span
                                        id="close-eye"
                                        className="open-close close-eye-icon"
                                        style={{ display: showPass ? "none" : "block" }}
                                    >
                                        <ClosedEyeSvg />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <ErrorMessage message={errors?.password?.message || ""} />
                    </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="col-12">
                    <div className="tp-sign-in-from-remeber">
                        <div className="row">
                            <div className="col-6">
                                <div className="tp-contact-input-remeber">
                                    <input id="remember" type="checkbox" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tp-sign-in-input-remeber text-end">
                                    <Link href="/forget">Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="tp-sign-in-from-btn mb-30">
                        <button type="submit" className="tp-btn w-100 text-center">Login In</button>
                    </div>

                    {/* Social Login */}
                    <div className="tp-sign-in-from-subtitle-heading">
                        <h5 className="tp-sign-in-from-subtitle">Or Sign In with</h5>
                    </div>
                    <div className="tp-sign-in-from-btn mb-30">
                        <Link href="https://google.com" target="_blank">
                            <span><AuthGoogleSvg /></span>{" "}
                            Google
                        </Link>{" "}
                        <Link href="https://facebook.com" target="_blank">
                            <span><AuthFacebookSvg /></span>{" "}
                            Facebook
                        </Link>{" "}
                        <Link href="https://apple.com" target="_blank">
                            <span>
                                <i className="fa-brands fa-apple"></i>
                            </span>{" "}
                            Apple
                        </Link>
                    </div>

                    {/* Register Link */}
                    <div className="tp-sign-in-from-register">
                        <p>Don’t have an account? <Link className="textline" href="/sign-up">Register Now</Link></p>
                    </div>
                </div>
            </div>
        </form >
    );
}
