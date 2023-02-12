import './App.scss';
import qrcode from './assets/images/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div className='qr-code'>
        <div className='qr-code__img'>
          <img src={qrcode} alt='QR-code' />
        </div>
        <p>
          Improve your front-end skills by building projects
        </p>

        <p>
          Scan the QR code to visit Frontend Mentor and take
          your coding skills to the next level
        </p>

      </div>
      <div className='author-links'>
        <p>Challenge by <a href='https://www.frontendmentor.io/'> Frontend Mentor</a></p>
        <p>Designed by <a href='https://github.com/Mjas360'> Mjas360</a></p>
      </div>
    </div>
  );
}

export default App;
