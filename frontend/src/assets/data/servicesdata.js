import { LiaShippingFastSolid } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
export const services = [
    {
        id: 1,
        icon: <LiaShippingFastSolid size={35} />,
        service: "Free shipping",
        desc: "from allorders over $100"
    },
    {
        id: 2,
        icon: <GoGift size={35} />,
        service: "Daily surprise offers",
        desc: "save upto 25% off"
    },
    {
        id: 3,
        icon: <BiSupport size={35} />,
        service: "Support 24/7",
        desc: "shop with an expert"
    },
    {
        id: 4,
        icon: <MdOutlinePriceCheck size={35} />,
        service: "Affordable price",
        desc: "get factory direct price"
    },
    {
        id: 5,
        icon: <RiSecurePaymentLine size={35} />,
        service: "Secure payment",
        desc: "100% protected payment"
    },
]