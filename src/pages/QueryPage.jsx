import { useParams } from 'react-router';
import Header from '../components/Header';
import SeasonEvent from '../components/SeasonEvent';

export default function QueryPage({ overlay, setOverlay }) {
  let { query } = useParams();

  return (
    <>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <SeasonEvent />
      <div>
        <p>Displaying results for {query}...</p>
      </div>
    </>
  )
}