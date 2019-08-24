import React, { Component } from 'react';
import './Accordion.scss';
import AccordionList from './AccordionList';
import accordionData from '../../../constants/accordion.json'

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  onToggleButton = currentIndex => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: currentIndex === activeIndex ? null : currentIndex,
    })
  }

  render() {
    const { activeIndex } = this.state;
    return(
      <div className="accordion-container">
        <div className="accordian-header">
          <h2>ReactJS Accordion</h2>
        </div>
        <div className="accordian-body">
          {accordionData.map((accordion, index) => {
            return (
              <AccordionList 
                currentIndex={index} 
                activeIndex={activeIndex}  
                accordion={accordion} 
                onToggleButton={() => this.onToggleButton(index)} 
                />
            );}
          )}
        </div>
      </div>
    );
  }
}

export default Accordion;
