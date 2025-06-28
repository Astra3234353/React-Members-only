import Header from '../components/Header';

export default function CheckoutPage({ overlay, setOverlay }) {
  return (
    <>
      <title>Checkout</title>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <div>Checkout Test</div>
    </>
  )
}