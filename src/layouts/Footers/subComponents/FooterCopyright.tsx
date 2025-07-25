import { getCurrentYear } from "@/components/Utils/getCurrentYear";

export default function FooterCopyright() {
    return (
        <div className="tp-footer-copyright-ptb pt-20 pb-70">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tp-footer-copyright text-center">
                        <p
                            className="mb-0 text-muted fw-semibold"
                            style={{ fontSize: "15px", lineHeight: "1.7", color: "#ffffffff" }}
                        >
                            <strong>Livasa</strong> создан компанией <strong>&nbsp;ELFASA&nbsp;</strong> —
                            чтобы вы могли легко находить места отдыха и аренда квартир     без посредников, быстро и с комфортом.
                         <br />
                            <span
                                style={{
                                    fontSize: "13px",
                                    color: "#fff",
                                    display: "inline-block",
                                    marginTop: "10px",
                                }}
                            >
                                © {getCurrentYear()} Livasa. Все права защищены.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
