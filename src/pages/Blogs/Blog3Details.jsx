import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import blogImg from "/campbelltown-blog3.png"; // ✅ change to your actual image path
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
    question: "How quickly can a taxi arrive in Campbelltown?",
    answer:
      "Service usually arrives within 10–15 minutes. Peak times may extend waits slightly. Pre-booking removes uncertainty. Exact pickup times can be scheduled.",
  },
  {
    question: "Can a taxi be booked for someone else?",
    answer:
      "Yes. Provide their details, pickup location, and payment method. Drivers collect family members or guests safely.",
  },
  {
    question: "What if a flight is delayed?",
    answer:
      "Notify the taxi company. Pickup times can be adjusted. Flight arrivals are monitored. Extra waiting charges can often be avoided with communication.",
  },
  {
    question: "Are fixed fares available to the airport?",
    answer:
      "Yes. Quotes can be requested during booking. Long trips may feature set prices for predictable budgeting.",
  },
  {
    question: "Are recurring trips available?",
    answer:
      "Yes. Weekly medical runs, daily commutes, and school pickups can be arranged. Account facilities simplify billing.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Cash, credit cards, and account charging are available. Corporate clients can access invoicing options.",
  },
  {
    question: "How is the booking confirmation received?",
    answer:
      "Instant confirmation is provided. SMS and email updates verify details. Phone bookings include verbal confirmation.",
  },
  {
    question: "What makes Campbelltown taxis different from ride-shares?",
    answer:
      "Support for local business. Regulated safety standards. Consistent pricing. No surge surprises. Professional training and strong local knowledge.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88; // header offset
  window.scrollTo({top: y, behavior: "smooth"});
}

