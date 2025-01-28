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
      shortLink: 'https://cajaf',
      remarks: 'campaign2',
      clicks: 5,
      status: 'Inactive',
    },
    {
      date: 'Jan 14, 2025 07:43',
      originalLink: 'https://www.travhsshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhanfabbfabfabssssssss',
      shortLink: 'https://c',
      remarks: 'campaign3',
      clicks: 5,
      status: 'Inactive',
    },
  ]);

  return (
    <div className={styles.LinksPage}>
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
            <td className={styles.cell}>{row.shortLink}<i class="fa-regular fa-copy"></i>:</td>
            <td className={styles.cell}>{row.remarks}</td>
            <td className={styles.cell}>{row.clicks}</td>
            <td className={styles.cell}>{row.status}</td>
            <td className={styles.cell}>
              <i class="fa-solid fa-pencil"></i>
              <i class="fa-solid fa-trash"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        
    </div>
  );
}

export default LinksPage;