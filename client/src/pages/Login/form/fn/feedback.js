export default function handleFeedback(
  pending,
  feedback,
  showOverlay,
  signUpPath
) {
  if (!pending && !showOverlay) {
    if (signUpPath) return feedback.up;
    else return feedback.in;
  } else return feedback.in;
}
