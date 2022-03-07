import './detailedpopup.css';
import ReactDom from 'react-dom';

const DetailedPopUp = ({ isModalOpen, closeModal }) => {
  if (isModalOpen !== true)
    return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay' />
      <div className='popup'>
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default DetailedPopUp