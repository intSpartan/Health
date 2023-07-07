import { SignIn } from '@clerk/nextjs/app-beta'
import Home from "./home/page"
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
const Page = () => (
  <Home/>
);

export default Page;