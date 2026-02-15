import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import blogImg from "/campbelltown-blog5.png"; // ✅ change to your actual image path
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
    question: "How many taxis should I book for 50 guests?",
    answer:
      "You book ten to twelve maxi cabs. Each carries four to five passengers. You stagger departure times. You arrange multiple pickup points. Everyone travels comfortably.",
  },
  {
    question: "Can taxis handle large luggage items?",
    answer: (
      <>
        Yes. You specify needs when booking.{" "}
        <a
          className="px-1 underline font-bold"
          href="https://en.wikipedia.org/wiki/Maxi_taxi"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Maxi
        </a>{" "}
        cabs accommodate eskies. They fit event equipment. They carry auction
        prizes. Standard boots handle typical bags.
      </>
    ),
  },
  {
    question: "What if my event runs overtime?",
    answer:
      "You notify the taxi company. They adjust driver schedules. They maintain standby vehicles. Professional services adapt flexibly. Communication prevents problems.",
  },
  {
    question: "Are taxis cheaper than event shuttles?",
    answer:
      "Sometimes yes. You compare carefully. Shuttles charge per vehicle. Taxis charge per trip. Small groups often save with taxis. You calculate based on your specific numbers.",
  },
  {
    question: "How do I coordinate multiple taxi pickups?",
    answer:
      "You assign a transport coordinator. They communicate with drivers. They manage guest queues. They troubleshoot issues instantly. One organised person solves complexity.",
  },
  {
    question: "Can I book return trips only?",
    answer:
      "Absolutely. You arrange one-way transport. Guests find their own way to venues. You ensure safe journeys home. This partial service reduces costs.",
  },
  {
    question: "Do you provide transport for disability guests?",
    answer:
      "Yes. You request wheelchair-accessible vehicles. These feature ramps and secure anchor points. All guests participate fully. Inclusion matters enormously.",
  },
  {
    question: "What happens if a taxi doesn't show up?",
    answer:
      "You call the dispatch centre immediately. They track vehicle locations. They send replacements quickly. Reputable companies maintain 99% reliability. You choose established providers.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88; // header offset
  window.scrollTo({top: y, behavior: "smooth"});
}

