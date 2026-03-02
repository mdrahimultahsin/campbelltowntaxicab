import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog12.png";
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "How much is a Sydney Airport Taxi from Campbelltown?",
    answer:
      "A standard fixed price usually ranges from $115 to $145. Prices may vary depending on the time of day and the vehicle size.",
  },
  {
    question: "What is the travel time from Campbelltown to Sydney Airport?",
    answer:
      "In light traffic, it takes about 40 minutes. During the busy morning rush, it can take up to 75 minutes or more.",
  },
  {
    question: "Can I get an airport maxi taxi Campbelltown for 8 people?",
    answer:
      "Yes. Our maxi vans can carry up to 11 passengers comfortably. They are perfect for groups traveling with multiple large suitcases.",
  },
  {
    question: "Is there a fixed price airport taxi in Sydney for late night?",
    answer:
      "Yes. We offer fixed rates 24/7, including late-night and early-morning runs. You can lock in your price when you book.",
  },
  {
    question: "Where is the airport taxi booking near me?",
    answer:
      "You can book online or call us directly from anywhere in Campbelltown. We provide fast service across the Macarthur region.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog12Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "expert-solutions", label: "Expert solutions" },
      { id: "vehicle-options", label: "Vehicle options" },
      { id: "costs", label: "Fixed price costs (2026)" },
      { id: "timing-tips", label: "Travel time & booking tips" },
      { id: "safety", label: "Fleet safety & pickups" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Book your airport transfer" },
    ],
    []
  );

  return (
    <>
      {useSEO({
        title:
          "Sydney Airport Taxi from Campbelltown - Top Pro Tips to Avoid Surge Fees",
        description:
          "Get to your flight on time with a Sydney Airport Taxi from Campbelltown. Enjoy fixed prices, 24/7 reliability, and easy booking. Secure your airport ride now!",
        keywords:
          "Sydney Airport Taxi from Campbelltown,Campbelltown to Sydney Airport taxi,fixed price airport taxi in Sydney,airport transfer Campbelltown,taxi fare Campbelltown to airport,Sydney Airport taxi booking,airport maxi taxi Campbelltown,travel time Campbelltown to Sydney Airport,reliable airport taxi in Sydney,early morning airport taxi Sydney,reliable airport taxi NSW,airport taxi booking near to me,airport pickup taxi Sydney",
        canonical:
          "https://campbelltowntaxicabs.com.au/sydney-airport-taxi-from-campbelltown-fixed-price-travel-time-and-booking-tips",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Sydney Airport Taxi from Campbelltown – Fixed Price, Travel
                    Time & Booking Tips
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    This guide gives you everything you need for a{" "}
                    <Link
                      to="/services/book-taxi-sydney-airport"
                      className="underline font-semibold px-1"
                    >
                      Sydney Airport Taxi from Campbelltown
                    </Link>{" "}
                    in 2026. Learn fixed price airport taxi details, current
                    travel time estimates for peak and off-peak hours, and
                    proven booking tips for a smooth terminal arrival.
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
                    alt="Sydney Airport taxi transfer from Campbelltown with fixed pricing, luggage space and reliable pickup timing."
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
                alt="Sydney Airport taxi from Campbelltown guide cover image"
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
                        A No-Stress Airport Transfer in 2026
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Airport runs are all about timing. If you choose the
                        right vehicle, lock in a fixed price, and leave with a
                        smart buffer, your trip becomes simple. This guide helps
                        you plan a Sydney Airport Taxi from Campbelltown with
                        confidence.
                      </p>
                    </section>

                    {/* Expert solutions */}
                    <section id="expert-solutions">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Expert Solutions for Your Airport Journey
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have managed airport transfers in the Macarthur region
                        for over ten years. Many travellers worry about missing a
                        flight due to a late car. Booking a Sydney Airport Taxi
                        from Campbelltown solves this by offering a guaranteed,
                        punctual pickup.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We prioritise airport runs because check-in time matters.
                        Our team uses flight tracking and GPS routing to keep your
                        pickup smooth — including early morning airport taxi
                        Sydney services for those 6:00 AM departures.
                      </p>
                    </section>

                    {/* Vehicle options */}
                    <section id="vehicle-options">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        High-Quality Transfer Options for Your Flight
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Choosing the right vehicle ensures you and your bags fit
                        comfortably. When you pre-book, you can select the best
                        match for your group size and luggage count.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Standard Sedan:</strong> Perfect for 1–3
                          passengers with two large suitcases.
                        </li>
                        <li>
                          <strong>Airport Maxi Taxi Campbelltown:</strong> Best
                          choice for families or large groups.
                        </li>
                        <li>
                          <strong>Luxury Silver Service:</strong> Premium ride
                          for business trips and special travel.
                        </li>
                        <li>
                          <strong>Station Wagons:</strong> Extra boot space for
                          bulky gear or golf clubs.
                        </li>
                        <li>
                          <strong>Baby Seat Taxis:</strong> Approved restraints
                          for infants during your airport transfer.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        A Sydney Airport taxi booking lets you specify your
                        luggage and passenger details in advance, so the correct
                        vehicle arrives the first time.
                      </p>
                    </section>

                    {/* Costs table */}
                    <section id="costs">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Your 2026 Airport Taxi Costs
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        The fare from Campbelltown to Sydney Airport is often the
                        biggest concern. Many travellers prefer a{" "}
                        <span className="font-semibold">
                          fixed price airport taxi in Sydney
                        </span>{" "}
                        to avoid surprises. Meters can climb quickly if traffic
                        builds on key motorways. With a locked-in price, you
                        know exactly what you pay.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Here’s a simple 2026 estimate by vehicle type:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">
                                Service Type
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Estimated Fare (Fixed)
                              </th>
                              <th className="px-4 py-3 font-semibold">Best For</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">
                                Standard Taxi (Off-Peak)
                              </td>
                              <td className="px-4 py-3">$115 – $145</td>
                              <td className="px-4 py-3">Solo / Couples</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">
                                Airport Maxi Taxi Campbelltown
                              </td>
                              <td className="px-4 py-3">$165 – $215</td>
                              <td className="px-4 py-3">Large Families</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">
                                Early Morning Airport Taxi Sydney
                              </td>
                              <td className="px-4 py-3">$130 – $160</td>
                              <td className="px-4 py-3">First Flights</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Silver Service Sedan</td>
                              <td className="px-4 py-3">$155 – $185</td>
                              <td className="px-4 py-3">Business Travel</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Airport Pickup Taxi Sydney</td>
                              <td className="px-4 py-3">$125 – $155</td>
                              <td className="px-4 py-3">Returning Home</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Timing tips */}
                    <section id="timing-tips">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Reliable Timing and Travel Tips
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        The travel time Campbelltown to Sydney Airport varies
                        by time of day. On a clear run, the ~45 km journey is
                        usually about <strong>35–45 minutes</strong>. During the
                        morning peak, allow <strong>65–80 minutes</strong>.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We recommend leaving at least <strong>3 hours before</strong>{" "}
                        your flight to handle check-in, security, and unexpected
                        road delays. Use these booking tips:
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Pre-Book Early:</strong> Secure your car 24 hours before your flight.
                        </li>
                        <li>
                          <strong>Track Your Flight:</strong> Share your flight number for accurate pickup.
                        </li>
                        <li>
                          <strong>Check Traffic:</strong> We monitor conditions and suggest the best departure time.
                        </li>
                        <li>
                          <strong>Confirm Details:</strong> Double-check your terminal (Domestic vs International).
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        With GPS routing and local knowledge, we aim to deliver a true
                        “no-stress” airport transfer every time.
                      </p>
                    </section>

                    {/* Safety */}
                    <section id="safety">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Professional Fleet Safety and Terminal Pickups
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Routine checks keep our airport fleet clean and mechanically
                        ready. We inspect air conditioning, cleanliness, and boot space
                        before trips. If a vehicle shows wear, we fix it immediately to
                        avoid delays.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We also clean every airport maxi taxi after long-distance runs,
                        and we use booking logs to keep pickups organised and punctual.
                      </p>
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <section id="faq" className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Airport Taxi Questions" />
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
                      Share pickup time, terminal, passenger count, luggage, and if you need
                      a baby seat or a maxi taxi. We’ll recommend the best option and confirm
                      a clear fixed price.
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
              Book Your Airport Transfer Today
            </h2>

            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You deserve a ride that is as organised as your travel plans. At{" "}
              <Link to="/" className="underline font-semibold px-1">
                Campbelltown Taxi Cabs
              </Link>
              , we bring a decade of airport expertise to your door with punctual drivers,
              reliable vehicles, and fixed pricing. Stop worrying about traffic and let
              the experts handle your next Sydney Airport Taxi from Campbelltown.
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

export default Blog12Details;