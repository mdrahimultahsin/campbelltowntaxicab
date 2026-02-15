import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import blogImg from "/campbelltown-blog2.png";
import {Link} from "react-router";
import {useMemo} from "react";
import Container from "../../shared/Container";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import Faq from "../../shared/Faq";

import { FaHandPointer, FaRegClock} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";

const faqs = [
  {
    question: "How do corporate taxi accounts work?",
    answer:
      "You submit business registration documents. You provide credit references. The taxi company verifies your details. They issue account numbers. You book using these credentials. Invoices arrive monthly. You pay within the agreed terms. The process stays simple.",
  },
  {
    question: "Can I book corporate taxis for international clients?",
    answer:
      "Absolutely. You specify pickup requirements. Drivers track flight arrivals. They handle terminal navigation. They manage luggage assistance. Your guests feel welcomed professionally. Language barriers are reduced through clear service standards.",
  },
  {
    question: "What happens if my meeting runs late?",
    answer:
      "You call the dispatch team. They adjust return pickups. They notify drivers immediately. Most corporate transport Sydney providers offer flexible waiting policies. You pay reasonable standby rates. Your schedule stays protected.",
  },
  {
    question: "Do corporate taxis offer wheelchair accessibility?",
    answer:
      "Yes. You request accessible vehicles during booking. These options accommodate mobility needs. Your inclusive business practices shine through. All team members travel comfortably.",
  },
  {
    question: "How far ahead should I book airport transfers?",
    answer:
      "You secure bookings 24 hours early. This guarantees availability. Urgent requests get handled too. But planning ensures preferred vehicle types. Your peace of mind matters.",
  },
  {
    question: "Can I request specific drivers?",
    answer:
      "You build relationships with excellent drivers. You note their names. You request them when booking. Companies accommodate these preferences when possible. Familiar faces improve your experience.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88; // header offset
  window.scrollTo({top: y, behavior: "smooth"});
}

export default function Blog2Details() {
  const toc = useMemo(
    () => [
      {id: "intro", label: "What to expect"},
      {id: "why-choose", label: "Why businesses choose corporate taxis"},
      {id: "sets-apart", label: "What sets corporate taxis apart"},
      {id: "solutions", label: "Transport solutions (airport, staff, clients)"},
      {id: "how-to-book", label: "How to book (step-by-step)"},
      {id: "campbelltown", label: "Campbelltown’s corporate advantage"},
      {id: "cost", label: "Cost management strategies"},
      {id: "tech", label: "Technology integration"},
      {id: "stories", label: "Real success stories"},
      {id: "choose-partner", label: "Choosing your provider"},
      {id: "next-move", label: "Your next move"},
    ],
    [],
  );

  return (
    <>
      {useSEO({
        title:
          "Corporate Taxi Services in Sydney - What to Expect & How to Book Easy",
        description:
          "Streamline your business travel with professional corporate taxis that arrive on time, every time. Account billing, premium vehicles, local expertise. Book now at 1300 450 428!",
        keywords:
          "Corporate Taxi Services in Sydney, corporate taxi service,Business Taxi in Sydney,corporate airport transfers Sydney,corporate transport Sydney,taxi services for businesses in Sydney,corporate taxi,Executive taxi services,Business travel taxi in Sydney,company taxi booking Sydney,corporate transport solutions NSW",
        canonical:
          "https://campbelltowntaxicabs.com.au/corporate-taxi-services-in-sydney-what-to-expect-and-how-to-book",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Corporate Taxi Services in Sydney: What to Expect and How to
                    Book
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Your business moves fast. You need transport that keeps
                    pace.{" "}
                    <Link
                      className="px-1 font-bold underline"
                      to="/services/corporate-transport-services"
                    >
                      Corporate taxi services in Sydney
                    </Link>{" "}
                    fill this gap perfectly. They blend reliability with
                    professionalism. Your team arrives ready to perform. Your
                    clients notice the difference.
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
                    alt="Corporate taxi and executive transport in Sydney and Campbelltown for business meetings and airport transfers."
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
            <figure className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={blogImg}
                alt="Corporate taxi service cover image"
                className="w-full  object-cover"
                loading="lazy"
              />
            </figure>
          </section>

          {/* LAYOUT */}
          <section className="mt-10 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* ARTICLE */}
              <article className="lg:col-span-8">
                <div className="rounded-xl bg-white shadow-sm p-4 md:p-10">
                  <div className="space-y-12 text-accent leading-8">
                    <section id="why-choose">
                      <h2 className="text-2xl font-bold text-secondary">
                        Why Businesses Choose Corporate Taxis
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You manage tight schedules. Meetings run back-to-back.
                        Flights arrive at odd hours. Public transport wastes
                        precious time. Ride-shares lack consistency. Corporate
                        transport in Sydney solves these pain points directly.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Professional drivers understand business etiquette. They
                        dress appropriately. They maintain discretion. Your
                        confidential calls stay private. Your preparation time
                        remains uninterrupted.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        One marketing director shared: "I rehearsed my
                        presentation in the back seat. The driver stayed silent.
                        I walked into that boardroom fully ready."
                      </p>
                    </section>

                    <section id="sets-apart">
                      <h2 className="text-2xl font-bold text-secondary">
                        What Sets Corporate Taxis Apart
                      </h2>

                      {/* Punctuality */}
                      <div className="mt-5 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Punctuality You Can Trust
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You book a 7:00 AM pickup. The vehicle arrives at 6:55
                          AM. This reliability defines a{" "}
                          <Link
                            className="px-1 font-bold underline"
                            to="/services/corporate-transport-services"
                          >
                            corporate taxi service.
                          </Link>
                          Drivers track traffic patterns. They know Sydney's
                          peak congestion points. They choose alternate routes
                          instantly.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Your reputation hinges on timeliness. Corporate taxis
                          protect it fiercely.
                        </p>
                      </div>

                      {/* Premium */}
                      <div className="mt-4 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Premium Vehicle Standards
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You step into clean, well-maintained cars. Leather
                          seats comfort you. Climate control works perfectly.
                          Executive taxi services maintain these standards
                          rigorously. They inspect vehicles daily. They service
                          engines proactively.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Your clients deserve this environment. You deserve it
                          too.
                        </p>
                      </div>

                      {/* Account */}
                      <div className="mt-4 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Account Management Systems
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You receive monthly invoices. You track every trip
                          easily. Company taxi booking in Sydney offers
                          streamlined billing. No receipt hunting. No expense
                          report headaches. Your finance team saves hours.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Some providers offer online portals. You view trip
                          histories instantly. You download statements directly.
                          Administration becomes effortless.
                        </p>
                      </div>
                    </section>

                    <section id="solutions">
                      <h2 className="text-2xl font-bold text-secondary">
                        Types of Corporate Transport Solutions
                      </h2>

                      <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Airport Transfers for Executives
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You fly frequently. Sydney Airport buzzes with
                            chaos. Corporate{" "}
                            <Link
                              className="px-1 font-bold underline"
                              to="/services/book-taxi-sydney-airport"
                            >
                              airport transfers in Sydney
                            </Link>{" "}
                            cut through this noise. Drivers monitor flight
                            statuses. They adjust for delays automatically. They
                            meet you at designated points.
                          </p>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            International terminals confuse many travellers.
                            Your driver knows the exact pickup zones. They
                            assist with luggage. You transition from plane to
                            meeting seamlessly.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Daily Staff Transport
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You employ teams across Sydney. Some lack personal
                            vehicles. Others prefer sustainable commuting.{" "}
                            <Link
                              className="px-1 font-bold underline"
                              to="/services/corporate-transport-services"
                            >
                              Taxi services for businesses
                            </Link>{" "}
                            in Sydney offer regular route contracts. You
                            negotiate fixed rates. Your staff enjoy reliable
                            lifts.
                          </p>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            This attracts talent. It reduces parking pressures.
                            It boosts punctuality rates company-wide.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Client Entertainment Transport
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You host visiting executives. You want to impress
                            them.{" "}
                            <Link
                              className="px-1 font-bold underline"
                              to="/services/corporate-tips"
                            >
                              Business travel taxi in Sydney
                            </Link>{" "}
                            provides silver service options. These vehicles
                            offer extra space. Drivers open doors
                            professionally. Every detail screams quality.
                          </p>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            Your guests remember this treatment. Deals close
                            more smoothly after such experiences.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="how-to-book">
                      <h2 className="text-2xl font-bold text-secondary">
                        Booking Your Corporate Taxi: Simple Steps
                      </h2>

                      <div className="mt-5 space-y-4">
                        {[
                          {
                            step: "Step 1: Choose Your Service Level",
                            text: (
                              <>
                                You assess your needs. Standard corporate taxis
                                suit daily runs. Silver service fits VIP
                                scenarios. Maxi cabs accommodate groups.{" "}
                                <Link
                                  className="px-1 font-bold underline"
                                  to="/services/corporate-transport-services"
                                >
                                  Corporate transport solutions NSW
                                </Link>
                                cover all bases.
                              </>
                            ),
                          },
                          {
                            step: "Step 2: Set Up Your Account",
                            text: "You provide business details. You receive account credentials. You establish credit terms. This takes one business day. Future bookings happen instantly.",
                          },
                          {
                            step: "Step 3: Book Your Rides",
                            text: "You call directly. You use online systems. You email requests. Multiple channels exist. You pick what suits your workflow.",
                          },
                          {
                            step: "Step 4: Track and Confirm",
                            text: "You receive driver details via SMS. You see vehicle descriptions. You know arrival times. Nothing surprises you.",
                          },
                        ].map((item, idx) => (
                          <div
                            key={item.step}
                            className="rounded-2xl bg-gray-50/60 p-5 md:p-6"
                          >
                            <div className="flex items-start gap-4">
                              <div className="shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-secondary">
                                  {idx + 1}
                                </div>
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-xl font-bold text-secondary">
                                  {item.step}
                                </h3>
                                <p className="mt-2 text-sm md:text-base leading-7">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section id="campbelltown">
                      <h2 className="text-2xl font-bold text-secondary">
                        Campbelltown's Corporate Advantage
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You operate from Greater Western Sydney. Campbelltown
                        serves as your hub. The region connects to Sydney CBD.
                        It links to Wollongong. It reaches the Blue Mountains.
                        Business taxi in Sydney from this base offers a unique
                        positioning.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Local drivers know industrial parks intimately. They
                        navigate business districts efficiently. They understand
                        Campbelltown's growth corridors. Your regional meetings
                        stay on schedule.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        A logistics manager explained: "Our Campbelltown office
                        used to struggle with city trips. Local corporate taxis
                        changed everything. We now beat our Sydney competitors
                        to client sites."
                      </p>
                    </section>

                    <section id="cost">
                      <h2 className="text-2xl font-bold text-secondary">
                        Cost Management Strategies
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You control transport budgets tightly.{" "}
                        <Link
                          className="px-1 font-bold underline"
                          to="/services/corporate-transport-services"
                        >
                          Corporate taxi services
                        </Link>{" "}
                        help you achieve this. Consider these approaches:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          Set spending limits per employee tier. Executives
                          enjoy silver service. Staff use standard options.
                          Everyone travels appropriately.
                        </li>
                        <li>
                          Negotiate volume discounts. Regular bookings earn
                          better rates. Monthly minimums unlock savings. Your
                          loyalty rewards you.
                        </li>
                        <li>
                          Track usage patterns. You identify unnecessary trips.
                          You optimize scheduling. Costs drop naturally.
                        </li>
                        <li>
                          Compare against fleet ownership. Maintaining company
                          cars drains resources. Insurance, registration, and
                          repairs add up. Outsourced transport often proves
                          cheaper.
                        </li>
                      </ul>
                    </section>

                    <section id="tech">
                      <h2 className="text-2xl font-bold text-secondary">
                        Technology Integration
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You run modern operations. Your corporate taxi provider
                        should match this. Look for these features:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          API connections link to your expense systems. Data
                          flows automatically. Manual entry disappears.
                        </li>
                        <li>
                          Mobile apps let staff book directly. They photograph
                          receipts instantly. Reimbursement speeds up.
                        </li>
                        <li>
                          GPS tracking shows{" "}
                          <a
                            className="px-1 underline font-bold"
                            href="https://en.wikipedia.org/wiki/Taxis_of_Australia"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                            vehicle
                          </a>{" "}
                          locations. You update waiting clients accurately.
                          Communication improves.
                        </li>
                        <li>
                          24/7 support resolves issues immediately. Night
                          flights get covered. Early meetings stay protected.
                        </li>
                      </ul>
                    </section>

                    <section id="stories">
                      <h2 className="text-2xl font-bold text-secondary">
                        Real Business Success Stories
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        A Campbelltown accounting firm switched to corporate
                        taxis. They eliminated staff parking disputes. They
                        reduced late arrivals by 40%. Employee satisfaction
                        surveys improved dramatically.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        A manufacturing company used corporate airport transfers
                        in Sydney for their sales team. Their representatives
                        reached client meetings refreshed. Their conversion
                        rates climbed. They attributed gains partly to better
                        transport.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        These examples show practical impacts. Your business
                        could see similar benefits.
                      </p>
                    </section>

                    <section id="choose-partner">
                      <h2 className="text-2xl font-bold text-secondary">
                        Choosing Your Corporate Taxi Partner
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You evaluate providers carefully. Check these factors:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          Fleet size indicates capacity. Small fleets struggle
                          during peak demand. You want robust backup options.
                        </li>
                        <li>
                          Coverage area must match your operations. Sydney
                          sprawls widely. Regional knowledge matters enormously.
                        </li>
                        <li>
                          Response times reveal service quality. Test them with
                          initial bookings. Quick confirmations suggest
                          reliability.
                        </li>
                        <li>
                          Insurance levels protect your interests. Verify
                          comprehensive coverage. Your risk management demands
                          this.
                        </li>
                        <li>
                          Driver screening ensures safety. Background checks
                          should be standard. Professional training must occur
                          regularly.
                        </li>
                      </ul>
                    </section>

                    <section id="next-move">
                      <div className="mt-10 bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-2xl p-6 md:p-10">
                        {" "}
                        <h2 className="text-2xl md:text-3xl font-bold">
                          Your Next Step
                        </h2>{" "}
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          You need corporate taxi services in Sydney that
                          deliver. Campbelltown Taxi Cabs specializes in
                          business transport. We understand corporate pressures.
                          We provide calm, efficient solutions.
                        </p>
                        <p className="mt-3 text-sm md:text-base leading-7">
                          Our fleet includes standard, silver service, and{" "}
                          <a
                            className="px-1 underline font-bold"
                            href="https://justapedia.org/wiki/Maxi-taxi"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                            maxi
                          </a>{" "}
                          cab options. We cover the Sydney metro and beyond. We
                          offer account facilities with streamlined billing.
                        </p>
                        <p className="mt-3 text-sm md:text-base leading-7">
                          Call{" "}
                          <a
                            href="tel:1300450428"
                            className="font-bold hover:underline underline"
                          >
                            1300 450 428
                          </a>{" "}
                          today. Set up your corporate account. Discuss your
                          specific requirements. Visit
                          https://campbelltowntaxicabs.com.au/ to explore our
                          business services.
                        </p>
                        <p className="mt-3 text-sm md:text-base leading-7">
                          Your team deserves professional transport. Your
                          clients deserve impressive arrivals. We deliver both
                          consistently. Let's discuss your corporate needs now.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <div className="mt-10">
                  <Faq
                    faqs={faqs}
                    faqSectionTitle="Frequently Asked Questions"
                  />
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* TOC */}
                  <div className="rounded-xl bg-white shadow-sm p-5">
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

                  {/* CTA */}
                  <div className="rounded-xl bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white p-5">
                    <h3 className="text-lg font-bold">Need help right now?</h3>
                    <p className="mt-2 text-white/90 text-sm leading-7">
                      Call us for a fast quote and we’ll recommend the right
                      vehicle mix for your corporate schedule.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="tel:1300450428"
                        className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-semibold"
                      >
                        <IoCallSharp />
                        1300 450 428
                      </a>
                      <Link
                        to="/book-a-taxi"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/60 px-5 py-3 font-semibold hover:bg-white/10 transition"
                      >
                        <FaHandPointer />
                        Book Online
                      </Link>
                    </div>
                  </div>

                  {/* Reading info */}
                  <div className="rounded-xl bg-white shadow-sm p-5">
                    <h3 className="font-bold text-secondary">Reading info</h3>
                    <div className="mt-3 text-sm text-accent space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <FaRegClock /> Estimated read time: <b>7 minutes</b>
                      </div>
                      <div>
                        Best for: executives, staff, client pickups, airport
                        transfers
                      </div>
                      <div>Area: Sydney metro + Greater Western Sydney</div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
