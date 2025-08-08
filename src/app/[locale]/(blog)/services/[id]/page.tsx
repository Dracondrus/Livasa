import BlogDetailsArea from "@/components/Blog/Details/BlogDetailsArea";
import BreadcrumbTwo from "../../../../../components/Breadcrumb/BreadcrumbTwo";


export default async function BlogDeails() {


    return (
        <main>
            <>
                {/* breadcrumb area start */}
                <BreadcrumbTwo title="Services" subTitle="" />
                {/* breadcrumb area end */}

                {/* blog details area start */}
                <BlogDetailsArea />
                {/* blog details area end */}
            </>
        </main>
    );
}