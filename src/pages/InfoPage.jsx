import { useLocation } from 'react-router-dom';
import '../css/InfoPage.css';
import BackButton from '../components/BackButton';

const InfoPage = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <div className="header">
        <BackButton href={"/"} text={"Back"} />
      </div>
      <div className='info-page'>
        <div className="images">
          {state.images && state.images.map((element, index) => (
            <img src={`${element}`} key={index} alt={`Image ${index}`} />
          ))}
        </div>
        <div className="info">
          <h1>{state.tittle}</h1>
          <p>{state.para}</p>
        </div>
      </div>
    </>
  )
}

export default InfoPage;