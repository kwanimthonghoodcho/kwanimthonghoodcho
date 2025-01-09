import './Lots.css'; // Import the CSS file for styling

const lotsData = [
  {
    number: 2,
    title: "A baby whale is dependent soon after birth. When it is in full growth, it becomes independent and roam the ocean.",
    description: "Be patient. Act as your are capable. Success will follow.",
  },
  {
    number: 8,
    title: "A pine tree grow more beautiful as it ages. No natural element such as wind, rain, snow could harm it. Besides, its wood is excellent for beam construction. To receive this chiam is a good omen.",
    description: "The coast is clear. Your deeds please people. Your efforts get good return. Joy, peace and stability for the family.",
  },
  {
    number: 18,
    title: "The sun sets in the west. The moon rises in turn. Monks and Tradesman understood the cycle that is so from the beginning of time. People of various trade is content with their lot.",
    description: "Do not worry. Be firm and receive success. Like a well-aimed arrow, it meets the target.",
  },

  {
    number: 20,
    title: "The spring is here, yet it still rains. When the rain stops, joy comes. The sun and moon gradually rises. The old gives way to the new. To see through this is like going through the Dragon gate. The God and Buddha aid you.",
    description: "The situation is right. Proceed. It is just the beginning.",
  },
];

const Lots = () => {
  return (
    <section className="lots-section">
      <h2>Goddess of Mercy Lots 观音签</h2>
      <p>
        The temple offers a unique tradition of divination using the Goddess of Mercy lots.
        Below is a list of the 100 sacred lots along with their meanings and guidance.
      </p>
      <div className="lots-container">
        {lotsData.map((lot) => (
          <div key={lot.number} className="lot-card">
            <h3>Lot {lot.number}: {lot.title}</h3>
            <p>{lot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lots;
