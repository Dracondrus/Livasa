import ForgotForm from "@/components/Form/auth/ForgotForm";
import signInThumb from "../../../../../public/assets/img/others/sign-in-thumb.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Forgotten Password - Bhumi Real Estate React NextJs Template",
  };

export default function Forget() {
    return (
        <>
            {/* -- forget area start -- */}
            <section className="tp-sign-in-ptb pt-250 pb-95" style={{ backgroundImage: `url(${signInThumb.src})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tp-sign-in-register-box p-relative text-center">
                                <div className="tp-sign-in-register-heading mb-30">
                                    <h4 className="tp-sign-in-register-title">Reset Passowrd</h4>
                                    <p>Enter your email address to request password reset.</p>
                                </div>
                                <div className="tp-sign-in-input-form">
                                  <ForgotForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- forget area end -- */}

        </>
    )
}