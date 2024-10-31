import BlogListing from 'components/shared/content-types/BlogListing'
import BannerCarousel from './BannerCarousel/BannerCarousel'
import Activity from './Activity'
import Banner from './Banner'
import CallToAction from './CallToAction'
import CustomNoComponent from './CustomNoComponent'
import Image from './Image'
import VtlInclude from './VtlInclude'
import WebPageContent from './WebPageContent'
import Destination from './Destination'
import BlogListItem from 'components/shared/content-types/Blogs/BlogListItem'
import Blog from './Blogs/Blog'

export const componentMap = {
  CustomNoComponent: CustomNoComponent,
  webPageContent: WebPageContent,
  Banner: Banner,
  BannerCarousel: BannerCarousel,
  Destination,
  Activity,
  // Product, // Using custom component to render product
  Image: Image,
  CallToAction: CallToAction,
  VtlInclude,
  BlogListing: BlogListing,
  htmlpageasset: WebPageContent,
  // SimpleWidget: WebPageContent,
  blogContent: BlogListItem,
  Blog
}
