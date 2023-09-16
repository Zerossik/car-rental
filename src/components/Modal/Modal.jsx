import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, StyledModal, ModalBtn } from './Modal.styled';
import icon from '../../img/svg/icon.svg';

const Modal = ({ children, openModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <StyledModal>
        <ModalBtn onClick={() => openModal()}>
          <svg width={24} height={24}>
            <use href={`${icon}#icon-close`} />
          </svg>
        </ModalBtn>
        {children}
      </StyledModal>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;
