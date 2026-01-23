import {Link} from "react-router";
import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import useSEO from "../../hooks/useSEO";
import Container from "../../shared/Container";
import ButtonSecondary from "../../shared/ButtonSecondary";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import BookingForm from "../../shared/BookingForm";
import FeatureFleet from "../Home/FeatureFleet";
import Faq from "../../shared/Faq";
import ServicesSection from "../Home/ServicesSection";
import bookTaxiImg from "../../assets/services/book-taxi-sydney-airport.png";
import sydneyAirportImg from "../../assets/sydney-airport.png"
import MapEmbed from "../../shared/MapEmbed";

const faqs = [
    {
      question: "How do I book a taxi in Campbelltown?",
      answer:
        "Booking is easy: call us, use the online booking form on our website, or send us a message via WhatsApp. Our taxi service in Campbelltown, NSW, is available 24/7, and we confirm each booking promptly.",
    },
    {
      question: "Are your fares fixed or metered?",
      answer:
        "Most of our rides have fixed, transparent fares, so you always know what you'll pay. For on-demand and long-distance trips, we may use metered fares, but we always provide an estimate up front. There are no surprises when you ride with our Campbelltown taxi cabs.",
    },
    {
      question: "Do you provide wheelchair-accessible taxis and baby seats?",
      answer:
        "Yes! Our fleet includes wheelchair-accessible vehicles, and we offer child seats and booster seats on request. We are committed to making taxi Campbelltown services inclusive and safe for all passengers.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve the entire Campbelltown area, Macarthur region, and surrounding suburbs. Our taxi Campbelltown NSW services also extend to greater Sydney, including airport and cruise terminal transfers, weddings, events, and more. Wherever you need to go, our taxis Campbelltown can get you there.",
    },
    {
      question: "How can I track my taxi arrival?",
      answer:
        "We understand the importance of being on time. Once you've booked your taxi in Campbelltown, you'll receive a confirmation message with the details of your ride and estimated arrival time. For added convenience, we offer live tracking so you can see when your Campbelltown taxi is on its way.",
    },
    {
      question: "Can I book a taxi in advance?",
      answer:
        "Absolutely! Whether you’re planning a ride for the next day or scheduling a future airport transfer, our Campbelltown taxi service allows you to book in advance for guaranteed peace of mind. Book your ride online, by phone, or through WhatsApp.",
    },
    {
      question: "Do you charge extra for luggage or large items?",
      answer:
        "We believe in transparent pricing. Our fares include a reasonable allowance for luggage, so you don’t have to worry about hidden fees for small bags. For large items like bikes or oversized luggage, a small surcharge may apply, but we'll inform you of any additional costs upfront.",
    },
    {
      question: "Are your taxis available for long-distance travel?",
      answer:
        "Yes! Campbelltown Taxi Cabs offers long-distance travel to nearby cities, regional areas, and even interstate trips. Whether it’s a corporate journey, family vacation, or special event, our taxi service Campbelltown will provide a comfortable ride for your extended trips. Book now for a seamless long-distance experience.",
    },
    {
      question: "How can I cancel or change my booking?",
      answer:
        "We offer flexible booking options. If you need to cancel or modify your taxi Campbelltown reservation, simply call us or send us a message through WhatsApp. We’ll assist you promptly to make any necessary changes. Please note that cancellations or changes made within a short time frame may be subject to a small fee, which will be communicated upfront.",
    },
    {
      question: "Can I pay by card or through mobile payment?",
      answer:
        "Yes! We accept a variety of payment methods, including credit/debit cards, mobile payments (like Apple Pay or Google Pay), and cash. Our goal is to make paying for your taxi Campbelltown ride as convenient and seamless as possible.",
    },
  ];
 
