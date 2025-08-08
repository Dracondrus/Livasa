import { IBlogDT } from "@/types/blog-d-t";
import Image from "next/image";
import Link from "next/link";

export default function BlogItemHome({id, delay, image, title, authorName, subcategories }:IBlogDT) {
    return (
        <div className="col-lg-4 col-md-6" key={id}>
        <div className="tp-blog-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={delay}>
            <div className="tp-blog-item-thumb">
                <Link href={`/services`}><Image src={image} alt={title} /></Link>
                    
            </div>
            <div className="tp-blog-item-content">
                <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-meta-btn">
                 
                    </div>
                   
                </div>
                <div className="tp-blog-item-title">
                    <Link className="textline" href={'/services'}>{title}</Link>
                    <h6>{authorName}</h6>
                </div>
                <div className="tp-blog-user d-flex align-items-center" >
                    <ul style={{display:"block"}}>{subcategories?.map((item, index) => <li style={{display:"block"}} key={index}>{item}</li>)}</ul>
                </div>
            </div>
        </div>
    </div>
    )}