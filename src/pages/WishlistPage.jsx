import Header from '../components/Header';

export default function WishlistPage({ overlay, setOverlay }) {
  return (
    <>
      <title>Wishlist</title>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <div>Checkout Test</div>
    </>
  )
}