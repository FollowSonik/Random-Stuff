import React from 'react';
import './index.css';

export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    monthNames: ['Январь', 'Ферваль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    onChange: Function.prototype,
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null,
  };

  handlePrevMonthButtonClick = () => { };
  handleNextMonthButtonClick = () => { };

  handleSelectChange = () => { };
  handleDayClick = date => {
    console.log(date);
    this.setState({ selectedDate: date });
    this.props.onChange(date);
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const monthData = [
      [void 0, void 0, new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), void 0, void 0, void 0],
    ];

    return (
      <div className="calendar">
        <header>
          <button>{'<'}</button>
          <select>
            {monthNames.map((name, index) => {
              return <option key={name} value={index}>{name}</option>
            })}
          </select>
          <select>
            {years.map(year => {
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
          <button>{'>'}</button>
        </header>
        <table>
          <thead>
            <tr>
              {weekDayNames.map(name => {
                return <th key={name}>{name}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {monthData.map((week, index) => {
              return <tr key={index} className="week">
                {week.map((date, index) => {
                  return date ?
                    <td
                      key={index}
                      className="day"
                      onClick={() => this.handleDayClick(date)}
                    >{date.getDate()}</td> :
                    <td
                      key={index}
                    ></td>
                })}
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}