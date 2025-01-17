import qrPhoto from '../assets/paynow.jpg';
import './Donations.css'; // Import CSS for styling

const Donations = () => {
  return (
    <section className="donations-section">
      <h2>Donations 捐款</h2>

      <div className="donations-content">
        <p>
          Contributions go towards the maintenance of the site. May your generosity bring blessings and prosperity.
        </p>
        <img src={qrPhoto} className="qr" alt="PayNow QR Code" />
      </div>

      <p className="note">
        All contributions are deeply appreciated.
      </p>
    </section>
  );
};

export default Donations;
