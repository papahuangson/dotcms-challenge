import axios from "axios";
import React, { ReactNode } from "react";
import { client } from "./dotcmsClient";
import { DotCMSContentlet, DotcmsNavigationItem } from "types";

interface ApiContentData<T> {
  data: T;
  error: string | null;
}

const defaultApiContentData = {
  data: [],
  error: null,
};

interface ApiContextProps {
  appReady: boolean;
  banners: ApiContentData<DotCMSContentlet[]>;
  blogs: ApiContentData<DotCMSContentlet[]>;
  fetchBanners: () => Promise<void>;
  fetchBlogs: () => Promise<void>;
  fetchNavigation: () => Promise<void>;
  fetchProducts: () => Promise<void>;
  initApp: () => Promise<void>;
  navigation: ApiContentData<DotcmsNavigationItem[]>;
  products: ApiContentData<DotCMSContentlet[]>;
  appError: boolean;
}

export const ApiContext = React.createContext<ApiContextProps>({
  appReady: false,
  banners: defaultApiContentData,
  blogs: defaultApiContentData,
  fetchBanners: async () => {},
  fetchBlogs: async () => {},
  fetchNavigation: async () => {},
  fetchProducts: async () => {},
  initApp: async () => {},
  navigation: defaultApiContentData,
  products: defaultApiContentData,
  appError: false,
});

interface ApiContextProviderProps {
  children: ReactNode;
}

export const ApiContextProvider = ({ children }: ApiContextProviderProps) => {
  const [banners, setBanners] = React.useState<ApiContextProps["banners"]>(
    defaultApiContentData,
  );
  const [blogs, setBlogs] = React.useState<ApiContextProps["blogs"]>(
    defaultApiContentData,
  );
  const [navigation, setNavigation] = React.useState<
    ApiContextProps["navigation"]
  >(defaultApiContentData);
  const [products, setProducts] = React.useState<ApiContextProps["products"]>(
    defaultApiContentData,
  );
  const [appError, setAppError] =
    React.useState<ApiContextProps["appError"]>(false);
  const [appReady, setAppReady] =
    React.useState<ApiContextProps["appReady"]>(false);

  const fetchBanners = async () => {
    try {
      const response = await axios.get(
        "https://demo.dotcms.com/api/content/query/+contentType:Banner/limit/3",
      );
      setBanners((curr) => ({ ...curr, data: response.data.contentlets }));
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://demo.dotcms.com/api/content/query/+contentType:Blog/limit/20",
      );
      setBlogs((curr) => ({ ...curr, data: response.data.contentlets }));
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://demo.dotcms.com/api/content/query/+contentType:Product/limit/20",
      );
      setProducts((curr) => ({ ...curr, data: response.data.contentlets }));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchNavigation = async () => {
    try {
      const response = await client.nav.get({
        path: "/",
        depth: 2,
        languageId: 1,
      });
      setNavigation({
        data: (response as unknown as { entity: { children: any } }).entity
          .children,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching navigation:", error);
      setAppError(true);
    }
  };

  const initApp = async () => {
    await fetchNavigation();
    setAppReady(true);
  };

  return (
    <ApiContext.Provider
      value={{
        appError,
        appReady,
        banners,
        blogs,
        fetchBanners,
        fetchBlogs,
        fetchNavigation,
        fetchProducts,
        initApp,
        navigation,
        products,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
