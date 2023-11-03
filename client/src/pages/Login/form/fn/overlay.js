export default function handleOverlay(e, setTarget, setShowOverlay) {
  if (e.key) {
    if (e.key !== 'Enter') {
      return;
    }
  }
  setShowOverlay((o) => ({ ...o, resetPass: !o.resetPass }));
  if (e.target.type !== 'button') setTarget((t) => (t = e.target));
}
