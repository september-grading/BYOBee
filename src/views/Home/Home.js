import './Home.css';
import { useEffect, useState } from 'react';
import { fetchBees } from '../../services/bees';
import BeeCard from '../../components/BeeCard/BeeCard';

export default function Home() {
  const [bees, setBees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBees();
      setBees(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1 className="loader">Loading...</h1>;
  return (
    <div className="home">
      <div className="home-intro">
        <h2 className="home-title">Get to know the bees in your backyard!</h2>
        <p className="home-info">
          Did you know there are over 500 bee species in Oregon? Use this guide to identify the bees
          you see, and then build your virtual collection by reporting those encounters. Enjoy
          connecting with the natural world while providing valuable data to pollinator conservation
          efforts! Click a bee to get started.
        </p>
      </div>
      <div className="bee-list">
        {bees.map((bee) => (
          <BeeCard key={bee.id} bee={bee} />
        ))}
      </div>
    </div>
  );
}
