<h3>Overdue Communications</h3>
<ul>
  {overdueCommunications.map((comm, index) => (
    <li key={index}>{comm.date} - {comm.method}</li>
  ))}
</ul>

<h3>Today's Communications</h3>
<ul>
  {todayCommunications.map((comm, index) => (
    <li key={index}>{comm.date} - {comm.method}</li>
  ))}
</ul>