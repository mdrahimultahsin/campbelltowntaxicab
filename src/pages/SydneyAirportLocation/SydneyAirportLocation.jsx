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
import sydneyAirportImg from "../../assets/sydney-airport.png";
import MapEmbed from "../../shared/MapEmbed";

const faqs = [
  {
    question: "What is a taxi maxi service in Sydney Airport?",
    answer:
      <>
      A taxi maxi service is a spacious vehicle designed for multiple passengers and luggage. You travel together safely and comfortably, ideal for families, friends, or business groups who want stress-free <a className="px-1 underline font-bold" href="https://en.wikipedia.org/wiki/Maxi_taxi" target="_blank">transfers</a>
      </>,
  },
  {
    question: "Can I book a maxi taxi for an early morning flight?",
    answer:
      "Yes, our 24/7 Sydney Airport taxi service operates for early departures as well as late arrivals, helping you reach check-in on time and avoid last-minute rush.",
  },
  {
    question: "Do you supply baby seats in maxi taxis?",
    answer:
      "Yes, when you book our Baby Seat Taxi Sydney option, we provide certified child seats so younger passengers travel safely and comfortably.",
  },
  {
    question: "Is a luxury maxi cab available at Sydney Airport?",
    answer:
      " Yes, we offer a luxury maxi cab service at Sydney Airport that delivers VIP comfort, privacy, and a more exclusive experience for both business and personal trips.",
  },
  {
    question: "How do I book a taxi for multiple passengers Sydney?",
    answer:
      <>
      Use our<Link className="px-1 underline font-bold" to="/book-a-taxi" >Taxi Booking page,</Link> Select the appropriate vehicle for your group, schedule your ride, and enjoy a safe, reliable, and punctual
      <a className="px-1 underline font-bold" href="https://www.transport.nsw.gov.au/projects/programs/point-to-point-transport" target="_blank">airport transfer.</a>
      </>,
  },
  {
    question: "Are your maxi taxis suitable for luggage-heavy trips?",
    answer:
      " All our maxi taxis are designed with generous luggage capacity and seating, making them ideal for Sydney Airport group taxi bookings or any airport transfer in Sydney where space is important.",
  },
  {
    question: "Do you provide corporate transport services?",
    answer:
      "Yes, our Corporate Transport Services offer reliable, professional transfers for meetings, conferences, and daily business travel, with an emphasis on punctuality and comfort.",
  },
  {
    question: "Can I get a shuttle service from Sydney Airport?",
    answer:
      "Yes, our Sydney Airport shuttle service supports families, groups, and business travellers with spacious, safe, and dependable vehicles.",
  },
  {
    question: "Are your drivers qualified and professional?",
    answer:
      " All drivers are fully licensed and trained, focusing on customer safety, courteous service, and a consistently smooth ride.",
  },
  {
    question: "Is your Sydney airport taxi service budget-friendly?",
    answer:
      " Yes, our Sydney airport taxi service is priced competitively with clear, upfront costs, giving groups and families a cost-effective way to organise quality airport transfers without hidden fees.",
  },
];

const services = [
  {
    service_id: "S001",
    title: "Wedding Transfer",
    description:
      "Travel in a spacious vehicle that gives bridal parties, relatives, and guests a comfortable, elegant ride to and from the venue.",
    image: "/car.png",
    pathname: "/services/wedding-transfer",
  },
  {
    service_id: "S002",
    title: "Luxury Transfer",
    description:
      "Choose our luxury maxi cab at Sydney Airport for VIP transfers, executive travel, and clients who expect a higher standard of privacy and comfort.",
    image: "/vehicle.png",
    pathname: "/services/luxury-transfer",
  },
  {
    service_id: "S003",
    title: "Baby Seat Taxi Sydney",
    description:
      "Families can book vehicles fitted with approved child seats to keep young passengers secure throughout the journey.",
    image: "/baby-seat.png",
    pathname: "/services/baby-seat-taxi-sydney",
  },
  {
    service_id: "S004",
    title: "Corporate Transport Services",
    description:
      " Designed for meetings and group business travel, with punctual pickups and smooth routes that support busy schedules.",
    image: "/corporate.png",
    pathname: "/services/corporate-transport-services",
  },
  {
    service_id: "S005",
    title: "Cruise Terminal Transfer",
    description:
      "Enjoy an easy trip between Sydney and the cruise terminal or hotel, with enough space for both passengers and luggage.",
    image: "/ship.png",
    pathname: "/services/cruise-terminal-transfer",
  },
  {
    service_id: "S006",
    title: "Event Transfer",
    description:
      "Use our service for concerts, parties, and social events so you arrive on time and avoid parking hassles.",
    image: "/event.png",
    pathname: "/services/event-transfer",
  },
  {
    service_id: "S007",
    title: "Maxi Taxi Service",
    description:
      "Ideal for larger groups at Sydney Airport, offering generous seating and luggage capacity so everyone can travel together.",
    image: "/users.png",
    pathname: "/services/maxi-taxi-service",
  },
  {
    service_id: "S008",
    title: "Taxi Sydney Service",
    description:
      "A dependable 24/7 taxi option across Sydney for everyday trips, appointments, and leisure outings.",
    image: "/car.png",
    pathname: "/services/taxi-sydney-service",
  },
  {
    service_id: "S009",
    title: "Corporate Trips",
    description:
      "Safe, well-managed transfers from Campbelltown to Sydney Airport or corporate locations, helping your team commute without stress.",
    image: "/briefcase.png",
    pathname: "/services/corporate-tips",
  },
];

