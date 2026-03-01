import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog9.png"; 
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "Is it better to book a taxi vs hail a taxi at the airport?",
    answer:
      "Yes. It is usually better to pre-book because you can skip long taxi rank queues. Your driver meets you at a designated spot for a faster exit.",
  },
  {
    question: "How do I book a taxi online in Sydney with you?",
    answer:
      "You can book through our website or call 1300 450 428. Both methods are fast and easy.",
  },
  {
    question: "Does a pre-booked airport taxi in Sydney cost more?",
    answer:
      "The base rate is similar, but pre-booking often allows a fixed price. This can save money if there is unexpected traffic.",
  },
  {
    question: "Can I get a first-class taxi service for a local trip?",
    answer:
      "Yes. You can request a premium car for any distance in the Campbelltown area. Every booking gets the same professional care.",
  },
  {
    question: "What if my flight is late for my airport taxi pre-booking?",
    answer:
      "We monitor your flight number in real-time. If your plane is delayed, we adjust your pickup time to match your new arrival.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog9Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "expert-solutions", label: "Expert solutions" },
      { id: "booking-options", label: "Booking options & vehicle types" },
      { id: "costs", label: "Pre-book vs hail costs (2026)" },
      { id: "airport-business", label: "Airport & business pre-bookings" },
      { id: "safety", label: "Safety & maintenance" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Start your stress-free trip" },
    ],
    []
  );

  return (
    <>
     {useSEO({
        title: "Pre-Book a Taxi Instead for Secure Travel - Reliable Travel Guide",
        description:
          "Secure your ride and avoid the stress of street hailing. Discover the top benefits when you pre-book a taxi in Sydney for a reliable, fixed-price trip!",
        keywords:
          "Pre-Book a Taxi Instead,Pre-booked airport taxi in Sydney,Book a taxi online in Sydney,scheduled taxi service NSW,Reliable taxi booking Campbelltown,airport taxi pre-booking,Advance taxi booking in Sydney,book taxi vs hail taxi,13 cabs Sydney number,Pre book a taxi instead in sydney,Best taxi service in Sydney,airport taxi pre booking,reliable taxi service,First-Class Taxi Service",
        canonical:
          "https://campbelltowntaxicabs.com.au/top-reasons-to-pre-book-a-taxi-instead-of-hailing-one",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Top Reasons to Pre-Book a Taxi Instead of Hailing One
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    This guide explains why you should{" "}
                    <span className="font-semibold">pre-book a taxi instead</span>{" "}
                    of waiting on the street. We cover the latest 2026 benefits
                    like fixed pricing and reliable taxi booking in Campbelltown.
                    You will learn how scheduled taxi service NSW options help
                    you never miss a flight or meeting.
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
                    alt="Pre-booked taxi pickup in Campbelltown with fixed pricing, airport transfers, and scheduled service in NSW."
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
                alt="Top reasons to pre-book a taxi instead of hailing one guide cover image"
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
                        Why Pre-Booking Beats Street Luck
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Hailing a taxi depends on timing, traffic, and pure luck.
                        Pre-booking changes the game. You lock in a pickup time,
                        choose the right vehicle, and often get a clearer price.
                        If your trip matters — flights, meetings, events — pre-booking
                        is the safer plan.
                      </p>
                    </section>

                    {/* Expert solutions */}
                    <section id="expert-solutions">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Expert Solutions for Your Sydney Travel Plans
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have spent over a decade coordinating transport across
                        the Greater West. Many passengers in Campbelltown face the
                        frustration of empty cabs driving past during peak hour.
                        Choosing to pre-book a taxi in Sydney solves this problem
                        by securing your car in advance and guaranteeing a driver
                        at your door when you need it.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We focus on delivering a reliable taxi service that respects
                        your time. Your scheduled taxi service NSW booking becomes a
                        priority for drivers, and our dispatch system tracks the
                        driver’s progress to your pickup point. When you pre-book,
                        travel becomes smooth and predictable.
                      </p>
                    </section>

                    {/* Booking options */}
                    <section id="booking-options">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        High-Quality Booking Options for Every Traveller
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        When you book a taxi online in Sydney, you can choose the
                        right vehicle for your needs. Street hails force you to accept
                        whatever car appears. Pre-booking gives you control.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Pre-booked airport taxi in Sydney:</strong> Flight tracking helps adjust pickups if delays occur.
                        </li>
                        <li>
                          <strong>Standard Sedans:</strong> Reliable and clean for local commutes.
                        </li>
                        <li>
                          <strong>Maxi Taxis:</strong> Best for airport taxi pre-booking with families and luggage.
                        </li>
                        <li>
                          <strong>Silver Service:</strong> A first-class taxi service for premium comfort.
                        </li>
                        <li>
                          <strong>Specialised Vans:</strong> Baby seats or wheelchair ramps for extra care.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        An advance taxi booking lets you specify exactly what you need.
                        We match your passenger count, luggage, and comfort requirements
                        to the right vehicle.
                      </p>
                    </section>

                    {/* Costs table */}
                    <section id="costs">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Your Pre-Booking Costs in 2026
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Costs are often clearer when you pre-book. Many travellers
                        prefer reliable taxi booking in Campbelltown because it can
                        offer fixed fare options. Hailing uses the meter, which can
                        climb in heavy traffic (especially on main routes).
                        Booking ahead reduces “meter stress”.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Below is a simple estimate comparison for pre-booked vs hailed trips:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">Service Type</th>
                              <th className="px-4 py-3 font-semibold">Estimated Cost (Pre-Booked)</th>
                              <th className="px-4 py-3 font-semibold">Estimated Cost (Hailed)</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Airport Transfer in Campbelltown</td>
                              <td className="px-4 py-3">$95 – $140 (Fixed)</td>
                              <td className="px-4 py-3">$110 – $165 (Metered)</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Local Suburb Trip</td>
                              <td className="px-4 py-3">$15 – $35</td>
                              <td className="px-4 py-3">$15 – $40</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">First-Class Taxi Service</td>
                              <td className="px-4 py-3">$60 – $130</td>
                              <td className="px-4 py-3">Not Available</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Late Night / Weekend</td>
                              <td className="px-4 py-3">$30 – $70</td>
                              <td className="px-4 py-3">$40 – $85</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Maxi Taxi Group Trip</td>
                              <td className="px-4 py-3">$55 – $100</td>
                              <td className="px-4 py-3">$70 – $120</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Airport & business */}
                    <section id="airport-business">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Reliable Airport and Business Pre-Bookings
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Frequent flyers and business owners need a car that arrives
                        before the alarm goes off. Airport taxi pre-booking means your
                        driver is waiting at 4:00 AM. Corporate teams also benefit from
                        advance bookings for events, meetings, and multiple pickups.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>No Surge Pricing:</strong> Pre-booking tends to offer more stable rates than “last-minute” demand spikes.
                        </li>
                        <li>
                          <strong>Professional Drivers:</strong> Experienced drivers are assigned to pre-booked routes.
                        </li>
                        <li>
                          <strong>Peace of Mind:</strong> You relax knowing your ride is secured.
                        </li>
                        <li>
                          <strong>Flight Monitoring:</strong> Pickup times can be adjusted for delays when flight details are provided.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        A scheduled taxi service NSW option is a “no-wait” solution for
                        busy lifestyles.
                      </p>
                    </section>

                    {/* Safety */}
                    <section id="safety">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Professional Safety and Maintenance for Booked Rides
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Regular safety checks keep services reliable. We inspect vehicles
                        for clean seats, working air conditioning, and mechanical health.
                        When you pre-book, you are guaranteed a vehicle that is prepared
                        and inspected before your trip.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We also check security cameras and GPS units daily. Keeping the
                        fleet in top shape is how we deliver the most reliable taxi
                        service in the region.
                      </p>
                    </section>

                  
                  </div>
                </div>

                {/* FAQ component */}
                <section id="faq" className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Pre-Booking Questions" />
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
                      Get a quick quote
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-accent">
                      Share your pickup time, destination, passengers, and luggage.
                      We’ll recommend the best option for a smooth scheduled trip.
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
              Start Your Stress-Free Trip Today
            </h2>
            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You deserve a transport partner that respects your schedule. We use
              punctual drivers, modern dispatch, and transparent quotes to make
              every trip predictable. Book online or call now to pre-book your next ride.
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

export default Blog9Details;