export default function Blog5Details() {
  const toc = useMemo(
    () => [
      {id: "intro", label: "Why event transport matters"},
      {id: "profile", label: "Know your venue’s transport profile"},
      {id: "stadium", label: "Stadium challenges"},
      {id: "function", label: "Function centre considerations"},
      {id: "regional", label: "Regional venues"},
      {id: "strategies", label: "Booking strategies that work"},
      {id: "scenarios", label: "Real event scenarios"},
      {id: "tips", label: "Practical transport tips"},
      {id: "alternatives", label: "Alternatives to traditional shuttles"},
      {id: "cost", label: "Cost management for organisers"},
      {id: "safety", label: "Safety considerations"},
      {id: "tech", label: "Technology integration"},
      {id: "campbelltown", label: "Campbelltown and regional events"},
      {id: "final", label: "Final thoughts"},
      {id: "book", label: "Book your event transport now"},
    ],
    [],
  );

  return (
    <>
      {useSEO({
        title:
          "Event Transport Tips for Stadiums, Function Centres & Venues in Sydney",
        description:
          "Master event logistics with proven transport strategies for stadiums and venues. Group bookings, multiple pickups, late-night safety. Plan your perfect event - call 1300 450 428!",
        keywords:
          "Event Transport Tips , event transport in SydneyStadium Transport,Event taxi services Sydney,function centre transport,group transport for events in Sydney,concert transport Sydney,sports event taxi Sydney,taxi for large events in Sydney,venue transport planning,event shuttle alternatives",
        canonical:
          "https://campbelltowntaxicabs.com.au/event-transport-tips-for-stadiums-function-centres-venues",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Event Transport Tips for Stadiums, Function Centres and
                    Venues
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    You plan an event. You expect guests. You need them to
                    arrive smoothly.{" "}
                    <Link
                      className="px-1 font-bold underline"
                      to="/services/event-transfer"
                    >
                      Event transport tips
                    </Link>{" "}
                    solve this puzzle. Stadiums fill with crowds. Function
                    centres host celebrations. Venues sit in tricky locations.
                    Smart planning prevents chaos.
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
                    alt="Event transport planning with taxis and maxi cabs for stadiums, function centres, and venues."
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
                alt="Event transport tips cover image"
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
                        Why Event Transport Matters
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You organise a concert. You host a wedding reception.
                        You manage a corporate gala. Guests face the same
                        question. How do they get there?
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Poor transport ruins experiences. Late arrivals miss key
                        moments. Parking frustrations build resentment. Drunk
                        driving risks emerge. You solve these problems
                        proactively.
                      </p>
                    </section>

                    <section id="profile">
                      <h2 className="text-2xl font-bold text-secondary">
                        Know Your Venue's Transport Profile
                      </h2>

                      <div className="mt-5 space-y-4">
                        <div
                          id="stadium"
                          className="rounded-2xl bg-gray-50/60 p-5 md:p-6"
                        >
                          <h3 className="text-xl font-bold text-secondary">
                            Stadium Challenges
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You attend events at Accor Stadium or Allianz
                            Stadium.{" "}
                            <Link
                              className="px-1 font-bold underline"
                              to="/services/event-transfer"
                            >
                              Stadium transport presents
                            </Link>{" "}
                            unique hurdles. Thousands exit simultaneously.
                            Public transport floods instantly. Road closures
                            confuse drivers.
                          </p>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You need strategies. You book taxis for post-event
                            pickup. You arrange meeting points away from the
                            main gates. You walk ten minutes to quieter streets.
                            Your ride arrives faster.
                          </p>
                        </div>

                        <div
                          id="function"
                          className="rounded-2xl bg-gray-50/60 p-5 md:p-6"
                        >
                          <h3 className="text-xl font-bold text-secondary">
                            Function Centre Considerations
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You celebrate at venues like Doltone House or Le
                            Montage. These sites often lack nearby stations.
                            Function centre transport requires door-to-door
                            solutions. Guests wear formal attire. They carry
                            gifts. They appreciate direct service.
                          </p>
                        </div>

                        <div
                          id="regional"
                          className="rounded-2xl bg-gray-50/60 p-5 md:p-6"
                        >
                          <h3 className="text-xl font-bold text-secondary">
                            Regional Venues
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You choose wineries in Camden. You pick golf clubs
                            in Campbelltown. These locations sit far from public
                            transport.{" "}
                            <Link
                              className="px-1 font-bold underline"
                              to="/services/event-transfer"
                            >
                              Event transport in Sydney
                            </Link>{" "}
                            extends beyond the CBD. Local taxi knowledge becomes
                            essential.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="strategies">
                      <h2 className="text-2xl font-bold text-secondary">
                        Booking Strategies That Work
                      </h2>

                      <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Pre-Event Planning
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You confirm guest numbers early. You identify
                            transport needs. You book vehicles in advance. Event
                            taxi services in Sydney fill quickly during peak
                            seasons. You secure your fleet early.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Group Coordination
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You arrange{" "}
                            <Link
                              className="px-1 font-bold underline"
                              to="/services/event-transfer"
                            >
                              group transport for events
                            </Link>{" "}
                            in Sydney. Maxi cabs seat seven to eleven
                            passengers. You reduce vehicle numbers. You lower
                            per-person costs. Everyone arrives together.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Staggered Departures
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You avoid the post-event rush. You schedule some
                            guests to leave early. You arrange for others to
                            stay later. You spread demand evenly. Taxis remain
                            available throughout.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="scenarios">
                      <h2 className="text-2xl font-bold text-secondary">
                        Real Event Scenarios
                      </h2>

                      <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Concert Nights
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You attend a sold-out show at Qudos Bank Arena.
                            Twenty thousand people exit at once. Train platforms
                            overflow. Ride-share prices surge 300%. Your
                            pre-booked concert transport Sydney taxi waits at a
                            designated point. You bypass the madness entirely.
                          </p>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            A regular concert-goer shared: "I used to queue 45
                            minutes for trains. Now I walk five minutes to my
                            taxi. I reach home relaxed."
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Sporting Events
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You watch the Rabbitohs at Accor Stadium. You cheer
                            for the Swans at the SCG. Sports event taxi Sydney
                            services understand these crowds. Drivers know which
                            gates clear fastest. They suggest optimal pickup
                            zones.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Corporate Functions
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            You host clients at a function centre. You impress
                            them with seamless logistics.{" "}
                            <Link
                              className="px-1 font-bold underline"
                              to="/services/event-transfer"
                            >
                              Taxi for large events in Sydney
                            </Link>{" "}
                            includes multiple vehicle coordination. You arrange
                            simultaneous arrivals. Your guests feel valued.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="tips">
                      <h2 className="text-2xl font-bold text-secondary">
                        Practical Transport Tips
                      </h2>

                      <div className="mt-5 space-y-4">
                        {[
                          {
                            title: "Tip 1: Designate Clear Pickup Points",
                            text: 'You avoid vague instructions. "Near the stadium" confuses everyone. You specify "Corner of Olympic Boulevard and Dawn Fraser Avenue". Drivers find you instantly.',
                          },
                          {
                            title: "Tip 2: Share Driver Details",
                            text: "You distribute vehicle descriptions to guests. You share driver phone numbers. Everyone connects smoothly. No one waits wondering.",
                          },
                          {
                            title: "Tip 3: Build Time Buffers",
                            text: "You schedule pickups 30 minutes after event endings. Stragglers finish conversations. Crowds thin slightly. Your transport operates efficiently.",
                          },
                          {
                            title: "Tip 4: Consider Accessibility Needs",
                            text: "You check wheelchair requirements. You verify baby seat needs. You communicate these early. Venue transport planning includes everyone comfortably.",
                          },
                          {
                            title: "Tip 5: Prepare for Weather",
                            text: "You carry umbrellas for rainy exits. You suggest warm waiting areas. You think about guest comfort fully. Details distinguish good events from great ones.",
                          },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl bg-gray-50/60 p-5 md:p-6"
                          >
                            <h3 className="text-xl font-bold text-secondary">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm md:text-base leading-7">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section id="alternatives">
                      <h2 className="text-2xl font-bold text-secondary">
                        Alternatives to Traditional Shuttles
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You examine event shuttle alternatives. Buses work for
                        some events. They frustrate others.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Taxis offer flexibility. Guests leave when ready. They
                        don't wait for full buses. They travel directly home. No
                        intermediate stops delay them.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Maxi cabs bridge gaps. They carry small groups
                        affordably. They provide personalised service. They
                        adapt to changing schedules.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        One event planner explained: "We tried shuttles once.
                        Guests complained about rigid timetables. Now we book
                        taxis exclusively. Satisfaction improved dramatically."
                      </p>
                    </section>

                    <section id="cost">
                      <h2 className="text-2xl font-bold text-secondary">
                        Cost Management for Organisers
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You balance budgets carefully. Transport costs add up.
                        You manage them smartly.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Negotiate package rates. Regular event bookings earn
                        discounts. You establish relationships with providers.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Encourage ride-sharing. Guests split maxi cab fares.
                        Individual costs drop. Social connections strengthen.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Subsidise strategically. You cover transport for VIPs.
                        You arrange discounts for general guests. You target
                        spending effectively.
                      </p>
                    </section>

                    <section id="safety">
                      <h2 className="text-2xl font-bold text-secondary">
                        Safety Considerations
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You protect your guests. Alcohol flows at most events.
                        Driving becomes dangerous. You eliminate this risk.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You provide taxi options prominently. You display
                        booking numbers. You remind guests throughout the
                        evening. Responsible hosts ensure safe journeys home.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Late-night safety matters particularly. Women travelling
                        alone need secure options. Professional taxis offer
                        tracked, insured services. Peace of mind proves
                        priceless.
                      </p>
                    </section>

                    <section id="tech">
                      <h2 className="text-2xl font-bold text-secondary">
                        Technology Integration
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You leverage modern tools. You share taxi booking apps.
                        You create WhatsApp groups for coordination. You use QR
                        codes linking to booking sites.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Some venues now offer integrated transport portals.
                        Guests book rides during events. They skip post-show
                        queues entirely. Innovation enhances experiences.
                      </p>
                    </section>

                    <section id="campbelltown">
                      <h2 className="text-2xl font-bold text-secondary">
                        Campbelltown and Regional Events
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You host events outside Sydney CBD. You choose venues in
                        the Macarthur region. You celebrate in the Camden
                        wineries. Event transport in Sydney extends to these
                        areas.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Local knowledge dominates here. Campbelltown drivers
                        understand regional road networks. They navigate rural
                        venue access. They manage return{" "}
                        <a
                          className="px-1 underline font-bold"
                          href="https://en.wikipedia.org/wiki/Travel"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          trips
                        </a>{" "}
                        to Sydney. Regional events succeed with local expertise.
                      </p>
                    </section>

                    <section id="final">
                      <h2 className="text-2xl font-bold text-secondary">
                        Final Thoughts
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You create memorable events. You manage countless
                        details. Transport often gets overlooked. Yet it shapes
                        final impressions.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Smart event transport tips elevate your planning. Guests
                        remember smooth arrivals. They appreciate safe
                        departures. They recommend your events enthusiastically.
                      </p>
                    </section>

                    <section id="book">
                      <div className="mt-10 bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-2xl p-6 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                          Book Your Event Transport Now
                        </h2>
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          You plan your next function. You need event taxi
                          services Sydney that deliver. Campbelltown Taxi Cabs
                          specialises in event logistics. We coordinate multiple
                          vehicles. We understand venue requirements. We operate
                          across Sydney and regions.
                        </p>
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          Call{" "}
                          <a
                            href="tel:1300450428"
                            className="font-bold underline underline-offset-4"
                          >
                            1300 450 428
                          </a>{" "}
                          today. Discuss your event needs. Arrange your
                          transport package. Visit{" "}
                          <Link className="px-1 font-bold underline" to="/">
                            https://campbelltowntaxicabs.com.au/
                          </Link>{" "}
                          for online bookings.
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
                      Call us and we’ll help you plan pickup points and
                      departure times for your guests.
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
