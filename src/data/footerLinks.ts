
interface IFooterLinkDT{
    label:string;
    href:string
}

export const quickLinks:IFooterLinkDT[] = [
    { label: "Home", href: "/" },
    { label: "Add property", href: "/add-new-property"},
    { label: "Agency", href: "/agency" },

    { label: "Pricing", href: "/pricing" },
    { label: "Our FAQ", href: "/faq" },
 
];

export const serviceLinks:IFooterLinkDT[] = [
    { label: "Property", href: "/property" },
    { label: "Dashboard", href: "/dashboard/profile" },
    { label: "Review", href: "/review" },
    { label: "Contact", href: "/contact" },
       { label: "Sign Up", href: "/signup" },
];
