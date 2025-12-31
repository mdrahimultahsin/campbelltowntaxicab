import {Link, useParams} from "react-router";
import titleImg from "../../../assets/campbelltown-pages-hero-img.png";
import useSEO from "../../../hooks/useSEO";
import Container from "../../../shared/Container";
import ButtonSecondary from "../../../shared/ButtonSecondary";
import {FaCheck, FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import BookingForm from "../../../shared/BookingForm";
import corporateTripsImg from "../../../assets/services/campbelltown-corporate-trips.jpeg";
import FeatureFleet from "../../Home/FeatureFleet";
import Faq from "../../../shared/Faq";
import {allLocationsData} from "./AllLocationsDatas";
import ServicesSection from "../../Home/ServicesSection";

const CoveredLocation = () => {
  const {location} = useParams();
  // const locationData = allLocationsData[location];
  // console.log(locationData);
  const modifiedLocationName = location
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(`https://campbelltowntaxicabs.com.au/area-covered/${location}`);

  const defaultLocationData = {
  heroTitle: `Taxi Service in ${modifiedLocationName}`,
  heroDescription: `${modifiedLocationName} Taxi Cabs delivers dependable and professional taxi and maxi cab services in ${modifiedLocationName} NSW and nearby Macarthur suburbs. We cater to families, group travellers, and corporate passengers with clean, modern vehicles driven by experienced local drivers. Our diverse fleet includes standard taxis, maxi cabs, SUVs, premium vehicles, and wheelchair-accessible taxis. Available 24/7, we provide reliable Sydney Airport transfers, corporate transport, cruise terminal pickups, and local taxi services throughout ${modifiedLocationName}, Campbelltown, Narellan, and surrounding areas.`,

  locationSectionTitle: `Trusted Taxi and Maxi Cab Services in ${modifiedLocationName}, NSW | 24/7 Safe, Comfortable, On-Time Taxi & Maxi Cab Services`,

  locationSectionDescription: `${modifiedLocationName} Taxi Cab provides professional corporate taxi and maxi cab services across ${modifiedLocationName} and the wider Macarthur region. Our streamlined booking system and modern fleet ensure reliable transport for executives, corporate teams, and group travel. Available 24/7, we cover airport transfers, inter-office travel, and time-critical journeys, delivering a safe, punctual, and comfortable experience every time.`,

  

  serviceTitle: `Our Taxi and Maxi Services in ${modifiedLocationName}`,
  serviceSubtitle: `${modifiedLocationName} Taxi Cab offers dependable taxi and maxi cab services across ${modifiedLocationName} NSW and surrounding suburbs. From Sydney Airport transfers to maxi cabs for group travel and premium taxis for special events, we guarantee safe, reliable, and on-time transport.`,
  faqs: [
      {
        question: "How Do Corporate Taxi Services Sydney Billing Systems Work?",
        answer:
          " We provide monthly consolidated invoices detailing all employee trips with cost center codes. Integration with accounting platforms automates expense reconciliation. Credit terms extend 60 days for established accounts with ABN verification.",
      },
      {
        question:
          " Can I Book Corporate Taxi Services Campbelltown Without Manager Approval?",
        answer:
          " Booking permissions depend on your company's authorization workflow settings. We configure approval requirements matching internal policies. Some accounts allow direct employee booking while others require manager pre-authorization codes before ride confirmation.",
      },

      {
        question:
          "What Makes Corporate Taxi Services Sydney Different From Regular Taxi qookings?",
        answer:
          " Corporate accounts receive dedicated management, consolidated billing, and expense tracking. Priority dispatch ensures punctuality. Volume discounts apply monthly. Regular taxis lack business invoicing and account coordination features completely.",
      },
      {
        question:
          " How Quickly Can We Set Up Corporate Taxi Services For Our Business?",
        answer:
          " Account setup completes within 48 hours after receiving the company ABN and authorization details. We provide employee booking instructions and portal access immediately. Training sessions are available for administrative staff managing transportation coordination.",
      },
      {
        question:
          " Do You Provide Corporate Taxi Services For After-Hours Shift Workers?",
        answer:
          " Yes, we operate 24/7, including overnight shifts and early morning starts. After-hours corporate accounts receive identical service standards. Shift worker transportation ensures employees reach home safely regardless of departure times throughout the night.",
      },
      {
        question:
          " Can We Track Employee Rides In Real-Time For Security Purposes?",
        answer:
          " Yes, our vehicle tracking system provides real-time location monitoring. Executive assistants and security personnel access live trip progress. GPS timestamping verifies pickup and drop-off times. Ride completion notifications are sent automatically via email.",
      },
      {
        question:
          " What Payment Methods Do Corporate Taxi Services Sydney Accounts Accept?",
        answer:
          " We accept monthly invoicing with bank transfer payments. Credit card autopay is available for automated billing. Direct debit arrangements simplify payment processing. Payment terms extend 60 days for qualified accounts meeting established credit criteria.",
      },
      {
        question:
          " Do You Provide Reporting For Corporate Travel Policy Compliance?",
        answer:
          " Yes, monthly reports detail all trips with pickup/drop-off locations and times. Data exports integrate with expense management systems. Compliance reporting identifies policy exceptions requiring review. Quarterly business reviews analyze spending patterns and optimization opportunities.",
      },
      {
        question:
          " Can Multiple Employees From Our Company Book Simultaneously?",
        answer:
          " Absolutely. Our dispatch system handles multiple concurrent bookings from the same corporate account. Each employee receives a dedicated vehicle assignment. Group coordination is available for team events requiring simultaneous departures. No booking conflicts occur within accounts.",
      },
      {
        question:
          " Do Corporate Taxi Services Campbelltown Offer Volume Discounts?",
        answer:
          " Yes, volume-based discount tiers activate at 100, 250, and 500 monthly rides. Discounts range from 10% to 20% depending on usage levels. Annual contracts receive additional preferential pricing. Contact us for customized corporate rate structures.",
      },
    ],
};
const locationData = {
  ...defaultLocationData,
  ...(allLocationsData[location] || {}),
};

  return (
    <>
      {useSEO({
        title: `${modifiedLocationName} | Campbelltown Taxi Cabs`,
        description:
          "Premium Taxi Service in Campbelltown NSW for comfortable, fast, and affordable rides. Book your ride today with Campbelltown Taxi Cabs!",
        keywords: `${modifiedLocationName} taxi, campbelltown taxi cabs, taxi campbelltown,taxi campbelltown nsw, campbelltown taxi,campbelltown taxis,taxi service campbelltown nsw,taxis campbelltown,luxury taxi campbelltown,taxi service campbelltown`,
        canonical: `https://campbelltowntaxicabs.com.au/area-covered/${location}`,
      })}
      <div>
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="flex flex-col md:flex-row text-white md:gap-6">
              <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
                <h2 className="section-hero-title">{locationData.heroTitle}</h2>

                <p className="mt-8 text-sm md:text-base">
                  {locationData.heroDescription}
                </p>
                <div className="flex py-4 gap-4 justify-center md:justify-start">
                  <Link to="/book-a-taxi" className=" ">
                    <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                      <FaHandPointer />
                      Book Online
                    </ButtonSecondary>
                  </Link>
                  <a href="tel:1300450428" className="">
                    <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                      <IoCallSharp className="" /> 1300 450 428
                    </ButtonSecondary>
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-center pb-10 md:pb-0">
                <img
                  className="w-full"
                  src={titleImg}
                  alt="Campbelltown Taxi Cabs"
                />
              </div>
            </div>
          </Container>
        </div>
        {/* Booking Form */}
        <BookingForm formTitle={`Book Taxi in ${modifiedLocationName} `} />

        {/* ---------------------------------------- */}
        {/* SECTION: Locatiion Details Dynamic */}
        {/* ---------------------------------------- */}

        <section className="py-12 bg-white">
          <Container>
            <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
              {/* LEFT SIDE — Content */}
              <div className="flex-1">
                {/* Title */}
                <h2 className="text-xl md:text-3xl font-bold text-primary mb-4 capitalize">
                  {locationData?.locationSectionTitle}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                  {locationData.locationSectionDescription}
                </p>
              </div>

              {/* RIGHT SIDE — Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src={locationData.locationSectionImg || corporateTripsImg}
                  alt={
                    "Corporate taxi services sydney for Campbelltown companies requiring account bookings, airport transfers, staff shuttles and client transport."
                  }
                  className="rounded-xl shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </Container>
        </section>

        <ServicesSection
          sectionTitle={`${
            locationData.serviceTitle
              ? locationData.serviceTitle
              : "Our Taxi and Maxi Services in " + modifiedLocationName
          }`}
          serviceSubtitle={locationData.serviceSubtitle}
        />

        {/* Fleet */}
        <FeatureFleet
          fleetSectionTitle={
            "Executive Fleet Options for Professional Corporate Travel"
          }
        />
        {/* Faqs */}
        <Faq faqs={locationData.faqs} />
      </div>
    </>
  );
};

export default CoveredLocation;
