import {Link, useParams} from "react-router";
import titleImg from "../../../assets/campbelltown-pages-hero-img.png";
import useSEO from "../../../hooks/useSEO";
import Container from "../../../shared/Container";
import ButtonSecondary from "../../../shared/ButtonSecondary";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import BookingForm from "../../../shared/BookingForm";
import corporateTripsImg from "../../../assets/services/campbelltown-corporate-trips.jpeg";
import FeatureFleet from "../../Home/FeatureFleet";
import Faq from "../../../shared/Faq";
import {allLocationsData} from "./AllLocationsDatas";
import ServicesSection from "../../Home/ServicesSection";
import PageNotFound from "../../PageNotFound/PageNotFound";
import MapEmbed from "../../../shared/MapEmbed";
import sydneyAirportImg from "../../../assets/sydney-airport.png";
import cabChargePayImg from "../../../assets/cabcharge-taxi-service-campbelltown.png";
const CoveredLocation = () => {
  const {location} = useParams();
  const locationData = allLocationsData[location];
  const parts = location.split("-");
  const state = parts.pop()?.toUpperCase() || "";
  const citySlug = parts.join("-");

  // Convert city slug → proper title case
  const cityFormatted = citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  const modifiedLocationName = `${cityFormatted} ${state}`.trim();
  return (
    <>
      {useSEO({
        title: `${locationData?.pageTitle || `24/7 ${modifiedLocationName} Taxi & Maxi Cabs for Fast Pickups`}`,
        description: `${locationData?.metaDescription || "Comfortable rides for every journey – Campbelltown Taxi & Maxi Cabs support local, group, and long trips. Book today for a smooth and trusted experience."}`,
        keywords: `${modifiedLocationName} taxi,${modifiedLocationName} Taxi & Maxi Cabs,${modifiedLocationName} taxi cab close to me,${modifiedLocationName} taxi and cab services,${modifiedLocationName} taxi service,taxi service close to me ${modifiedLocationName}, taxi service near me,taxi cab service near me,taxi services near me,${modifiedLocationName} taxi cab service,local taxi service ${modifiedLocationName}, local taxi service near me,local taxi cab service near me,maxi cab, maxi cab near me,maxi cab services ${modifiedLocationName}, Maxi cabs near me in ${modifiedLocationName} Taxi Service in ${modifiedLocationName},${modifiedLocationName} Taxi Service,Taxi ${modifiedLocationName},Local Taxi Service in ${modifiedLocationName},24/7 Taxi Menangle Park,${modifiedLocationName} Cab Booking,Airport Transfers in ${modifiedLocationName},Maxi Cab Services in ${modifiedLocationName},Wheelchair Accessible Taxi in ${modifiedLocationName},Group Transport ${modifiedLocationName},Corporate Taxi Service,Event Transport,Wedding Transport,Baby Seat Taxi,Door-to-Door Taxi Service,Sydney Airport Taxi,Maxi Cab for Group Travel,Emergency Taxi in ${modifiedLocationName},Taxi & Maxi Cabs Services in ${modifiedLocationName}`,
        canonical: `https://campbelltowntaxicabs.com.au/taxi-maxi-service-in/${location}`,
      })}
      {!locationData ? (
        <PageNotFound />
      ) : (
        <div>
          <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
            <Container>
              <div className="flex flex-col md:flex-row text-white md:gap-6">
                <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
                  <h2 className="section-hero-title">
                    {locationData.heroTitle}
                  </h2>

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
          <BookingForm
            formTitle={`Book A Taxi/Maxi in ${modifiedLocationName}`}
          />

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
          {/* Section 2nd */}
          {locationData.locationSection2Title &&   <section className="md:py-12 bg-white">
            <Container>
              <div className="flex flex-col-reverse md:flex-row gap-5  items-center">
                {/* Left SIDE — Image */}
                <div className="md:flex-1">
                  <img
                    src={sydneyAirportImg}
                    alt={
                      "Campbelltown airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
                    }
                    className="rounded-xl shadow-lg w-full max-w-md md:max-w-full"
                  />
                </div>
                {/* Right SIDE — Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h2 className="text-xl md:text-3xl font-bold text-primary mb-4 capitalize">
                    {locationData.locationSection2Title || "Affordable Airport Transfers Without Compromise"}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-[15px] mb-4">
                   {locationData.locationSection2Desctiption || " We believe you should not sacrifice comfort or safety to keep airport travel within budget. Our affordable Sydney airport taxi services are competitively priced and clearly explained before you book. Transparent fares allow you to plan costs confidently, especially when travelling with a group. You can reserve a Sydney Airport shuttle service that comfortably handles multiple travellers and their bags. When you want something extra, upgrade to our Luxury Transfer for a refined, premium experience. Families can request a Baby Seat Taxi in Sydney, so children ride in properly fitted, certified seats. Our drivers are polite, experienced, and trained to assist with a wide range of passenger needs. From first flights of the day to late-night arrivals, our 24/7 taxi service at Sydney Airport keeps you running on time. Campbelltown Taxi & Maxi Cabs is committed to safe, dependable, and stress-free airport transport for every customer."}
                  </p>
                </div>
              </div>
            </Container>
          </section>}
       {/* Section 3rd */}
{locationData.locationSection3Title &&  <section className="mt-10 mb-20 bg-light py-10">
            <Container>
              <div>
                <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
                 {locationData.locationSection3Title ||` Comfort-Focused Maxi Taxi Hire at ${modifiedLocationName}`}
                 
                </h2>
                <p className="mt-4 text-sm md:text-base">
                  {locationData.locationSection3Description || "Our maxi cab service at Sydney Airport offers generous legroom, luggage space, and a relaxed environment, even when the vehicle is full. You avoid cramped seating and awkward baggage arrangements, making your ride to or from the airport much more pleasant. Choosing our Sydney Airport taxi maxi service means your group can focus on the trip, not the transport. We specialise in group airport transfers for families, social groups, and corporate teams, ensuring everyone arrives together. Booking is quick through our Taxi Booking page, so you can organise your transport in advance. Business travellers can take advantage of our Corporate Transport Services for punctual, professional rides to meetings, hotels, or offices. Families may add Baby Seat Taxi Sydney options for safer travel with infants and young children. When style matters, our Luxury Transfer service delivers a higher level of comfort and presentation. Every vehicle in our fleet is cleaned regularly, carefully maintained, and designed for a smooth, secure trip, helping you stay on time without worrying about traffic or flight schedules."}
                </p>
              </div>
              <div className="mt-10">
                <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
                   {locationData.locationSection4Title ||` Punctual ${modifiedLocationName} Pickups and Drop-offs `} 
                </h2>
                <p className="mt-2 text-sm md:text-base">
                   {locationData.locationSection4Desctiption ||` We take on-time Sydney Airport  pickup and drop off seriously
                  because we know your schedule is important. From check-in
                  deadlines to meeting times, our goal is to keep you running
                  exactly as planned. Airport travel can be demanding, so our
                  24/7 Sydney Airport taxi service is structured around reliable
                  timing and efficient routing. Our Sydney Airport group taxi
                  solutions suit families, business travellers, and tour groups
                  who need a coordinated transfer. If you require extra luggage
                  capacity, our Maxi Taxi Service and Sydney Airport shuttle
                  service provide the room you need. Skilled drivers handle the
                  traffic so you can relax, catch up on calls, or simply unwind
                  on the way. Campbelltown Taxi & Maxi Cabs is a trusted choice
                  for safe, convenient, and comfortable airport journeys, day or
                  night. `} 
                </p>
              </div>
            </Container>
          </section>}
          {/* Cabcharge section */}
        {locationData.locationSection2Title &&   <section className="md:py-12 bg-white">
            <Container>
             <div className="mt-10 flex flex-col md:flex-row items-center gap-10 mb-16">
                        {/* Left Column: Content */}
                        <div className="flex-1 space-y-4 text-accent">
                          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                            {locationData.cabChargeSectionTitle ||`CabCharge Taxi Near ${modifiedLocationName}`}
                          </h3>
            
                          <p>
                            {locationData.cabChargeSectionDesctiption || `CabCharge is one of Australia's most trusted transportation
                            payment systems, built to make every trip smooth, secure, and
                            cash-free. What began as Australia's most recognised in-taxi
                            payment method has evolved into a transparent, cloud-based
                            travel management platform designed to support modern mobility
                            needs.At Campbelltown Taxi Cabs, we proudly integrate
                            CabCharge into our Cabcharge Taxi Service,
                            giving passengers a fast and convenient way to pay for business
                            travel, medical appointments, airport transfers, and everyday
                            rides. With both digital solutions and physical CabCharge cards,
                            customers enjoy seamless payments without needing cash or
                            personal credit cards.`}
                          </p>
                        </div>
            
                        {/* Right Column: Image */}
                        <div className="flex-1">
                          <img
                            src={cabChargePayImg}
                            alt="CabCharge Payment Campbelltown Taxi Cabs"
                            className="w-full rounded-xl shadow-lg"
                          />
                        </div>
                      </div>
            </Container>
          </section>}
            
          <ServicesSection
            className={`pt-0!`}
            sectionTitle={`${
              locationData.serviceTitle
                ? locationData.serviceTitle
                : "Our Taxi and Maxi Services in " + modifiedLocationName
            }`}
            serviceSubtitle={locationData.serviceSubtitle}
            locationServices={Object.values(locationData.locationServices)}
          />

          {/* Fleet */}
          <FeatureFleet
            fleetSectionTitle={`${locationData.fleetSectionTitle}`}
            fleetSectionSubTitle={locationData.fleetSectionSubTitle}
            fleetSectionVehicles={Object.values(
              locationData.fleetSectionVehicles,
            )}
          />
          {/* Faqs */}
          <Faq
            faqSectionTitle={locationData.faqSectionTitle}
            faqs={locationData.faqs}
          />
        </div>
      )}
      <MapEmbed
        mapSrc={
          locationData?.mapUrl ||
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27254.437674188684!2d151.17777345572537!3d-33.94576732229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0f11b3383db%3A0xafdf355d5a4b6577!2sPort%20lotniczy%20Sydney!5e0!3m2!1spl!2sbd!4v1769187539750!5m2!1spl!2sbd"
        }
      />
    </>
  );
};

export default CoveredLocation;
