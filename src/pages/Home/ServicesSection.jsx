import {Link, useLoaderData} from "react-router";
import Container from "../../shared/Container";
const servicesLinks = [
  {
    id: 6,
    label: "Wedding Transfer",
    pathname: "/services/wedding-transfer",
  },
    {
    id: 10,
    label: "Luxury Transfer",
    pathname: "/services/luxury-transfer",
  },
  {
    id: 2,
    label: "Baby Seat Taxi Sydney",
    pathname: "/services/baby-seat-taxi-sydney",
  },

 {
    id: 4,
    label: "Corporate Transport Services",
    pathname: "/services/corporate-transport-services",
  },
 {
    id: 5,
    label: "Cruise Terminal Transfer",
    pathname: "/services/cruise-terminal-transfer",
    desc: "Timely transfers to cruise terminals.",
  },
 {
    id: 7,
    label: "Event Transfer",
    pathname: "/services/event-transfer",
  },
{
    id: 9,
    label: "Maxi Taxi Service",
    pathname: "/services/maxi-taxi-service",
  },
  {
    id: 11,
    label: "Taxi Sydney Service",
    pathname: "/services/taxi-sydney-service",
  },
{
    id: 13,
    label: "Corporate Trips",
    pathname: "/services/corporate-tips",
  },



  
  
];

const ServicesSection = ({
  sectionTitle,
  serviceSubtitle,
  className,
  locationServices,
}) => {
  const serviceData = useLoaderData() || [];

  const getServicePath = (title) => {
  const match = servicesLinks.find(
    (link) => link.label.toLowerCase() === title.toLowerCase()
  );
  return match ? match.pathname : "#";
};
  return (
    <section className={`pt-30 mb-30 ${className}`}>
      <Container>
        <div className="text-center">
          <h2 className="section-title">
            {sectionTitle
              ? sectionTitle
              : "Our Taxi and Maxi Services in Campbelltown"}
          </h2>
          <p className="mt-4 text-base text-accent md:text-xl text-center max-w-6xl mx-auto leading-relaxed">
            {serviceSubtitle
              ? serviceSubtitle
              : "At Campbelltown Taxi Cabs, we offer reliable and efficient taxi and maxi services for all your travel needs in Campbelltown and the surrounding areas. Whether you need a quick ride to Sydney Airport,a comfortable maxi taxi for group travel, or a special luxury transfer, we've got you covered."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {locationServices
            ? locationServices.map((service) => (
                <Link
                 to={getServicePath(service.title)}
                  key={service.service_id}
                  className="bg-light px-8 py-5 rounded-xl border-b-10 border-primary cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title + "Campbelltown Taxi Cabs"}
                    className="w-1/3 mb-8"
                  />
                  <h3 className="text-2xl md:text-3xl font-semibold my-3">
                    {service.title}
                  </h3>
                  <p className="text-accent md:text-lg">
                    {service.description}
                  </p>
                </Link>
              ))
            : serviceData.map((service) => (
                <Link
                 to={getServicePath(service.title)}
                  key={service.service_id}
                  className="bg-light px-8 py-5 rounded-xl border-b-10 border-primary cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title + "Campbelltown Taxi Cabs"}
                    className="w-1/3 mb-8"
                  />
                  <h3 className="text-2xl md:text-3xl font-semibold my-3">
                    {service.title}
                  </h3>
                  <p className="text-accent md:text-lg">
                    {service.description}
                  </p>
                </Link>
              ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
