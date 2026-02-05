import titleImg from "../../../assets/services/campbelltown-service-hero-img.png";
import Container from "../../../shared/Container";
import {Link, useNavigate} from "react-router";
import ButtonSecondary from "../../../shared/ButtonSecondary";
import {
  FaCheck,
  FaCheckCircle,
  FaHandPointer,
  FaPhoneAlt,
} from "react-icons/fa";
import {IoCallSharp, IoCarSport} from "react-icons/io5";
import FeatureFleet from "../../Home/FeatureFleet";
import Faq from "../../../shared/Faq";
import serviceBgImage from "../../../assets/serviceBg.jpg";
import {FaLocationDot} from "react-icons/fa6";
import useSEO from "../../../hooks/useSEO";
import bookTaxiImg from "../../../assets/services/book-taxi-sydney-airport.png";
import React from "react";
const BookingForm = React.lazy(() => import("../../../shared/BookingForm"));
const faqs = [
  {
    question: "How Much Does A Taxi From Campbelltown To Sydney Airport Cost?",
    answer:
      "Our Campbelltown airport taxi fares range from $95-$130, depending on vehicle type and exact pickup location. We offer fixed pricing with no hidden fees. Maxi taxi Sydney Airport rates accommodate up to 11 passengers. All tolls are included in quotes upfront for complete transparency.",
  },
  {
    question: "Can I Book A Maxi Taxi Sydney Airport To The City For My Group?",
    answer:
      "Yes, our maxi taxi Sydney Airport to city service accommodates up to 11 passengers comfortably. Perfect for families or corporate groups traveling together. We provide ample luggage space and direct transfers. Book online or call 1300 450 428 for immediate confirmation.",
  },
  {
    question: "How Far In Advance Should I Book My Airport Taxi Sydney?",
    answer:
      "We recommend booking your airport taxi in Sydney at least 24 hours before departure for guaranteed availability. However, same-day bookings are accepted up to 30 minutes before pickup. Early bookings ensure preferred vehicle type selection and confirmed driver assignment for your transfer.",
  },
  {
    question:
      " Do You Provide Taxis To Sydney Airport From All Campbelltown Suburbs?",
    answer:
      "Absolutely. Our taxi to Sydney Airport service covers all Campbelltown suburbs, including Minto, Ingleburn, Camden, Eagle Vale, and surrounding areas. We operate across 50+ localities throughout the Macarthur region. Every neighborhood receives identical punctual service regardless of distance from our base.",
  },
  {
    question:
      "What Payment Methods Do You Accept For Taxi Sydney Airport Transfers?",
    answer:
      "We accept cash, all major credit cards, debit cards, and digital wallet payments for taxi Sydney Airport bookings. Corporate accounts receive monthly invoicing options with priority service. Make payment after journey completion. No prepayment required unless specifically requested for advance bookings.",
  },
  {
    question: " How Do I Find My Driver At Sydney Airport Arrivals?",
    answer:
      "Your airport taxi service Sydney driver waits at the designated terminal meeting point, holding a clear name board. We send SMS confirmation with driver details 60 minutes before pickup. For international arrivals at T1, drivers wait outside the customs exit. Domestic terminals T2/T3 have specified pickup zones.",
  },
  {
    question:
      "Are Your Maxi Taxi Sydney Airport Vehicles Suitable For Luggage?",
    answer:
      "Yes, our maxi taxi Sydney Airport fleet offers generous luggage capacity. Standard sedans hold 2-3 large suitcases. Maxi cabs accommodate 8+ bags comfortably. We handle oversized items like golf clubs, surfboards, and sports equipment. Roof racks are available upon request during booking for extra cargo.",
  },
  {
    question: " What Happens If My Flight To Sydney Airport Gets Delayed?",
    answer:
      "We monitor all flight schedules in real-time for your airport taxi Sydney booking. Flight delays trigger automatic driver notification without you calling us. No waiting charges apply for delays up to 60 minutes. Your taxi adjusts pickup timing automatically based on the actual landing time at Sydney Airport.",
  },
  {
    question:
      "Can I Book A Return Trip Taxi From Sydney Airport To Campbelltown?",
    answer:
      "Certainly. Book both directions simultaneously when arranging your Campbelltown airport taxi service. Return bookings receive a 10% discount on the combined fare. We confirm your return pickup after you provide the actual arrival time. Simply notify us once you land, and we'll dispatch immediately.",
  },
  {
    question: " Do You Offer Wheelchair Accessible Taxis To Sydney Airport?",
    answer:
      "Yes, our fleet includes wheelchair accessible vehicles for passengers requiring mobility assistance. These taxis to Sydney Airport feature ramp access and secure wheelchair restraints. Book at least 48 hours in advance for wheelchair vehicle availability. We ensure comfortable, dignified transport for all passengers regardless of mobility needs.}",
  },
];
const features = [
  "Fully licensed by NSW transport authorities and covered by comprehensive insurance.",
  "Drivers complete regular advanced defensive driving and customer service training.",
  "Vehicle maintenance schedules exceed the manufacturer's standard requirements for added safety.​",
  "Meet-and-greet service available at all Sydney Airport terminals for a smoother arrival experience.​",
  "GPS-based dispatch systems help reduce average passenger wait times.​",
  "Fixed-rate and upfront pricing to make budgeting your trip simple and clear.​",
  "Multiple payment options, including cash, card, and approved corporate accounts.​",
  "Vehicles are sanitized after rides to maintain a clean, hygienic travel environment.​",
];
const serviceAreas = [
  "Campbelltown NSW",
  "Ambarvale NSW",
  "Appin NSW",
  "Currans Hills NSW",
  "Claymore NSW",
  "Macarthur NSW",
  "Menangle Park NSW",
  "Leumeah NSW",
  "Raby NSW",
  "St Andrew's NSW",
  "St Helen's park NSW",
  "Ruse NSW",
  "Minto NSW",
  "Ingleburn NSW",
  "Glenfield NSW",
  "Camden NSW",
  "Camden south NSW",
  "Oran park NSW",
  "Gregory hills NSW",
  "Eagle vale NSW",
  "Douglas Park NSW",
  "Elderslie NSW",
  "Wilton NSW",
  "Spring farm NSW",
  "Cobbity NSW",
  "Mount Annan NSW",
  "Phesant Nest NSW",
  "Cowdor NSW",
  "Denham court NSW",
  "Edmondson park NSW",
  "Austral NSW",
  "Razorback NSW",
  "Liverpool NSW",
  "Picton NSW",
  "Thilmere NSW",
  "Bargo NSW",
  "Bowral NSW",
  "Kearns NSW",
  "Rosemeadow NSW",
  "Airds NSW",
  "Gledswood Hills NSW",
  "Leppington NSW",
  "Smeaton Grange NSW",
];
const BookTaxiSydneyAiport = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "#1 Sydney Airport Taxi Services | 24/7 Sydney Cab Service",
        description:
          "Book campbelltown airport taxi for on-time Sydney Airport transfers, meet-and-greet pickup, fixed fares and 24/7 support from Campbelltown. Reserve now.",
        keywords:
          "taxi sydney airport, campbelltown airport taxi,sydney airport taxi,airport taxi sydney,taxi to sydney airport,maxi taxi sydney airport,airport taxi service sydney,maxi taxi sydney airport to city",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/book-taxi-sydney-airport",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Sydney Airport Taxi Service—Fast, Reliable & Affordable
                Transfers
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Need a dependable
                <Link
                  to={`https://campbelltowntaxicabs.com.au/`}
                  className="px-1 underline font-semibold"
                >
                  Sydney Airport taxi service
                </Link>
                that runs day and night? Our team provides 24/7 premium airport
                transfers for families, solo travelers, and corporate groups.
                You can choose from modern sedans, spacious SUVs, and maxi cabs
                to match your luggage and group size. With professional local
                drivers and punctual pickups, your trip to or from Sydney
                Airport stays smooth and stress-free. Book today and enjoy a
                comfortable, on-time ride with a trusted local operator.
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
                alt={
                  "Campbelltown airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Reserve Your Sydney Airport Taxi in Minutes"}
        className="mt-10!"
      />

      {/* ---------------------------------------- */}
      {/* SECTION: Service Details Dynamic */}
      {/* ---------------------------------------- */}

      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
            {/* LEFT SIDE — Content */}
            <div className="flex-1">
              {/* Title */}
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-4 capitalize">
                Premium Sydney Airport Taxi Service
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                You deserve a smooth, stress-free airport transfer every time
                you travel. Our Sydney airport transfer service is built around
                comfort, safety, and punctuality. Whether you
                <Link
                  to={`/book-a-taxi`}
                  className="px-1 underline font-semibold"
                >
                  book a Sydney
                </Link>
                airport taxi for business or leisure, you receive reliable
                service from start to finish, including clean vehicles,
                professional drivers, and on-time pickups across all airport
                terminals. <br />
                When you choose our Sydney airport taxi transfers, you avoid
                delays, hidden costs, and last-minute confusion. Your driver
                knows the fastest airport routes and local traffic patterns,
                helping you reach your destination smoothly and without
                unnecessary stops. The booking process stays simple, fast, and
                secure. <br />
                We operate as a trusted
                <Link to={`/`} className="px-1 underline font-semibold">
                  Sydney taxi service
                </Link>
                with full licensing and insurance. You can book airport taxi
                transfers Sydney-wide at any time—day or night, weekdays or
                holidays. Your ride is always ready when you need it.
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-primary my-4 capitalize">
                {" "}
                Why Your Airport Transfer Works Better With Us
              </h2>
              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Experienced, licensed local drivers</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Clean, air-conditioned vehicles</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Fair, upfront pricing with no surprises</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>24/7 Sydney airport cab booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Real-time support for flight changes</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={bookTaxiImg}
                alt={
                  "Campbelltown airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
                }
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Safe & Travel */}
      <section className="mt-10 bg-light py-10">
        <Container>
          <div>
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Real-Time Flight Tracking for Your Sydney Airport Taxi Service
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Flight changes can be stressful, but we help reduce that pressure
              with live flight monitoring. Our operations team tracks arrivals
              and departures at{" "}
              <Link
                to={`https://campbelltowntaxicabs.com.au/services/book-taxi-sydney-airport`}
                className="px-1 underline font-semibold"
              >
                Sydney Airport's
              </Link>{" "}
              T1 International, T2 Domestic, and T3 Qantas terminals in real
              time. If your flight arrives early or is delayed, your pickup time
              is adjusted automatically so your driver is ready when you walk
              out. We follow all NSW airport access rules and wait at approved
              pickup zones for safe, compliant transfers.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              24/7 Sydney Airport Taxi Service
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our Sydney Airport taxi service operates around the clock to
              support every type of flight schedule. Early morning departures,
              late-night arrivals, and red-eye flights are all handled by our
              dedicated 24/7 team. Even on weekends, public holidays, and peak
              seasons, we keep a full fleet available so you are never left
              without a ride. Large families and groups can travel together
              comfortably in our maxi taxis, which offer plenty of luggage room
              and flexible seating. Same-day bookings are accepted up to 30
              minutes before your required pickup time, subject to availability.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION: Why Choose Us */}
      <section className="relative py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{backgroundImage: `url(${serviceBgImage})`}}
        ></div>

        {/* Overlay with primary color */}
        <div className="absolute inset-0 bg-primary/80"></div>

        {/* Content with zigzag clip-path */}
        <div
          className="relative "
          style={{clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)"}}
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT COLUMN */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
                  Why Choose us
                  <span className="text-secondary px-1">
                    for Sydney Airport Taxi Service?
                  </span>{" "}
                </h2>
                <ul className="space-y-3 text-lg">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 text-white" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex justify-center">
                <img
                  src={titleImg}
                  alt="Campbelltown Taxi Cab"
                  className=" w-full max-w-lg"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* SECTION: Coverage Area */}

      <section className="py-16 bg-linear-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <Container>
          <div className="text-center mb-8">
            <h2 className="section-title">
              Our Sydney Airport Taxi Service Area
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Serving Campbelltown and surrounding regions with reliable taxi
              and maxi cab services to Sydney Airport across NSW.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link
                to={`/book-taxi-maxi-service-in-sydney-airport`}
                className="flex flex-col md:flex-row text-center md:text-left items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
              >
                <FaLocationDot size={20} className="text-primary" />
                <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                  Sydney
                </span>
              </Link>
              {serviceAreas.map((serviceArea, idx) => (
                <Link
                  to={`/taxi-maxi-service-in/${serviceArea
                    .toLowerCase()
                    .replace(/'/g, "")
                    .replace(/\s+/g, "-")}`}
                  key={idx}
                  className="flex flex-col md:flex-row text-center md:text-left items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
                >
                  <FaLocationDot size={20} className="text-primary" />
                  <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                    {serviceArea.split(" NSW").join("")}
                  </span>
                </Link>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center border-b md:border-b-0 py-4 border-border-color border-r md:border-r-2 ">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Service</div>
              </div>
              <div className="text-center border-b py-4 border-border-color md:border-b-0 md:border-r-2">
                <div className="text-2xl font-bold text-primary">Quick</div>
                <div className="text-sm text-gray-600">Response</div>
              </div>
              <div className="text-center py-4 border-r md:border-r-2 border-border-color">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Areas</div>
              </div>
              <div className="text-center py-4">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Reliable</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="mt-30 text-center">
        <Container>
          <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-xl p-3 md:p-6 shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              Need an Airport Taxi Service Sydney Immediately?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Book Sydney airport taxi instantly | Round-the-clock service |
              Transparent pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-secondary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-xs md:text-base">
                <FaPhoneAlt className="text-sm md:text-lg" />
                Call: 1300 123 456
              </button>
              <button
                onClick={() => navigate("/book-a-taxi")}
                className="border-2 border-white text-white px-3 md:px-8 py-1 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-secondary/80 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <IoCarSport className="text-sm md:text-lg" />
                Book Online Now
              </button>
            </div>
            <p className="text-sm mt-4 text-white">
              Average wait time: 8 minutes • Transparent Pricing
            </p>
          </div>
        </Container>
      </section>

      <FeatureFleet
        fleetSectionTitle={
          "Premium Vehicle Options for Reliable Campbelltown Airport Transfers"
        }
      />
      <Faq
        faqSectionTitle={`Frequently Asked Questions – Sydney Airport Taxi Service 
`}
        faqs={faqs}
      />
    </div>
  );
};

export default BookTaxiSydneyAiport;
