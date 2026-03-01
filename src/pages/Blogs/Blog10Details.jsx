import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog10.png"; 
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "What are the most important taxi safety tips for passengers?",
    answer:
      "Always verify the driver's ID, ensure the vehicle is a licensed taxi in Sydney, NSW, and share your ride details with a friend or family member.",
  },
  {
    question: "How can I check taxi driver verification in Sydney?",
    answer:
      "Look for the plastic ID card on the dashboard or near the meter. It must show the driver's photo, name, and their authorized license number.",
  },
  {
    question: "Is there a child safety taxi NSW service for babies?",
    answer:
      "Yes, you can request a taxi with a baby capsule or booster seat. We recommend booking these specialized rides in advance for the best experience.",
  },
  {
    question: "What should I do if I feel unsafe in a taxi?",
    answer:
      "Ask the driver to stop in a well-lit, public area and get out. You can also call 1300 450 428 for help.",
  },
  {
    question: "Are all taxis in Sydney equipped with cameras?",
    answer:
      "Yes, internal security cameras are a legal requirement for all taxis in the Sydney region. They help ensure passenger safety in a taxi at all times.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog10Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "expert-solutions", label: "Expert solutions" },
      { id: "standards", label: "Safety standards checklist" },
      { id: "features", label: "Safety features table (2026)" },
      { id: "night-safety", label: "Night & solo traveller safety" },
      { id: "maintenance", label: "Fleet maintenance" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Start your safe journey" },
    ],
    []
  );

  return (
    <>
     {useSEO({
        title: "Taxi Safety Tips for Passengers for Sydney Travel - Secure Ride Guide",
        description:
          "Stay secure on the road with our expert taxi safety tips for passengers. Learn how to verify drivers and travel safely in Sydney. Book your reliable ride today!",
        keywords:
          "Taxi Safety Tips for Passengers,passenger safety in a taxi,safe taxi travel in Sydney,taxi travel safety tips,licensed taxi Sydney NSW,how to stay safe in a taxi,Night taxi safety Sydney,Taxi Safety Tips in Sydney ,Taxi driver verification in Sydney,women taxi safety in Sydney,Child Safety Taxi NSW,taxi safety in Sydney,Safe travel in taxis and hire vehicles,Driving and transport safety",
        canonical:
          "https://campbelltowntaxicabs.com.au/taxi-safety-tips-for-passengers-in-sydney-nsw",
      })}  

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Taxi Safety Tips for Passengers in Sydney, NSW
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    This guide provides essential{" "}
                    <span className="font-semibold">taxi safety tips for passengers</span>{" "}
                    to ensure a secure journey. We cover 2026 safety expectations and
                    safe taxi travel in Sydney for all residents. You will learn to
                    verify your driver and use licensed taxi services correctly, plus
                    key night taxi safety and child restraint tips.
                  </p>

                  {/* CTA */}
                  <div className="flex py-6 gap-4 justify-center md:justify-start">
                    <Link to="/book-a-taxi">
                      <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                        <FaHandPointer />
                        Book Online
                      </ButtonSecondary>
                    </Link>
                    <a href="tel:1300450428">
                      <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                        <IoCallSharp /> 1300 450 428
                      </ButtonSecondary>
                    </a>
                  </div>
                </div>

                <div className="flex flex-1 items-center pb-10 md:pb-0">
                  <img
                    className="w-full"
                    src={titleImg}
                    alt="Taxi safety in Sydney with driver verification, CCTV, GPS tracking, and night travel tips."
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          {/* FEATURE IMAGE */}
          <section className="mt-8 md:mt-12">
            <figure className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={blogImg}
                alt="Taxi safety tips for passengers guide cover image"
                className="w-full object-cover"
                loading="lazy"
              />
            </figure>
          </section>

          {/* ARTICLE + SIDEBAR */}
          <section className="mt-10 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* ARTICLE */}
              <article className="lg:col-span-8">
                <div className="rounded-lg bg-white shadow-lg border border-border-color px-6 py-10">
                  <div className="space-y-10 text-accent leading-8">
                    {/* Intro */}
                    <section id="intro">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Safe Taxi Travel Starts Before You Get In
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        A secure trip is not luck. It is a quick routine: confirm the taxi,
                        verify the driver, share your ride details, and track the route.
                        These taxi safety tips for passengers help you stay calm and protected
                        whether you travel in daylight or late at night.
                      </p>
                    </section>

                    {/* Expert solutions */}
                    <section id="expert-solutions">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Expert Solutions for Your Safe Taxi Travel
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have spent ten years ensuring passengers reach their homes safely
                        across Sydney. Many people worry about getting into the right car,
                        especially late at night. Following proven taxi safety tips for
                        passengers starts with choosing a professional{" "}
                        <span className="font-semibold">licensed taxi in Sydney, NSW</span>.
                        This reduces risk through traceable, recorded trips. Every registered
                        ride is monitored for peace of mind and protection.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We focus on passenger safety in a taxi by maintaining a strictly vetted
                        fleet. Vehicles are checked for working security cameras and GPS tracking.
                        Drivers receive specialist transport safety training. Whether you travel
                        alone or with family, your security comes first.
                      </p>
                    </section>

                    {/* Standards */}
                    <section id="standards">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        High-Quality Safety Standards for Every Passenger
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Choosing a reputable company is the best way to ensure taxi safety in Sydney.
                        Modern safety equipment and good habits are now standard expectations. Look for:
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Security Cameras:</strong> Internal cameras protect passengers and drivers.
                        </li>
                        <li>
                          <strong>Driver Identification:</strong> Photo ID must be clearly displayed on the dashboard.
                        </li>
                        <li>
                          <strong>GPS Monitoring:</strong> Real-time tracking supports safe dispatch and location awareness.
                        </li>
                        <li>
                          <strong>Duress Alarms:</strong> Emergency buttons can alert authorities when needed.
                        </li>
                        <li>
                          <strong>Child Safety Taxi NSW:</strong> Approved restraints available on request.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Need extra confidence? Use a well-lit taxi rank at night and avoid unverified street pickups.
                      </p>
                    </section>

                    {/* Safety features table */}
                    <section id="features">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Your Sydney Taxi Safety Features
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        The value of your fare includes the safety systems built into the vehicle.
                        In 2026, passenger safety in a taxi remains a top priority, supported by
                        audits and routine checks. Here are key features you should expect:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">Safety Feature</th>
                              <th className="px-4 py-3 font-semibold">Benefit for Passenger</th>
                              <th className="px-4 py-3 font-semibold">Availability</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Internal CCTV</td>
                              <td className="px-4 py-3">Records the trip for your security</td>
                              <td className="px-4 py-3">Mandatory in all taxis</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Taxi Driver Verification</td>
                              <td className="px-4 py-3">Confirms the driver is authorised</td>
                              <td className="px-4 py-3">Displayed on dashboard</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Child Safety Taxi NSW</td>
                              <td className="px-4 py-3">Protects infants and toddlers</td>
                              <td className="px-4 py-3">Available on request</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">GPS Tracking</td>
                              <td className="px-4 py-3">Supports route checks and sharing location</td>
                              <td className="px-4 py-3">Standard in modern fleets</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">24/7 Dispatch Support</td>
                              <td className="px-4 py-3">Immediate help during your trip</td>
                              <td className="px-4 py-3">Provided by local networks</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Night safety */}
                    <section id="night-safety">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Reliable Night and Solo Traveller Safety
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Night taxi safety in Sydney improves when bookings are traceable and drivers are verified.
                        Solo travellers can use simple habits that keep control in your hands:
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Back Seat Preference:</strong> Sit in the back to maintain personal space.
                        </li>
                        <li>
                          <strong>Route Monitoring:</strong> Follow the route on your phone map.
                        </li>
                        <li>
                          <strong>Share Details:</strong> Send the taxi number or booking to a friend.
                        </li>
                        <li>
                          <strong>Driver Match:</strong> Confirm the driver matches the ID on the dashboard.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        If you feel unsafe, ask to stop in a well-lit public area and get out.
                        You can also call <strong>1300 450 428</strong> for help.
                      </p>
                    </section>

                    {/* Maintenance */}
                    <section id="maintenance">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Professional Fleet Safety and Vehicle Maintenance
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Regular vehicle health checks protect passengers. Inspections identify brake wear
                        or light failures early. We check seatbelts, locks, and hygiene in every car.
                        If a fault is found, the vehicle is grounded until it is safe.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Early repairs prevent accidents and support child safety. Clean interiors and
                        working equipment are essential. This is why consistent check-ups keep our
                        fleet safe across Sydney and Campbelltown.
                      </p>
                    </section>

                   
                  </div>
                </div>

                {/* FAQ component */}
                <section  id="faq" className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Taxi Safety Questions" />
                </section>
              </article>

              {/* SIDEBAR */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* TOC */}
                  <div className="rounded border border-border-color bg-white shadow-sm p-5">
                    <h3 className="font-bold text-secondary">On this page</h3>
                    <div className="mt-3 space-y-2 text-sm text-accent">
                      {toc.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => scrollToId(item.id)}
                          className="block w-full text-left hover:text-secondary transition"
                        >
                          • {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quote card */}
                  <div className="rounded border border-border-color bg-white shadow-sm p-5">
                    <h3 className="text-lg font-bold text-secondary">
                      Need a safe pickup now?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-accent">
                      Book through a trusted network. Share your ride details, and request baby seats in advance if needed.
                      We’ll help you travel safely.
                    </p>

                    <div className="mt-4 space-y-3">
                      <a
                        href="tel:1300450428"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-white px-5 py-3 font-semibold"
                      >
                        <IoCallSharp />
                        Call 1300 450 428
                      </a>

                      <Link
                        to="/book-a-taxi"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold hover:bg-gray-50 transition border border-border-color"
                      >
                        <FaHandPointer />
                        Book Online
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* Bottom CTA */}
          <div
            id="cta"
            className="mt-10 mb-16 bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-2xl p-6 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Start Your Safe Journey Today
            </h2>
            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You deserve a ride that puts your security and comfort first. At Campbelltown Taxi Cabs,
              we use modern safety tech, verified drivers, and proven taxi safety tips for passengers across NSW.
              Call now or book online for a safe trip.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/book-a-taxi">
                <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                  <FaHandPointer /> Book Online
                </ButtonSecondary>
              </Link>

              <a href="tel:1300450428">
                <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary! hover:border-transparent">
                  <IoCallSharp /> 1300 450 428
                </ButtonSecondary>
              </a>

              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Fleet
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog10Details;