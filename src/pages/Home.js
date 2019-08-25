import React, { Component } from "react";
import DayOfWeekCard from '../components/DayOfWeekCard';
import './styles/Home.scss';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./GroceryList";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log(this.props.fullWeekInfo);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-planner-cards'>
            <div className='planner-card'>
              {
                days.map(day => <DayOfWeekCard value={day} mealInfo={this.props.fullWeekInfo[day.toLowerCase()][0]}/>)
              }
            </div>
          </div>
          <div className='grocery-list-button-container'>
            <PDFDownloadLink
              document={<PdfDocument data={this.props.fullWeekInfo} />}
              fileName="grocerylist.pdf"
              className="grocery-list-button"
            >
              Get grocery list!
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    );
  }
}