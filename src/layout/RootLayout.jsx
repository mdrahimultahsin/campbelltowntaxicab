import Header from "../components/Header";
import {Outlet} from "react-router";
import Footer from "../components/Footer";
import FloatingSidebar from "../components/FloatingSidebar";
import CallToAction from "../shared/CallToAction";
import TopHeader from "../components/TopHeader";
import ScrollToTop from "../utils/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <TopHeader />
      <Header />
      <main className="relative">
        <Outlet />
        <FloatingSidebar />
      </main>
      <CallToAction />
      <Footer />
    </>
  );
};

export default RootLayout;
