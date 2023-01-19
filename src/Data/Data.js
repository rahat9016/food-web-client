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
import Burger from "../Images/burger_nnq4osbtgswt_512.png";
import Pizza from "../Images/pizza_4pxllj7qp295_512.png";
import Hotdog from "../Images/hotdog_ndphya5wxqsl_512.png";
import Taco from "../Images/taco_tu69yjs1cpip_512.png";
import Drink from "../Images/drink_n3qeplxd044i_512.png";
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
export const CategoryData = [
  {
    icon: Burger,
    title: "Burger",
    id: 1,
  },
  {
    icon: Pizza,
    title: "Pizza",
    id: 2,
  },
  {
    icon: Hotdog,
    title: "Hotdog",
    id: 3,
  },
  {
    icon: Taco,
    title: "Taco",
    id: 4,
  },
  {
    icon: Drink,
    title: "Drink",
    id: 5,
  },
];
