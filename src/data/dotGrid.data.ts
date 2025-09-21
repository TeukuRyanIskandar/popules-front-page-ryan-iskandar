import type { DotGritType } from "@/types/dotGrid.type";
import { mdiHomeOutline, mdiAccountArrowLeftOutline, mdiDomain } from "@mdi/js";
import { Send, UserRound } from "lucide-vue-next";

export const dotGrid: DotGritType[] = [
  {
    icon: mdiHomeOutline,
    title: "Explore",
  },
  {
    icon: mdiAccountArrowLeftOutline,
    title: "Following",
  },
  {
    icon: Send,
    title: "Messages",
  },
  {
    icon: UserRound,
    title: "Profile",
  },
  {
    icon: mdiDomain,
    title: "Business",
  },
];
