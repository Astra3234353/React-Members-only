import Header from '../components/Header';

export default function SearchPage({ overlay, setOverlay }) {
  return (
    <>
      <title>Search</title>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <div>Checkout Test</div>
    </>
  )
}