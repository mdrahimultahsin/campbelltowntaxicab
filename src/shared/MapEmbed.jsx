import Container from "./Container";

const MapEmbed = ({mapSrc}) => {
  return (
        <Container>

        
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sydney Airport Map"
      />
    </div></Container>
  );
};

export default MapEmbed;
