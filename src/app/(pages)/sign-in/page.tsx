import { Metadata } from "next";
import signInThumb from "../../../../public/assets/img/others/sign-in-thumb.jpg";
import SignInForm from "@/components/Form/auth/SignInForm";

export const metadata: Metadata = {
   title: "Sign In - Bhumi Real Estate React NextJs Template",
 };

export default function SignIn() {
   return (
      <>
         {/* sign in area start */}
         <section className="tp-sign-in-ptb pt-195 pb-95" style={{ backgroundImage: `url(${signInThumb.src})` }}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6">
                     <div className="tp-sign-in-register-box p-relative text-center">
                        <div className="tp-sign-in-register-heading mb-30">
                           <h4 className="tp-sign-in-register-title">Hello again</h4>
                           <p>Enter your credentials to acces your account.</p>
                        </div>
                        <div className="tp-sign-in-input-form">
                           <SignInForm />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* sign in area end */}
      </>
   )
}