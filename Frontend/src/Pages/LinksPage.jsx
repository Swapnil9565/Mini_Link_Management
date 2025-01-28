import React, { useState } from 'react';
import styles from './LinksPage.module.css'; 

function LinksPage() {
  const [data, setData] = useState([
    {
      date: 'Jan 14, 2025 16:30',
      originalLink: 'https://www.trav',
      shortLink: 'https://c',
      remarks: 'campaign1',
      clicks: 5,
      status: 'Active',
    },
    {
      date: 'Jan 14, 2025 05:45',
      originalLink: 'https://www.trav',
      shortLink: 'https://c',
      remarks: 'campaign2',
      clicks: 5,
      status: 'Inactive',
    },
    {
      date: 'Jan 14, 2025 07:43',
      originalLink: 'https://www.trav',
      shortLink: 'https://c',
      remarks: 'campaign3',
      clicks: 5,
      status: 'Inactive',
    },
  ]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>Date</th>
          <th className={styles.header}>Original Link</th>
          <th className={styles.header}>Short Link</th>
          <th className={styles.header}>Remarks</th>
          <th className={styles.header}>Clicks</th>
          <th className={styles.header}>Status</th>
          <th className={styles.header}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.date}>
            <td className={styles.cell}>{row.date}</td>
            <td className={styles.cell}>{row.originalLink}</td>
            <td className={styles.cell}>{row.shortLink}</td>
            <td className={styles.cell}>{row.remarks}</td>
            <td className={styles.cell}>{row.clicks}</td>
            <td className={styles.cell}>{row.status}</td>
            <td className={styles.cell}>
              <button className={styles.actionButton}>Edit</button>
              <button className={styles.actionButton}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LinksPage;