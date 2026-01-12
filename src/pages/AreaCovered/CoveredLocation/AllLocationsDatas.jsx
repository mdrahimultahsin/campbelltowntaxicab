import {Link} from "react-router";
import corporateTripsImg from "../../../assets/services/campbelltown-corporate-trips.jpeg";
export const allLocationsData = {
  "campbelltown-nsw": {
    pageTitle: "24/7 Campbelltown Taxi & Maxi Cabs for Fast Pickups",
    metaDescription:
      "Reliable Campbelltown Taxi & Maxi Cabs – 24/7 local taxi service, Maxi Cabs, baby seats, and corporate rides. Call or book online for safe, comfortable transport.",
    heroTitle: "24/7 Campbelltown Taxi and Maxi Cabs for Fast Pickups",
    heroDescription: (
      <>
        When you need Campbelltown Taxi & Maxi Cabs, you want speed, safety, and
        reliability. Many people face long wait times, cancelled rides, or small
        vehicles that cannot fit your group or luggage. With our{" "}
        <Link to={`/book-a-taxi`} className="underline font-semibold">
          Campbelltown taxi and cab services
        </Link>
        , you never have to worry about that. Our fleet includes maxi cabs near
        me in Campbelltown, SUVs, and standard taxis, ensuring every journey is
        comfortable. Whether you search for a taxi{" "}
        <Link to={`/area-covered`} className="underline font-semibold">
          service near me
        </Link>{" "}
        or a{" "}
        <Link to={`/fleet`} className="underline font-semibold">
          local taxi service Campbelltown
        </Link>{" "}
        , we’re available 24/7. Families, students, shift workers, and business
        travellers trust us for airport transfers, medical appointments, local
        trips, and group travel. Our experienced drivers know Campbelltown
        routes inside out, making every ride punctual and stress-free. With our{" "}
        <Link to={`/fleet`} className="underline font-semibold">
          premium fleet
        </Link>{" "}
        and easy booking, you get a reliable ride anytime, solving your travel
        challenges without hassle.
      </>
    ),
    bookingFormTitle: "Book Taxi Maxi Service in Campbelltown NSW",
    locationSectionTitle:
      "Reliable Corporate Taxi Services Across Campbelltown & Surrounding Areas",
    locationSectionDescription: (
      <>
        If you need professional transport, our Campbelltown Taxi & Maxi Cabs
        provide seamless corporate travel across Campbelltown and the wider
        Macarthur region. Many businesses struggle with on-time airport pickups,
        inter-office travel, or group transport for meetings and events. We
        solve these issues with our{" "}
        <Link
          to={`/services/corporate-transport-services`}
          className="underline font-semibold"
        >
          corporate taxi services
        </Link>{" "}
        and{" "}
        <Link
          to={`/services/maxi-taxi-service`}
          className="underline font-semibold"
        >
          maxi cab services Campbelltown
        </Link>
        . Solo executives, corporate teams, and groups can rely on us for{" "}
        <Link
          to={`/services/taxi-sydney-service`}
          className="underline font-semibold"
        >
          taxi cab service near me
        </Link>{" "}
        bookings that are fast and stress-free. Every vehicle is clean,
        well-maintained, and equipped for comfort. Our professional drivers
        prioritise punctuality, safety, and smooth travel, earning us trust from
        local businesses. You can schedule{" "}
        <Link
          to={`/services/book-taxi-sydney-airport`}
          className="underline font-semibold"
        >
          airport transfers
        </Link>{" "}
        , inter-office trips, and special corporate events without worrying
        about delays. With
        <Link
          to={`/services/book-taxi-sydney-airport`}
          className="underline font-semibold"
        >
          Campbelltown taxi cab service
        </Link>
        , your team arrives on time, every time, and your corporate reputation
        stays intact.
      </>
    ),
    locationSectionImg: corporateTripsImg,
    serviceTitle: "Our Taxi and Maxi Services in Campbelltown NSW",
    serviceSubtitle: (
      <>
        When you need a safe and punctual ride,
        <strong>Campbelltown Taxi & Maxi Cabs</strong> is your trusted local
        transport service. Whether you are commuting to work, heading to the
        airport, or attending an event, our professional drivers provide
        reliable, comfortable, and stress-free journeys. We understand your
        travel needs, peak-hour traffic, group trips, and luggage-heavy rides.
        With modern vehicles and local knowledge, you’ll never face long waits
        or cancelled rides. Booking is simple online or over the phone with
        clear pricing. Trust our <strong> Campbelltown taxi service</strong> for
        daily trips, airport transfers, family outings, or corporate travel
      </>
    ),
    locationServices: {
      S001: {
        service_id: "S001",
        title: "Wedding Transfer",
        description: (
          <>
            Travel worry-free on your special day. Our
            <strong className="pl-1">
              Campbelltown taxi and cab services
            </strong>{" "}
            offer professional drivers, timely pickups, and luggage assistance.
            We ensure all guests arrive safely and on time. Book via our
            <Link
              to={`/services/wedding-transfer`}
              className="underline font-semibold  pl-1"
            >
              wedding transfer page.
            </Link>{" "}
          </>
        ),
        image: "/car.png",
        pathname: "/services/wedding-transfer",
      },

      S002: {
        service_id: "S002",
        title: "Luxury Transfer",
        description: (
          <>
            Arrive in style for airport trips, VIP events, or corporate travel.
            Our{" "}
            <strong className="pl-1">Campbelltown taxi and cab services</strong>{" "}
            guarantees comfort, privacy, and punctuality. Learn more at{" "}
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold"
            >
              luxury transfer.
            </Link>{" "}
          </>
        ),
        image: "/vehicle.png",
        pathname: "/services/luxury-transfer",
      },

      S003: {
        service_id: "S003",
        title: "Baby Seat Taxi Sydney",
        description: (
          <>
            Travel safely with your child. Our taxis include adjustable baby
            seats for school runs, medical visits, and family outings. Our{" "}
            <strong className="pl-1">Campbelltown taxi and cab services</strong>{" "}
            ensures secure and convenient rides. Visit
            <Link
              to={`/services/baby-seat-taxi-sydney`}
              className="underline font-semibold pl-1"
            >
              baby seat taxi.
            </Link>{" "}
          </>
        ),
        image: "/baby-seat.png",
        pathname: "/services/baby-seat-taxi-sydney",
      },

      S004: {
        service_id: "S004",
        title: "Corporate Transport Services",
        description: (
          <>
            Reliable and professional transport for office staff, meetings, and
            business trips. Our
            <strong className="pl-1">
              local taxi service Campbelltown{" "}
            </strong>{" "}
            provides punctual service, safe vehicles, and smooth journeys. Check
            corporate
            <Link
              to={`/services/corporate-transport-services`}
              className="underline font-semibold pl-1"
            >
              transport services.
            </Link>{" "}
          </>
        ),
        image: "/corporate.png",
        pathname: "/services/corporate-transport-services",
      },

      S005: {
        service_id: "S005",
        title: "Cruise Terminal Transfer",
        description: (
          <>
            Start your cruise without travel stress. Our
            <strong className="pl-1">Campbelltown taxi cab service</strong>{" "}
            ensures timely pickups, luggage support, and comfortable journeys.
            Learn more at
            <Link
              to={`/services/cruise-terminal-transfer`}
              className="underline font-semibold pl-1"
            >
              cruise terminal transfer.
            </Link>{" "}
          </>
        ),
        image: "/ship.png",
        pathname: "/services/cruise-terminal-transfer",
      },

      S006: {
        service_id: "S006",
        title: "Event Transfer",
        description: (
          <>
            Attend weddings, parties, or concerts without transportation
            worries. Our
            <strong className="pl-1">Campbelltown taxi cab service</strong>{" "}
            handles schedules efficiently, providing safe and timely rides.
            Details at
            <Link
              to={`/services/event-transfer`}
              className="underline font-semibold pl-1"
            >
              event transfer.
            </Link>{" "}
          </>
        ),
        image: "/event.png",
        pathname: "/services/event-transfer",
      },

      S007: {
        service_id: "S007",
        title: "Maxi Taxi Service",
        description: (
          <>
            Perfect for groups, families, or luggage-heavy trips. Our
            <strong className="pl-1">
              maxi cab services Campbelltown
            </strong>{" "}
            accommodate up to 12 passengers comfortably. Explore
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/users.png",
        pathname: "/services/maxi-taxi-service",
      },

      S008: {
        service_id: "S008",
        title: "Reliable Airport Transfers",
        description: (
          <>
            Never miss a flight with our
            <strong className="pl-1">
              {" "}
              Campbelltown taxi cab close to me{" "}
            </strong>{" "}
            service. Timely pickups, luggage assistance, and stress-free rides
            ensure smooth airport travel. Book at airport taxi service.
          </>
        ),
        image: "/airport.png",
        pathname: "/services/taxi-sydney-service",
      },

      S009: {
        service_id: "S009",
        title: "Corporate Trips",
        description: (
          <>
            Move between offices or meetings with ease. Our
            <strong className="pl-1">
              {" "}
              local taxi cab service near me
            </strong>{" "}
            ensures professional, comfortable, and punctual rides every time.
            Learn more at
            <Link
              to={`/services/corporate-tips`}
              className="underline font-semibold pl-1"
            >
              corporate trips.
            </Link>{" "}
          </>
        ),
        image: "/briefcase.png",
        pathname: "/services/corporate-tips",
      },
    },
    fleetSectionTitle:
      "Executive Fleet Options by Campbelltown Taxi & Maxi Cabs",
    fleetSectionSubTitle:
      "Choose the right vehicle for your journey with Campbelltown Taxi & Maxi Cabs. Whether you travel alone or with a group, our fleet offers comfort, safety, and reliability. Our drivers are local experts and know the fastest routes around Campbelltown. From airport transfers to corporate trips, we have a solution for every need. Trust our Campbelltown taxi and cab services for smooth, stress-free travel any time of day or night.",

    fleetSectionVehicles: {
      1: {
        id: 1,
        name: "Easy Sedan",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Ideal for short trips, errands, and school runs. Our sedans are
            clean, spacious, and comfortable. With our
            <strong className="pl-1">Campbelltown taxi service</strong> , you
            can enjoy safe and reliable rides for daily travel. Book easily at
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              book a taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-easy-sedan.png",
      },

      2: {
        id: 2,
        name: "Luxury Vehicle",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Travel in style for airport transfers, corporate travel, or special
            occasions. Our
            <strong className="pl-1">Campbelltown taxi service</strong> provides
            privacy, comfort, and punctual service with professional drivers.
            Learn more at
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold pl-1"
            >
              luxury transfer
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-luxury-vehicle.png",
      },

      3: {
        id: 3,
        name: "Suv or Wagon",
        passengerCapacity: 7,
        bagsCapacity: 5,
        description: (
          <>
            Perfect for families, groups, or luggage-heavy trips. Our SUVs offer
            ample seating, smooth rides, and convenience. Our
            <strong className="pl-1">taxi services near me </strong> in
            Campbelltown ensure safe and comfortable travel. Explore
            <Link to={`/fleet`} className="underline font-semibold pl-1">
              premium fleet.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-suv-wagon.png",
      },

      4: {
        id: 4,
        name: "Kia Carnival",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Ideal for small groups or large families. With spacious seating and
            luggage capacity, our
            <strong className="pl-1">
              {" "}
              maxi cab near me in Campbelltown{" "}
            </strong>{" "}
            offers reliable, safe, and comfortable rides for airport or event
            travel. Check
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-kia-carnival.png",
      },

      5: {
        id: 5,
        name: "Maxi Taxi",
        passengerCapacity: 11,
        bagsCapacity: 8,
        description: (
          <>
            Spacious, safe, and comfortable for up to 12 passengers or
            luggage-heavy trips. Our
            <strong className="pl-1">
              {" "}
              maxi cab services Campbelltown{" "}
            </strong>{" "}
            are perfect for family outings, corporate travel, or group trips.
            Learn more
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              here.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },

      6: {
        id: 6,
        name: "Wheelchair Taxi Service",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Fully equipped for accessibility and safety. Our
            <strong className="pl-1">
              {" "}
              local taxi service Campbelltown{" "}
            </strong>{" "}
            offers professional assistance, easy boarding, and comfortable rides
            for seniors or passengers with mobility needs. Book at
            <Link
              to={`/services/wheelchair-accessible-taxi`}
              className="underline font-semibold pl-1"
            >
              wheelchair taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },
    },
    faqSectionTitle:
      "Frequently Asked Questions About Campbelltown Taxi & Maxi Cabs",
    faqs: [
      {
        question: "How can I book a Campbelltown taxi near me?",
        answer: (
          <>
            Call 1300 450 428 or book online at{" "}
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.
            </Link>{" "}
            campbelltowntaxicabs.com. Our{" "}
            <strong className="pl-1">Campbelltown taxi cab close to me</strong>{" "}
            service ensures fast, safe, and reliable pickups.
          </>
        ),
      },
      {
        question: "Do you provide Maxi Cab services in Campbelltown?",
        answer: (
          <>
            Yes, our
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              maxi cab services Campbelltown
            </Link>{" "}
            accommodate up to 12 passengers. Perfect for families, group travel,
            and airport transfers with ample luggage space.
          </>
        ),
      },
      {
        question: "Are your taxis available 24/7?",
        answer: (
          <>
            Absolutely. Our
            <strong className="pl-1">
              {" "}
              Campbelltown taxi and cab services
            </strong>{" "}
            operate day and night, including weekends and holidays. You can rely
            on us whenever you need a ride..
          </>
        ),
      },
      {
        question: "Can I get a taxi with a baby seat?",
        answer: (
          <>
            Yes. Adjustable baby seats are available for safety. Travel
            comfortably for school runs, appointments, or family outings with
            our
            <strong className="pl-1">Campbelltown taxi service</strong>
          </>
        ),
      },
      {
        question: "Do you offer corporate transport services?",
        answer: (
          <>
            Yes, our
            <strong className="pl-1"> local taxi service Campbelltown </strong>
            handles office commutes, meetings, and corporate travel.
            Professional drivers ensure safe, on-time, and stress-free rides
            every time.
          </>
        ),
      },
      {
        question: "Is there a luxury transfer option?",
        answer: (
          <>
            Yes. Luxury vehicles provide comfort, privacy, and punctuality. Book
            a<strong className="pl-1"> Campbelltown taxi cab service</strong>{" "}
            for airport trips, VIP travel, or special occasions.
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.
          </>
        ),
      },
      {
        question: " Do you operate outside Campbelltown?",
        answer: (
          <>
            Yes. We cover Raby, Macarthur, Camden, Liverpool, and nearby
            suburbs. Find your
            <strong className="pl-1"> local taxi service near me </strong>
            at
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: " How can I contact Campbelltown Taxi & Maxi Cabs?",
        answer: (
          <>
            Call 1300 450 428, email silvercabscampbelltowntaxicabs@gmail.com,
            or visit{" "}
            <Link to={`/`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.au.
            </Link>{" "}
            Book your trusted
            <strong className="pl-1">Campbelltown taxi cab service </strong>
            today.
          </>
        ),
      },
    ],
  },
  "ambarvale-nsw": {
    pageTitle: "Ambarvale Taxi & Maxi Cabs | Reliable Local Taxi Service 24/7",
    metaDescription:
      "Enjoy safe, on-time travel with Ambarvale Taxi & Maxi Cabs – local drivers, clean vehicles. Book now for quick pickup & stress-free rides. 24/7 service",
    heroTitle: "Ambarvale Taxi & Maxi Cabs | Reliable Local Taxi Service 24/7",
    heroDescription: (
      <>
        Looking for <strong> Ambarvale Taxi & Maxi Cabs</strong> you can trust?
        You’re in the right place. We provide professional,
        <strong>24/7 local taxi service in Ambarvale</strong> and the
        surrounding Macarthur suburbs. Whether you need a{" "}
        <strong> maxi cab near me in Ambarvale,</strong>, a{" "}
        <strong>taxi service close to me in Ambarvale</strong> , or a{" "}
        <strong>local taxi cab service near me</strong>, we’ve got you covered.
        <br />
        Our fleet includes{" "}
        <strong>
          {" "}
          standard taxis, spacious maxi cabs, SUVs, premium vehicles, and
          wheelchair-accessible taxis
        </strong>
        . Every ride is clean, safe, and comfortable, making it perfect for
        families, corporate travelers, or groups. With{" "}
        <strong>experienced local drivers</strong>, you can relax knowing your
        journey will be smooth and timely.
        <br />
        We provide{" "}
        <strong>
          airport transfers, cruise terminal pickups, corporate transport, and
          everyday taxi services.
        </strong>{" "}
        From{" "}
        <strong>
          Ambarvale to Campbelltown, Narellan, and surrounding areas
        </strong>
        , we ensure you reach your destination safely and on time.
      </>
    ),
    bookingFormTitle: "Book  Taxi Sydney Airport Service in Ambarvale",
    locationSectionTitle:
      "Reliable Corporate Taxi Services Across Ambarvale & Surrounding Areas",
    locationSectionDescription: (
      <>
        Need a{" "}
        <strong> professional corporate taxi service in Ambarvale</strong>? Our{" "}
        <strong>Ambarvale taxi cab service</strong> is tailored for executives,
        corporate teams, and business travellers. You can count on{" "}
        <strong>Ambarvale Taxi & Maxi Cabs</strong> for{" "}
        <strong>
          time-critical journeys, inter-office Travel, and airport transfers.
        </strong>
        <br />
        We support local businesses throughout Ambarvale and the Macarthur
        region. Our{" "}
        <strong>modern fleet and streamlined booking system </strong>make
        corporate Travel efficient and dependable. Whether you need a{" "}
        <strong>maxi cab service in Ambarvale</strong> or a{" "}
        <strong>local taxi service near you</strong>, we prioritize punctuality,
        safety, and comfort for every passenger.
        <br />
        With <strong> experienced drivers and professional service</strong>, you
        can trust us for the <strong>Ambarvale taxi cab service</strong> that
        keeps your schedule on track.
      </>
    ),
    locationSectionImg: corporateTripsImg,
    serviceTitle: "Our Taxi and Maxi Services in Ambarvale",
    serviceSubtitle: (
      <>
        When you need a trusted ride,
        <strong> Ambarvale Taxi & Maxi Cabs</strong>is your go-to local service.
        Whether you’re travelling to work, the airport, or a family event, you
        can rely on our punctual, safe, and professional service. We understand
        your daily travel needs and the challenges of peak hours. With our
        modern fleet, experienced drivers, and local knowledge, you’ll never
        wait long for a taxi or maxi cab. Booking is easy online or over the
        phone, giving you transparent fares and stress-free Travel every time.
        Experience the best <strong> Ambarvale taxi service</strong> today.
      </>
    ),
    locationServices: {
      S001: {
        service_id: "S001",
        title: "Wedding Transfer",
        description: (
          <>
            Celebrate your big day stress-free. Our taxis and
            <strong className="pl-1">Ambarvale taxi cab services</strong> ensure
            on-time pickups, safe journeys, and assistance with luggage. Book
            your wedding transfer easily through our
            <Link
              to={`/services/wedding-transfer`}
              className="underline font-semibold  pl-1"
            >
              dedicated wedding transfer page.
            </Link>{" "}
          </>
        ),
        image: "/car.png",
        pathname: "/services/wedding-transfer",
      },

      S002: {
        service_id: "S002",
        title: "Luxury Transfer",
        description: (
          <>
            Travel in comfort with our luxury vehicles. Ideal for VIP trips,
            airport rides, or corporate events. Check out our
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold"
            >
              luxury transfer page.
            </Link>{" "}
          </>
        ),
        image: "/vehicle.png",
        pathname: "/services/luxury-transfer",
      },

      S003: {
        service_id: "S003",
        title: "Baby Seat Taxi Sydney",
        description: (
          <>
            Keep Your Little Ones Safe. We provide adjustable child seats for
            school runs, medical appointments, and family outings. Learn more at
            <Link
              to={`/services/baby-seat-taxi-sydney`}
              className="underline font-semibold pl-1"
            >
              Baby Seat Taxi.
            </Link>{" "}
          </>
        ),
        image: "/baby-seat.png",
        pathname: "/services/baby-seat-taxi-sydney",
      },

      S004: {
        service_id: "S004",
        title: "Corporate Transport Services",
        description: (
          <>
            Professional and punctual, our corporate taxis handle office
            commutes, meetings, and business trips. Visit
            <Link
              to={`/services/corporate-transport-services`}
              className="underline font-semibold pl-1"
            >
              corporate transport services.
            </Link>{" "}
          </>
        ),
        image: "/corporate.png",
        pathname: "/services/corporate-transport-services",
      },

      S005: {
        service_id: "S005",
        title: "Cruise Terminal Transfer",
        description: (
          <>
            Travel to or from cruise terminals without stress. Our
            <strong className="pl-1">local taxi service, Ambarvale</strong>{" "}
            ensures timely ensures timely arrivals and smooth luggage handling.
            Check the
            <Link
              to={`/services/cruise-terminal-transfer`}
              className="underline font-semibold pl-1"
            >
              cruise terminal transfer.
            </Link>{" "}
          </>
        ),
        image: "/ship.png",
        pathname: "/services/cruise-terminal-transfer",
      },

      S006: {
        service_id: "S006",
        title: "Event Transfer",
        description: (
          <>
            Arrive in style for concerts, parties, or weddings. Our
            <strong className="pl-1">Ambarvale taxi cab service</strong> handles
            manage your schedule efficiently. More info on
            <Link
              to={`/services/event-transfer`}
              className="underline font-semibold pl-1"
            >
              event transfer.
            </Link>{" "}
          </>
        ),
        image: "/event.png",
        pathname: "/services/event-transfer",
      },

      S007: {
        service_id: "S007",
        title: "Maxi Taxi Service",
        description: (
          <>
            Perfect for groups or families. Our
            <strong className="pl-1">
              maxi cab services in Ambarvale{" "}
            </strong>{" "}
            fit up to 12 passengers comfortably. Learn more at
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/users.png",
        pathname: "/services/maxi-taxi-service",
      },

      S008: {
        service_id: "S008",
        title: "Reliable Airport Transfers",
        description: (
          <>
            Never miss a flight with our
            <strong className="pl-1">
              Ambarvale taxi service, available close to you.{" "}
            </strong>{" "}
            On-time pickups, safe journeys, and luggage help make your trip
            hassle-free. Book an
            <Link
              to={`/services/book-taxi-sydney-airport`}
              className="underline font-semibold pl-1"
            >
              airport taxi service.
            </Link>{" "}
          </>
        ),
        image: "/airport.png",
        pathname: "/services/taxi-sydney-service",
      },

      S009: {
        service_id: "S009",
        title: "Corporate Trips",
        description: (
          <>
            Travel between offices or meetings with reliability and efficiency.
            Our
            <strong className="pl-1"> local taxi service</strong> ensures
            professionalism and comfort in your area. Explore
            <Link
              to={`/services/corporate-tips`}
              className="underline font-semibold pl-1"
            >
              corporate trips.
            </Link>{" "}
          </>
        ),
        image: "/briefcase.png",
        pathname: "/services/corporate-tips",
      },
    },
    fleetSectionTitle: "Executive Fleet Options by Ambarvale Taxi & Maxi Cabs",
    fleetSectionSubTitle:
      "Your ride matters. With Ambarvale Taxi & Maxi Cabs, you can choose vehicles to match your travel style, group size, or comfort needs. Our drivers know local routes well. From solo trips to group travel, our fleet guarantees safety, comfort, and timely arrivals. Whether you're looking for a quick local ride or a luxurious airport transfer, we have the perfect option for you.",

    fleetSectionVehicles: {
      1: {
        id: 1,
        name: "Easy Sedan",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Ideal for daily commuting or errands. Our sedans offer a reliable
            <strong className="pl-1">Ambarvale taxi service</strong> , providing
            comfort and convenience. Book now at
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              book a taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-easy-sedan.png",
      },

      2: {
        id: 2,
        name: "Luxury Vehicle",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Perfect for VIP travel or airport rides. Experience privacy,
            comfort, and punctuality with our
            <strong className="pl-1">Ambarvale taxi cab service</strong> Learn
            more at
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold pl-1"
            >
              luxury transfer
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-luxury-vehicle.png",
      },

      3: {
        id: 3,
        name: "Suv or Wagon",
        passengerCapacity: 7,
        bagsCapacity: 5,
        description: (
          <>
            Ideal for families or heavy luggage. Enjoy smooth rides with our
            <strong className="pl-1">taxi services near me </strong> iin
            Ambarvale. Explore our
            <Link to={`/fleet`} className="underline font-semibold pl-1">
              premium fleet.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-suv-wagon.png",
      },

      4: {
        id: 4,
        name: "Kia Carnival",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Perfect for larger groups. Our
            <strong className="pl-1">maxi cab near me in Ambarvale</strong>{" "}
            handles up to 12 passengers comfortably. Check
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-kia-carnival.png",
      },

      5: {
        id: 5,
        name: "Maxi Taxi",
        passengerCapacity: 11,
        bagsCapacity: 8,
        description: (
          <>
            Spacious and reliable for group travel. Our
            <strong className="pl-1">
              {" "}
              maxi cab services in Ambarvale
            </strong>{" "}
            are perfect for family trips and corporate outings. Learn more
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              here.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },

      6: {
        id: 6,
        name: "Wheelchair Taxi Service",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Fully equipped for safe Travel. Our
            <strong className="pl-1">
              {" "}
              Ambarvale service Campbelltown{" "}
            </strong>{" "}
            taxi service ensures easy boarding and professional assistance. Book
            a
            <Link
              to={`/services/wheelchair-accessible-taxi`}
              className="underline font-semibold pl-1"
            >
              wheelchair taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },
    },
    faqSectionTitle:
      "Frequently Asked Questions About Ambarvale  Taxi & Maxi Cabs",
    faqs: [
      {
        question: "How can I book a Ambarvale  taxi near me?",
        answer: (
          <>
            Call 1300 450 428 or book online at{" "}
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.
            </Link>{" "}
            campbelltowntaxicabs.com. Our{" "}
            <strong className="pl-1">Campbelltown taxi cab close to me</strong>{" "}
            service ensures fast, safe, and reliable pickups.
          </>
        ),
      },
      {
        question: "Do you provide Maxi Cab services in Ambarvale ?",
        answer: (
          <>
            Yes, our
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              maxi cab services Ambarvale
            </Link>{" "}
            accommodate up to 12 passengers. Perfect for families, group travel,
            and airport transfers with ample luggage space.
          </>
        ),
      },
      {
        question: "Are your taxis available 24/7?",
        answer: (
          <>
            Absolutely. Our
            <strong className="pl-1">
              {" "}
              Ambarvale taxi and cab services
            </strong>{" "}
            operate day and night, including weekends and holidays. You can rely
            on us whenever you need a ride..
          </>
        ),
      },
      {
        question: "Can I get a taxi with a baby seat?",
        answer: (
          <>
            Yes. Adjustable baby seats are available for safety. Travel
            comfortably for school runs, appointments, or family outings with
            our
            <strong className="pl-1">Ambarvale taxi service</strong>
          </>
        ),
      },
      {
        question: "Do you offer corporate transport services?",
        answer: (
          <>
            Yes, our
            <strong className="pl-1"> local taxi service Ambarvale </strong>
            handles office commutes, meetings, and corporate travel.
            Professional drivers ensure safe, on-time, and stress-free rides
            every time.
          </>
        ),
      },
      {
        question: "Is there a luxury transfer option?",
        answer: (
          <>
            Yes. Luxury vehicles provide comfort, privacy, and punctuality. Book
            a<strong className="pl-1"> Ambarvale taxi cab service</strong> for
            airport trips, VIP travel, or special occasions.
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.
          </>
        ),
      },
      {
        question: " Do you operate outside Ambarvale ?",
        answer: (
          <>
            Yes. We cover Raby, Macarthur, Camden, Liverpool, and nearby
            suburbs. Find your
            <strong className="pl-1"> local taxi service near me </strong>
            easily in our{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: " How can I contact Campbelltown Taxi & Maxi Cabs?",
        answer: (
          <>
            Call 1300 450 428, email silvercabscampbelltowntaxicabs@gmail.com,
            or visit{" "}
            <Link to={`/`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.au.
            </Link>{" "}
            Book your trusted
            <strong className="pl-1">Ambarvale taxi cab service </strong>
            today.
          </>
        ),
      },
    ],
  },
  "appin-nsw": {
    pageTitle: "24/7 Appin Taxi & Maxi Cabs for Local & Long-Distance Trips",
    metaDescription:
      "Enjoy smooth rides with Appin Taxi & Maxi Cabs – perfect for groups, airport trips, and daily travel. Book today for reliable service",
    heroTitle: "24/7 Appin Taxi & Maxi Cabs for Local & Long-Distance Trips",
    heroDescription: (
      <>
        Looking for <strong>Appin Taxi & Maxi Cabs</strong> you can trust?
        You’ve found the right service. We provide{" "}
        <strong>safe, professional, and 24/7 local taxi service Appin</strong>{" "}
        and surrounding Macarthur suburbs. Whether you need a{" "}
        <strong>maxi cab near me</strong>, a taxi service close to me Appin, or
        a <strong>local taxi cab service near me</strong>, we are ready for you.{" "}
        <br />
        Our fleet includes{" "}
        <strong>
          standard taxis, maxi cabs, SUVs, luxury vehicles, and
          wheelchair-accessible taxis
        </strong>
        , giving you flexible transport for families, groups, or corporate
        travel. Every ride is{" "}
        <strong>
          clean, comfortable, and driven by experienced local drivers
        </strong>
        , so you can relax. <br />
        We cover Appin, Campbelltown, Camden, and nearby suburbs. From Sydney
        Airport transfers, cruise terminal pickups, to everyday local taxi
        service, our team ensures your journey is smooth, timely, and
        stress-free. <br />
      </>
    ),
    bookingFormTitle: "Book  Taxi Sydney Airport Service in Appin",
    locationSectionTitle:
      "Appin Taxi & Maxi Cabs – Professional Corporate & Group Travel",
    locationSectionDescription: (
      <>
        Need
        <strong>reliable Appin taxi and cab services</strong>for work or group
        travel? Our
        <strong>Appin Taxi & Maxi Cabs </strong> provide
        <strong>corporate transport and maxi cab services Appin</strong>across
        the Macarthur region. Solo executives, teams, and groups can rely on our
        <strong>modern, well-maintained fleet</strong>
        and efficient booking system. We proudly support
        <strong>local Appin businesses,</strong> including offices, professional
        service firms, and manufacturing facilities. Our services cover
        <strong>
          {" "}
          airport transfers, inter-office travel, and time-sensitive corporate
          journeys,
        </strong>{" "}
        ensuring safety, comfort, and punctuality every time. With
        <strong>
          experienced drivers and a commitment to professional service
        </strong>
        , we are the trusted choice for{" "}
        <strong> taxi cab service near me, local taxi service Appin</strong>,
        and <strong>maxi cabs near me in Appin.</strong>
      </>
    ),
    locationSectionImg: corporateTripsImg,
    serviceTitle: "Our Taxi and Maxi Services in Appin",
    serviceSubtitle: (
      <>
        When you need a reliable ride,
        <strong> Appin Taxi & Maxi Cabs</strong>is here for you 24/7. Whether
        it’s a quick local trip, airport transfer, or long-distance journey, our
        professional drivers provide safe, timely, and comfortable rides. You
        can trust us to handle your luggage, schedule, and travel needs. With
        our modern fleet and local knowledge, you won’t experience long waits or
        unreliable service. Booking is fast online or by phone. Experience the
        most convenient <strong> Appin taxi service</strong> today, tailored for
        families, students, and professionals alike.
      </>
    ),
    locationServices: {
      S001: {
        service_id: "S001",
        title: "Wedding Transfer",
        description: (
          <>
            Travel stress-free on your big day. Our
            <strong className="pl-1">Appin taxi cab services</strong> ensure
            on-time arrivals, comfortable rides, and help with luggage. Book via
            our
            <Link
              to={`/services/wedding-transfer`}
              className="underline font-semibold  pl-1"
            >
              wedding transfer page.
            </Link>{" "}
          </>
        ),
        image: "/car.png",
        pathname: "/services/wedding-transfer",
      },

      S002: {
        service_id: "S002",
        title: "Luxury Transfer",
        description: (
          <>
            Enjoy VIP comfort for airport rides, corporate meetings, or special
            events. Our luxury vehicles provide privacy and style. Learn more at
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold"
            >
              luxury transfer page.
            </Link>{" "}
          </>
        ),
        image: "/vehicle.png",
        pathname: "/services/luxury-transfer",
      },

      S003: {
        service_id: "S003",
        title: "Baby Seat Taxi Sydney",
        description: (
          <>
            Keep your little one safe. We provide child seats for school trips,
            appointments, or family outings. Check
            <Link
              to={`/services/baby-seat-taxi-sydney`}
              className="underline font-semibold pl-1"
            >
              Baby Seat Taxi.
            </Link>{" "}
          </>
        ),
        image: "/baby-seat.png",
        pathname: "/services/baby-seat-taxi-sydney",
      },

      S004: {
        service_id: "S004",
        title: "Corporate Transport Services",
        description: (
          <>
            Punctual, professional drivers for office commutes, meetings, and
            business travel. Our{" "}
            <strong className="pl-1">local taxi service Appin </strong> ensures
            smooth corporate trips. See
            <Link
              to={`/services/corporate-transport-services`}
              className="underline font-semibold pl-1"
            >
              corporate transport services.
            </Link>{" "}
          </>
        ),
        image: "/corporate.png",
        pathname: "/services/corporate-transport-services",
      },

      S005: {
        service_id: "S005",
        title: "Cruise Terminal Transfer",
        description: (
          <>
            Travel stress-free to cruise terminals. Our Appin taxi cab service
            provides on-time pickups and luggage assistance. Visit
            <Link
              to={`/services/cruise-terminal-transfer`}
              className="underline font-semibold pl-1"
            >
              cruise terminal transfer.
            </Link>{" "}
          </>
        ),
        image: "/ship.png",
        pathname: "/services/cruise-terminal-transfer",
      },

      S006: {
        service_id: "S006",
        title: "Event Transfer",
        description: (
          <>
            Arrive on time for weddings, concerts, or parties. Our taxi service
            close to me Appin manages schedules efficiently. More info at
            <Link
              to={`/services/event-transfer`}
              className="underline font-semibold pl-1"
            >
              event transfer.
            </Link>{" "}
          </>
        ),
        image: "/event.png",
        pathname: "/services/event-transfer",
      },

      S007: {
        service_id: "S007",
        title: "Maxi Taxi Service",
        description: (
          <>
            Perfect for groups and family trips. Our maxi cab services Appin
            handle up to 12 passengers comfortably. Learn more at
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/users.png",
        pathname: "/services/maxi-taxi-service",
      },
      S008: {
        service_id: "S009",
        title: "Corporate Trips",
        description: (
          <>
            Reliable rides between offices and meetings. Our
            <strong className="pl-1">
              {" "}
              local taxi cab service near me{" "}
            </strong>{" "}
            provides safe and professional trips. Explore
            <Link
              to={`/services/corporate-tips`}
              className="underline font-semibold pl-1"
            >
              corporate trips.
            </Link>{" "}
          </>
        ),
        image: "/briefcase.png",
        pathname: "/services/corporate-tips",
      },
      S009: {
        service_id: "S008",
        title: "Reliable Airport Transfers",
        description: (
          <>
            Never miss a flight. Our
            <strong className="pl-1">
              Appin taxi service, available close to you.{" "}
            </strong>{" "}
            service ensures on-time pickups, safe rides, and luggage help. Book
            at
            <Link
              to={`/services/book-taxi-sydney-airport`}
              className="underline font-semibold pl-1"
            >
              airport taxi service.
            </Link>{" "}
          </>
        ),
        image: "/airport.png",
        pathname: "/services/taxi-sydney-service",
      },
    },
    fleetSectionTitle: "Executive Fleet Options by Appin Taxi & Maxi Cabs",
    fleetSectionSubTitle:
      "Your ride is important. With Appin Taxi & Maxi Cabs, you can select vehicles to suit your travel style, group size, or comfort needs. Our local drivers know every route, ensuring timely pickups and smooth journeys. From solo trips to group travel, our fleet covers all your needs. Whether it’s a quick city ride or a luxury airport transfer, we provide reliable, safe, and comfortable options.",

    fleetSectionVehicles: {
      1: {
        id: 1,
        name: "Easy Sedan",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Ideal for daily travel, errands, or short trips. Our
            <strong className="pl-1">Appin taxi service</strong> provides
            reliable, stress-free rides. Book at
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              book a taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-easy-sedan.png",
      },

      2: {
        id: 2,
        name: "Luxury Vehicle",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Travel in style for airport transfers or special events. Experience
            privacy and comfort with our
            <strong className="pl-1">Appin taxi cab service</strong> See
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold pl-1"
            >
              luxury transfer
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-luxury-vehicle.png",
      },

      3: {
        id: 3,
        name: "Suv or Wagon",
        passengerCapacity: 7,
        bagsCapacity: 5,
        description: (
          <>
            Perfect for families or luggage-heavy trips. Our
            <strong className="pl-1">taxi services near me </strong> iin Appin
            are spacious and comfortable. Learn more at
            <Link to={`/fleet`} className="underline font-semibold pl-1">
              premium fleet.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-suv-wagon.png",
      },

      4: {
        id: 4,
        name: "Kia Carnival",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Great for large groups. Our
            <strong className="pl-1">maxi cab near me in Appin </strong> seats
            up to 12 passengers comfortably. Check
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-kia-carnival.png",
      },

      5: {
        id: 5,
        name: "Maxi Taxi",
        passengerCapacity: 11,
        bagsCapacity: 8,
        description: (
          <>
            Reliable and spacious for group travel. Our
            <strong className="pl-1"> maxi cab services in Appin</strong> suit
            family trips, corporate outings, and airport journeys. Learn more
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              here.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },

      6: {
        id: 6,
        name: "Wheelchair Taxi Service",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Fully equipped for safe, accessible travel. Our
            <strong className="pl-1"> local taxi service Appin</strong> helps
            seniors and mobility-challenged passengers. Book at
            <Link
              to={`/services/wheelchair-accessible-taxi`}
              className="underline font-semibold pl-1"
            >
              wheelchair taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },
    },
    faqSectionTitle: "Frequently Asked Questions About Appin  Taxi & Maxi Cabs",
    faqs: [
      {
        question: "How can I book a Appin  taxi near me?",
        answer: (
          <>
            Call 1300 450 428 or book online at{" "}
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.
            </Link>{" "}
            campbelltowntaxicabs.com. Our{" "}
            <strong className="pl-1">Campbelltown taxi cab close to me</strong>{" "}
            service ensures fast, safe, and reliable pickups.
          </>
        ),
      },
      {
        question: "Do you provide Maxi Cab services in Appin ?",
        answer: (
          <>
            Yes, our
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              maxi cab services Appin
            </Link>{" "}
            accommodate up to 12 passengers. Perfect for families, group travel,
            and airport transfers with ample luggage space.
          </>
        ),
      },
      {
        question: "Are your taxis available 24/7?",
        answer: (
          <>
            Absolutely. Our
            <strong className="pl-1"> Appin taxi and cab services</strong>{" "}
            operate day and night, including weekends and holidays. You can rely
            on us whenever you need a ride..
          </>
        ),
      },
      {
        question: "Can I get a taxi with a baby seat?",
        answer: (
          <>
            Yes. Adjustable baby seats are available for safety. Travel
            comfortably for school runs, appointments, or family outings with
            our
            <strong className="pl-1">Appin taxi service</strong>
          </>
        ),
      },
      {
        question: "Do you offer corporate transport services?",
        answer: (
          <>
            Yes, our
            <strong className="pl-1"> local taxi service Appin </strong>
            handles office commutes, meetings, and corporate travel.
            Professional drivers ensure safe, on-time, and stress-free rides
            every time.
          </>
        ),
      },
      {
        question: "Is there a luxury transfer option?",
        answer: (
          <>
            Yes. Luxury vehicles provide comfort, privacy, and punctuality. Book
            a<strong className="pl-1"> Appin taxi cab service</strong> for
            airport trips, VIP travel, or special occasions.
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.
          </>
        ),
      },
      {
        question: " Do you operate outside Appin ?",
        answer: (
          <>
            Yes. We cover Raby, Macarthur, Camden, Liverpool, and nearby
            suburbs. Find your
            <strong className="pl-1"> local taxi service near me </strong>
            easily in our{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: " How can I contact Campbelltown Taxi & Maxi Cabs?",
        answer: (
          <>
            Call 1300 450 428, email silvercabscampbelltowntaxicabs@gmail.com,
            or visit{" "}
            <Link to={`/`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.au.
            </Link>{" "}
            Book your trusted
            <strong className="pl-1">Appin taxi cab service </strong>
            today.
          </>
        ),
      },
    ],
  },
  "currans-hills-nsw": {
    pageTitle:
      "Local Currans Hills Taxi & Maxi Cabs | Easy Booking & Fair Pricing",
    metaDescription:
      "Reliable Currans Hills Taxi & Maxi Cabs - 24/7 local taxi service, Maxi Cabs, baby seats, and corporate rides. Book online or call today for stress-free travel.",
    heroTitle:
      "Local Currans Hills Taxi & Maxi Cabs | Easy Booking & Fair Pricing",
    heroDescription: (
      <>
        Looking for <strong>Currans Hills Taxi & Maxi Cabs</strong> you can rely
        on? You’ve come to the right place. We offer professional,{" "}
        <strong>24/7 local taxi service in Currans Hills</strong> and nearby
        Macarthur suburbs. Whether you need a{" "}
        <strong>Currans Hills taxi cab close to me</strong>, a local taxi
        service near me, or maxi cabs near me in Currans Hills, we’ve got you
        covered. <br />
        Our fleet includes standard taxis, spacious maxi cabs, SUVs, luxury
        vehicles, and wheelchair-accessible taxis. You can choose the right
        option for families, groups, or business travel. Every ride is clean,
        safe, and comfortable, with experienced local drivers who know the area
        well. <br />
        We specialise in airport transfers, corporate travel, cruise terminal
        pickups, and everyday taxi services. From Currans Hills to Campbelltown,
        Narellan, and surrounding suburbs, we make sure your journey is smooth,
        timely, and stress-free.
      </>
    ),
    bookingFormTitle: "Book Baby Seat Taxi Sydney in Currans Hills ",
    locationSectionTitle:
      "Currans Hills Taxi & Maxi Cab Services | Corporate, Group & Airport Transfers",
    locationSectionDescription: (
      <>
        Need dependable Currans Hills taxi and cab services for business or
        group travel? Our Currans Hills Taxi & Maxi Cabs provide reliable
        transport for corporate clients, solo travellers, and families. Our
        modern, well-maintained fleet and easy booking system make scheduling
        simple and stress-free. <br />
        We partner with local Currans Hills businesses, including professional
        offices and manufacturing facilities, offering corporate taxi solutions
        that improve daily operations. Whether you need a maxi cab services
        Currans Hills, taxi service close to me Currans Hills, or local taxi cab
        service near me, we ensure punctual, safe, and comfortable rides. <br />
        Operating 24/7, our services cover airport transfers, corporate travel,
        group bookings, and urgent trips. With professional drivers and clean
        vehicles, you can trust us for a smooth, reliable journey every time.
        Currans Hills Taxi & Maxi Cabs is your go-to service for airport,
        corporate, and group travel in Currans Hills and the Macarthur region.
      </>
    ),
    locationSectionImg: corporateTripsImg,
    serviceTitle: "Our Taxi and Maxi Services in Appin",
    serviceSubtitle: (
      <>
        When you need a fast and reliable ride,
        <strong> Currans Hills Taxi & Maxi Cabs</strong>iis your go-to local
        service. Whether you’re heading to work, school, the airport, or a
        family event, you can rely on our professional, safe, and punctual
        drivers. We understand your daily travel needs and peak-hour challenges.
        Our modern fleet, local knowledge, and friendly drivers ensure you never
        wait long for a taxi or maxi cab. With simple phone or online bookings,
        transparent fares, and stress-free journeys, our
        <strong> Currans Hills taxi service </strong> is the most convenient
        choice for residents and visitors.
      </>
    ),
    locationServices: {
      S001: {
        service_id: "S001",
        title: "Wedding Transfer",
        description: (
          <>
            Enjoy a smooth and stylish ride on your special day. Our Currans
            Hills taxi cab services handle luggage, pick you up on time, and
            ensure a stress-free journey. Book now on our
            <Link
              to={`/services/wedding-transfer`}
              className="underline font-semibold  pl-1"
            >
              wedding transfer page.
            </Link>{" "}
          </>
        ),
        image: "/car.png",
        pathname: "/services/wedding-transfer",
      },

      S002: {
        service_id: "S002",
        title: "Luxury Transfer",
        description: (
          <>
            Travel in comfort and style. Perfect for VIP trips, corporate
            travel, or airport rides. Learn more at
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold"
            >
              luxury transfer page.
            </Link>{" "}
          </>
        ),
        image: "/vehicle.png",
        pathname: "/services/luxury-transfer",
      },

      S003: {
        service_id: "S003",
        title: "Baby Seat Taxi Sydney",
        description: (
          <>
            Keep your child safe with adjustable seats. Our Currans Hills taxi
            cab service is ideal for school runs, medical trips, and family
            outings. Book at
            <Link
              to={`/services/baby-seat-taxi-sydney`}
              className="underline font-semibold pl-1"
            >
              Baby Seat Taxi.
            </Link>{" "}
          </>
        ),
        image: "/baby-seat.png",
        pathname: "/services/baby-seat-taxi-sydney",
      },

      S004: {
        service_id: "S004",
        title: "Corporate Transport Services",
        description: (
          <>
            Reliable rides for office staff, meetings, and business trips. Our
            local taxi service Currans Hills ensures professional and punctual
            service. See
            <Link
              to={`/services/corporate-transport-services`}
              className="underline font-semibold pl-1"
            >
              corporate transport services.
            </Link>{" "}
          </>
        ),
        image: "/corporate.png",
        pathname: "/services/corporate-transport-services",
      },

      S005: {
        service_id: "S005",
        title: "Cruise Terminal Transfer",
        description: (
          <>
            Travel to or from cruise terminals with ease. Our Currans Hills taxi
            and cab services are timely, safe, and luggage-friendly. Details at
            <Link
              to={`/services/cruise-terminal-transfer`}
              className="underline font-semibold pl-1"
            >
              cruise terminal transfer.
            </Link>{" "}
          </>
        ),
        image: "/ship.png",
        pathname: "/services/cruise-terminal-transfer",
      },

      S006: {
        service_id: "S006",
        title: "Event Transfer",
        description: (
          <>
            Arrive on time for parties, concerts, or weddings. Our Currans Hills
            taxi service handles group rides efficiently. Learn more at
            <Link
              to={`/services/event-transfer`}
              className="underline font-semibold pl-1"
            >
              event transfer.
            </Link>{" "}
          </>
        ),
        image: "/event.png",
        pathname: "/services/event-transfer",
      },

      S007: {
        service_id: "S007",
        title: "Maxi Taxi Service",
        description: (
          <>
            Spacious taxis for families or groups. Our maxi cab services Currans
            Hills accommodate up to 12 passengers comfortably. Explore
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/users.png",
        pathname: "/services/maxi-taxi-service",
      },
      S008: {
        service_id: "S009",
        title: "Corporate Trips",
        description: (
          <>
            Travel between offices or meetings smoothly. Our local taxi cab
            service near me ensures professional, reliable service. Learn more
            at
            <Link
              to={`/services/corporate-tips`}
              className="underline font-semibold pl-1"
            >
              corporate trips.
            </Link>{" "}
          </>
        ),
        image: "/briefcase.png",
        pathname: "/services/corporate-tips",
      },
      S009: {
        service_id: "S008",
        title: "Reliable Airport Transfers",
        description: (
          <>
            Our Currans Hills taxi cab close to me service guarantees on-time
            pickups, safe rides, and luggage help. Book your airport taxi at
            <Link
              to={`/services/book-taxi-sydney-airport`}
              className="underline font-semibold pl-1"
            >
              airport taxi service.
            </Link>{" "}
          </>
        ),
        image: "/airport.png",
        pathname: "/services/taxi-sydney-service",
      },
    },
    fleetSectionTitle:
      "Executive Fleet Options by Currans Hills Taxi & Maxi Cabs",
    fleetSectionSubTitle:
      "Your ride matters. With Currans Hills Taxi & Maxi Cabs, you choose vehicles that match your comfort, group size, and travel style. Our local drivers know Currans Hills inside out. From solo trips to family or group travel, our fleet ensures safe, smooth, and timely journeys. Whether it’s a quick city ride or a luxury airport transfer, you’ll always find a vehicle to suit your needs.",

    fleetSectionVehicles: {
      1: {
        id: 1,
        name: "Easy Sedan",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Perfect for daily commuting, errands, or short trips. Enjoy a
            comfortable and punctual Currans Hills taxi service. Book online at
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              book a taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-easy-sedan.png",
      },

      2: {
        id: 2,
        name: "Luxury Vehicle",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Ideal for VIP travel, airport rides, or special events. Experience
            comfort and privacy with our Currans Hills taxi cab service. See
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold pl-1"
            >
              luxury transfer
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-luxury-vehicle.png",
      },

      3: {
        id: 3,
        name: "Suv or Wagon",
        passengerCapacity: 7,
        bagsCapacity: 5,
        description: (
          <>
            Great for families or travelers with luggage. Smooth rides with our
            taxi services near me in Currans Hills. Learn more at
            <Link to={`/fleet`} className="underline font-semibold pl-1">
              premium fleet.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-suv-wagon.png",
      },

      4: {
        id: 4,
        name: "Kia Carnival",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Perfect for larger groups. Our maxi cab near me in Currans Hills can
            handle up to 12 passengers comfortably. Check
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-kia-carnival.png",
      },

      5: {
        id: 5,
        name: "Maxi Taxi",
        passengerCapacity: 11,
        bagsCapacity: 8,
        description: (
          <>
            Spacious and reliable for family trips or corporate outings. Our
            maxi cab services Currans Hills guarantee comfort and punctuality.
            More info
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              here.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },

      6: {
        id: 6,
        name: "Wheelchair Taxi Service",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Fully equipped vehicles for seniors and passengers with mobility
            needs. Our local taxi service Currans Hills ensures safe, smooth
            travel. Book at
            <Link
              to={`/services/wheelchair-accessible-taxi`}
              className="underline font-semibold pl-1"
            >
              wheelchair taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },
    },
    faqSectionTitle:
      "Frequently Asked Questions About Currans Hills Taxi & Maxi Cabs",
    faqs: [
      {
        question: "How can I book a Currans Hills  taxi near me?",
        answer: (
          <>
            Call 1300 450 428 or book online at{" "}
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.
            </Link>{" "}
            campbelltowntaxicabs.com. Our{" "}
            <strong className="pl-1">Campbelltown taxi cab close to me</strong>{" "}
            service ensures fast, safe, and reliable pickups.
          </>
        ),
      },
      {
        question: "Do you provide Maxi Cab services in Currans Hills ?",
        answer: (
          <>
            Yes, our
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              maxi cab services Currans Hills
            </Link>{" "}
            accommodate up to 12 passengers. Perfect for families, group travel,
            and airport transfers with ample luggage space.
          </>
        ),
      },
      {
        question: "Are your taxis available 24/7?",
        answer: (
          <>
            Absolutely. Our
            <strong className="pl-1">
              {" "}
              Currans Hills taxi and cab services
            </strong>{" "}
            operate day and night, including weekends and holidays. You can rely
            on us whenever you need a ride..
          </>
        ),
      },
      {
        question: "Can I get a taxi with a baby seat?",
        answer: (
          <>
            Yes. Adjustable baby seats are available for safety. Travel
            comfortably for school runs, appointments, or family outings with
            our
            <strong className="pl-1">Currans Hills taxi service</strong>
          </>
        ),
      },
      {
        question: "Do you offer corporate transport services?",
        answer: (
          <>
            Yes, our
            <strong className="pl-1"> local taxi service Currans Hills </strong>
            handles office commutes, meetings, and corporate travel.
            Professional drivers ensure safe, on-time, and stress-free rides
            every time.
          </>
        ),
      },
      {
        question: "Is there a luxury transfer option?",
        answer: (
          <>
            Yes. Luxury vehicles provide comfort, privacy, and punctuality. Book
            a<strong className="pl-1"> Currans Hills taxi cab service</strong>{" "}
            for airport trips, VIP travel, or special occasions.
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.
          </>
        ),
      },
      {
        question: " Do you operate outside Currans Hills ?",
        answer: (
          <>
            Yes. We cover Raby, Macarthur, Camden, Liverpool, and nearby
            suburbs. Find your
            <strong className="pl-1"> local taxi service near me </strong>
            easily in our{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: "How can I contact Campbelltown Taxi & Maxi Cabs?",
        answer: (
          <>
            Call 1300 450 428, email silvercabscampbelltowntaxicabs@gmail.com,
            or visit{" "}
            <Link to={`/`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.au.
            </Link>{" "}
            Book your trusted
            <strong className="pl-1">Currans Hills taxi cab service </strong>
            today.
          </>
        ),
      },
    ],
  },
  "claymore-nsw": {
    pageTitle:
      "Claymore Taxi & Maxi Cabs Services – 24/7 Safe & Comfortable Rides",
    metaDescription:
      "Choose Claymore Taxi & Maxi Cabs for reliable transport, spacious maxi cabs, and 24/7 availability. Call today and enjoy smooth, affordable local travel.",
    heroTitle: "Claymore Taxi & Maxi Cabs: 24/7 Airport & Local Transfers",
    heroDescription: (
      <>
        Looking for Claymore Taxi & Maxi Cabs you can rely on? You’re in the
        right place. We provide fast, safe, and reliable taxi services across
        Claymore and the wider Macarthur region. Whether you need a Claymore
        taxi cab close to me, a maxi cab near me in Claymore, or a local taxi
        service near me, we’ve got you covered. <br />
        Our fleet includes standard taxis, spacious maxi cabs, SUVs, and
        wheelchair-accessible vehicles. Every ride is clean, comfortable, and
        stress-free. Families, groups, solo travellers, and corporate passengers
        trust us for daily travel, station drop-offs, medical appointments, and
        airport transfers. Our experienced drivers know Claymore routes inside
        out and ensure on-time journeys every time. <br />
        You can count on us for Claymore taxi and cab services anywhere in
        Claymore, Campbelltown, and surrounding Macarthur suburbs. From short
        local trips to long-distance rides, we make your travel simple, safe,
        and convenient.
      </>
    ),
    bookingFormTitle: "Book Baby Seat Taxi Sydney in Claymore ",
    locationSectionTitle:
      "Trusted Claymore Taxi for Airport Transfers and Corporate Travel | 24/7 Taxi & Maxi Cab Services",
    locationSectionDescription: (
      <>
        Need professional Claymore taxi cab service for corporate or airport
        travel? Claymore Taxi & Maxi Cabs is your trusted choice. Our maxi cab
        services Claymore cater to solo travellers, corporate teams, and groups.
        You can book taxi service near me or taxi cab service near me easily
        with our streamlined system. <br />
        We proudly support local Claymore businesses, including offices,
        professional services, and manufacturing facilities. Our 24/7 services
        cover Sydney Airport transfers, inter-office travel, group outings, and
        special events. <br />
        With experienced drivers, clean vehicles, and a focus on comfort and
        safety, your journey is always smooth. Whether you need a maxi cab near
        me, taxi service close to me, or local taxi cab service near me, we
        provide dependable, timely service every time.
      </>
    ),
    locationSectionImg: corporateTripsImg,
    serviceTitle: "Our Taxi and Maxi Services in Claymore",
    serviceSubtitle: (
      <>
  When you need a dependable ride, 
        <strong> Claymore  Taxi & Maxi Cabs</strong> is your trusted local option. Whether you’re travelling to work, the airport, or family events, our drivers ensure timely, safe, and stress-free journeys. We understand your daily commuting challenges, peak-hour delays, and the importance of comfort. With our modern fleet, professional drivers, and local knowledge, you can rely on our
        <strong> Claymore  taxi service </strong> . Book easily online or by phone, enjoy transparent fares, and experience hassle-free travel. Our goal is to provide <strong>local taxi service Claymore</strong> you can trust anytime, day or night.

      </>
    ),
    locationServices: {
      S001: {
        service_id: "S001",
        title: "Wedding Transfer",
        description: (
          <>
          Enjoy a worry-free wedding day with our Claymore taxi cab service. We arrive on time, help with luggage, and ensure your guests reach safely. More details on
            <Link
              to={`/services/wedding-transfer`}
              className="underline font-semibold  pl-1"
            >
              wedding transfer page.
            </Link>{" "}
          </>
        ),
        image: "/car.png",
        pathname: "/services/wedding-transfer",
      },

      S002: {
        service_id: "S002",
        title: "Luxury Transfer",
        description: (
          <>
         Travel in style for corporate trips or special occasions. Our luxury vehicles offer privacy, comfort, and punctual service. Check
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold"
            >
              luxury transfer page.
            </Link>{" "}
          </>
        ),
        image: "/vehicle.png",
        pathname: "/services/luxury-transfer",
      },

      S003: {
        service_id: "S003",
        title: "Baby Seat Taxi Sydney",
        description: (
          <>
           Ensure your child’s safety with our adjustable baby seats. Ideal for school runs, hospital visits, or family outings with Claymore taxi service. Learn more
            <Link
              to={`/services/baby-seat-taxi-sydney`}
              className="underline font-semibold pl-1"
            >
              Baby Seat Taxi.
            </Link>{" "}
          </>
        ),
        image: "/baby-seat.png",
        pathname: "/services/baby-seat-taxi-sydney",
      },

      S004: {
        service_id: "S004",
        title: "Corporate Transport Services",
        description: (
          <>
         Reliable and professional rides for business trips, meetings, or airport transfers. Our local taxi cab service near me ensures smooth, stress-free travel. Explore
            <Link
              to={`/services/corporate-transport-services`}
              className="underline font-semibold pl-1"
            >
              corporate transport services.
            </Link>{" "}
          </>
        ),
        image: "/corporate.png",
        pathname: "/services/corporate-transport-services",
      },

      S005: {
        service_id: "S005",
        title: "Cruise Terminal Transfer",
        description: (
          <>
          Start or finish your cruise on time. Our Claymore taxi cab close to me service handles luggage and schedules efficiently. See 
            <Link
              to={`/services/cruise-terminal-transfer`}
              className="underline font-semibold pl-1"
            >
              cruise terminal transfer.
            </Link>{" "}
          </>
        ),
        image: "/ship.png",
        pathname: "/services/cruise-terminal-transfer",
      },

      S006: {
        service_id: "S006",
        title: "Event Transfer",
        description: (
          <>
           Attend concerts, weddings, or parties without worry. Our Claymore taxi service manages your schedule for prompt, comfortable rides. More info 
            <Link
              to={`/services/event-transfer`}
              className="underline font-semibold pl-1"
            >
              event transfer.
            </Link>{" "}
          </>
        ),
        image: "/event.png",
        pathname: "/services/event-transfer",
      },

      S007: {
        service_id: "S007",
        title: "Maxi Taxi Service",
        description: (
          <>
           Travelling with a large group? Our maxi cab services Claymore accommodate up to 12 passengers. Perfect for family trips or corporate outings. Learn more
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/users.png",
        pathname: "/services/maxi-taxi-service",
      },
      S008: {
        service_id: "S009",
        title: "Corporate Trips",
        description: (
          <>
            

 Get reliable office or business travel with our professional drivers. Our local taxi service Claymore ensures comfort, safety, and punctuality. Explore
            <Link
              to={`/services/corporate-tips`}
              className="underline font-semibold pl-1"
            >
              corporate trips.
            </Link>{" "}
          </>
        ),
        image: "/briefcase.png",
        pathname: "/services/corporate-tips",
      },
      S009: {
        service_id: "S008",
        title: "Reliable Airport Transfers",
        description: (
          <>
          Never miss a flight. Our Claymore taxi cab close to me service offers on-time pickups, safe journeys, and luggage assistance. Book now via
            <Link
              to={`/services/book-taxi-sydney-airport`}
              className="underline font-semibold pl-1"
            >
              airport taxi service.
            </Link>{" "}
          </>
        ),
        image: "/airport.png",
        pathname: "/services/taxi-sydney-service",
      },
    },
    fleetSectionTitle:
      "Executive Fleet Options by Claymore Taxi & Maxi Cabs",
    fleetSectionSubTitle:
      "Your ride matters. With Claymore Taxi & Maxi Cabs, you can choose vehicles to suit your style, group size, and comfort needs. Our drivers know local routes well, ensuring safe, smooth, and timely trips. Whether you need a quick city ride, a luxury airport transfer, or a group journey, our fleet has the right option for you. Every vehicle is clean, modern, and maintained for your peace of mind.",

    fleetSectionVehicles: {
      1: {
        id: 1,
        name: "Easy Sedan",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Ideal for everyday travel. Our Claymore taxi service offers comfort, reliability, and short wait times. Book easily at 
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              book a taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-easy-sedan.png",
      },

      2: {
        id: 2,
        name: "Luxury Vehicle",
        passengerCapacity: 4,
        bagsCapacity: 2,
        description: (
          <>
            Perfect for VIP travel, airport rides, or special occasions. Enjoy privacy, comfort, and punctuality with our Claymore taxi cab service. Learn more at
            <Link
              to={`/services/luxury-transfer`}
              className="underline font-semibold pl-1"
            >
              luxury transfer
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-luxury-vehicle.png",
      },

      3: {
        id: 3,
        name: "Suv or Wagon",
        passengerCapacity: 7,
        bagsCapacity: 5,
        description: (
          <>
           Spacious and reliable for families or luggage-heavy trips. Find our taxi services near me in Claymore for safe rides. Explore
            <Link to={`/fleet`} className="underline font-semibold pl-1">
              premium fleet.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-suv-wagon.png",
      },

      4: {
        id: 4,
        name: "Kia Carnival",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Perfect for groups or family travel. Our maxi cab near me in Claymore fits up to 12 passengers comfortably. Check 
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              Maxi Taxi Service.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-kia-carnival.png",
      },

      5: {
        id: 5,
        name: "Maxi Taxi",
        passengerCapacity: 11,
        bagsCapacity: 8,
        description: (
          <>
            Spacious rides for large groups. Our maxi cab services Claymore handle family trips, events, and corporate travel efficiently. Learn more 
            <Link
              to={`/services/maxi-taxi-service`}
              className="underline font-semibold pl-1"
            >
              here.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },

      6: {
        id: 6,
        name: "Wheelchair Taxi Service",
        passengerCapacity: 7,
        bagsCapacity: 8,
        description: (
          <>
            Fully equipped for safe travel. Our Claymore taxi cab service ensures accessible rides for seniors and passengers with mobility needs. Book via
            <Link
              to={`/services/wheelchair-accessible-taxi`}
              className="underline font-semibold pl-1"
            >
              wheelchair taxi.
            </Link>{" "}
          </>
        ),
        image: "/campbelltown-maxi-taxi.png",
      },
    },
    faqSectionTitle:
      "Frequently Asked Questions About Claymore Taxi & Maxi Cabs",
    faqs: [
      {
        question: "How can I book a Claymore  taxi near me?",
        answer: (
          <>
            Call 1300 450 428 or book online at{" "}
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.
            </Link>{" "}
            campbelltowntaxicabs.com. Our{" "}
            <strong className="pl-1">Campbelltown taxi cab close to me</strong>{" "}
            service ensures fast, safe, and reliable pickups.
          </>
        ),
      },
      {
        question: "Do you provide Maxi Cab services in Claymore ?",
        answer: (
          <>
            Yes, our
            <Link to={`/book-a-taxi`} className="underline font-semibold pl-1">
              maxi cab services Claymore
            </Link>{" "}
            accommodate up to 12 passengers. Perfect for families, group travel,
            and airport transfers with ample luggage space.
          </>
        ),
      },
      {
        question: "Are your taxis available 24/7?",
        answer: (
          <>
            Absolutely. Our
            <strong className="pl-1">
              {" "}
              Claymore taxi and cab services
            </strong>{" "}
            operate day and night, including weekends and holidays. You can rely
            on us whenever you need a ride..
          </>
        ),
      },
      {
        question: "Can I get a taxi with a baby seat?",
        answer: (
          <>
            Yes. Adjustable baby seats are available for safety. Travel
            comfortably for school runs, appointments, or family outings with
            our
            <strong className="pl-1">Claymore taxi service</strong>
          </>
        ),
      },
      {
        question: "Do you offer corporate transport services?",
        answer: (
          <>
            Yes, our
            <strong className="pl-1"> local taxi service Claymore </strong>
            handles office commutes, meetings, and corporate travel.
            Professional drivers ensure safe, on-time, and stress-free rides
            every time.
          </>
        ),
      },
      {
        question: "Is there a luxury transfer option?",
        answer: (
          <>
            Yes. Luxury vehicles provide comfort, privacy, and punctuality. Book
            a<strong className="pl-1"> Claymore taxi cab service</strong>{" "}
            for airport trips, VIP travel, or special occasions.
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.
          </>
        ),
      },
      {
        question: " Do you operate outside Claymore ?",
        answer: (
          <>
            Yes. We cover Raby, Macarthur, Camden, Liverpool, and nearby
            suburbs. Find your
            <strong className="pl-1"> local taxi service near me </strong>
            easily in our{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: "Are wheelchair-accessible taxis available?",
        answer: (
          <>
            Yes. Our
            <strong className="pl-1">local taxi cab service near me</strong>
            ensures safe, accessible, and comfortable rides for seniors or
            passengers with mobility challenges.{" "}
            <Link to={`/area-covered`} className="underline font-semibold pl-1">
              service areas.
            </Link>{" "}
          </>
        ),
      },
      {
        question: "How can I contact Campbelltown Taxi & Maxi Cabs?",
        answer: (
          <>
            Call 1300 450 428, email silvercabscampbelltowntaxicabs@gmail.com,
            or visit{" "}
            <Link to={`/`} className="underline font-semibold pl-1">
              campbelltowntaxicabs.com.au.
            </Link>{" "}
            Book your trusted
            <strong className="pl-1">Claymore taxi cab service </strong>
            today.
          </>
        ),
      },
    ],
  },
};
