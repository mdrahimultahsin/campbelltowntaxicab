import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog11.png";
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "Is a Campbelltown taxi service cheaper than Uber?",
    answer:
      "During peak hours or in the rain, a taxi is usually cheaper. Uber surge pricing can make fares jump sharply during storms and busy periods.",
  },
  {
    question: "How do I make a taxi booking in Campbelltown?",
    answer:
      "You can call us at 1300 450 428 or book via our website. We offer fast dispatch for local and long-distance trips.",
  },
  {
    question: "Does Uber offer a fixed fare taxi Campbelltown equivalent?",
    answer:
      "Uber offers upfront pricing, but it changes based on demand. Our fixed fares remain stable regardless of how many people are booking.",
  },
  {
    question: "Which is better for an airport taxi Campbelltown run?",
    answer:
      "A taxi is usually more reliable for early morning airport trips. You can pre-book and be confident your driver will arrive on time.",
  },
  {
    question: "What is the best transport in Campbelltown, NSW, for large families?",
    answer:
      "A Maxi Taxi is often best for families with luggage. It can be cheaper and more comfortable than ordering two separate Ubers.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog11Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "expert-solutions", label: "Expert solutions" },
      { id: "options", label: "Taxi vs Uber options" },
      { id: "costs", label: "2026 trip costs" },
      { id: "corporate", label: "Corporate & group travel" },
      { id: "safety", label: "Maintenance & safety" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Book your ride" },
    ],
    []
  );

  return (
    <>
      {useSEO({
        title: "Campbelltown Taxi Service vs Uber – Which Is Cheaper & More Reliable?",
        description:
          "Compare Campbelltown Taxi Service vs Uber in 2026. Learn how surge pricing impacts Uber, why fixed fares help budgeting, and which option is more reliable in Campbelltown.",
        keywords:
          "Campbelltown Taxi Service vs Uber,Uber surge pricing Sydney,fixed fare taxi Campbelltown,taxi booking Campbelltown,Uber vs taxi costs Sydney,taxi reliability Sydney,local taxi vs rideshare,best transport Campbelltown NSW,airport taxi Campbelltown,maxi taxi Campbelltown",
        canonical:
          "https://campbelltowntaxicabs.com.au/campbelltown-taxi-service-vs-uber-which-is-cheaper-and-more-reliable",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Campbelltown Taxi Service vs Uber – Which Is Cheaper & More Reliable?
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    This guide compares{" "}
                    <span className="font-semibold">Campbelltown Taxi Service vs Uber</span>{" "}
                    to help you choose the best ride. We look at 2026 costs, Uber surge
                    pricing trends, and overall reliability. You will learn why a{" "}
                    <Link
                      to="/book-a-taxi"
                      className="underline font-semibold px-1"
                    >
                      fixed fare taxi in Campbelltown
                    </Link>{" "}
                    offers better budget control than rideshare apps. Use this comparison
                    to choose the best transport Campbelltown, NSW has for daily travel.
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
                    alt="Campbelltown Taxi Service vs Uber comparison for cheaper fares, reliability, airport travel and daily commuting."
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
                alt="Campbelltown taxi vs Uber guide cover image"
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
                        A Real-World Comparison in 2026
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        The question isn’t only “which is cheaper?” It’s also “which shows up
                        when you actually need it?” Campbelltown Taxi Service vs Uber comes
                        down to price stability, cancellations, wait times, and driver experience.
                        This guide breaks down the practical differences for local trips, airport
                        runs, and peak-hour travel.
                      </p>
                    </section>

                    {/* Expert solutions */}
                    <section id="expert-solutions">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Expert Solutions for Your Campbelltown Commute
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have spent ten years watching transport change in Western Sydney.
                        Many locals ask if a local taxi vs rideshare is better for work,
                        and the Campbelltown Taxi Service vs Uber debate is common. A
                        professional taxi service solves the surge problem that hits app users.
                        You avoid huge price jumps during school runs, heavy rain, and major events.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We focus on taxi reliability in Sydney by keeping our fleet local.
                        A taxi booking in Campbelltown is honoured even in peak hours.
                        Dispatchers prioritise pre-booked airport and hospital trips. That
                        consistency helps you avoid hidden “cost surprises.”
                      </p>
                    </section>

                    {/* Options */}
                    <section id="options">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        High-Quality Transport Options for Every Budget
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Choosing between a taxi and Uber in Sydney depends on time of day,
                        group size, and price transparency. Here’s a simple breakdown:
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Fixed Fare Taxi Campbelltown:</strong> Lock your price before the trip.
                        </li>
                        <li>
                          <strong>Standard UberX:</strong> Can be cheaper midday when demand is low.
                        </li>
                        <li>
                          <strong>Maxi Taxi Campbelltown:</strong> Better for groups of 5–11 people.
                        </li>
                        <li>
                          <strong>Uber Comfort / Premier:</strong> Nicer cars but often higher prices.
                        </li>
                        <li>
                          <strong>Silver Service Taxis:</strong> Premium sedans with licensed, experienced drivers.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Uber surge pricing in Sydney changes quickly. A fast app check
                        compared to a taxi quote helps you decide the best option for your route.
                      </p>
                    </section>

                    {/* Costs table */}
                    <section id="costs">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Your 2026 Trip Costs
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        In 2026, Uber vs taxi costs in Sydney vary most during rush hour.
                        Taxis use a regulated meter or a pre-agreed fixed fare. Uber uses
                        dynamic pricing that can double your fare in seconds during demand spikes.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Here’s a practical cost comparison for common routes:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">Route Type</th>
                              <th className="px-4 py-3 font-semibold">Campbelltown Taxi (Fixed)</th>
                              <th className="px-4 py-3 font-semibold">UberX (Estimated Surge)</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Local (Campbelltown to Leumeah)</td>
                              <td className="px-4 py-3">$15 – $22</td>
                              <td className="px-4 py-3">$12 – $35</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Airport Taxi Campbelltown</td>
                              <td className="px-4 py-3">$110 – $145</td>
                              <td className="px-4 py-3">$95 – $190</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Saturday Night (To CBD)</td>
                              <td className="px-4 py-3">$160 – $190</td>
                              <td className="px-4 py-3">$140 – $320</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Hospital Run (Local)</td>
                              <td className="px-4 py-3">$18 – $25</td>
                              <td className="px-4 py-3">$15 – $40</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Maxi Taxi Group Trip</td>
                              <td className="px-4 py-3">$45 – $85</td>
                              <td className="px-4 py-3">$55 – $110</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        If you care about budget control, fixed fares often feel safer —
                        especially for airport and weekend trips.
                      </p>
                    </section>

                    {/* Corporate */}
                    <section id="corporate">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Reliable Corporate and Group Travel Solutions
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Corporate teams need a service that shows up on time. Uber prices can
                        look low, but cancellations happen during peak periods. We support taxi
                        reliability in Sydney with dedicated dispatch and corporate accounts.
                        Maxi taxis help groups stay together without booking multiple cars.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>No Surge Pricing:</strong> Taxis don’t charge 3x during rain.
                        </li>
                        <li>
                          <strong>Guaranteed Pickups:</strong> Pre-booked trips are honoured.
                        </li>
                        <li>
                          <strong>Professional Standards:</strong> Vehicles meet Point to Point Transport NSW requirements.
                        </li>
                        <li>
                          <strong>Easy Invoicing:</strong> Clear receipts for business tax claims.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Investing in reliability prevents the stress of app delays — especially
                        when timing matters.
                      </p>
                    </section>

                    {/* Safety */}
                    <section id="safety">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Professional Maintenance and Safety Standards
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Routine checks keep our fleet safe and comfortable. We inspect air
                        conditioning, seats, and daily cleanliness. Vehicles are monitored with
                        safety cameras and GPS tracking to protect passengers and drivers.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Early maintenance prevents breakdowns and improves overall reliability —
                        a key advantage in the local taxi vs rideshare comparison.
                      </p>
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <section id="faq" className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Taxi vs Uber Questions" />
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
                    <h3 className="text-lg font-bold text-secondary">Get a quick quote</h3>
                    <p className="mt-2 text-sm leading-7 text-accent">
                      Share your pickup + destination, passenger count, and timing.
                      We’ll give you a clear taxi quote so you can compare against Uber.
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
            <h2 className="text-2xl md:text-3xl font-bold">Book Your Reliable Ride Today</h2>

            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You deserve a transport partner that does not play games with pricing. At{" "}
              <Link to="/" className="underline font-semibold px-1">
                Campbelltown Taxi Cabs,
              </Link> we bring a decade of local experience to you. In the choice between Campbelltown Taxi Service and Uber, we use the best cars and the most professional drivers. Our team is ready to give you a fair and honest price today.
             we bring a decade of local experience, professional drivers, and stable pricing.
              Stop worrying about surge and choose a proven local service today. We offer the most reliable taxi booking Campbelltown has to offer for everyone. Let us show you why we are the top choice for Sydney travel!

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

export default Blog11Details;