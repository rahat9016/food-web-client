import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import Burger from "../Images/burger_nnq4osbtgswt_512.png";
import Pizza from "../Images/pizza_4pxllj7qp295_512.png";
import Hotdog from "../Images/hotdog_ndphya5wxqsl_512.png";
import Taco from "../Images/taco_tu69yjs1cpip_512.png";
import Drink from "../Images/drink_n3qeplxd044i_512.png";
export const SidebarData = [
  {
    icon: BiHomeSmile,
    heading: "Home",
    location: "/",
    id: 1,
  },
  {
    icon: AiOutlineMessage,
    heading: "Message",
    location: "/message",
    id: 2,
  },
  {
    icon: RiSettingsLine,
    heading: "Setting",
    location: "/setting",
    id: 3,
  },
  {
    icon: MdOutlineLogout,
    heading: "Logout",
    location: "/logout",
    id: 4,
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
