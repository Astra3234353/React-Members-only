import Header from '../components/Header';

export default function AccountPage({ overlay, setOverlay }) {
  return (
    <>
      <title>Account</title>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <div>Account Test</div>
    </>
  )
}