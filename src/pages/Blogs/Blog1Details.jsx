import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaArrowLeft, FaClock, FaHandPointer, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "../../assets/blogs/campbelltown-blog1.png";
import Faq from "../../shared/Faq";
import { IoCallSharp } from "react-icons/io5";

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

const Blog1Details = () => {
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
                  <h1 className="text-2xl md:text-4xl font-bold font-playfair leading-tight">
                    Best Transportation Options for Weddings and Events in
                    Campbelltown
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Your big day deserves perfect planning. Transportation shapes
                    your guests’ experience—comfort, punctuality, and simplicity
                    all matter. Here are the best ways to move guests smoothly
                    across Campbelltown and nearby venues.
                  </p>

                 

                  {/* CTA */}
               <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:1300450428" className="">
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> 1300 450 428
                  </ButtonSecondary>
                </a>
              </div>
                </div>

                    <div className="flex flex-1 items-center pb-10 md:pb-0">
                              <img
                                className="w-full"
                                src={titleImg}
                                alt={
                                  "Maxi taxi campbelltown group transport for airport, cruise, event and family trips with spacious seating and luggage capacity."
                                }
                              />
                            </div>
              </div>
            </div>
          </Container>
        </div>

        {/* BODY */}
        <Container>
          {/* Intro block */}
          <div className="mt-10 md:mt-14 bg-light rounded-2xl p-4 md:p-8 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="font-playfair text-primary font-semibold text-2xl md:text-4xl">
                  Why Wedding Transportation Matters
                </h2>
                <p className="mt-4 text-sm md:text-lg text-accent leading-8">
                  You plan the venue. You pick the flowers. You choose the menu.
                  But how do guests arrive? Poor transport creates stress. Late
                  arrivals disrupt timelines. Confused parking frustrates
                  everyone. Smart transportation options for weddings solve
                  these problems.
                </p>
                <p className="mt-3 text-sm md:text-lg text-accent leading-8">
                  Your guests deserve comfort. They need punctuality. They want
                  simplicity. The right service delivers all three.
                </p>
              </div>

              <div className="md:col-span-5">
                <img
                  src={blogImg}
                  alt="campbelltown taxi cabs blog"
                  className="w-full h-60 md:h-[300px] object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Quick takeaways */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-secondary">
                Quick Takeaways
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-accent leading-7 list-disc pl-5">
                <li>Maxi taxis are ideal for bridal parties and groups.</li>
                <li>Shuttles work best for big guest lists and remote venues.</li>
                <li>Airport transfers keep interstate guests stress-free.</li>
                <li>Mix options to match your timeline and budget.</li>
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="mt-10 bg-light rounded-2xl p-4 md:p-8 border border-gray-100 shadow-sm">
            <div className="space-y-10 text-accent leading-8">
              {/* Section 1 */}
              <div>
                <h3 className="text-2xl font-bold text-secondary">
                  1. Wedding Taxi Services
                </h3>
                <p className="mt-3 text-sm md:text-base leading-7">
                  You want flexibility.{" "}
                  <Link
                    className="px-1 font-bold underline"
                    to="/services/wedding-transfer"
                  >
                    Wedding taxi services
                  </Link>{" "}
                  provide exactly that. Guests call when ready. No waiting
                  around. No fixed schedules.{" "}
                  <Link
                    className="px-1 font-bold underline"
                    to="/services/wedding-transfer"
                  >
                    Campbelltown Taxi Cabs
                  </Link>{" "}
                  operates 24/7. Your family arrives on their terms.
                </p>
                <p className="mt-2 text-sm md:text-base leading-7">
                  This suits scattered arrivals. Some guests fly in early. Others
                  drive from nearby suburbs. Individual taxis adapt to each
                  timeline.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-2xl font-bold text-secondary">
                  2. Maxi Taxis for Group Movement
                </h3>
                <p className="mt-3 text-sm md:text-base leading-7">
                  Bridal parties, groomsmen, and family groups travel together.
                  A{" "}
                  <Link
                    className="px-1 font-bold underline"
                    to="/services/maxi-taxi-service"
                  >
                    maxi taxi
                  </Link>{" "}
                  for weddings handles this perfectly. These vehicles seat up to
                  11 passengers, so everyone arrives together—no one gets lost.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-2xl font-bold text-secondary">
                  3. Event Shuttle Services
                </h3>
                <p className="mt-3 text-sm md:text-base leading-7">
                  Hosting a remote venue like a winery or country club? A wedding
                  shuttle service bridges the gap. You set pickup points, guests
                  board at scheduled times, and everyone arrives calmly.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-2xl font-bold text-secondary">
                  4. Airport Transfers for Destination Guests
                </h3>
                <p className="mt-3 text-sm md:text-base leading-7">
                  Interstate family and overseas friends need smooth arrivals.
                  Professional event transfer services handle the journey, track
                  flight times, and keep delays from turning into stress.
                </p>
              </div>

              {/* Table */}
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Comparing Your Options
                </h2>

                <div className="overflow-x-auto mt-5 rounded-2xl border border-gray-200 bg-white">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">
                          Transport Type
                        </th>
                        <th className="px-4 py-3 font-semibold">Best For</th>
                        <th className="px-4 py-3 font-semibold">Key Benefit</th>
                      </tr>
                    </thead>

                    <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                      <tr>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Standard Taxi
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Couples, small families
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          On-demand flexibility
                        </td>
                      </tr>

                      <tr>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Maxi Cab
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Bridal parties, groups
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Shared experience
                        </td>
                      </tr>

                      <tr>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Shuttle Service
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Large guest lists
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Scheduled reliability
                        </td>
                      </tr>

                      <tr>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Silver Service
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          VIP guests, parents
                        </td>
                        <td className="border-t border-gray-200 px-4 py-3">
                          Premium comfort
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm md:text-base leading-7">
                  Mix these options for the smoothest experience. Bridesmaids
                  take maxi cabs. Parents enjoy silver service. General guests
                  use shuttles. This layered approach keeps everything on time.
                </p>
              </div>

              {/* Landscape */}
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Campbelltown&apos;s Unique Wedding Landscape
                </h2>
                <p className="mt-3 text-sm md:text-base leading-7">
                  Campbelltown venues stretch across the Macarthur region—historic
                  churches, modern reception centres, rural farm venues, and golf
                  clubs. Public transport won’t match wedding timing, so local
                  event transport fills the gap with reliable drop-offs and smart
                  routes.
                </p>
              </div>

              {/* Budget */}
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Budget-Friendly Wedding Car Alternatives
                </h2>
                <p className="mt-3 text-sm md:text-base leading-7">
                  Stretch limousines and vintage cars can be expensive. Modern
                  maxi cabs are clean, comfortable, and professional—without the
                  premium price.
                </p>
                <p className="mt-3 text-sm md:text-base leading-7">
                  One bride told us: “Our maxi cab arrived spotless. The driver
                  helped with my dress. It felt luxurious without the limousine
                  price.”
                </p>
              </div>

              {/* Problems */}
              <div>
                <h2 className="text-2xl font-bold text-secondary">
                  Solving Common Wedding Transport Problems
                </h2>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <h3 className="text-lg font-bold text-secondary">
                      Guests Arriving Late
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-7">
                      Book timed pickups. Drivers allow buffer time so your
                      ceremony starts on schedule.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <h3 className="text-lg font-bold text-secondary">
                      Elderly Guests Struggling
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-7">
                      Request accessible vehicles and easy drop-off points so
                      everyone can participate comfortably.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <h3 className="text-lg font-bold text-secondary">
                      Children Needing Safety Seats
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-7">
                      Specify baby seats when booking.{" "}
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

                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <h3 className="text-lg font-bold text-secondary">
                      Venue Parking Shortages
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-7">
                      Drop-off services remove parking stress. Guests step out at
                      the entrance and enjoy the day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-secondary">
                  Planning Your Wedding Transport Timeline
                </h3>
                <ul className="mt-4 space-y-3 text-sm md:text-base leading-7">
                  <li>
                    <b>Morning:</b> Bridal party pickup with staggered departures
                    for hair and makeup locations.
                  </li>
                  <li>
                    <b>Ceremony:</b> Guests arrive 30 minutes early. Shuttles can
                    loop between hubs and venues.
                  </li>
                  <li>
                    <b>Reception transition:</b> Maxi cabs handle ceremony →
                    reception smoothly.
                  </li>
                  <li>
                    <b>Evening:</b> Pre-booked return rides keep everyone safe.
                  </li>
                </ul>
              </div>

              {/* Stories */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-secondary">
                  Real Campbelltown Wedding Stories
                </h3>
                <p className="mt-3 text-sm md:text-base leading-7">
                  Sarah married at Belgenny Farm in Camden. She booked six maxi
                  cabs. “I worried about the rural location,” she admits, “but
                  drivers knew exactly where to go. My grandmother praised the
                  smooth ride.”
                </p>
                <p className="mt-3 text-sm md:text-base leading-7">
                  James hosted 80 guests at a Campbelltown golf club. He arranged{" "}
                  <Link
                    to="/services/book-taxi-sydney-airport"
                    className="px-1 underline font-bold"
                  >
                    airport transfers
                  </Link>{" "}
                  for ten flying in. “No one got lost. No one complained. That
                  peace of mind mattered hugely.”
                </p>
              </div>

              {/* Back */}
              <div className="pt-6 border-t border-gray-200">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors font-medium"
                >
                  <FaArrowLeft />
                  <span>Back to Blogs</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <Faq
              faqs={faqs}
              faqSectionTitle="Questions Every Bride and Groom Asks"
            />
          </div>

          {/* CTA footer */}
          <div className="mt-10 mb-16 bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold">Your Next Step</h2>
            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You planned everything else. Now secure transport. Campbelltown Taxi
              Cabs specializes in wedding venue transport in NSW. We understand
              wedding day pressures and deliver calm, professional service.Your guests deserve seamless journeys. You deserve worry-free celebrations. Let's make both happen together.
            </p>
 <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:1300450428" className="">
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> 1300 450 428
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

export default Blog1Details;
