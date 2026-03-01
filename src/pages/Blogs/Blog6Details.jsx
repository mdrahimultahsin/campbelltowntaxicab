import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import {Link} from "react-router";
import Container from "../../shared/Container";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog6.png";
import Faq from "../../shared/Faq";
import {useMemo} from "react";

const faqs = [
  {
    question: "How long does a Campbelltown taxi booking take?",
    answer:
      "Most local pickups happen within 5 to 10 minutes of your call. During peak times, book about 20 minutes ahead for the best results.",
  },
  {
    question: "Can I get a taxi near me with a baby seat?",
    answer:
      "Yes. We provide child restraints upon request. Just mention it when you call or when you book online so we can dispatch the right vehicle.",
  },
  {
    question: "How do I know if I have a trusted taxi driver?",
    answer:
      "Check the driver’s ID displayed clearly in the vehicle. Licensed NSW taxi drivers must display identification at all times.",
  },
  {
    question: "Is a maxi cab better for airport transfers?",
    answer:
      "If you have more than 4 people or extra luggage, a maxi is usually best. You get more space and everyone travels together for a small extra cost.",
  },
  {
    question: "How can I choose the best taxi service in Sydney for groups?",
    answer:
      "Choose a company with a real maxi-cab fleet, clear pricing, and reliable dispatch. That way your whole group fits and the fare stays predictable.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({top: y, behavior: "smooth"});
}

const Blog6Details = () => {
  const toc = useMemo(
    () => [
      {id: "expert-solutions", label: "Expert solutions"},
      {id: "taxi-options", label: "Taxi options & vehicle types"},
      {id: "costs", label: "Understanding taxi costs (2026)"},
      {id: "corporate", label: "Corporate & specialised transport"},
      {id: "safety", label: "Maintenance & safety standards"},
      {id: "faq", label: "FAQ"},
      {id: "cta", label: "Start your journey"},
    ],
    [],
  );

  return (
    <>
      {useSEO({
        title:
          "How to Choose the Best Taxi Service in Campbelltown - Safe & Affordable Rides",
        description:
          "Get the best taxi service in Campbelltown with our expert guide. Compare 2026 rates, find trusted drivers, and choose the best taxi service today for your trip!",
        keywords:
          "Choose the Best Taxi Service,best taxi service in Campbelltown,Reliable taxi NSW,Campbelltown taxi booking,24/7 taxi in Campbelltown,affordable taxi Campbelltown,local taxi company in Campbelltown,Campbelltown cab service,taxi near you,trusted taxi drivers,taxi service reviews,licensed taxi NSW,Point to point transport NSW,taxi fare estimate in Campbelltown,airport transfer in Campbelltown,corporate taxi services",
        canonical:
          "https://campbelltowntaxicabs.com.au/how-to-choose-the-best-taxi-service-in-campbelltown-nsw",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    How to Choose the Best Taxi Service in Campbelltown, NSW
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Finding a ride in a growing city like Campbelltown shouldn't be stressful. This guide helps you choose the <Link
                          to={`/book-a-taxi`}
                          className="underline font-semibold px-1"
                        >
                          best taxi service
                        </Link>in Campbelltown by checking licenses and driver expertise. You will learn about 2026 fare estimates and why booking a local taxi company in Campbelltown beats generic apps. Whether you need an airport transfer in Campbelltown or a 24/7 taxi in Campbelltown, we have the answers. Use these expert tips to ensure your next trip is safe, fast, and affordable.

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
                    alt="Campbelltown taxi service with modern clean vehicles for local trips, airport transfers, corporate travel and group maxi cabs."
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* FEATURE IMAGE */}
        <Container>
          <section className="mt-8 md:mt-12">
            <figure className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={blogImg}
                alt="How to choose the best taxi service in Campbelltown guide cover image"
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
                    <section id="expert-solutions">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                       Expert Solutions for Your Campbelltown Travel Needs
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                      Expert Solutions for Your Campbelltown Travel Needs
As a local transport expert with over 10 years on these roads, I know your struggles. Residents often worry about late pickups or hidden fees during late-night trips. When you look for ways to choose the best taxi service, a professional <Link
                          to={`/book-a-taxi`}
                          className="underline font-semibold px-1"
                        >
                          Campbelltown cab service
                        </Link> solves these issues by providing fixed estimates and GPS tracking. Choosing a trusted taxi driver means you get someone who knows the backstreets of Macarthur like the back of their hand. <br/> <br/>
We focus on delivering an affordable taxi service in Campbelltown residents can rely on every single day. My team ensures every vehicle meets the strict Point to Point Transport NSW safety standards. We use modern, clean-car protocols and child-safe seating for family trips. Whether you need a quick taxi near you or a corporate taxi service, we provide a premium experience. When you choose the <Link
                          to={`/book-a-taxi`}
                          className="underline font-semibold px-1"
                        >
                          best taxi service,
                        </Link>it makes travel a joy instead of a chore.

                      </p>
                    </section>

                    

                    {/* Options */}
                    <section id="taxi-options">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        High-Quality Taxi Options for Every Budget
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        To choose the{" "}
                        <Link
                          to={`/book-a-taxi`}
                          className="underline font-semibold px-1"
                        >
                          best taxi service
                        </Link>{" "}
                        in Campbelltown, match the vehicle to your trip.
                        Different jobs need different cars — especially for
                        luggage, groups, accessibility, or corporate comfort.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Standard Sedans:</strong> Perfect for 1–4
                          passengers needing quick, local trips.
                        </li>
                        <li>
                          <strong>Maxi Cabs:</strong> Ideal for groups or extra
                          luggage and sports gear.
                        </li>
                        <li>
                          <strong>Wheelchair Accessible Taxis (WAT):</strong>{" "}
                          Designed for passengers with mobility needs.
                        </li>
                        <li>
                          <strong>Silver Service:</strong> Premium sedans for
                          business meetings or extra comfort.
                        </li>
                        <li>
                          <strong>Baby Seat Taxis:</strong> Family-friendly
                          options that keep children secure.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        A <strong>taxi fare estimate in Campbelltown</strong> helps you decide if
                        a standard sedan works or if a maxi is a smarter pick
                        for space and convenience.
                      </p>
                    </section>

                    {/* Costs + table */}
                    <section id="costs">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Your Campbelltown Taxi Costs
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Your total trip cost depends on distance, travel time,
                        and when you ride. In 2026, most passengers pay a base
                        flag fall plus a per-kilometre rate. Night trips and
                        public holidays may include a small surcharge. For price
                        transparency, booking ahead can often secure a fixed
                        estimate.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Pickup location can influence the final price too. For
                        example, an airport transfer may include toll charges.
                        Here’s a simple breakdown of estimated 2026 rates for
                        common trips:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">
                                Trip Type
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Estimated Cost (2026 Rates)
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Common Features
                              </th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Local Suburb Trip</td>
                              <td className="px-4 py-3">$15 – $35</td>
                              <td className="px-4 py-3">
                                Fast pickup, GPS tracking
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">
                                Sydney Airport Transfer
                              </td>
                              <td className="px-4 py-3">$95 – $145</td>
                              <td className="px-4 py-3">
                                Fixed estimate, luggage help
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">
                                Corporate / Silver Service
                              </td>
                              <td className="px-4 py-3">$50 – $120</td>
                              <td className="px-4 py-3">
                                Premium car, priority driver
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Maxi Cab Group Trip</td>
                              <td className="px-4 py-3">$45 – $85</td>
                              <td className="px-4 py-3">
                                Fits up to 11 people
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">24/7 Emergency Ride</td>
                              <td className="px-4 py-3">$25 – $55</td>
                              <td className="px-4 py-3">Available all night</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Corporate */}
                    <section id="corporate">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Reliable Corporate and Specialized Transport
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Businesses need more than “a ride.” You need
                        punctuality, professional drivers, and clear receipts. A
                        <Link
                          to={`https://campbelltowntaxicabs.com.au/services/corporate-tips`}
                          className="underline font-semibold px-1"
                        >corporate taxi service
                        </Link> protects schedules and reduces
                        travel stress for staff, meetings, and events.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Priority Booking:</strong> Business accounts
                          get faster dispatch times.
                        </li>
                        <li>
                          <strong>Detailed Invoicing:</strong> Clear receipts
                          for tax and expense claims.
                        </li>
                        <li>
                          <strong>Licensed Drivers:</strong> Verified
                          professional drivers following NSW requirements.
                        </li>
                        <li>
                          <strong>Modern Safety:</strong> Many fleets include
                          security features for peace of mind.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Investing in a trusted taxi driver now prevents the
                        stress of being late later — especially for flights and
                        corporate schedules.
                      </p>
                    </section>

                    {/* Safety */}
                    <section id="safety">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Professional Maintenance and Safety Standards
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Routine vehicle checks are the backbone of safe,
                        comfortable rides. A strong taxi provider monitors
                        mechanical health, ensures clean interiors, and removes
                        any faulty car from service immediately. Clean
                        touchpoints and well-maintained air conditioning matter
                        more than people think — especially for families and
                        longer trips.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        The <Link
                          to={`/book-a-taxi`}
                          className="underline font-semibold px-1"
                        >
                          best taxi service
                        </Link>in Campbelltown keeps standards
                        high every day so your trip stays smooth and
                        predictable.
                      </p>
                    </section>

                    {/* FAQ anchor */}
                    <section id="faq">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Frequently Asked Questions
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Quick answers to the most common questions people ask
                        before booking a taxi in Campbelltown.
                      </p>
                    </section>
                  </div>
                </div>

                {/* FAQ component */}
                <div className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Taxi Booking Questions" />
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
                    <h3 className="text-lg font-bold text-secondary">
                      Get a quick quote
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-accent">
                      Tell us your pickup, destination, passenger count, and if
                      you need luggage space, a baby seat, or a maxi cab. We’ll
                      recommend the best option.
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
              Start Your Campbelltown Journey Today
            </h2>
            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You deserve a ride that handles Sydney traffic with ease. If you
              want safe drivers, clean cars, and clear pricing, choose a trusted
              local service. Call for a quote or book online in seconds.
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

export default Blog6Details;
