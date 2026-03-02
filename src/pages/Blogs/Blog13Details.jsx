import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog13.png";
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "Can I use Cabcharge for an early morning taxi Campbelltown?",
    answer:
      "Yes. We accept all forms of Cabcharge payments for every scheduled trip, including early morning airport runs and business bookings.",
  },
  {
    question: "How do I find the best Campbelltown taxi phone number?",
    answer:
      "You can reach our professional dispatch team instantly at 1300 450 428. We provide reliable taxis across Campbelltown and nearby suburbs.",
  },
  {
    question: "Is it possible to pre-book taxi Campbelltown for airport transfers?",
    answer:
      "Absolutely. We encourage pre-booking for airport transfers so your pickup is locked in and you arrive with plenty of time for check-in.",
  },
  {
    question: "Do you offer corporate taxi booking Campbelltown services?",
    answer:
      "Yes. We specialise in corporate bookings with Cabcharge support, which makes billing and expense reporting simpler for teams and executives.",
  },
  {
    question: "Is your 24/7 Cabcharge taxi in Campbelltown available on holidays?",
    answer:
      "Yes. We operate 365 days a year. You can book late-night and early-morning trips any day, including public holidays.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog13Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "why-cabcharge", label: "Why Cabcharge?" },
      { id: "features", label: "Features & booking options" },
      { id: "prebook-steps", label: "How to pre-book" },
      { id: "after-hours", label: "After-hours & late night" },
      { id: "expert-tips", label: "Expert booking tips" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Book your ride" },
    ],
    []
  );

  return (
    <>
      {useSEO({
        title: "24/7 Cabcharge Taxi Service in Campbelltown -  Pre-Book Your Ride",
        description:
          "Get a reliable Cabcharge Taxi Service in Campbelltown 24/7. We offer easy corporate billing and airport transfers. Book your professional ride online or call 1300 450 428 now!",
        keywords:
          "Cabcharge Taxi Service,24/7 Cabcharge taxi in Campbelltown,Cabcharge taxi Campbelltown,Book taxi Campbelltown,Pre-book taxi Campbelltown,Campbelltown taxi phone number,After hours taxi Campbelltown,Late night taxi Campbelltown,Early morning taxi Campbelltown,Cabcharge taxi booking,Taxi booking online Campbelltown,Corporate taxi booking Campbelltown,Reliable taxi service Campbelltown",
        canonical:
          "https://campbelltowntaxicabs.com.au/cabcharge-taxi-service-in-campbelltown-how-to-pre-book",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    24/7 Cabcharge Taxi Service in Campbelltown – How to Pre-Book
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Reliable transport is vital for your daily schedule in Campbelltown.
                    This guide explains how to secure a{" "}
                    <Link to="/book-a-taxi" className="underline font-semibold px-1">
                      Cabcharge Taxi Service
                    </Link>{" "}
                    anytime. Learn the best ways to pre-book a taxi for work or flights,
                    plus expert tips for late-night and early-morning pickups.
                    Experience seamless travel with the most trusted corporate taxi booking
                    Campbelltown offers.
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
                    alt="24/7 Cabcharge taxi service in Campbelltown with corporate billing, pre-booking, late night and early morning pickups."
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
                alt="Cabcharge taxi service in Campbelltown guide cover image"
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
                        Reliable Cabcharge Travel Any Time of Day
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Campbelltown runs on shift work, late-night plans, and early flights.
                        A 24/7 Cabcharge taxi service removes the guesswork. You pre-book,
                        confirm your details, and get a driver who shows up—without stress.
                      </p>
                    </section>

                    {/* Why Cabcharge */}
                    <section id="why-cabcharge">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Why Choose Our Professional Cabcharge Taxi Service?
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have spent over ten years managing transport logistics in Western Sydney.
                        Most corporate travellers prefer a Cabcharge Taxi Service for simplified billing.
                        You avoid carrying cash or personal cards. Our fleet accepts Cabcharge formats,
                        including digital dockets and physical cards—making us a top choice for corporate
                        taxi booking in Campbelltown.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Late-night pickups can be risky and unpredictable. That’s why our{" "}
                        <span className="font-semibold">24/7 Cabcharge taxi in Campbelltown</span>{" "}
                        stays active. Drivers know Macarthur shortcuts and prioritise safe,
                        on-time travel after midnight near busy local areas.
                      </p>
                    </section>

                    {/* Features table */}
                    <section id="features">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Essential Guide to Taxi Features and Booking Options
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Here’s a simple overview of what you get with Cabcharge-friendly,
                        24/7 taxi booking in Campbelltown.
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">Service Feature</th>
                              <th className="px-4 py-3 font-semibold">Benefit for You</th>
                              <th className="px-4 py-3 font-semibold">Payment & Booking Method</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Cabcharge Taxi Service</td>
                              <td className="px-4 py-3">Zero cash needed for business trips.</td>
                              <td className="px-4 py-3">Physical card or digital docket.</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Early morning taxi Campbelltown</td>
                              <td className="px-4 py-3">Guaranteed arrival for 5 AM flights.</td>
                              <td className="px-4 py-3">Call our dispatch team.</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Late night taxi Campbelltown</td>
                              <td className="px-4 py-3">Safe transport after dark or events.</td>
                              <td className="px-4 py-3">Use online booking or phone.</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Maxi Cab Options</td>
                              <td className="px-4 py-3">Extra space for groups and luggage.</td>
                              <td className="px-4 py-3">Pre-book early to reserve.</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Wheelchair Accessible</td>
                              <td className="px-4 py-3">Inclusive transport for mobility needs.</td>
                              <td className="px-4 py-3">Request accessible vehicle at booking.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Prebook steps */}
                    <section id="prebook-steps">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Simple Steps to Pre-Book Taxi Campbelltown Trips
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Planning ahead is the smartest way to travel—especially for airport runs.
                        Pre-book taxi Campbelltown services at least 24 hours early to lock in a
                        punctual pickup. Many locals use our online booking portal because it takes
                        less than two minutes.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Prefer speaking to a human? Call{" "}
                        <a href="tel:1300450428" className="underline font-semibold px-1">
                          1300 450 428
                        </a>{" "}
                        and confirm your pickup address twice. Mention if you need a maxi cab,
                        baby seat, or an accessible vehicle so we dispatch the perfect option.
                      </p>
                    </section>

                    {/* After hours */}
                    <section id="after-hours">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Reliable After Hours and Late Night Taxi Campbelltown Solutions
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Nightlife and shift work need dependable after-hours transport.
                        Our late night taxi Campbelltown team monitors traffic patterns to reach
                        you faster and keep you safe after long work shifts.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Using Cabcharge for night travel adds another layer of security. Trips are tracked,
                        and payment is processed through a secure system. We serve surrounding suburbs so no
                        one is left stranded after dark.
                      </p>
                    </section>

                    {/* Expert tips */}
                    <section id="expert-tips">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Expert Tips for Seamless Cabcharge Taxi Booking
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Keep our Campbelltown taxi phone number saved. A quick Cabcharge taxi booking can
                        rescue your day when plans change. For business events, request Silver Service for
                        a premium experience.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>Check your Cabcharge card expiry date before you travel.</li>
                        <li>Use online booking to get quick receipts for expense claims.</li>
                        <li>Provide a flight number for early morning airport runs.</li>
                        <li>Specify luggage size when booking for large groups.</li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Our Cabcharge taxi Campbelltown fleet is inspected for cleanliness and mechanical safety.
                        Whether it’s a short local trip or a long journey, we deliver consistent service.
                      </p>
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <section id="faq" className="mt-10">
                  <Faq
                    faqs={faqs}
                    faqSectionTitle="Cabcharge Taxi Booking Questions"
                  />
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
                      Tell us your pickup time, destination, passenger count, and whether you
                      need Cabcharge billing, a maxi cab, baby seat, or accessible vehicle.
                      We’ll recommend the best option fast.
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
              Book Your Next Ride with Campbelltown Taxi Cabs
            </h2>

            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
             Ready for a comfortable journey? Experience the best Cabcharge Taxi Service in the Macarthur region today. Whether you need a 24/7 Cabcharge taxi in Campbelltown or a quick trip to the shops, we are ready. Our team is standing by to assist with your taxi booking online Campbelltown or via phone. Don't settle for less when you can have a reliable taxi service Campbelltown at your door.
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

export default Blog13Details;