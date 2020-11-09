export default function ShouldRender({condition, children}) {
  if (condition) {
    return children;
  } else return null;
}