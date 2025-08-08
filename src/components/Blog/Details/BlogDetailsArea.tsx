
import PostboxDetailsText from "./PostboxDetailsText";
import { CircleCheckSvgTwo } from "@/components/SVG";

import PostboxQuote from "./PostboxQuote";


export default function BlogDetailsArea() {
   // Find the blog post by ID from the blogData array


   return (
      <section className="tp-blog-details-ptb pt-40 pb-20">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-postbox-wrapper">
                     <div className="tp-postbox-details-text mb-60">
                        <h3 className="tp-postbox-details-title">
                     Property Renovation
                        </h3>
                        <p className="tp-dropcap text-1">
                           We care about our clients — delivering quality construction, reliable service, and fair prices you can trust. 
                           Whether you need a full home renovation, interior design, or new construction from scratch, our team is here 
                           to bring your vision to life with precision and care.
                        </p>

                        <p className="text-2">
                           Our mission is simple — provide top-quality work, meet deadlines, and ensure every client feels confident and satisfied.
                           From the foundation to the final touch, we handle every stage with professionalism and attention to detail.
                        </p>

                        <div className="tp-postbox-details-list">
                           <ul>
                              <li><span><CircleCheckSvgTwo /></span> Home renovation and upgrades</li>
                              <li><span><CircleCheckSvgTwo /></span> Interior design & furnishing</li>
                              <li><span><CircleCheckSvgTwo /></span> Full-scale construction works</li>
                              <li><span><CircleCheckSvgTwo /></span> Free consultation & fair pricing</li>
                           </ul>
                        </div>

                        <p className="text-3">
                            Contact : <strong>+998 91 254 03 33</strong>
                        </p>
                     </div>

                     {/* postbox details text */}
                     <PostboxDetailsText />

                     {/* Postbox quote */}
                     <PostboxQuote />

                     <div className="tp-postbox-details-text">
                        <p className="text-5">
                           Every project we take on is a commitment to excellence. We work closely with our clients,
                           ensuring that every detail matches their expectations. Trust, quality, and value — that’s
                           what defines our construction services.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="col-lg-4">
                  {/* Sidebar can be enabled if needed */}
                  {/* <BlogDetailsSidebar /> */}
               </div>
            </div>
         </div>
      </section>
   )
}
