import { getCurrentYear } from "@/components/Utils/getCurrentYear";

export default function FooterCopyright() {
    return (
        <div className="tp-footer-copyright-ptb pt-20 pb-20">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tp-footer-copyright text-center">
                        <p>© {getCurrentYear()} ELFASA TASA development. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
