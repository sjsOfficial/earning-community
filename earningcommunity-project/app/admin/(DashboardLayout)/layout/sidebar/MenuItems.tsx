import {
  IconLayoutDashboard,
  IconPackage,
  IconShoppingCart,
  IconCash,
  IconBuildingBank,
  IconBrandFacebook,
  IconBrandYoutube,
  IconCreditCard
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/admin",
  },
  {
    navlabel: true,
    subheader: "Packages",
  },
  {
    id: uniqueId(),
    title: "All Packages",
    icon: IconPackage,
    href: "/admin/packages",
  },
  {
    id: uniqueId(),
    title: "Purchase Packages",
    icon: IconShoppingCart,
    href: "/admin/purchase",
  },
  {
    navlabel: true,
    subheader: "Account",
  },
  {
    id: uniqueId(),
    title: "Purchase Requests",
    icon: IconCreditCard,
    href: "/admin/recharge",
  },
  {
    id: uniqueId(),
    title: "Withdraw Requests",
    icon: IconCash,
    href: "/admin/withdraw",
  },
  {
    id: uniqueId(),
    title: "Mobile Banks",
    icon: IconBuildingBank,
    href: "/admin/banks",
  },
  {
    navlabel: true,
    subheader: "Contents",
  },
  {
    id: uniqueId(),
    title: "Facebook Videos",
    icon: IconBrandFacebook,
    href: "/admin/facebook",
  },
  {
    id: uniqueId(),
    title: "Youtube Videos",
    icon: IconBrandYoutube,
    href: "/admin/youtube",
  },
 
];

export default Menuitems;
