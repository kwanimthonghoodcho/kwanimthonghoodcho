import templePhoto from '../assets/temple.jpg';

const Home = () => {
    return (
      <section>
        <img src={templePhoto} className="photo-temple" alt="Kwan Im Thong Hood Cho Temple" />
        <p>
          千處祈求千處應，苦海常作度人舟
        </p>
        <p>
          The goddess of mercy answers every prayer everywhere and anywhere; she is often the ferry in the sea of suffering.
        </p>
      </section>
    );
  };
  
  export default Home;
  