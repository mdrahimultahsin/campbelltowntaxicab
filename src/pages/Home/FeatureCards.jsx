import { FaPlane,  FaCalendarAlt, FaTaxi, FaGift } from "react-icons/fa";
import Container from "../../shared/Container";
import { Link } from "react-router";

const FeatureCards = () => {
  return (
    <section className="mt-20 bg-secondary text-white py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">

          {/* Airport */}
          <Link to={`/services/book-taxi-sydney-airport`} className="flex flex-col items-center text-center py-6 
            border-r border-b-2 border-white md:border-b-0 md:border-r-2">
            <FaPlane className="text-4xl mb-3" />
            <p className="text-lg">Airport Transportation</p>
          </Link>

          {/* Car Service */}
          <Link to={`/services/wedding-transfer`} className="flex flex-col items-center text-center py-6 
            border-b-2 border-white md:border-b-0 md:border-r-2">
            <FaGift  className="text-4xl mb-3" />
            <p className="text-lg">Wedding Transfer</p>
          </Link>

          {/* Events */}
          <Link to={`/services/wedding-transfer`} className="flex flex-col items-center text-center py-6 
            border-r border-white md:border-r-2">
            <FaCalendarAlt className="text-4xl mb-3" />
            <p className="text-lg">Event Transfer</p>
          </Link>

          {/* Taxi */}
          <Link to={`/book-a-taxi`} className="flex flex-col items-center text-center py-6">
            <FaTaxi className="text-4xl mb-3" />
            <p className="text-lg">Taxi Service</p>
          </Link>

        </div>
      </Container>
    </section>
  );
};

export default FeatureCards;
