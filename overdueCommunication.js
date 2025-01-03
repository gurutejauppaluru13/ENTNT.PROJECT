const overdueCommunications = communications.filter(
  (comm) => new Date(comm.date) < new Date()
);

const todayCommunications = communications.filter(
  (comm) => new Date(comm.date).toDateString() === new Date().toDateString()
);