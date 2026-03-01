import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog7.png"; 
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "How do I book a wheelchair accessible taxi in Sydney?",
    answer:
      "You can call us directly or use our online booking system. We recommend booking at least two hours early for peak times.",
  },
  {
    question: "Do you accept NDIS taxi Sydney payments?",
    answer:
      "Yes, we accept various transport subsidies and NDIS payment methods for all special needs taxi services.",
  },
  {
    question: "Is there a special needs taxi service in NSW for children?",
    answer:
      "We offer specialised care and safe seating for children with special needs. Our drivers are patient and helpful with young passengers.",
  },
  {
    question: "How many chairs fit in a maxi taxi wheelchair access?",
    answer:
      "Most of our maxi vans can fit two full-sized wheelchairs comfortably. We still have room for other passengers as well.",
  },
  {
    question: "Can I find special needs taxi services near me late at night?",
    answer:
      "Yes. We operate 24/7 so you always have access to safe transport. Night trips are just as easy to book as day trips.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog7Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "expert-solutions", label: "Expert solutions" },
      { id: "accessible-vehicles", label: "Vehicle types & accessibility" },
      { id: "costs", label: "Costs & NDIS options (2026)" },
      { id: "commercial", label: "Schools & care facilities" },
      { id: "safety", label: "Safety inspections" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Start your accessible journey" },
    ],
    []
  );

  return (
    <>
      {useSEO({
        title: "Accessibility & Special Needs Taxi Services Explained",
        description:
          "Enjoy stress-free travel with our expert special needs taxi services. We provide NDIS-ready, wheelchair-accessible rides across Sydney. Book your safe trip today!",
        keywords:
          "Special Needs Taxi Services,,wheelchair accessible taxi Sydney,disability taxi Sydney,special needs taxi service N,NDIS taxi transport Sydney,accessible transport services NSW,mobility assistance taxi Sydney,wheelchair taxi Campbelltown,maxi taxi wheelchair access,taxi for disabled passengers Sydney,wheelchair taxi near ,disability friendly taxi service,disabled transport service,Special needs taxi services in sydney,special needs transport,NDIS taxi Sydney",
        canonical:
          "https://campbelltowntaxicabs.com.au/accessibility-and-special-needs-taxi-services-explained",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Accessibility & Special Needs Taxi Services Explained
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    This guide explains how to book reliable{" "}
                    <Link to="/book-a-taxi" className="underline font-semibold px-1">
                      special needs taxi services
                    </Link>{" "}
                    in Sydney. We cover 2026 NDIS transport options and
                    wheelchair accessible taxi Sydney features. You will learn
                    how to find a disability friendly taxi service near you and
                    choose the best accessible transport services NSW has to
                    offer.
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
                    alt="Wheelchair accessible taxi service in Sydney and Campbelltown with ramps, secure restraints and trained drivers."
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
                alt="Accessibility and special needs taxi services guide cover image"
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
                        Accessible Transport That Respects Your Needs
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You deserve transport that supports your mobility and protects
                        your comfort. A disability friendly taxi service provides
                        door-to-door travel, safer loading, trained drivers, and the
                        right equipment — without the stress of public transport.
                      </p>
                    </section>

                    {/* Expert solutions */}
                    <section id="expert-solutions">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Expert Solutions for Special Needs Taxi Services
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have spent ten years helping passengers with mobility
                        challenges. Many families in Campbelltown worry about vehicle
                        safety and driver patience. A professional special needs taxi
                        service in NSW solves these worries immediately.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Our special needs taxi services use reinforced ramps and
                        certified restraint systems for every journey. Drivers are
                        trained to assist with various mobility aids. Vehicles
                        accommodate large electric wheelchairs and motorised scooters.
                        Whether you need a local trip or a long NDIS taxi Sydney
                        transfer, your dignity stays the top priority.
                      </p>
                    </section>

                    {/* Vehicle types */}
                    <section id="accessible-vehicles">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        High-Quality Accessible Vehicles for Every Trip
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Choosing the right vehicle is the most important part of your
                        journey. Each wheelchair taxi Campbelltown option has
                        different space layouts. Modern hydraulic lifts and wide-entry
                        doors are now the standard, and we ensure every maxi taxi
                        wheelchair access vehicle passes strict safety audits.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Rear-Loading Vans:</strong> Most room for large power chairs.
                        </li>
                        <li>
                          <strong>Side-Loading Vehicles:</strong> Fast curb-side pickups in busy streets.
                        </li>
                        <li>
                          <strong>NDIS Taxi Transport Sydney:</strong> Vehicles that accept transport subsidy vouchers.
                        </li>
                        <li>
                          <strong>Mobility Assistance Taxi Sydney:</strong> Extra grab rails and step assistance.
                        </li>
                        <li>
                          <strong>Special Needs Taxi Services in Sydney:</strong> Full-size vans for groups with multiple chairs.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Selecting the best wheelchair taxi near me depends on your
                        equipment. A quick inspection ensures your chair fits perfectly.
                        We help you choose a disability friendly taxi service that suits
                        your daily routine.
                      </p>
                    </section>

                    {/* Costs table */}
                    <section id="costs">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Your Special Needs Taxi Costs
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        The cost of accessible travel depends on distance and timing.
                        In 2026, many NDIS taxi Sydney users pay via subsidised transport
                        schemes. When you book special needs taxi services, labour costs
                        include the time required to secure your chair safely. With a
                        valid subsidy card, you can save significantly.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Your location in Greater Western Sydney also affects the final
                        price. For example, disabled transport services in Campbelltown
                        often have fixed local rates. Here’s a breakdown of estimated
                        2026 costs:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">Service Type</th>
                              <th className="px-4 py-3 font-semibold">Estimated Cost (Per Trip)</th>
                              <th className="px-4 py-3 font-semibold">Typical Features</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Local Mobility Trip</td>
                              <td className="px-4 py-3">$25 – $55</td>
                              <td className="px-4 py-3">Ramp access, 5-minute loading</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">NDIS Hospital Transfer</td>
                              <td className="px-4 py-3">$60 – $110</td>
                              <td className="px-4 py-3">Priority booking, door-to-door</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Sydney Airport Access</td>
                              <td className="px-4 py-3">$115 – $165</td>
                              <td className="px-4 py-3">Luggage help, fixed pricing</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Multi-Chair Maxi Taxi</td>
                              <td className="px-4 py-3">$75 – $135</td>
                              <td className="px-4 py-3">Fits 2–3 chairs at once</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Regular School Run</td>
                              <td className="px-4 py-3">$35 – $65</td>
                              <td className="px-4 py-3">Consistent driver, safe route</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Commercial */}
                    <section id="commercial">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Durable Commercial Special Needs Transport
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Schools and care facilities need transport that protects
                        vulnerable clients. Reliable special needs taxi services for
                        organisations require strict scheduling and higher safety.
                        Facilities benefit from high-roof vans, trained drivers, and
                        professional compliance.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Reliable Schedules:</strong> We arrive early to assist with loading.
                        </li>
                        <li>
                          <strong>Code Compliance:</strong> We meet NSW point-to-point safety laws.
                        </li>
                        <li>
                          <strong>Full Insurance:</strong> Coverage for passengers and equipment.
                        </li>
                        <li>
                          <strong>GPS Tracking:</strong> Families can monitor trip progress in real-time.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Our vehicles use heavy-duty floor tracks to stop chair movement
                        during turns. The goal is simple: consistent, respectful
                        disabled transport services without delays.
                      </p>
                    </section>

                    {/* Safety */}
                    <section id="safety">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Professional Accessible Inspection and Safety
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Routine maintenance is the secret to a safe wheelchair taxi near me.
                        Daily checks identify frayed straps before they fail and confirm smooth
                        ramp operation. If we find any mechanical issues, we fix them before
                        the next booking.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Early repairs protect equipment and improve comfort. We clean ramps and
                        handles to keep the environment hygienic. Regular checks are why we lead
                        in special needs taxi services in Sydney.
                      </p>
                    </section>

                    {/* FAQ anchor */}
                    <section id="faq">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Frequently Asked Questions
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Quick answers to common questions about booking wheelchair accessible taxis,
                        NDIS payments, and after-hours transport.
                      </p>
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <div className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Accessibility Booking Questions" />
                </div>
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
                      Tell us your pickup, destination, wheelchair type (manual/electric),
                      passenger count, and if you need an NDIS-supported trip. We’ll recommend
                      the safest option.
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
              Start Your Accessible Journey Today
            </h2>
            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You deserve a ride that respects your mobility and your time. At Campbelltown Taxi Cabs,
              we bring years of care to every trip with safe ramps, certified restraints, and trained drivers.
              Call now or book online to schedule your ride.
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

export default Blog7Details;