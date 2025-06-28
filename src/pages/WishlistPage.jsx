import Header from '../components/Header';

export default function WishlistPage({ overlay, setOverlay }) {
  return (
    <>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <div>Checkout Test</div>
    </>
  )
}