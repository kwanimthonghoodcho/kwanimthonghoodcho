import './Lots.css'; // Import the CSS file for styling

const lotsData = [
  {
    number: 2,
    title: "A baby whale is dependent soon after birth. When it is in full growth, it becomes independent and roam the ocean.",
    description: "Be patient. Act as your are capable. Success will follow.",
  },
  {
    number: 6,
    title: "A gorge where even a good flyer bird would not fly into, unless it seeks to die.",
    description: "A matyr is indeed rare. One must first die before one can be called on. Be prepared for the impossible if you seek to undertake what you are hoping to do. Worrying and thoughts tend to confuse. Tranquil mind will suceed. Success if achieve is great.",
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
  {
    number: 21,
    title: "Yin and Yang in perfect harmony. Heaven agrees. Bride meets groom in matrimony. The strong complement the weak.",
    description: "Do as you plan. In marriage a male offspring, fortune and crops increase.",
  },
  {
    number: 68,
    title: "A good home where peace and happiness abound. By deeds of merits will they achieve peace. The time is right for marrying. The farm produces a good crop of silk and harvest. A remedy to cure all illness.",
    description: "The day is cool and fine with myriad of flowers blooming. Why do you fret when what you seek will soon be yours?",
  },
  {
    number: 86,
    title: "Myriads of flowers bloom to fill the house. From 10,000 li becomes gold for you. A carp jumps through three Dragon gate to become a Dragon. A sudden burst of good men issue from the earth.",
    description: "The king bestows one with honour. A very poor person receive a priceless treasure. Be content, this is indeed a good prediction.",
  }
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
