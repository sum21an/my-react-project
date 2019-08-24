import React, { component } from 'react';
import './AccordionList.scss';

const AccordionList = props => {
  const { onToggleButton, accordion, currentIndex, activeIndex } = props;
  const { button, content, image } = accordion;
  return(
    <div className="accordion-list-container">
      <button className={`btn ${currentIndex === activeIndex && 'border-radius'}`} onClick={onToggleButton}>
        <span>Accordion {button}</span> <span>{currentIndex === activeIndex ? 'Collapsed' : 'Expanded'}</span>
      </button>
      <div className={`accordion-list-body ${currentIndex === activeIndex && 'show'}`}>
        <div className="accordion-content">
          <p>{content}</p>
        </div>
        <div className="image-wrapper">
          <img
            className="image-wrapper__img"
            alt="random"
            src={image}
          />
        </div>
      </div>
    </div>
  );
}

export default AccordionList;
