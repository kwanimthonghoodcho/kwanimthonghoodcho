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
    number: 24,
    title: "An unstable disrespectful person is liken to a flower whose petals have begun to fail. If you hope to continue, struggle hard. Many tasks still left after the struggle.",
    description: "Do not be bothered either a subject is true or false. Be alert in what you do. To succeed, keep a firm desire.",
  },
  {
    number: 25,
    title: "Success is here after worries. As your heart and mind is at peace, so will you see success. A Benefactor will assist you. Your arguments are proven right.",
    description: "Sickness will be cured. What you are attempting will produce a well giving sweet water.",
  },
  {
    number: 44,
    title: "Two people having a fight, a draw ensures. But before any of them slips no progress for the other. One must be careful not to make mistake and concentrate.",
    description: "To perform any task involves risk. To overcome the next person, or to lose, one must possess some skill over him, or hiim over you.",
  },
  {
    number: 48,
    title: "A fledgeling soon grows to be a mighty bird. It then flies to heights, other birds could not attain.",
    description: "One is lucky to get this prediction. Every good thing comes naturally.",
  },
  {
    number: 51,
    title: "Days are longer after Autumn. People tend to get sick. Providence all knowing, breathe forth a gentle breeze.",
    description: "What you hoped to achieve, do so. As you go on, good times come. Do not be reckless and observe caution.",
  },
  {
    number: 57,
    title: "News is like the wind. Food and apparel are beautiful. Do not brood about the past. Your thoughts are in agreement with me.",
    description: "For what you are praying, all is well. Do cultivate constant effort. Keep to the right way. One is liken to a child meeting mother.",
  },
  {
    number: 67,
    title: "A single strand of gold thread gladen one's heart. one is at one with the universe. Be a fair man so that one's status will heighten and one's achievement will be accepted and understood.",
    description: "One is at peace, be fair. One should prosper. Do not be greedy and seek your contentment to enjoy earth's peace.",
  },
  {
    number: 68,
    title: "A good home where peace and happiness abound. By deeds of merits will they achieve peace. The time is right for marrying. The farm produces a good crop of silk and harvest. A remedy to cure all illness.",
    description: "The day is cool and fine with myriad of flowers blooming. Why do you fret when what you seek will soon be yours?",
  },
  {
    number: 69,
    title: "The peony plant is bare now, yet, from a single bud will spring forth new shoots and new blooms of unmatched beauty next season.",
    description: "One's aim will be accomplished although it seems futile at first. One shoots an arrow to reach the void, but one could not succeed. Finally, one does reach it.",
  },
  {
    number: 73,
    title: "A good home where peace and happiness abound. By deeds of merits will they achieve peace. The time is right for marrying. The farm produces a good crop of silk and harvest. A remedy to cure all illness.",
    description: "The season took a good turn. Plenty of good things. One day a great happening occur to even reach Heaven.",
  },
  {
    number: 78,
    title: "Water put on fire to boil. It is medium hot just nice to drink. For travelling or new approach, it is the right time as one gains approval and will have the means.",
    description: "One is free. Sickness will be cured by a skilled doctor. Luck is around.",
  },
  {
    number: 86,
    title: "Myriads of flowers bloom to fill the house. From 10,000 li becomes gold for you. A carp jumps through three Dragon gate to become a Dragon. A sudden burst of good men issue from the earth.",
    description: "The king bestows one with honour. A very poor person receive a priceless treasure. Be content, this is indeed a good prediction.",
  },
  {
    number: 89,
    title: "One is well within and without. A valuable jade in the rock. A benefactor points the way to obtain it. Everyone rejoices at your good fortune.",
    description: "A benefactor points out how to achieve it. Heed him. To achieve the prossession of the jade will surely gladden one's heart.",
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
