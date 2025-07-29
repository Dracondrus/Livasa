"use client"
import { AuthEmailSvg, AuthFacebookSvg, AuthGoogleSvg, AuthLockSvg, AuthUserSvg, ClosedEyeSvg, OpenEyeSvg } from "@/components/SVG";
import { ISignUpFormData } from "@/types/custom-interface";
import { signUpSchema } from "@/schemas/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMassage";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import TelegramLoginButton from "./TelegramButton";

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ISignUpFormData>({
        resolver: yupResolver(signUpSchema),
    });

    const onSubmit = () => {
        toast.success("Sign-up successful! Welcome aboard!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-12">
                    <div className="tp-sign-in-input-box">
                        <div className="tp-sign-in-input p-relative">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                {...register("username")}
                            />
                            <i><AuthUserSvg /></i>
                        </div>
                        <ErrorMessage message={errors?.username?.message || ""} />
                    </div>
                </div>

                <div className="col-12">
                    <div className="tp-sign-in-input-box">
                        <div className="tp-sign-in-input p-relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format"
                                    }
                                })}
                            />
                            <i><AuthEmailSvg /></i>
                        </div>
                        <ErrorMessage message={errors?.email?.message || ""} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="tp-sign-in-input-box">
                        <div className="tp-sign-in-input p-relative">
                            <div className="password-input p-relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    {...register("password")}
                                />
                                <div
                                    className="tp-sign-in-input-eye password-show-toggle"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    <i><AuthLockSvg /></i>
                                    <span
                                        id="open-eye"
                                        className="open-eye open-eye-icon"
                                        style={{ display: showPassword ? "block" : "none" }}
                                    >
                                        <OpenEyeSvg />
                                    </span>

                                    <span
                                        id="close-eye"
                                        className="open-close close-eye-icon"
                                        style={{ display: showPassword ? "none" : "block" }}
                                    >
                                        <ClosedEyeSvg />
                                    </span>

                                </div>
                            </div>
                        </div>
                        <ErrorMessage message={errors?.password?.message || ""} />
                    </div>
                </div>

                <div className="col-12">
                    <div className="tp-sign-in-input-box">
                        <div className="tp-sign-in-input p-relative">
                            <div className="password-input p-relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password"
                                    {...register("confirmPassword")}
                                />
                                <div
                                    className="tp-sign-in-input-eye password-show-toggle"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    <i><AuthLockSvg /></i>
                                    <span
                                        id="open-eye"
                                        className="open-eye open-eye-icon"
                                        style={{ display: showConfirmPassword ? "block" : "none" }}
                                    >
                                        <OpenEyeSvg />
                                    </span>

                                    <span
                                        id="close-eye"
                                        className="open-close close-eye-icon"
                                        style={{ display: showConfirmPassword ? "none" : "block" }}
                                    >
                                        <ClosedEyeSvg />
                                    </span>

                                </div>
                            </div>
                        </div>
                        <ErrorMessage message={errors?.confirmPassword?.message || ""} />
                    </div>
                </div>

                <div className="col-12">
                    <div className="tp-sign-in-from-remeber">
                        <div className="row">
                            <div className="col-6">
                                <div className="tp-contact-input-remeber">
                                    <input id="remember" type="checkbox" {...register("remember")} />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                            </div>
                            <div className="col-6 text-end">
                                <div className="tp-sign-in-input-remeber text-end">
                                    <Link href="/forget">Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-sign-in-from-btn mb-30">
                        <button type="submit" className="tp-btn w-100 text-center">Sign Up</button>
                    </div>
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
                    <div className="tp-sign-in-from-register">
                        <p>Already have an account? <Link className="textline" href="/sign-in">Log in</Link></p>
                    </div>
                    <TelegramLoginButton/>
                </div>
            </div>
        </form>
    );
}
