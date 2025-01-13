import './About.css';
import bugisPhoto from '../assets/bugis.jpg';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Visitor Information </h1>
        <img src={bugisPhoto} className="bugis-photo" alt="Photo of Bugis MRT" />

      </header>

      <section className="about-visit-info">

        <p>
          <strong>Address:</strong> 178 Waterloo Street, Singapore 187964
        </p>
        <p>
          <strong>Nearest MRT Station:</strong> Bugis MRT Station (DT14/EW12), a 5-minute walk from Exit B.
        </p>
        <p>
          <strong>Opening Hours:</strong> 7:00 AM – 5:30 PM daily
        </p>
        <p>
          Visitors are encouraged to maintain a respectful demeanor within the temple grounds. Photography inside the prayer halls is not permitted out of respect for the worshippers.
        </p>
      </section>

      <section className="about-history">
        <h2>Historical Significance</h2>
        <p>
          Kwan Im Thong Hood Cho Temple is one of Singapore's most prominent and cherished places of worship, dedicated to the Goddess of Mercy (Guanyin). Located in the vibrant Bugis area, this historic temple attracts devotees and visitors from around the world. It serves as a sanctuary of peace, hope, and spiritual guidance for all who enter its gates.
        </p>
        <p>
          Established in 1884, Kwan Im Thong Hood Cho Temple has stood as a symbol of Singapore’s multicultural heritage and spiritual diversity. Over the decades, it has played a significant role in the lives of both locals and visitors seeking blessings, guidance, and comfort.
        </p>
        <p>
          The temple's rich history is reflected in its traditional Chinese architectural style, featuring intricately carved roof details, vibrant murals, and statues that honor Buddhist traditions. It was gazetted as a national monument in 2001, cementing its place as a cultural treasure.
        </p>
      </section>

      <section className="about-traditions">
        <h2>Cultural Practices and Traditions</h2>
        <ul>
          <li>
            <strong>Blessings and Prayers: </strong> 
            The temple is renowned for its practice of <em>lot divination</em>, where devotees seek answers to their personal concerns through the drawing of sacred lots.
          </li>
          <li>
            <strong>Chunti Mantra: </strong> 
            Chunti Guanyin is the main deity worshipped in this temple. Chunti Guanyin is one of the six incarnations of Guanyin to save humanity. The chanting of the <em>Chunti Mantra 準提咒</em>, a sacred chant believed to remove obstacles, purify the mind, and foster compassion.
          </li>
          <li>
            <strong>Festivals and Events: </strong> 
            The temple is especially vibrant during major Buddhist festivals, such as <em>Vesak Day</em> and the <em>Birthday of Guanyin</em>, when devotees gather to offer prayers and participate in charitable activities.
          </li>

        </ul>
      </section>

      <footer className="about-footer">
        <p>Thank you for visiting Kwan Im Thong Hood Cho Temple. May you find peace and blessings in your journey.</p>
      </footer>
    </div>
  );
};

export default About;
