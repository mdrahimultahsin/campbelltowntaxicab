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

const CoveredLocation = () => {
  const {location} = useParams();
  const locationData = allLocationsData[location];
  const modifiedLocationName = location
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      {useSEO({
        title: `${locationData.pageTitle}`,
        description: `${locationData.metaDescription}`,
        keywords: `${modifiedLocationName} taxi,${modifiedLocationName} Taxi & Maxi Cabs,${modifiedLocationName} taxi cab close to me,${modifiedLocationName} taxi and cab services,${modifiedLocationName} taxi service,taxi service close to me ${modifiedLocationName}, taxi service near me,taxi cab service near me,taxi services near me,${modifiedLocationName} taxi cab service,local taxi service ${modifiedLocationName}, local taxi service near me,local taxi cab service near me,maxi cab, maxi cab near me,maxi cab services ${modifiedLocationName}, Maxi cabs near me in ${modifiedLocationName} `,
        canonical: `https://campbelltowntaxicabs.com.au/taxi-maxi-service-in/${location}`,
      })}
      {!locationData && <PageNotFound />}

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
        <BookingForm formTitle={locationData.bookingFormTitle} />

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
            locationData.fleetSectionVehicles
          )}
        />
        {/* Faqs */}
        <Faq
          faqSectionTitle={locationData.faqSectionTitle}
          faqs={locationData.faqs}
        />
      </div>
    </>
  );
};

export default CoveredLocation;
