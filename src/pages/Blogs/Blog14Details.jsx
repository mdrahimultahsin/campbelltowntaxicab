import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import { Link } from "react-router";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";
import blogImg from "/campbelltown-blog14.png";
import Faq from "../../shared/Faq";
import { useMemo } from "react";

const faqs = [
  {
    question: "What makes a Cabcharge terminal taxi safer than carrying cash?",
    answer:
      "A Cabcharge terminal links your payment directly to the trip record. This reduces overcharging risk and gives you a clear digital history of the ride for your protection.",
  },
  {
    question: "Can I get a taxi receipt with GST for my business trip expenses?",
    answer:
      "Yes. Every Cabcharge taxi payment generates a valid taxi receipt with GST. You can receive a printed slip or request a digital record for easy reimbursements.",
  },
  {
    question: "Are all vehicles equipped for a safe taxi payment option in Sydney?",
    answer:
      "Our local fleet supports safe taxi payments through modern encrypted terminals. We keep the digital taxi payment system online and ready for every trip.",
  },
  {
    question: "How does taxi fare transparency work for passengers in Campbelltown?",
    answer:
      "Your fare is displayed clearly using a regulated metered taxi payment system, and the terminal shows the exact amount before you tap—so you can verify it matches the meter.",
  },
  {
    question: "Does your company help locals set up a corporate Cabcharge account?",
    answer:
      "Yes. We help businesses set up corporate Cabcharge accounts so teams can manage travel spending with consolidated statements and simpler reporting.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const Blog14Details = () => {
  const toc = useMemo(
    () => [
      { id: "intro", label: "Overview" },
      { id: "digital-payments", label: "Why digital payments win" },
      { id: "comparison", label: "Payment security comparison" },
      { id: "corporate", label: "Corporate Cabcharge accounts" },
      { id: "surcharge", label: "Taxi surcharge NSW & tips" },
      { id: "faq", label: "FAQ" },
      { id: "cta", label: "Secure transport today" },
    ],
    []
  );

  return (
    <>
      {useSEO({
        title: "How Cabcharge Supports Safer Taxi Transactions",
        description:
          "Learn how Cabcharge supports safer taxi transactions in Campbelltown and Sydney. Discover cashless payment benefits, GST receipts, corporate accounts, and fare transparency tips.",
        keywords:
          "Cabcharge supports safer taxi transactions,Cabcharge taxi payment,cashless taxi Campbelltown,taxi card payment Campbelltown,secure taxi payment NSW,Cabcharge terminal taxi,taxi fare transparency,metered taxi payment NSW,taxi receipt with GST,taxi surcharge NSW,corporate Cabcharge account,digital taxi payment system",
        canonical:
          "https://campbelltowntaxicabs.com.au/how-cabcharge-supports-safer-taxi-transactions",
      })}

      <div>
        {/* HERO */}
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="py-10 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="section-hero-title">
                    How Cabcharge Supports Safer Taxi Transactions
                  </h1>

                  <p className="mt-4 text-sm md:text-base text-white/90 leading-7 max-w-2xl mx-auto md:mx-0">
                    Modern passengers prioritise safety and simplicity when
                    paying for local travel across Sydney. Cabcharge supports
                    safer taxi transactions by removing the need for physical
                    cash, keeping every payment tracked, and improving fare
                    transparency. This guide explains how cashless payments
                    protect passengers and businesses across Campbelltown and
                    Western Sydney.
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
                    alt="Cabcharge cashless taxi payment in Campbelltown with secure terminal, fare transparency and GST receipts."
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
                alt="How Cabcharge supports safer taxi transactions guide cover image"
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
                        Safer Payments, Less Stress
                      </h2>
                      <p className="mt-3 text-sm md:text-base leading-7">
                        Cabcharge supports safer taxi transactions by creating a
                        secure digital record of your fare. You don’t need to
                        carry cash, and you can verify the amount before you pay.
                        That simple change improves personal safety, reduces
                        disputes, and helps businesses track travel spending.
                      </p>
                    </section>

                    {/* Digital payments */}
                    <section id="digital-payments">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Why Digital Payments Rule the Campbelltown Roads
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        I have spent ten years watching the taxi industry evolve
                        in Greater Western Sydney. In the past, carrying cash
                        felt risky for passengers and drivers. Now, you can
                        enjoy a{" "}
                        <span className="font-semibold">
                          cashless taxi Campbelltown
                        </span>{" "}
                        experience every time you ride.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        A Cabcharge terminal taxi setup reduces payment errors
                        and creates a permanent digital paper trail. It also
                        promotes taxi fare transparency because the meter and
                        terminal align the exact price before you authorise the
                        transaction. No fumbling for coins after a long night
                        out — just tap and go.
                      </p>
                    </section>

                    {/* Comparison table */}
                    <section id="comparison">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Comprehensive Comparison of Local Payment Security
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Not all payment methods give the same level of security,
                        documentation, and convenience. Here’s a simple
                        comparison:
                      </p>

                      <div className="overflow-x-auto mt-5 rounded shadow-sm">
                        <table className="w-full text-left text-sm bg-white">
                          <thead className="bg-gray-900 text-white">
                            <tr>
                              <th className="px-4 py-3 font-semibold">
                                Payment Feature
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Security Level
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Best Usage Scenario
                              </th>
                              <th className="px-4 py-3 font-semibold">
                                Documentation Provided
                              </th>
                            </tr>
                          </thead>
                          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                            <tr>
                              <td className="px-4 py-3">Cabcharge taxi payment</td>
                              <td className="px-4 py-3">Elite</td>
                              <td className="px-4 py-3">
                                Business, VIP, and corporate travel
                              </td>
                              <td className="px-4 py-3">
                                Instant taxi receipt with GST
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">
                                Taxi card payment Campbelltown
                              </td>
                              <td className="px-4 py-3">Very High</td>
                              <td className="px-4 py-3">
                                Daily errands, medical visits, school runs
                              </td>
                              <td className="px-4 py-3">
                                Bank statement digital record
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">
                                Cashless taxi Campbelltown
                              </td>
                              <td className="px-4 py-3">High</td>
                              <td className="px-4 py-3">
                                Nightlife, bars, late-night returns
                              </td>
                              <td className="px-4 py-3">
                                SMS or printed confirmation
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">Traditional Cash</td>
                              <td className="px-4 py-3">Moderate</td>
                              <td className="px-4 py-3">
                                Very short hops or small tips
                              </td>
                              <td className="px-4 py-3">
                                Manual paper receipts only
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* Corporate */}
                    <section id="corporate">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Mastering Your Corporate Cabcharge Account for Business
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        A Corporate Cabcharge account is a lifesaver for busy
                        teams. Instead of collecting piles of paper receipts, you
                        get one consolidated statement each month. That makes
                        auditing, budgeting, and tax time easier.
                      </p>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        Digital taxi payments also reduce fraud risk. You don’t
                        negotiate fares, because regulated metered taxi payment
                        rules help keep pricing consistent. That trust is why
                        frequent business commuters choose Cabcharge-backed
                        taxis.
                      </p>
                    </section>

                    {/* Surcharge + tips */}
                    <section id="surcharge">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Understanding Taxi Surcharge NSW Rules and Benefits
                      </h2>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        You may notice small processing fees on your bill. A taxi
                        surcharge helps fund secure electronic networks that
                        protect your personal information. Even with a small fee,
                        secure taxi payment is worth it because it adds
                        encryption and traceability that cash cannot provide.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 list-disc pl-5">
                        <li>
                          Always ask for a receipt to ensure you have a valid taxi
                          receipt with GST.
                        </li>
                        <li>
                          Check the terminal for the Cabcharge logo before you
                          pay.
                        </li>
                        <li>
                          Verify the amount on the screen matches the taxi meter
                          before tapping.
                        </li>
                        <li>
                          Save your digital record for quick reimbursement later.
                        </li>
                      </ul>

                      <p className="mt-3 text-sm md:text-base leading-7">
                        We prioritise your financial safety as much as your
                        physical safety. Drivers are trained to process payments
                        smoothly, and equipment is checked daily to avoid
                        glitches.
                      </p>
                    </section>
                  </div>
                </div>

                {/* FAQ */}
                <section id="faq" className="mt-10">
                  <Faq faqs={faqs} faqSectionTitle="Secure Taxi Payment Questions" />
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
                      Want a secure cashless ride?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-accent">
                      Book in seconds and enjoy fare transparency, GST receipts,
                      and secure digital payments with Cabcharge-supported terminals.
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
              Experience the Best Secure Transport in Campbelltown Today
            </h2>

            <p className="mt-3 text-white/90 leading-7 text-sm md:text-base">
              Your safety is our priority at{" "}
              <Link to="/" className="underline font-semibold px-1">
                Campbelltown Taxi Cabs
              </Link>
              . Stop worrying about carrying cash and enjoy a modern cashless taxi
              Campbelltown ride today. Our team is ready to provide a reliable,
              secure, and professional experience for your daily commute or
              special event.
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

export default Blog14Details;