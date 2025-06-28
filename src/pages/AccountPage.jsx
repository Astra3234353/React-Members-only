import Header from '../components/Header';

export default function AccountPage({ overlay, setOverlay }) {
  return (
    <>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <div>Account Test</div>
    </>
  )
}