import type { LucideIcon } from "lucide-react";
import { BookOpen, Users, Swords, RefreshCw, MonitorSmartphone, Puzzle, MessagesSquare } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

/**
 * 导航分类与 content/<locale>/ 下的文章子目录一一对应。
 * key 是翻译键（en.json 的 nav 与顶级 overview 键），path 是 URL slug。
 * 二者必须同时存在：site.tsx 消费 item.path 生成链接，item.key 取文案。
 */
export const NAVIGATION_CONFIG: NavigationItem[] = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Swords, isContentType: true },
  { key: "updates", path: "/updates", icon: RefreshCw, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorSmartphone, isContentType: true },
  { key: "mods", path: "/mods", icon: Puzzle, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
