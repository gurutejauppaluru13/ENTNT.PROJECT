const addCommunication = () => {
  // Logic for adding communication
  const newComm = { date: '2025-01-02', method: 'Email', notes: 'Sent email for follow-up' };
  setCommunications([...communications, newComm]);
};