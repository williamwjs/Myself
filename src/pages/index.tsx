import SmallCard from '../components/SmallCard';

const Home = () => (
  <div className="home">
    <h1>My experience</h1>
    <div className="card-grid">
      <SmallCard key="id" title="test" slug="test" />;
    </div>
  </div>
);

export default Home;
