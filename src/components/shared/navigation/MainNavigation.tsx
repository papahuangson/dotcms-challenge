import { useContext, useEffect } from "react";
import { ApiContext } from "utils/ApiContext";
import MainNavigationItem from "./MainNavigation.item";
import { homeNavItem } from "utils/helpers";

export default function MainNavigation() {
  const {
    navigation: { data, error },
    fetchNavigation,
  } = useContext(ApiContext);

  useEffect(() => {
    async function init() {
      await fetchNavigation();
    }

    init();
  }, []);

  return (
    <nav>
      {error ? (
        error
      ) : data === null ? (
        "Fetching navigation..."
      ) : data?.length > 0 ? (
        <ul className="flex flex-1 flex-row justify-between gap-4">
          {[homeNavItem, ...data].map((navItem) => (
            <MainNavigationItem key={navItem.hash} navItem={navItem} />
          ))}
        </ul>
      ) : (
        "No navigation items found"
      )}
    </nav>
  );
}
