import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineFire, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import {
  RiCoupon2Line,
  RiSettingsLine,
  RiShoppingBag2Line,
} from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";
import { MdOutlineFastfood } from "react-icons/md";
import { BsMenuButtonWideFill } from "react-icons/bs";
export const SidebarUserData = [
  {
    icon: BiHomeSmile,
    heading: "Home",
    location: "/",
    id: 1,
  },
  {
    icon: AiOutlineUser,
    heading: "Login",
    location: "/login",
    id: 2,
  },
  {
    icon: AiOutlineMessage,
    heading: "Message",
    location: "/message",
    id: 3,
  },
  {
    icon: RiShoppingBag2Line,
    heading: "Order",
    location: "/order",
    id: 4,
  },
  {
    icon: RiSettingsLine,
    heading: "Setting",
    location: "/setting",
    id: 5,
  },
];
export const SidebarAdminData = [
  {
    icon: BiHomeSmile,
    heading: "Home",
    location: "/admin/home",
    id: 1,
  },
  {
    icon: BsMenuButtonWideFill,
    heading: "Menu",
    location: "/admin/menu",
    id: 2,
  },
  {
    icon: MdOutlineFastfood,
    heading: "Food",
    location: "/admin/food",
    id: 3,
  },
  {
    icon: AiOutlineFire,
    heading: "Hot Desserts",
    location: "/admin/hot-offers",
    id: 4,
  },
  {
    icon: CgShoppingBag,
    heading: "Order",
    location: "/admin/order",
    id: 5,
  },
  {
    icon: RiCoupon2Line,
    heading: "Coupon",
    location: "/admin/coupon",
    id: 6,
  },
];
