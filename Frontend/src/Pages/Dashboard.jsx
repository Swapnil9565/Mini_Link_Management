import React from 'react'
import { useState } from 'react';
import styles from "./Dashboard.module.css"
const Dashboard = () => {
 
    const [totalClicks, setTotalClicks] = useState(1234);
    const [dateWiseClicks, setDateWiseClicks] = useState([
      { date: '21-01-25', clicks: 1234 },
      { date: '20-01-25', clicks: 1140 },
      { date: '19-01-25', clicks: 134 },
      { date: '18-01-25', clicks: 34 },
    ]);
    const [clickDevices, setClickDevices] = useState([
      { device: 'Mobile', clicks: 134 },
      { device: 'Desktop', clicks: 40 },
      { device: 'Tablet', clicks: 3 },
    ]);
  
    return (
      <div className={styles.container}>
        <div className={styles.totalClicks}>
          <span className={styles.title}>Total Clicks</span>
          <span className={styles.value}>{totalClicks}</span>
        </div>
  
        <div className={styles.chartContainer}>
          <div className={styles.chart}>
            <h3 className={styles.chartTitle}>Date-wise Clicks</h3>
            <ul className={styles.chartList}>
              {dateWiseClicks.map((data) => (
                <li key={data.date} className={styles.chartItem}>
                  <span className={styles.date}>{data.date}</span>
                  <div className={styles.bar} style={{ width: `${(data.clicks / totalClicks) * 100}%` }} />
                  <span className={styles.value}>{data.clicks}</span>
                </li>
              ))}
            </ul>
          </div>
  
          <div className={styles.chart}>
            <h3 className={styles.chartTitle}>Click Devices</h3>
            <ul className={styles.chartList}>
              {clickDevices.map((data) => (
                <li key={data.device} className={styles.chartItem}>
                  <span className={styles.device}>{data.device}</span>
                  <div className={styles.bar} style={{ width: `${(data.clicks / totalClicks) * 100}%` }} />
                  <span className={styles.value}>{data.clicks}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Dashboard