import signUpThumb from "../../../../../public/assets/img/others/sign-in-thumb.png";
import SignUpForm from "@/components/Form/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Sign Up",
 };

export default function SignUp() {
   return (
      <>
         {/* -- sign in area start -- */}
          <section className="tp-sign-in-register-ptb pt-195 pb-95" style={{backgroundImage:`url(${signUpThumb.src})`}}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6">
                     <div className="tp-sign-in-register-box p-relative text-center">
                        <div className="tp-sign-in-register-heading mb-30">
                      <h6 className="tp-sign-in-register-title">It&apos;s time to get into business, isn&apos;t it?</h6>

                        </div>
                        <div className="tp-sign-in-input-form">
                          <SignUpForm/>
                        </div>
                   
                     </div>
                          <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                            <br />
                        
                  </div>
               </div>
            </div>
         </section>
         {/* sign in area end */}
      </>
   )
}