export default function Blog3Details() {
  const toc = useMemo(
    () => [
      {id: "intro", label: "Why booking methods matter"},
      {id: "phone", label: "Phone booking"},
      {id: "online", label: "Online booking"},
      {id: "app", label: "App booking"},
      {id: "layout", label: "Understanding Campbelltown’s layout"},
      {id: "areas", label: "Key areas served"},
      {id: "needs", label: "Booking for different needs"},
      {id: "tips", label: "Tips for smooth bookings"},
      {id: "expect", label: "What to expect after booking"},
      {id: "pricing", label: "Pricing transparency"},
      {id: "night", label: "Emergency and late-night options"},
      {id: "compare", label: "Compare booking methods"},
      {id: "start", label: "Booking starts here"},
    ],
    [],
  );

  return (
    <>
      {useSEO({
        title:
          "How to Book a Taxi in Campbelltown - Phone, Online & App Options Fast",
        description:
          "Get your taxi in 10 minutes with phone, online or app booking. 24/7 service across all Campbelltown suburbs, no surge pricing, professional drivers. Call 1300 450 428 now!",
        keywords:
          "Book a taxi in Campbelltown, Book taxi, Campbelltown taxi booking,taxi booking in Campbelltown,local taxi,Campbelltown taxi service,book taxi online in Campbelltown,call a taxi,taxi booking app,24-hour taxi,Reliable taxi in Campbelltown",
        canonical:
          "https://campbelltowntaxicabs.com.au/how-to-book-a-taxi-in-campbelltown-phone-online-app-options",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    How to Book a Taxi in Campbelltown: Phone, Online and App
                    Options
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Need a ride now? Want it simple? Deserve reliability.{" "}
                    <Link
                      className="px-1 font-bold underline"
                      to="/book-a-taxi"
                    >
                      Book a taxi in Campbelltown
                    </Link>{" "}
                    with confidence. Multiple options exist. Each suits
                    different situations. Let’s explore them together.
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
                    alt="Campbelltown taxi booking options by phone, online, and app."
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
                alt="How to book a taxi in Campbelltown cover image"
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
                        Why Booking Methods Matter
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Convenience matters. Speed is essential. Control
                        improves the experience. The right booking method
                        delivers all three. Campbelltown spreads across wide
                        suburbs. Public transport leaves gaps. Local taxi
                        services fill them perfectly.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        The chosen method affects wait times. It impacts pricing
                        transparency. It shapes the overall experience. Smart
                        selection saves stress.
                      </p>
                    </section>

                    <section id="phone">
                      <h2 className="text-2xl font-bold text-secondary">
                        Phone Booking: The Traditional Choice
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Pick up a mobile. Dial a number. Speak to a real person.
                        This method stays popular. Many locals prefer it.
                      </p>

                      <div className="mt-5 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          How Phone Booking Works
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Call{" "}
                          <a
                            href="tel:1300450428"
                            className="font-bold underline underline-offset-4"
                          >
                            1300 450 428
                          </a>
                          . A dispatcher answers quickly. Provide the pickup
                          location. Mention the destination. Specify any special
                          needs. The operator confirms the booking instantly.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          An estimated arrival time is provided. The dispatcher
                          assigns a driver. A vehicle description is shared.
                          Everything stays clear.
                        </p>
                      </div>

                      <div className="mt-4 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          When Phone Booking Suits Best
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          This method works well without internet access. It
                          helps when the phone battery runs low. It suits those
                          who prefer human interaction. It’s ideal for immediate
                          clarification. Phone booking handles these scenarios
                          smoothly.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          A regular customer said, “I always call. I like
                          hearing a voice. They know my street. They know my
                          name. It feels personal.”
                        </p>
                      </div>
                    </section>

                    <section id="online">
                      <h2 className="text-2xl font-bold text-secondary">
                        Online Booking: The Modern Approach
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Visit the website. Fill a simple form. Submit the
                        request. Book a taxi online in Campbelltown anytime. It
                        works 24/7. No waiting on hold.
                      </p>

                      <div className="mt-5 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Steps for Online Reservations
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Open the booking section. Enter the pickup address.
                          Add the destination. Select the preferred time.
                          Include contact details. Submit the form.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Confirmation arrives via email. SMS updates follow.
                          Everything stays trackable digitally.
                        </p>
                      </div>

                      <div className="mt-4 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Benefits of Online Systems
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Bookings can be made at midnight. Schedule tomorrow’s
                          airport run. Arrange transport for next week.
                          Flexibility remains strong.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Addresses are clearly entered. No misheard details. No
                          phone tag. Written records stay available. Expense
                          reporting becomes easier.
                        </p>
                      </div>
                    </section>

                    <section id="app">
                      <h2 className="text-2xl font-bold text-secondary">
                        App Booking: Tech-Savvy Convenience
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Download the application. Tap the screen. Watch the taxi
                        approach. Taxi booking app options provide this
                        convenience. Perfect for smartphone users.
                      </p>

                      <div className="mt-5 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          Features Available
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Driver profiles are visible. Vehicle details appear
                          clearly. Real-time tracking shows the location. Fare
                          estimates display upfront. Electronic payments are
                          available. Ratings maintain quality standards.
                        </p>
                      </div>

                      <div className="mt-4 rounded-2xl bg-gray-50/60 p-5 md:p-6">
                        <h3 className="text-xl font-bold text-secondary">
                          App vs Phone: Making the Choice
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Apps offer visual tracking. Phones provide immediate
                          human help. Apps work silently. Phones allow
                          conversation. The best option depends on preference.
                        </p>
                        <p className="mt-2 text-sm md:text-base leading-7">
                          Some customers combine both. Apps for routine trips.
                          Phone calls for complex requests. Hybrid approaches
                          work brilliantly.
                        </p>
                      </div>
                    </section>

                    <section id="layout">
                      <h2 className="text-2xl font-bold text-secondary">
                        Understanding Campbelltown’s Layout
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Campbelltown stretches across 312 square kilometres.
                        Suburbs vary widely. Some areas sit near the CBD. Others
                        border rural zones.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        <Link
                          className="px-1 font-bold underline"
                          to="/book-a-taxi"
                        >
                          Campbelltown taxi service
                        </Link>{" "}
                        providers understand these distinctions. They know which
                        streets connect quickly. They identify shortcuts during
                        peak hours. Local knowledge saves valuable time.
                      </p>
                    </section>

                    <section id="areas">
                      <h2 className="text-2xl font-bold text-secondary">
                        Key Areas Served
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Travel from Campbelltown Hospital. Depart from Macarthur
                        Square. Leave from Western Sydney University. Head to
                        Leumeah Station. Commute from Glen Alpine. Drivers reach
                        these areas promptly.
                      </p>
                    </section>

                    <section id="needs">
                      <h2 className="text-2xl font-bold text-secondary">
                        Booking for Different Needs
                      </h2>

                      <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Airport Transfers
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            Early flights and late-night arrivals require
                            reliable service. 24-hour taxi services accommodate
                            all times. Pre-book pickups to avoid waiting stress.
                            Sydney Airport sits about 50 minutes away. Reliable
                            transport matters.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Medical Appointments
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            Trips to Campbelltown Hospital. Specialist visits in
                            Liverpool. Clinics in Camden. Punctuality protects
                            health schedules. A reliable taxi in Campbelltown
                            ensures appointments are never missed.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Social Outings
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            Dining in Gregory Hills. Movies at Macarthur Square.
                            Meeting friends in Ingleburn. Night buses run
                            rarely. Taxis provide safe return trips. Evenings
                            stay enjoyable.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50/60 p-5 md:p-6">
                          <h3 className="text-xl font-bold text-secondary">
                            Corporate Travel
                          </h3>
                          <p className="mt-2 text-sm md:text-base leading-7">
                            Meetings across Sydney. Client visits in Parramatta.
                            Presentations in the CBD. Professional transport
                            reflects a strong image. Campbelltown taxi booking
                            maintains standards.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="tips">
                      <h2 className="text-2xl font-bold text-secondary">
                        Tips for Smooth Bookings
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        For seamless experiences, follow these suggestions:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          Provide exact addresses. “Near the shops” confuses
                          drivers. Street numbers and business names help.
                        </li>
                        <li>
                          Mention landmarks. “Opposite the petrol station”
                          guides quickly. “Beside the red building” clarifies
                          instantly.
                        </li>
                        <li>
                          Specify vehicle needs. Wheelchair access requires
                          advance notice. Baby seats need installation time.
                          Large luggage requires maxi cabs.
                        </li>
                        <li>
                          Book ahead during peak times. Friday nights require
                          planning. School rush hours create delays. Morning
                          trains fill fast. Advance booking secures a ride.
                        </li>
                        <li>
                          Keep the phone available. Drivers often call when
                          approaching. Coordination stays smooth.
                        </li>
                      </ul>
                    </section>

                    <section id="expect">
                      <h2 className="text-2xl font-bold text-secondary">
                        What to Expect After Booking
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Complete the reservation. Then the process begins.
                      </p>
                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>Immediate confirmation arrives.</li>
                        <li>
                          Driver assignment happens quickly. Name and vehicle
                          details are shared.
                        </li>
                        <li>Real-time updates keep everything clear.</li>
                        <li>
                          Professional arrival follows. Drivers greet
                          courteously. Assistance with luggage is provided.
                          Destination is confirmed.
                        </li>
                        <li>
                          Safe delivery completes the journey. Payment is
                          processed conveniently. Arrival is secure.
                        </li>
                      </ul>
                    </section>

                    <section id="pricing">
                      <h2 className="text-2xl font-bold text-secondary">
                        Pricing Transparency
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Concerns about cost are understandable. Taxi services
                        should clarify pricing upfront.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Campbelltown Taxi Cabs uses regulated taxi meters. The
                        fare builds visibly. The structure remains clear. No
                        hidden surprises.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Fare estimates can be requested during booking.
                        Dispatchers calculate approximate costs. Long trips can
                        be quoted clearly.
                      </p>
                    </section>

                    <section id="night">
                      <h2 className="text-2xl font-bold text-secondary">
                        Emergency and Late-Night Options
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Unexpected situations happen. Cars break down. Trains
                        get cancelled. Meetings run overtime. A taxi can be
                        called anytime. True 24-hour taxi operations never
                        sleep.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Night safety remains important. Avoid empty streets.
                        Skip dark car parks. Professional drivers ensure a
                        secure travel home.
                      </p>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        One nurse explained, “I finish shifts at 2 AM. I always
                        book taxis. Walking alone feels unsafe. The taxi arrives
                        within minutes. I reach home worry-free.”
                      </p>
                    </section>

                    <section id="compare">
                      <h2 className="text-2xl font-bold text-secondary">
                        Comparing Booking Methods: Quick Guide
                      </h2>

                      <div className="overflow-x-auto mt-5 rounded-2xl bg-white">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">
                                Method
                              </th>
                              <th className="px-4 py-3 font-semibold">Speed</th>
                              <th className="px-4 py-3 font-semibold">
                                Best For
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Convenience Level
                              </th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Phone</td>
                              <td className="px-4 py-3">Immediate</td>
                              <td className="px-4 py-3">
                                Urgent needs, complex requests
                              </td>
                              <td className="px-4 py-3">High</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Online</td>
                              <td className="px-4 py-3">2 minutes</td>
                              <td className="px-4 py-3">
                                Planning, record keeping
                              </td>
                              <td className="px-4 py-3">Very High</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">App</td>
                              <td className="px-4 py-3">1 minute</td>
                              <td className="px-4 py-3">
                                Tech users, frequent travellers
                              </td>
                              <td className="px-4 py-3">Very High</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <p className="mt-4 text-sm md:text-base leading-7">
                        Methods can be mixed depending on circumstances.
                        Flexibility works best.
                      </p>
                    </section>

                    <section id="start">
                      <div className="mt-10 bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-2xl p-6 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                          Booking Starts Here
                        </h2>
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          All options are clear. Methods are simple. Benefits
                          are strong. Taxi booking in Campbelltown reduces
                          stress, improves convenience, and ensures{" "}
                          <a
                            className="px-1 underline font-bold"
                            href="https://www.nhtsa.gov/ten-tips-for-safe-driving"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                            safety.
                          </a>
                        </p>
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          Campbelltown Taxi Cabs operates around the clock.
                          Every suburb is covered. Every request is handled.{" "}
                          <a
                            className="px-1 underline font-bold"
                            href="https://www.wikidata.org/wiki/Q2961580"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                            Drivers
                          </a>{" "}
                          know the region intimately. Dispatchers respond
                          promptly.
                        </p>
                        <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
                          Call{" "}
                          <a
                            href="tel:1300450428"
                            className="font-bold underline underline-offset-4"
                          >
                            1300 450 428
                          </a>{" "}
                          now. Visit{" "}
                          <Link className="px-1 font-bold underline" to="/">
                            https://campbelltowntaxicabs.com.au/
                          </Link>{" "}
                          to book online.
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
                      Call us and we’ll help you choose the fastest booking
                      option for your pickup location.
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
