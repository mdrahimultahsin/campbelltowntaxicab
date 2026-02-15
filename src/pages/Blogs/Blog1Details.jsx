import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import {Link} from "react-router";
import Container from "../../shared/Container";
import {FaArrowLeft, FaHandPointer, FaRegClock} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "../../assets/blogs/campbelltown-blog1.png";
import Faq from "../../shared/Faq";
import {useMemo} from "react";

const faqs = [
  {
    question: "How early should I book wedding transport?",
    answer:
      "Book eight weeks ahead. Spring and autumn weddings fill quickly. December dates book months early. You secure better rates with planning.",
  },
  {
    question: "Can taxis handle wedding dresses?",
    answer: (
      <>
        Absolutely. Maxi cabs offer spacious rear areas.{" "}
        <a
          className="px-1 underline font-bold"
          href="https://en.wikipedia.org/wiki/Driver%27s_education"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Drivers
        </a>{" "}
        assist carefully. Your gown stays pristine. Many brides choose this over
        cramped luxury cars.
      </>
    ),
  },
  {
    question: "Do You Offer Fixed Pricing For Maxi Taxi Bookings?",
    answer:
      "Yes. We provide fixed rates for all maxi taxi Campbelltown and Sydney trips. Prices remain predictable with no surge fees, supporting stress-free booking during busy event days or airport travel.",
  },
  {
    question: "What if my venue has no street access?",
    answer:
      "Campbelltown drivers know regional venues intimately. They identify the closest drop points. They coordinate with venue staff. Solutions exist for every location.",
  },
  {
    question: "Do you transport wedding gifts and flowers?",
    answer:
      "Yes. Event taxi service in Campbelltown includes parcel capacity. Bouquets travel safely. Gifts reach venues securely. One less worry for you.",
  },
  {
    question: "Making Your Choice Simple",
    answer:
      "You want wedding transportation in Campbelltown that works. Start with your guest list size. Consider venue locations. Think about arrival patterns. Then match services to needs. Mix options if required. Communicate clearly with providers. Confirm details twice. The best transportation options for weddings blend reliability, comfort, and local knowledge. You find all three with established Campbelltown services.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({top: y, behavior: "smooth"});
}

const Blog1Details = () => {
  const toc = useMemo(
    () => [
      {id: "why-transport-matters", label: "Why transportation matters"},
      {id: "option-1-taxi", label: "Option 1: Wedding taxi services"},
      {id: "option-2-maxi", label: "Option 2: Maxi taxis for groups"},
      {id: "option-3-shuttle", label: "Option 3: Shuttle services"},
      {id: "option-4-airport", label: "Option 4: Airport transfers"},
      {id: "bonus-tips", label: "Bonus tips"},
      {id: "timeline", label: "Planning checklist"},
    ],
    [],
  );

  return (
    <>
      {useSEO({
        title:
          "Transportation Options for Weddings - Best Ways to Move Guests in Campbelltown",
        description:
          "Book reliable wedding transport that keeps your guests happy and your timeline perfect. From maxi cabs to shuttles, we handle every detail. Call 1300 450 428 today for your free quote!",
        keywords:
          "Transportation Options for Weddings,wedding transportation in Campbelltown,event transport in Campbelltown,wedding taxi,Event taxi service in Campbelltown,wedding guest transport in Campbelltown,group transport for weddings,maxi taxi for weddings,wedding shuttle service,wedding car alternatives,transporting wedding guests,event transfer services,wedding venue transport NSW",
        canonical:
          "https://campbelltowntaxicabs.com.au/best-transportation-options-for-weddings-and-events-in-campbelltown",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Best Transportation Options for Weddings and Events in
                    Campbelltown
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Your big day deserves perfect planning. Every detail
                    matters. Transportation often gets overlooked. Yet it shapes
                    your guests' experience. You need reliable options.
                    Campbelltown offers several choices. Let's explore them
                    together.
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
                    alt="Maxi taxi Campbelltown group transport for airport, cruise, event and family trips with spacious seating and luggage capacity."
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* FEATURE IMAGE + CAPTION (no borders) */}
        <Container>
          <section className="mt-8 md:mt-12">
            <figure className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={blogImg}
                alt="Wedding transport guide cover image"
                className="w-full  object-cover"
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
                  <div className="space-y-6 text-accent leading-8">
                    <section id="why-transport-matters">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Why Guest Transportation Matters
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You plan the venue. You pick the flowers. You choose the
                        menu. But how do guests arrive? Poor transport creates
                        stress. Late arrivals disrupt timelines. Confused
                        parking frustrates everyone. Smart transportation
                        options for weddings solve these problems. Your guests
                        deserve comfort. They need punctuality. They want
                        simplicity. The right service delivers all three.
                      </p>
                    </section>

                    <section id="option-1-taxi">
                      <h3 className="text-xl md:text-2xl font-bold text-secondary">
                        Option 1: Wedding Taxi Services
                      </h3>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You want flexibility.
                        <Link
                          className="px-1 font-bold underline"
                          to="/services/wedding-transfer"
                        >
                          Wedding taxi services
                        </Link>{" "}
                        provide exactly that. Guests call when ready. No waiting
                        around. No fixed schedules.
                        <Link
                          className="px-1 font-bold underline"
                          to="/services/wedding-transfer"
                        >
                          Campbelltown Taxi Cabs
                        </Link>
                        operates 24/7. Your family arrives on their terms. This
                        suits scattered arrivals. Some guests fly in early.
                        Others drive from nearby suburbs. Individual taxis adapt
                        to each timeline.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          Great for couples, small families, and late arrivals
                        </li>
                        <li>Easy for hotel-to-venue trips</li>
                        <li>Less coordination needed</li>
                      </ul>
                    </section>

                    <section id="option-2-maxi">
                      <h3 className="text-xl md:text-2xl font-bold text-secondary">
                        Option 2: Maxi Taxis for Group Movement
                      </h3>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You have bridal parties to move. Groomsmen need lifts.
                        Family groups travel together.
                        <Link
                          className="px-1 font-bold underline"
                          to="/services/maxi-taxi-service"
                        >
                          maxi taxi
                        </Link>{" "}
                        for weddings handles this perfectly. These vehicles seat
                        up to 11 passengers. Everyone stays connected. No one
                        gets lost. Campbelltown's sprawling layout challenges
                        group coordination. Maxi cabs eliminate that stress. You
                        book one vehicle. Everyone arrives together.
                      </p>
                    </section>

                    <section id="option-3-shuttle">
                      <h3 className="text-xl md:text-2xl font-bold text-secondary">
                        Option 3: Event Shuttle Services
                      </h3>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You host at remote venues. Maybe a winery in Macarthur.
                        Perhaps a country club in Camden. Wedding shuttle
                        service bridges the gap. You set pickup points. Guests
                        board at scheduled times. This works brilliantly for
                        wedding guest transport in Campbelltown. Hotels, train
                        stations, and central points become easy hubs. No one
                        worries about directions.
                      </p>
                    </section>

                    <section id="option-4-airport">
                      <h3 className="text-xl md:text-2xl font-bold text-secondary">
                        Option 4: Airport Transfers for Destination Guests
                      </h3>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You invite the interstate family. Overseas friends
                        attend. Sydney Airport sits 45 minutes away. Event
                        transfer services handle these journeys smoothly. Your
                        guests land tired. They crave direct routes.
                        Professional drivers know the fastest paths. They track
                        flight times. Delays don't cause panic.
                      </p>
                    </section>

                    <section id="compare-options">
                      <h2 className="text-2xl font-bold text-secondary">
                        Compare Your Options
                      </h2>

                      {/* table wrapper minimal */}
                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">
                                Transport Type
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Best For
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Key Benefit
                              </th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Standard Taxi</td>
                              <td className="px-4 py-3">
                                Couples, small families
                              </td>
                              <td className="px-4 py-3">
                                On-demand flexibility
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Maxi Cab</td>
                              <td className="px-4 py-3">
                                Bridal parties, groups
                              </td>
                              <td className="px-4 py-3">
                                Everyone arrives together
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Shuttle Service</td>
                              <td className="px-4 py-3">Large guest lists</td>
                              <td className="px-4 py-3">Predictable timing</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Silver Service</td>
                              <td className="px-4 py-3">VIP guests, parents</td>
                              <td className="px-4 py-3">Premium comfort</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You invite the interstate family. Overseas friends
                        attend. Sydney Airport sits 45 minutes away. Event
                        transfer services handle these journeys smoothly. Your
                        guests land tired. They crave direct routes.
                        Professional drivers know the fastest paths. They track
                        flight times. Delays don't cause panic.
                      </p>
                    </section>

                    <section id="bonus-tips">
                      <h2 className="text-2xl font-bold text-secondary">
                        Campbelltown's Unique Wedding Landscape
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You choose venues across the Macarthur region. Historic
                        churches dot the area. Modern reception centres
                        flourish. Each location presents transport puzzles.
                        <br />
                        Campbelltown's road network spreads wide. Public
                        transport exists. But it won't suit the wedding timing.
                        Buses run infrequently. Trains don't reach every venue.
                        Event transport in Campbelltown fills these gaps
                        expertly. <br />
                        Local knowledge proves crucial. Drivers know back
                        routes. They avoid peak traffic. They understand
                        Saturday wedding rhythms.
                      </p>
                      <h2 className="mt-4 text-2xl font-bold text-secondary">
                        Budget-Friendly Wedding Car Alternatives
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        You examine wedding car alternatives. Stretch limousines
                        cost heavily. Vintage cars charge premiums. Practical
                        transport saves money without sacrificing style. <br />
                        Modern maxi cabs offer clean interiors. Professional
                        drivers wear neat attire. You redirect savings toward
                        photography or catering. Guests rarely notice the
                        vehicle brand. They remember punctuality and comfort.{" "}
                        <br />
                        One bride told us: "Our maxi cab arrived spotless. The
                        driver helped with my dress. It felt luxurious without
                        the limousine price.
                      </p>
                    </section>

                    <section id="planning-guide" className="mt-10">
                      <div className="flex items-end justify-between gap-4">
                        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-secondary">
                          Solving Common Wedding Transport Problems
                        </h2>
                      </div>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Card 1 */}
                        <div className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition p-5 md:p-6">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0">
                              <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-secondary font-bold">
                                1
                              </div>
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-lg md:text-xl font-bold text-secondary">
                                Problem: Guests Arriving Late
                              </h3>
                              <p className="mt-2 text-sm md:text-base leading-7">
                                <strong>Your solution:</strong> Book timed
                                pickups. Campbelltown Taxi Cabs tracks traffic
                                patterns. Drivers leave buffer time. You start
                                ceremonies on schedule.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition p-5 md:p-6">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0">
                              <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-secondary font-bold">
                                2
                              </div>
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-lg md:text-xl font-bold text-secondary">
                                Problem: Elderly Guests Struggling
                              </h3>
                              <p className="mt-2 text-sm md:text-base leading-7">
                                <strong>Your solution:</strong> Request
                                wheelchair-accessible vehicles. These taxis
                                feature low entry points. Senior family members
                                board safely. Everyone participates fully.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition p-5 md:p-6">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0">
                              <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-secondary font-bold">
                                3
                              </div>
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-lg md:text-xl font-bold text-secondary">
                                Problem: Children Needing Safety Seats
                              </h3>
                              <p className="mt-2 text-sm md:text-base leading-7">
                                <strong>Your solution:</strong> Specify baby
                                seats when booking. Transporting wedding guests
                                includes little ones.{" "}
                                <a
                                  className="px-1 underline font-bold"
                                  href="https://www.nhtsa.gov/ten-tips-for-safe-driving"
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                >
                                  Safety
                                </a>{" "}
                                matters on celebration days too.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition p-5 md:p-6">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0">
                              <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-secondary font-bold">
                                4
                              </div>
                            </div>

                            <div className="min-w-0">
                              <h3 className="text-lg md:text-xl font-bold text-secondary">
                                Problem: Venue Parking Shortages
                              </h3>
                              <p className="mt-2 text-sm md:text-base leading-7">
                                <strong>Your solution:</strong> Eliminate
                                parking. Drop-off services mean no lot hunting.
                                Guests step out at the entrance doors.
                                Convenience wins.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* Timeline (UI enhanced — text unchanged) */}
                    <section id="timeline" className="mt-10">
                      <div className="rounded bg-white shadow-sm p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                            Planning Your Wedding Transport Timeline
                          </h2>
                        </div>

                        <p className="mt-3 text-sm md:text-base leading-7 text-accent">
                          You create a master schedule. Here's how experts
                          recommend structuring it:
                        </p>

                        <div className="mt-6 space-y-4">
                          {/* Morning */}
                          <div className="group rounded-2xl bg-gray-50/60 p-4  hover:bg-gray-50 transition">
                            <div className="flex items-start gap-4">
                              <div className="shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-secondary">
                                  1
                                </div>
                              </div>
                              <div className="min-w-0">
                                <p className="text-base md:text-lg font-semibold text-secondary">
                                  Morning:
                                </p>
                                <p className="mt-1 text-sm md:text-base leading-7 text-accent">
                                  Bridal party pickup. Hair and makeup locations
                                  vary. Staggered departures work best.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Ceremony Time */}
                          <div className="group rounded-2xl bg-gray-50/60 p-4 md:p-5 hover:bg-gray-50 transition">
                            <div className="flex items-start gap-4">
                              <div className="shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-secondary">
                                  2
                                </div>
                              </div>
                              <div className="min-w-0">
                                <p className="text-base md:text-lg font-semibold text-secondary">
                                  Ceremony Time:
                                </p>
                                <p className="mt-1 text-sm md:text-base leading-7 text-accent">
                                  Guest arrivals begin 30 minutes early.
                                  Shuttles run continuous loops. Latecomers
                                  catch the final taxis.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Reception Transition */}
                          <div className="group rounded-2xl bg-gray-50/60 p-4 md:p-5 hover:bg-gray-50 transition">
                            <div className="flex items-start gap-4">
                              <div className="shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-secondary">
                                  3
                                </div>
                              </div>
                              <div className="min-w-0">
                                <p className="text-base md:text-lg font-semibold text-secondary">
                                  Reception Transition:
                                </p>
                                <p className="mt-1 text-sm md:text-base leading-7 text-accent">
                                  Some venues differ from ceremony sites. Group
                                  maxi cabs bridge this gap efficiently.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Evening Departures */}
                          <div className="group rounded-2xl bg-gray-50/60 p-4 md:p-5 hover:bg-gray-50 transition">
                            <div className="flex items-start gap-4">
                              <div className="shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-secondary">
                                  4
                                </div>
                              </div>
                              <div className="min-w-0">
                                <p className="text-base md:text-lg font-semibold text-secondary">
                                  Evening Departures:
                                </p>
                                <p className="mt-1 text-sm md:text-base leading-7 text-accent">
                                  Tired guests need safe rides home. Pre-booked
                                  return services prevent drunk driving risks.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="wedding-stories" className="mt-10">
                      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-secondary">
                        Real Campbelltown Wedding Stories
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Sarah married at Belgenny Farm in Camden. She booked six
                        maxi cabs. "I worried about the rural location," she
                        admits. "But drivers knew exactly where to go. My
                        grandmother praised the smooth ride." James hosted 80
                        guests at a Campbelltown golf club. He arranged{" "}
                        <Link
                          className="px-1 font-bold underline"
                          to="/services/book-taxi-sydney-airport"
                        >
                          airport transfers
                        </Link>{" "}
                        for ten flying in. "No one got lost. No one complained.
                        That peace of mind mattered hugely." These experiences
                        show{" "}
                        <Link
                          className="px-1 font-bold underline"
                          to="/services/wedding-transfer"
                        >
                          group transport for weddings
                        </Link>{" "}
                        done right. Local expertise makes the difference.
                      </p>
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <div className="mt-10">
                  <Faq
                    faqs={faqs}
                    faqSectionTitle="Questions Every Bride and Groom Asks"
                  />
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* TOC (no border) */}
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

                  {/* Quote card (no border) */}
                  <div className="rounded border border-border-color bg-white shadow-sm p-5">
                    <h3 className="text-lg font-bold text-secondary">
                      Get a quick quote
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-accent">
                      Share your guest count + venue locations. We’ll recommend
                      the best mix of taxi, maxi cab, and shuttle options.
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

          <div className="mt-10 mb-16 bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-2xl p-6 md:p-10">
            {" "}
            <h2 className="text-2xl md:text-3xl font-bold">
              Your Next Step
            </h2>{" "}
            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              {" "}
              You planned everything else. Now secure transport. Campbelltown
              Taxi Cabs specializes in wedding venue transport in NSW. We
              understand wedding day pressures and deliver calm, professional
              service.Your guests deserve seamless journeys. You deserve
              worry-free celebrations. Let's make both happen together.{" "}
            </p>{" "}
            <div className="mt-6 flex flex-wrap gap-3">
              {" "}
              <Link to="/book-a-taxi" className=" ">
                {" "}
                <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                  {" "}
                  <FaHandPointer /> Book Online{" "}
                </ButtonSecondary>{" "}
              </Link>{" "}
              <a href="tel:1300450428" className="">
                {" "}
                <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary! hover:border-transparent">
                  {" "}
                  <IoCallSharp className="" /> 1300 450 428{" "}
                </ButtonSecondary>{" "}
              </a>{" "}
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                {" "}
                View Fleet{" "}
              </Link>{" "}
            </div>{" "}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog1Details;
