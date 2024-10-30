import { createBrowserRouter } from 'react-router-dom'
import { getPageData } from './dotcmsClient'

import Layout from 'components/Layout'
import Page from 'components/Page'
// import BlogList from "components/BlogList";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // Fetch Blog via GraphQL
      // {
      //   path: "blog",
      //   element: <BlogList />,
      //   id: "blogs",
      //   loader: async () => await fetchBlogs(),
      // },
      {
        path: '*',
        element: <Page />,
        id: 'root',
        loader: async (arg) => await getPageData(arg.params['*'])
      }
    ]
  }
])
