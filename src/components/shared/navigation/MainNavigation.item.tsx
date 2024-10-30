import { useNavigate } from "react-router-dom";
import { DotcmsNavigationItem } from "types";

export default function MainNavigationItem({
  navItem,
}: {
  navItem: DotcmsNavigationItem;
}) {
  const navigate = useNavigate();
  const isHome = navItem.href === "/";

  return (
    <li
      key={navItem.hash}
      role="button"
      aria-label={`Go to ${navItem.title} page`}
      onClick={() => navigate(navItem.href)}
      className={`cursor-pointer border-b-8 px-4 text-lg  hover:border-blue-200 ${
        (
          isHome
            ? location.pathname === navItem.href
            : location.pathname.includes(navItem.href)
        )
          ? "border-b-sky-800"
          : "border-b-white"
      }`}
    >
      {navItem.title || ""}
    </li>
  );
}