const SydneyAirportLocation = () => {


const modifiedLocationName = "Sydney Airport";

  
  return (
    <>
    
      {useSEO({
        title: `24/7 Sydney Airport Taxi & Maxi Cabs for Fast Pickups` ,
        description: "Comfortable rides for every journey – Campbelltown Taxi & Maxi Cabs support local, group, and long trips. Book today for a smooth and trusted experience.",
        keywords: `Sydney Airport taxi,Sydney Airport Taxi & Maxi Cabs,Sydney Airport taxi cab close to me,${modifiedLocationName} taxi and cab services,${modifiedLocationName} taxi service,taxi service close to me ${modifiedLocationName}, taxi service near me,taxi cab service near me,taxi services near me,${modifiedLocationName} taxi cab service,local taxi service ${modifiedLocationName}, local taxi service near me,local taxi cab service near me,maxi cab, maxi cab near me,maxi cab services ${modifiedLocationName}, Maxi cabs near me in ${modifiedLocationName} `,
        canonical: `https://campbelltowntaxicabs.com.au/book-taxi-maxi-service-in-sydney-airport`,
      })}
      {
       <div>
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="flex flex-col md:flex-row text-white md:gap-6">
              <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
                <h2 className="section-hero-title">24/7 Campbelltown Taxi and Maxi Cabs for Fast Pickups</h2>

                <p className="mt-8 text-sm md:text-base">
                    When you need Campbelltown Taxi & Maxi Cabs, you want speed, safety, and
        reliability. Many people face long wait times, cancelled rides, or small
        vehicles that cannot fit your group or luggage. With our{" "}
        <Link to={`/book-a-taxi`} className="underline font-semibold px-1">
          Campbelltown taxi and cab services
        </Link>
        , you never have to worry about that. Our fleet includes maxi cabs near
        me in Campbelltown, SUVs, and standard taxis, ensuring every journey is
        comfortable. Whether you search for a taxi{" "}
        <Link to={`/area-covered`} className="underline font-semibold px-1">
          service near me
        </Link>{" "}
        or a{" "}
        <Link to={`/fleet`} className="underline font-semibold px-1">
          local taxi service Campbelltown
        </Link>{" "}
        , we’re available 24/7. Families, students, shift workers, and business
        travellers trust us for airport transfers, medical appointments, local
        trips, and group travel. Our experienced drivers know Campbelltown
        routes inside out, making every ride punctual and stress-free. With our{" "}
        <Link to={`/fleet`} className="underline font-semibold px-1">
          premium fleet
        </Link>{" "}
        and easy booking, you get a reliable ride anytime, solving your travel
        challenges without hassle.
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
        <BookingForm formTitle={`Book A Taxi/Maxi in Sydney Airport`} />

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
                 Reliable Corporate Taxi Services Across Campbelltown & Surrounding Areas
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                    If you need professional transport, our Campbelltown Taxi & Maxi Cabs
        provide seamless corporate travel across Campbelltown and the wider
        Macarthur region. Many businesses struggle with on-time airport pickups,
        inter-office travel, or group transport for meetings and events. We
        solve these issues with our{" "}
        <Link
          to={`/services/corporate-transport-services`}
          className="underline font-semibold px-1"
        >
          corporate taxi services
        </Link>{" "}
        and{" "}
        <Link
          to={`/services/maxi-taxi-service`}
          className="underline font-semibold px-1"
        >
          maxi cab services Campbelltown
        </Link>
        . Solo executives, corporate teams, and groups can rely on us for{" "}
        <Link
          to={`/services/taxi-sydney-service`}
          className="underline font-semibold px-1"
        >
          taxi cab service near me
        </Link>{" "}
        bookings that are fast and stress-free. Every vehicle is clean,
        well-maintained, and equipped for comfort. Our professional drivers
        prioritise punctuality, safety, and smooth travel, earning us trust from
        local businesses. You can schedule{" "}
        <Link
          to={`/services/book-taxi-sydney-airport`}
          className="underline font-semibold px-1"
        >
          airport transfers
        </Link>{" "}
        , inter-office trips, and special corporate events without worrying
        about delays. With
        <Link
          to={`/services/book-taxi-sydney-airport`}
          className="underline font-semibold px-1"
        >
          Campbelltown taxi cab service
        </Link>
        , your team arrives on time, every time, and your corporate reputation
        stays intact.
                </p>
              </div>

              {/* RIGHT SIDE — Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src={bookTaxiImg}
                  alt={
                    "Campbelltown airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
                  }
                  className="rounded-xl shadow-lg w-full max-w-md object-cover object-center"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="py-12 bg-white">
          <Container>
            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 items-center">
                {/* Left SIDE — Image */}
              <div className="">
                <img
                  src={sydneyAirportImg}
                  alt={
                    "Campbelltown airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
                  }
                  className="rounded-xl shadow-lg w-full max-w-md "
                />
              </div>
              {/* Right SIDE — Content */}
              <div className="flex-1">
                {/* Title */}
                <h2 className="text-xl md:text-3xl font-bold text-primary mb-4 capitalize">
              Sydney Airport Drop Off and Pick Up
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-[15px] mb-4">
                    If you need professional transport, our Campbelltown Taxi & Maxi Cabs
        provide seamless corporate travel across Campbelltown and the wider
        Macarthur region. Many businesses struggle with on-time airport pickups,
        inter-office travel, or group transport for meetings and events. We
        solve these issues with our{" "}
        <Link
          to={`/services/corporate-transport-services`}
          className="underline font-semibold px-1"
        >
          corporate taxi services
        </Link>{" "}
        and{" "}
        <Link
          to={`/services/maxi-taxi-service`}
          className="underline font-semibold px-1"
        >
          maxi cab services Campbelltown
        </Link>
        . Solo executives, corporate teams, and groups can rely on us for{" "}
        <Link
          to={`/services/taxi-sydney-service`}
          className="underline font-semibold px-1"
        >
          taxi cab service near me
        </Link>{" "}
        bookings that are fast and stress-free. Every vehicle is clean,
        well-maintained, and equipped for comfort. Our professional drivers
        prioritise punctuality, safety, and smooth travel, earning us trust from
        local businesses. You can schedule{" "}
        <Link
          to={`/services/book-taxi-sydney-airport`}
          className="underline font-semibold px-1"
        >
          airport transfers
        </Link>{" "}
        , inter-office trips, and special corporate events without worrying
        about delays. With
        <Link
          to={`/services/book-taxi-sydney-airport`}
          className="underline font-semibold px-1"
        >
          Campbelltown taxi cab service
        </Link>
        , your team arrives on time, every time, and your corporate reputation
        stays intact.
                </p>

                <p className="text-gray-700 leading-relaxed text-[15px] mb-4">

                        If you need professional transport, our Campbelltown Taxi & Maxi Cabs
        provide seamless corporate travel across Campbelltown and the wider
        Macarthur region. Many businesses struggle with on-time airport pickups,
        inter-office travel, or group transport for meetings and events.
                </p>
              </div>

              
            </div>
          </Container>
        </section>
<section className="mt-10 mb-20 bg-light py-10">
        <Container>
          <div>
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Premium Baby Seat Taxi Service in Sydney With Expert Child-Care
              Trained Drivers
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Campbelltown Taxi Cabs delivers a premium baby seat taxi service
              backed by trained child-care drivers. Each driver understands
              infant needs and follows safe handling steps on every ride.
              Families booking a taxi with a baby seat at Sydney Airport trust
              our clear safety checks. We inspect seat labels, fit points, and
              harness strength before travel. Your child stays safe and calm on
              every Sydney trip.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Campbelltown’s Trusted Baby Seat Taxi Service With Skilled
              Child-Care Drivers
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Campbelltown Taxi Cabs offers a trusted baby seat taxi service
              built around personalised seat setups for every age group. We
              prepare the right seat type before arrival, based on your child’s
              weight and height. Seats sanitized with child-safe, non-toxic
              cleaning products after each use. Our team keeps a detailed
              checklist for each booking, covering fit, belt tension, and cabin
              comfort. Many families choose our Sydney Airport taxi with a baby
              seat option for safe airport travel. We install infant, toddler,
              and booster seats with precise alignment to keep your child
              supported. With the precise siblings' sitting arrangement, you can
              easily minimize disputes during travel. Our drivers strictly
              follow NSW seat rules and complete frequent safety refreshers. You
              get a well-prepared taxi that suits your schedule and your child’s
              needs.
            </p>
          </div>
        </Container>
      </section>
        <ServicesSection
          className={`pt-0!`}
          sectionTitle={`Our Taxi and Maxi Services in Sydney Airport`}
          serviceSubtitle={
                <>
                  When you need a safe and punctual ride,
        <strong>Campbelltown Taxi & Maxi Cabs</strong> is your trusted local
        transport service. Whether you are commuting to work, heading to the
        airport, or attending an event, our professional drivers provide
        reliable, comfortable, and stress-free journeys. We understand your
        travel needs, peak-hour traffic, group trips, and luggage-heavy rides.
        With modern vehicles and local knowledge, you’ll never face long waits
        or cancelled rides. Booking is simple online or over the phone with
        clear pricing. Trust our <strong> Campbelltown taxi service</strong> for
        daily trips, airport transfers, family outings, or corporate travel
                </>
          }
        
        />

        {/* Fleet */}
        <FeatureFleet
          fleetSectionTitle={`Executive Fleet Options by Campbelltown Taxi & Maxi Cabs`}
          fleetSectionSubTitle={"Choose the right vehicle for your journey with Campbelltown Taxi & Maxi Cabs. Whether you travel alone or with a group, our fleet offers comfort, safety, and reliability. Our drivers are local experts and know the fastest routes around Campbelltown. From airport transfers to corporate trips, we have a solution for every need. Trust our Campbelltown taxi and cab services for smooth, stress-free travel any time of day or night."}
          
        />
        {/* Faqs */}
        <Faq
          faqSectionTitle={"Frequently Asked Questions About Campbelltown Taxi & Maxi Cabs"}
          faqs={faqs}
        />
      </div>
      }

<MapEmbed mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27254.437674188684!2d151.17777345572537!3d-33.94576732229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0f11b3383db%3A0xafdf355d5a4b6577!2sPort%20lotniczy%20Sydney!5e0!3m2!1spl!2sbd!4v1769187539750!5m2!1spl!2sbd"}/>
    
    </>
  );
};

export default SydneyAirportLocation;
