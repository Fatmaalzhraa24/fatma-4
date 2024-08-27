import '../css/BackButton.css';

const BackButton = ({ href, text }) => {
  return <a className='back-button' href={href}>{text}</a>
}

export default BackButton;