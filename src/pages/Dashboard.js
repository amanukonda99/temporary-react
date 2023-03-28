const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
      <p>{user?.email}</p>
    </section>
  );
};
export default Dashboard;
