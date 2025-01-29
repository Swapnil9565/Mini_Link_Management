import React from 'react'
import styles from "./Analytics.module.css"
import { useState } from 'react';
const Analytics = () => {
  const [data, setData] = useState([
{
timestamp: 'Jan 14, 2025 16:30',
originalLink: 'https://www.travelwiththejoneses.com',
shortLink: 'https://cuvette.io/Bn41aCOlnxj',
ipAddress: '192.158.1.38',
userDevice: 'Android',
},
{
timestamp: 'Jan 14, 2025 6:30',
originalLink: 'https://www.travelwiththejoneses.com',
shortLink: 'https://cuvette.io/Bn41aCOlnxj',
ipAddress: '192.158.1.38',
userDevice: 'Chrome',
},
{
timestamp: 'Jan 14, 2025 8:30',
originalLink: 'https://www.travelwiththejoneses.com',
shortLink: 'https://cuvette.io/Bn41aCOlnxj',
ipAddress: '192.158.1.38',
userDevice: 'ios',
},
]);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>Timestamp</th>
          <th className={styles.header}>Original Link</th>
          <th className={styles.header}>Short Link</th>
          <th className={styles.header}>ip address</th>
          <th className={styles.header}>User Device</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.timestamp}>
            <td className={styles.cell}>{row.timestamp}</td>
            <td className={styles.cell}>{row.originalLink}</td>
            <td className={styles.cell}>{row.shortLink}</td>
            <td className={styles.cell}>{row.ipAddress}</td>
            <td className={styles.cell}>{row.userDevice}</td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}

export default Analytics