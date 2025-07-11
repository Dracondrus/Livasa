'use client';
import signUpThumb from "../../../../../public/assets/img/others/sign-in-thumb.jpg";
import SignUpForm from "@/components/Form/auth/SignUpForm";



export default function SignUp() {

   const onLog = ( ) => {
      localStorage.setItem("elfasa", "smth")
      window.location.replace("/elfasa-dashboard")
   } 
   return (
      <>
         {/* -- sign in area start -- */}
          <section className="tp-sign-in-register-ptb pt-195 pb-95" style={{backgroundImage:`url(${signUpThumb.src})`}}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6">
                     <div className="tp-sign-in-register-box p-relative text-center">
                        <div className="tp-sign-in-register-heading mb-60">
                           <h4 className="tp-sign-in-register-title">Register now!</h4>
                        </div>
                        <div className="tp-sign-in-input-form">
                          <SignUpForm/>
                          <button onClick={onLog}>click me to login</button>
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