import qrPhoto from '../assets/paynow.jpg';
import './Donations.css'; // Import CSS for styling

const Donations = () => {
  return (
    <section className="donations-section">
      <h2>Donations 捐款</h2>

      <div className="donations-content">
        <p>
          Scan the PayNow QR code below if you wish to make a contribution to support the upkeep of this sacred space, community initiatives, and the teachings of wisdom and kindness. May your generosity bring blessings and prosperity.
        </p>
        <img src={qrPhoto} className="qr" alt="PayNow QR Code" />
      </div>

      <p className="note">
        Please include your name in the payment reference for blessings. All contributions are deeply appreciated.
      </p>
    </section>
  );
};

export default Donations;
