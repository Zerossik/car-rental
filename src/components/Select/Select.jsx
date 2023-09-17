import { useEffect, useRef, useState } from 'react';
import icon from '../../img/svg/icon.svg';
import {
  StyledSelect,
  StyledBtn,
  StyledContent,
  StyledItem,
} from './Select.styled';

const Select = ({ option = [], placeholder, setOpt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = evt => {
      if (isOpen && ref.current && !ref.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const handlerIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handlerSelectedOption = ({ target }) => {
    if (target.textContent === 'All brand') {
      setSelectedOption('');
      setOpt('');
      setIsOpen(false);
      return;
    }
    setSelectedOption(target.textContent);
    setOpt(target.textContent);
    setIsOpen(false);
  };

  return (
    <StyledSelect ref={ref}>
      <StyledBtn onClick={handlerIsOpen}>
        {!selectedOption
          ? placeholder && typeof placeholder === 'string'
            ? placeholder
            : 'Select'
          : selectedOption}
        {/* {placeholder} */}

        <svg width={16} height={16}>
          <use href={`${icon}#icon-chevron-down`}></use>
        </svg>
      </StyledBtn>
      {isOpen && (
        <StyledContent>
          {option.map((el, index) => (
            <li key={index}>
              <StyledItem onClick={handlerSelectedOption}>{el}</StyledItem>
            </li>
          ))}
        </StyledContent>
      )}
    </StyledSelect>
  );
};
export default Select;
