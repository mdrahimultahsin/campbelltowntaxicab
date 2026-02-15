import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import blogImg from "/campbelltown-blog4.png"; // ✅ change to your actual image path
import {Link} from "react-router";
import {useMemo} from "react";
import Container from "../../shared/Container";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import Faq from "../../shared/Faq";

import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";

const faqs = [
  {
    question: "What time should I book my taxi for a 6:00 AM flight?",
    answer:
      "You book pickup at 3:30 AM. You reach the airport by 4:15 AM. You check in by 4:45 AM. You board relaxed. Domestic flights need 90 minutes. International flights need three hours. You adjust accordingly.",
  },
  {
    question: "Are taxis available at 3:00 AM in Campbelltown?",
    answer:
      "Yes. 24-hour taxi services operate continuously. You pre-book for certainty. Walk-up availability varies. Planning protects you.",
  },
  {
    question: "How do I know my taxi will actually show up?",
    answer:
     <>
     You receive confirmation numbers. You get the <a
                            className="px-1 underline font-bold"
                            href="https://en.wikipedia.org/wiki/Driver%27s_education"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                            Drivers
                          </a> contact details. You track vehicles via apps. Reputable services maintain 99% reliability. You choose established providers. You read recent reviews.
     </>,
  },
  {
    question: "Is a taxi faster than driving myself?",
    answer:
      "Often yes. You avoid parking searches. You skip shuttle buses from car parks. You eliminate return trips to fetch vehicles. You save 30-40 minutes typically.",
  },
  {
    question: "What if my flight is delayed?",
    answer:
      "You notify the taxi company. They adjust pickup times. They monitor flight arrivals. You avoid extra charges. Communication keeps everything smooth.",
  },
  {
    question: "Can I book a return transfer now?",
    answer:
      "Absolutely. You arrange a round-trip. You secure both legs. You enjoy consistent service. You deal with one provider. Billing simplifies.",
  },
  {
    question: "Do taxis handle oversized luggage?",
    answer:
     <>
     
     Yes. You specify requirements when booking. <a
                            className="px-1 underline font-bold"
                            href="https://en.wikipedia.org/wiki/Maxi_taxi"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                          Maxi
                          </a>cabs accommodate surfboards. They fit bicycles. They carry multiple large suitcases. Standard sedans handle typical baggage.
     </>,
  },
  {
    question: "Why not use ride-share apps?",
    answer:
      "You compare carefully. Ride-shares surge in price at peak times. They lack local Campbelltown knowledge. They cancel unexpectedly. Taxis offer regulated reliability. Professional training matters.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88; // header offset
  window.scrollTo({top: y, behavior: "smooth"});
}

export default function Blog4Details() {
      
  const toc = useMemo(
    () => [
      {id: "intro", label: "The reality of early morning travel"},
      {id: "train", label: "Option 1: Taking the train"},
      {id: "train-schedule", label: "Train schedule limitations"},
      {id: "walking", label: "The walking factor"},
      {id: "cost-train", label: "Cost vs convenience"},
      {id: "taxi", label: "Option 2: Booking a taxi"},
      {id: "taxi-why", label: "Why taxis win at dawn"},
      {id: "campbelltown-adv", label: "The Campbelltown advantage"},
      {id: "comparison", label: "Taxi vs train comparison"},
      {id: "essential", label: "When taxis become essential"},
      {id: "booking", label: "Booking your early morning taxi"},
      {id: "stories", label: "Real stories from early travellers"},
      {id: "cost", label: "Cost considerations"},
      {id: "safety", label: "Safety at dawn"},
      {id: "environment", label: "Environmental considerations"},
      {id: "decision", label: "Making your decision"},
      {id: "next", label: "Your next step"},
    ],
    [],
  );

  return (
    <>
      {useSEO({
        title: "Early Morning Airport Transfers: Taxi vs Train",
        description:
          "Need to reach Sydney Airport before dawn? Compare taxi vs train for early morning airport transfers from Campbelltown. Learn cost, timing, safety, and booking tips. Call 1300 450 428.",
        keywords:
          "early morning airport transfers, airport taxi early morning, Sydney airport transfer Campbelltown, taxi vs train airport, pre booked airport taxi Sydney, late night airport transfers, 24 hour taxi Campbelltown",
        canonical:
          "https://campbelltowntaxicabs.com.au/early-morning-airport-transfers-taxi-vs-train",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Early Morning Airport Transfers: Taxi vs Train
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Your flight departs at 6:00 AM. You need to arrive by 4:00 AM.
                    How do you get there? Early morning <Link
                      className="px-1 font-bold underline"
                      to="/services/book-taxi-sydney-airport"
                    >
                     airport transfers
                    </Link>{" "} present
                    unique challenges. Public transport sleeps. Roads stay clear.
                    Your choice shapes your entire journey.
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
                    alt="Early morning airport transfer from Campbelltown to Sydney Airport."
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
                alt="Taxi vs train early morning airport transfers cover image"
                className="w-full object-cover"
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
                    <section id="intro">
                      <h2 className="text-2xl font-bold text-secondary">
                        The Reality of Early Morning Travel
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You wake up at 3:00 AM. The world feels quiet. Your brain
                        craves sleep. You need reliable transport. Stress has no
                        place here.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        <Link
                      className="px-1 font-bold underline"
                      to="/services/book-taxi-sydney-airport"
                    >
                     Sydney Airport
                    </Link> operates 24/7. Getting there before dawn
                        differs from daytime trips. Fewer options exist. Risks
                        multiply. Smart planning saves you.
                      </p>
                    </section>

                    <section id="train">
                      <h2 className="text-2xl font-bold text-secondary">
                        Option 1: Taking the Train
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You consider Airport Link. It connects Sydney CBD to the
                        terminals. But does it suit early morning airport
                        transfers in Sydney?
                      </p>
                    </section>

                    <section id="train-schedule">
                      <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Train Schedule Limitations
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You check timetables. First trains leave around 4:00 AM
                          from city stations. They reach the airport by 4:30 AM.
                          This works for some flights. It fails for others.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You live in Campbelltown. The T8 line runs south. First
                          services depart around 4:30 AM. You reach the airport
                          near 5:30 AM. Tight connections create anxiety.
                        </p>
                      </div>
                    </section>

                    <section id="walking">
                      <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          The Walking Factor
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You haul luggage from home to the station. You navigate
                          stairs. You cross platforms. You repeat this at the
                          airport end. Sweat builds. Energy drains.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          A business traveller noted: "I took the 4:00 AM train
                          once. I arrived stressed. My suit wrinkled. Never again."
                        </p>
                      </div>
                    </section>

                    <section id="cost-train">
                      <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Cost vs Convenience
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You pay around $19 from Campbelltown. You save money.
                          You sacrifice comfort. You gamble with timetables.
                          Early morning delays cascade badly.
                        </p>
                      </div>
                    </section>

                    <section id="taxi">
                      <h2 className="text-2xl font-bold text-secondary">
                        Option 2: Booking a Taxi
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You want door-to-door service. You crave reliability. You
                        need personal space. Airport taxi early morning delivers
                        these benefits.
                      </p>
                    </section>

                    <section id="taxi-why">
                      <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Why Taxis Win at Dawn
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You sleep until 3:30 AM. The driver arrives at your
                          door. You step into a clean vehicle. You relax
                          completely. You reach the terminal directly.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          A pre-booked airport taxi in Sydney eliminates waiting.
                          You schedule precisely. Drivers track your flight
                          times. They suggest optimal departure moments.
                        </p>
                      </div>
                    </section>

                    <section id="campbelltown-adv">
                      <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          The Campbelltown Advantage
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          You live 50 kilometres from the airport. Airport
                          transfer from Campbelltown requires local expertise.
                          Drivers know the M5 Motorway intimately. They understand
                          morning traffic patterns. They choose routes
                          dynamically.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Peak hour builds from 5:00 AM southbound. Skilled
                          drivers avoid bottlenecks. You glide past stationary
                          traffic. You arrive calmly.
                        </p>
                      </div>
                    </section>

                    <section id="comparison">
                      <h2 className="text-2xl font-bold text-secondary">
                        Direct Comparison: Taxi vs Train
                      </h2>

                      <div className="overflow-x-auto mt-5 rounded-2xl bg-white">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">Factor</th>
                              <th className="px-4 py-3 font-semibold">Taxi</th>
                              <th className="px-4 py-3 font-semibold">Train</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Pickup location</td>
                              <td className="px-4 py-3">Your front door</td>
                              <td className="px-4 py-3">Nearest station</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Luggage handling</td>
                              <td className="px-4 py-3">Driver assists</td>
                              <td className="px-4 py-3">You manage alone</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Schedule control</td>
                              <td className="px-4 py-3">You set the time</td>
                              <td className="px-4 py-3">Fixed timetables</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Travel time</td>
                              <td className="px-4 py-3">45-50 minutes direct</td>
                              <td className="px-4 py-3">
                                60+ minutes with connections
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Stress level</td>
                              <td className="px-4 py-3">Minimal</td>
                              <td className="px-4 py-3">Moderate to high</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Cost</td>
                              <td className="px-4 py-3">Higher but predictable</td>
                              <td className="px-4 py-3">Lower but variable</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="mt-4 text-sm md:text-base leading-7">
                        You choose based on priorities. Budget travellers pick
                        trains. Comfort seekers choose taxis. Best airport
                        transport early morning depends on your needs.
                      </p>
                    </section>

                    <section id="essential">
                      <h2 className="text-2xl font-bold text-secondary">
                        When Taxis Become Essential
                      </h2>
                      <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Late Night Departures
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            Your flight leaves at 11:00 PM. You reach the airport
                            by 8:00 PM. Trains run infrequently. You face long
                            platform waits. Late-night airport transfers demand
                            taxi services.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Group Travel
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You travel with family. Kids carry extra bags. Elderly
                            parents move slowly. Coordinated station arrivals
                            prove nightmarish. One vehicle solves everything.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Business Requirements
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You present at meetings immediately after landing. You
                            need a pristine appearance. You want preparation
                            time. Taxis provide mobile offices. You rehearse
                            presentations. You check emails calmly.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Remote Suburbs
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You live in Harrington Park. You reside in Mount
                            Annan. Trains don't reach these areas. Buses run
                            hourly at best. Taxis bridge these gaps perfectly.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="booking">
                      <h2 className="text-2xl font-bold text-secondary">
                        Booking Your Early Morning Taxi
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You want seamless experiences. Follow these steps:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          Book the day before. You secure your preferred time
                          slot. You avoid morning panic.
                        </li>
                        <li>
                          Request a wake-up call. Some services offer this. You
                          double-check arrangements.
                        </li>
                        <li>
                          Confirm your booking. You receive driver details. You
                          know vehicle descriptions.
                        </li>
                        <li>
                          Prepare your luggage. You place bags near the door. You
                          minimise departure delays.
                        </li>
                        <li>
                          Keep your phone charged. Drivers contact you when
                          approaching. You coordinate smoothly.
                        </li>
                      </ul>
                    </section>

                    <section id="stories">
                      <h2 className="text-2xl font-bold text-secondary">
                        Real Stories from Early Travellers
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Sarah caught a 6:00 AM flight to Melbourne monthly. She
                        tried trains initially. She missed one connection. She
                        nearly missed her flight. She switched to reliable
                        airport taxi services. Her stress disappeared.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        James manages a sales team. They fly to Brisbane
                        regularly. He books maxi cabs for group transfers. They
                        discuss strategy en route. They arrive prepared. They win
                        more deals.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        These experiences show practical impacts. Your choice
                        affects outcomes.
                      </p>
                    </section>

                    <section id="cost">
                      <h2 className="text-2xl font-bold text-secondary">
                        Cost Considerations
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You examine prices carefully. Fair enough. <Link
                      className="px-1 font-bold underline"
                      to="/services/book-taxi-sydney-airport"
                    >
                     Sydney airport
                        transport
                    </Link> options vary widely.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        A taxi from Campbelltown costs approximately $90-110. A
                        train costs $19. The gap seems large. But factor in these
                        elements:
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You pay for parking at the station. You buy coffee while
                        waiting. You stress about connections. You risk missing
                        flights. Taxis include certainty.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        For groups, maths shifts further. Four people share taxi
                        costs. Individual train tickets add up. Door-to-door
                        convenience multiplies value.
                      </p>
                    </section>

                    <section id="safety">
                      <h2 className="text-2xl font-bold text-secondary">
                        Safety at Dawn
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You travel alone. Darkness surrounds you. Empty streets
                        feel vulnerable. Train stations attract odd characters at
                        4:00 AM. Platforms stay dimly lit.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Taxis offer security. Drivers undergo police checks.
                        Vehicles carry GPS tracking. You share trip details with
                        family. Peace of mind matters enormously.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        One solo traveller explained: "I felt unsafe waiting at
                        Campbelltown station alone. The taxi picked me up at home.
                        I relaxed immediately."
                      </p>
                    </section>

                    <section id="environment">
                      <h2 className="text-2xl font-bold text-secondary">
                        Environmental Considerations
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You care about carbon footprints. Trains win here. They
                        carry hundreds per trip. Per-passenger emissions stay low.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Modern taxis improve constantly. Hybrid vehicles enter
                        fleets. Shared rides reduce impacts. You balance
                        convenience with conscience.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Some providers now offer carbon offset options. You ask
                        about these. You travel responsibly.
                      </p>
                    </section>

                    <section id="decision">
                      <h2 className="text-2xl font-bold text-secondary">
                        Making Your Decision
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You weigh factors personally. Budget constraints matter.
                        Comfort desires influence you. Schedule pressures dictate
                        choices.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        For early morning airport transfers, taxis generally
                        outperform trains. You gain sleep. You reduce stress. You
                        ensure punctuality. These benefits justify the costs for
                        most travellers.
                      </p>
                    </section>

                    <section id="next">
                      <div className="mt-10 bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-2xl p-6 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                          Your Next Step
                        </h2>
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          You plan your trip. You need early morning <Link
                      className="px-1 font-bold underline"
                      to="/services/book-taxi-sydney-airport"
                    >
                     airport
                          transfers in Sydney
                    </Link> sorted. Campbelltown Taxi Cabs
                          specialises in these journeys. We operate 24/7. We know
                          every route. We track every flight.
                        </p>
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          Call{" "}
                          <a
                            href="tel:1300450428"
                            className="font-bold underline underline-offset-4"
                          >
                            1300 450 428
                          </a>{" "}
                          today. Book your pre-dawn transfer. Visit{" "}
                          <Link className="px-1 font-bold underline" to="/">
                            https://campbelltowntaxicabs.com.au/
                          </Link>{" "}
                          for online reservations.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
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
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <div className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Frequently Asked Questions" />
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
                      Call us and we’ll recommend the best pickup time for your
                      flight and suburb.
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
                </div>
              </aside>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
