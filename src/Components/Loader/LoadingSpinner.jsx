import * as Loader from "react-loader-spinner";
export function LoadingSpinner() {
  return (
    <Loader.TailSpin type="Oval" color="yellow" height={100} width={100} />
  );
}