const fleets = [
  {
    id: 1,
    name: "Easy Sedan",
    passengerCapacity: 4,
    bagsCapacity: 2,
    description:
      "Ideal for solo passengers or couples who want a quiet, comfortable ride with enough luggage space and reliable airport pickup and drop off.",
    image: "/campbelltown-easy-sedan.png",
  },
  {
    id: 2,
    name: "Luxury Vehicle",
    passengerCapacity: 4,
    bagsCapacity: 2,
    description:
      "Perfect for VIPs and business travellers who value privacy, premium seating, and a professional, refined appearance.",
    image: "/campbelltown-luxury-vehicle.png",
  },
  {
    id: 3,
    name: "SUV or Wagon",
    passengerCapacity: 7,
    bagsCapacity: 5,
    description:
      "Offers extra room for both people and bags, making it a strong choice for families or small groups heading to Sydney Airport.",
    image: "/campbelltown-suv-wagon.png",
  },
  {
    id: 4,
    name: "Kia Carnival",
    passengerCapacity: 7,
    bagsCapacity: 8,
    description:
      "Seats around 6–7 passengers comfortably with generous luggage room, suited to group airport transfers and family holidays.",
    image: "/campbelltown-kia-carnival.png",
  },
  {
    id: 5,
    name: "Maxi Taxi",
    passengerCapacity: 11,
    bagsCapacity: 8,
    description:
      "Built for larger groups or big families who want a spacious, clean interior and a relaxed travel experience.",
    image: "/campbelltown-maxi-taxi.png",
  },
  {
    id: 6,
    name: "Wheelchair Taxi Service",
    passengerCapacity: 7,
    bagsCapacity: 8,
    description:
      "Provides accessible transport with trained drivers and the right safety features to support passengers with mobility needs.",
    image: "/campbelltown-maxi-taxi.png",
  },
];
const SydneyAirportLocation = () => {
  return (
    <>
      {useSEO({
        title: `Book Taxi Maxi Service at Sydney Airport – Fast, Comfortable & Affordable Transfers`,
        description:
          "Sydney Airport Taxi Service with comfort & convenience – On-time pickups, safe rides. Reserve online today for a smooth travel experience!",
        keywords: `Sydney Airport Taxi Service,Sydney airport transfer service,Sydney taxi booking,
Sydney airport taxi transfers,airport transfers Sydney,taxi near me Sydney,taxi service Sydney,Sydney airport cab booking,Sydney airport transfer service,airport taxi transfers Sydney,24/7 taxi Sydney airport`,
        canonical: `https://campbelltowntaxicabs.com.au/book-taxi-maxi-service-in-sydney-airport`,
      })}
      {
        <div>
          <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
            <Container>
              <div className="flex flex-col md:flex-row text-white md:gap-6">
                <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
                  <h2 className="section-hero-title">
                   24/7 Sydney Airport Transfer Taxi & Maxi Cabs for Fast Pick Up and Drop Off Service
                  </h2>

                  <p className="mt-8 text-sm md:text-base">
                    Need a reliable taxi maxi service at Sydney Airport? Travel
                    in comfort while we handle your group airport transfer in
                    Sydney with punctual pickups every time. Our maxi taxi hire
                    at Sydney Airport is ideal for several passengers plus
                    luggage, so no one gets left behind or cramped. You can
                    count on our 24/7 Sydney Airport taxi service, no matter
                    when your flight lands or departs. Choose a luxury maxi cab
                    at Sydney Airport if you want a premium, relaxing ride. We
                    also ensure smooth Sydney Airport pick up and drop off,
                    helping you avoid delays and unnecessary stress.
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
            pickupType="airport"
            formTitle={`Book A Taxi/Maxi in Sydney Airport`}
          />

          {/* ---------------------------------------- */}
          {/* SECTION: Locatiion Details Dynamic */}
          {/* ---------------------------------------- */}

          <section className="py-12 bg-white">
            <Container>
              <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 items-center">
                {/* LEFT SIDE — Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h2 className="text-xl md:text-3xl font-bold text-primary mb-4 capitalize">
                    Reliable Taxi Maxi Service for Groups
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                    Travelling with relatives, friends, or workmates? Our{" "}
                    <Link
                      to={`/services/maxi-taxi-service`}
                      className="underline font-semibold px-1"
                    >
                      Sydney Airport taxi maxi service
                    </Link>
                    is built specifically for small and large groups so everyone
                    rides together in one vehicle. There is no need to split
                    into separate cars or worry about coordinating multiple
                    arrivals. With our dedicated Maxi Taxi Service, every
                    passenger enjoys a safe, comfortable, and convenient
                    journey. Whether you are heading from Campbelltown to the
                    airport or returning home after a long trip, we stay on
                    schedule. Our professional drivers use efficient routes to
                    minimise traffic issues and delays. You can depend on our
                    Sydney Airport group taxi options when you need space,
                    reliability, and a clean, well-maintained vehicle. Booking
                    only takes a moment through our online Taxi Booking page.
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
                    Affordable Airport Transfers Without Compromise
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-[15px] mb-4">
                    We believe you should not sacrifice comfort or safety to
                    keep airport travel within budget. Our affordable Sydney
                    airport taxi services are competitively priced and clearly
                    explained before you book. Transparent fares allow you to
                    plan costs confidently, especially when travelling with a
                    group. You can reserve a Sydney Airport shuttle service that
                    comfortably handles multiple travellers and their bags. When
                    you want something extra, upgrade to our Luxury Transfer for
                    a refined, premium experience. Families can request a Baby
                    Seat Taxi in Sydney, so children ride in properly fitted,
                    certified seats. Our drivers are polite, experienced, and
                    trained to assist with a wide range of passenger needs. From
                    first flights of the day to late-night arrivals, our 24/7
                    taxi service at Sydney Airport keeps you running on time.
                    Campbelltown Taxi & Maxi Cabs is committed to safe,
                    dependable, and stress-free airport transport for every
                    customer.
                  </p>
                </div>
              </div>
            </Container>
          </section>
          <section className="mt-10 mb-20 bg-light py-10">
            <Container>
              <div>
                <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
                  Comfort-Focused Maxi Taxi Hire at Sydney Airport
                </h2>
                <p className="mt-4 text-sm md:text-base">
                  Our maxi cab service at Sydney Airport offers generous
                  legroom, luggage space, and a relaxed environment, even when
                  the vehicle is full. You avoid cramped seating and awkward
                  baggage arrangements, making your ride to or from the airport
                  much more pleasant. Choosing our Sydney Airport taxi maxi
                  service means your group can focus on the trip, not the
                  transport. We specialise in group airport transfers for
                  families, social groups, and corporate teams, ensuring
                  everyone arrives together. Booking is quick through our Taxi
                  Booking page, so you can organise your transport in advance.
                  Business travellers can take advantage of our Corporate
                  Transport Services for punctual, professional rides to
                  meetings, hotels, or offices. Families may add Baby Seat Taxi
                  Sydney options for safer travel with infants and young
                  children. When style matters, our Luxury Transfer service
                  delivers a higher level of comfort and presentation. Every
                  vehicle in our fleet is cleaned regularly, carefully
                  maintained, and designed for a smooth, secure trip, helping
                  you stay on time without worrying about traffic or flight
                  schedules.
                </p>
              </div>
              <div className="mt-10">
                <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
                  Punctual Sydney Airport Pickups and Drop-offs
                </h2>
                <p className="mt-2 text-sm md:text-base">
                  We take on-time Sydney Airport pickup and drop off seriously
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
                  night.
                </p>
              </div>
            </Container>
          </section>
          <ServicesSection
            className={`pt-0!`}
            sectionTitle={`Taxi and Maxi Cab Services for All Occasions`}
            locationServices={services}
            serviceSubtitle={
              <>
                We offer tailored transport solutions to suit almost any type of
                traveller or trip. Our Sydney Airport taxi maxi service supports
                family holidays, group outings, and corporate travel with the
                same focus on safety and punctuality. Every vehicle is
                professionally driven, well-presented, and carefully maintained
                for a consistent experience. You can rely on us not only for
                airport transfers but also for special events and business
                journeys, keeping each ride simple and stress-free.
              </>
            }
          />

          {/* Fleet */}
          <FeatureFleet
            fleetSectionTitle={`Premium Fleet for Your Sydney Airport Transfer`}
            fleetSectionSubTitle={
              "You can select from a range of vehicles to match your group size, comfort preference, and luggage needs. Our fleet is set up to prioritise safety, space, and a smooth ride for every passenger. Whether you are travelling alone or with a full group, there is a suitable option ready for your booking."
            }
            fleetSectionVehicles={fleets}
          />
          {/* Faqs */}
          <Faq
            faqSectionTitle={
              "Frequently Asked Questions About Campbelltown Taxi & Maxi Cabs"
            }
            faqs={faqs}
          />
        </div>
      }

      <MapEmbed
        mapSrc={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27254.437674188684!2d151.17777345572537!3d-33.94576732229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0f11b3383db%3A0xafdf355d5a4b6577!2sPort%20lotniczy%20Sydney!5e0!3m2!1spl!2sbd!4v1769187539750!5m2!1spl!2sbd"
        }
      />
    </>
  );
};

export default SydneyAirportLocation;
