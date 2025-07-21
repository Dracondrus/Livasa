import Image from "next/image";
import Link from "next/link";
import userImg1 from "../../../../../public/assets/img/rent/property/review-user-1.png";
import userImg2 from "../../../../../public/assets/img/rent/property/review-user-2.png";
import userImg3 from "../../../../../public/assets/img/rent/property/review-user-3.png";
import { IReviewDT } from "@/types/custom-interface";

const reviews: IReviewDT[] = [
    {
        id: 1,
        name: "Chigusa Kisa",
        date: "July 21, 2020 at 7:22 pm",
        text: "Experience is fundamental to ensuring prospects stay engaged when visiting content page the most of this 2023 content trend.!",
        image: userImg1
    },
    {
        id: 2,
        name: "Nicolas Bryant",
        date: "July 21, 2020 at 7:22 pm",
        text: "Experience is fundamental to ensuring prospects stay engaged when visiting content page the most of this 2023 content trend.!",
        image: userImg2
    },
    {
        id: 3,
        name: "Nicolas Bryant",
        date: "July 21, 2020 at 7:22 pm",
        text: "Experience is fundamental to ensuring prospects stay engaged when visiting content page the most of this 2023 content trend.!",
        image: userImg3
    }
];

export default function CustomersReviews() {
    return (
        <div className="tp-postbox-comment">
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <div className="tp-postbox-comment-box d-flex">
                            <div className="tp-postbox-comment-info">
                                <div className="tp-postbox-comment-avater mr-20">
                                    <Image src={review.image} alt="user image" />
                                </div>
                            </div>
                            <div className="tp-postbox-comment-text">
                                <div className="tp-postbox-comment-name d-flex align-items-center">
                                    <h5 className="tp-postbox-comment-name-title">{review.name}</h5>
                                    <span className="post-meta"> {review.date}</span>
                                </div>
                                <p>{review.text}</p>
                                <div className="tp-postbox-comment-reply">
                                    <Link href="#">
                                        <svg width="12" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        Reply
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
