import Header from '../components/Header';

export default function CheckoutPage({ overlay, setOverlay }) {
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