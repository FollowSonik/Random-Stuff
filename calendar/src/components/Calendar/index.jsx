import React from 'react';
import './index.css';

export default class Calendar extends React.Component {
  static defaultProps = {
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    monthNames: ['Январь', 'Ферваль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;

    return (
      <div className="calendar">
        <header>
          <button>{'<'}</button>
          <select>
            {monthNames.map((name, index) => {
              return <option key={name} value={index}>{name}</option>
            })}
          </select>
          <select></select>
          <button>{'>'}</button>
        </header>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}