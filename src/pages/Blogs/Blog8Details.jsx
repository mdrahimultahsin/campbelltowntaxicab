import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog8.png";
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "Is a Maxi taxi price in Sydney higher than a sedan?",
    answer:
      "Yes, maxi taxis often have a higher flag fall when carrying five or more people. However, if you split one maxi fare, it is usually cheaper than paying for two standard taxis.",
  },
  {
    question: "How many people fit in a maxi taxi Campbelltown?",
    answer:
      "Our largest vans can carry up to 11 passengers at one time. This makes them perfect for sports teams or large extended families.",
  },
  {
    question: "Can I book a 6-seater taxi from Campbelltown for an airport run?",
    answer:
      "Yes, you can book any size car for your airport trip. The 6-seater is a great option if you have four people and lots of bags.",
  },
  {
    question: "Where can I find a maxi taxi near me in a hurry?",
    answer:
      "Call our dispatch centre for an immediate pickup in the Campbelltown area. We usually arrive within ten minutes for most local group bookings.",
  },
  {
    question: "Should I choose a Maxi Taxi vs Standard Taxi for a family with a baby?",
    answer:
      "For families travelling with a pram and a baby seat together, a maxi often gives you the extra room you need to stay comfortable.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog8Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "expert-solutions", label: "Expert solutions" },
      { id: "options", label: "Vehicle options & capacity" },
      { id: "costs", label: "Cost comparison (2026)" },
      { id: "airport-event", label: "Airport & event transport" },
      { id: "safety", label: "Fleet safety & maintenance" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Start your group trip" },
    ],
    []
  );

  return (
    <>
      {useSEO({
        title: "Maxi Taxi vs Standard Taxi for Perfect Travel - Expert Service Comparison",
        description:
          "Save money and travel together by choosing the right ride. Compare Maxi Taxi vs Standard Taxi features for your next Sydney trip. Book your perfect cab now!",
        keywords:
          "Maxi Taxi vs Standard Taxi,maxi taxi in Sydney,standard taxi in Sydney,Maxi taxi for groups in Sydney,taxi for large groups in Sydney,6 seater taxi Campbelltown,8 seater taxi Sydney,Maxi taxi price in Sydney,taxi seating capacity comparison,Family Taxi Sydney,Airport maxi taxi Sydney,maxi taxi near me,maxi taxi airport,maxi taxi Campbelltown",
        canonical:
          "https://campbelltowntaxicabs.com.au/maxi-taxi-vs-standard-taxi-which-one-should-you-book",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    Maxi Taxi vs Standard Taxi: Which One Should You Book?
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    This guide compares{" "}
                    <span className="font-semibold">Maxi Taxi vs Standard Taxi</span>{" "}
                    to help you save money. We cover the latest 2026 seating
                    capacities and Maxi taxi prices in Sydney details. You will
                    learn to pick the right vehicle for group outings or solo
                    trips. Use this comparison to make a smart choice for your
                    next journey.
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
                    alt="Maxi taxi vs standard taxi comparison in Sydney with group seating, luggage space and airport travel."
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
                alt="Maxi taxi vs standard taxi guide cover image"
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
                        Choosing the Right Taxi Size Saves Money
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        The biggest mistake people make is booking the wrong
                        vehicle size. A sedan is great for quick solo trips. A
                        maxi is better when you have extra people or extra bags.
                        When you compare Maxi Taxi vs Standard Taxi properly, you
                        usually avoid paying for two cars and keep everyone
                        together.
                      </p>
                    </section>

                    {/* Expert solutions */}
                    <section id="expert-solutions">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Expert Solutions for Your Sydney Group Travel
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have managed local taxi fleets for over ten years in
                        NSW. Many travellers struggle to choose between a sedan
                        and a larger van, but looking at Maxi Taxi vs Standard
                        Taxi options makes the choice clear. A professional maxi
                        taxi in Sydney offers massive cabin space for bulky
                        suitcases and large groups.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We also provide a reliable standard taxi in Sydney for
                        solo commuters. Our dispatch system can find a maxi taxi
                        near you quickly, and our drivers keep vehicles clean and
                        ready. Understanding the vehicle size difference keeps
                        your trip stress-free from start to finish.
                      </p>
                    </section>

                    {/* Options */}
                    <section id="options">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        High-Quality Taxi Options for Every Group Size
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        When you evaluate Maxi Taxi vs Standard Taxi, focus on
                        seating limits and boot space. Here are the common
                        options you can book:
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Standard Sedan:</strong> Best for 1–4 passengers with minimal luggage.
                        </li>
                        <li>
                          <strong>6 seater taxi Campbelltown:</strong> A great middle ground for small families.
                        </li>
                        <li>
                          <strong>8 seater taxi Sydney:</strong> Perfect for medium groups heading to local events.
                        </li>
                        <li>
                          <strong>11-Seater Maxi:</strong> The ultimate option for group travel in Sydney.
                        </li>
                        <li>
                          <strong>Family Taxi Sydney:</strong> Baby seats and extra safety for children.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        A taxi seating capacity comparison helps you avoid a
                        cramped ride. We help you pick the best car so your
                        group arrives comfortable and on time.
                      </p>
                    </section>

                    {/* Costs + table */}
                    <section id="costs">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Your Maxi Taxi vs Standard Taxi Cost
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        The total price depends on vehicle size and distance. In
                        2026, a Maxi taxi price in Sydney often includes a
                        high-occupancy vehicle fee. Standard sedans usually
                        follow the basic meter rate. If you have five or more
                        people, the Maxi Taxi vs Standard Taxi maths often shows
                        the maxi is cheaper per person.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Your location in the Macarthur region can also affect
                        cost. Airport maxi taxi Sydney trips often use fixed
                        pricing. Here’s a simple 2026 estimate table:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">Vehicle Type</th>
                              <th className="px-4 py-3 font-semibold">Capacity (People)</th>
                              <th className="px-4 py-3 font-semibold">Estimated Cost (Local Trip)</th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Standard Taxi in Sydney</td>
                              <td className="px-4 py-3">1 - 4</td>
                              <td className="px-4 py-3">$15 – $40</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">6 seater taxi Campbelltown</td>
                              <td className="px-4 py-3">1 - 6</td>
                              <td className="px-4 py-3">$25 – $60</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">8 seater taxi Sydney</td>
                              <td className="px-4 py-3">1 - 8</td>
                              <td className="px-4 py-3">$35 – $75</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Maxi Taxi Campbelltown</td>
                              <td className="px-4 py-3">1 - 11</td>
                              <td className="px-4 py-3">$45 – $95</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Maxi Taxi Airport</td>
                              <td className="px-4 py-3">1 - 11</td>
                              <td className="px-4 py-3">$110 – $160</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Airport & Event */}
                    <section id="airport-event">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Durable Solutions for Airport and Event Transport
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Business groups and vacationers need one ride that fits
                        everyone. Airport maxi taxi Sydney services offer extra
                        room for oversized luggage or sports gear. When you
                        compare Maxi Taxi vs Standard Taxi for airport runs, a
                        maxi often wins because you avoid booking two cars.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          <strong>Split the Fare:</strong> Larger groups pay less per person in a maxi.
                        </li>
                        <li>
                          <strong>Single Booking:</strong> One maxi booking is easier to track.
                        </li>
                        <li>
                          <strong>Extra Comfort:</strong> More legroom during Sydney traffic jams.
                        </li>
                        <li>
                          <strong>Safe Storage:</strong> Keep expensive gear inside the cabin with you.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Our goal is a “one-car” solution for weddings, events,
                        airport runs, and corporate group travel.
                      </p>
                    </section>

                    {/* Safety */}
                    <section id="safety">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Professional Fleet Safety and Maintenance
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Regular maintenance keeps every trip reliable. We check
                        sliding doors on maxi vans, inspect tyres and brakes,
                        and keep strict safety logs across the fleet. Early
                        repairs prevent breakdowns during your airport run.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We also keep interiors clean and fresh for families.
                        That’s why we’re a trusted option for Family Taxi Sydney
                        and group transport in Campbelltown.
                      </p>
                    </section>

                   
                  </div>
                </div>

                {/* FAQ component */}
                <section id="faq" className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Maxi Taxi Booking Questions" />
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
                      Tell us your pickup, destination, passenger count, and luggage.
                      We’ll recommend the best taxi size — sedan, 6-seater, 8-seater,
                      or maxi.
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
              Start Your Group Trip Today
            </h2>
            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              You deserve a ride that fits your whole crew and their gear. At
              Campbelltown Taxi Cabs, we bring years of experience to every group
              booking. Call for a quote or book online in seconds.
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

export default Blog8Details;