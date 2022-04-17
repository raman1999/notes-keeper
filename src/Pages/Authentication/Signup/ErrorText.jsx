export default function ErrorText({ errorName }) {
  return (
    <div
      style={{
        display: errorName ? "inline-block" : "none",
      }}
      className="error pt-1 text-red-600 max-w-[20rem]"
    >
      <span className="">
        <i className="fas fa-exclamation-circle"></i>
      </span>
      {errorName}
    </div>
  );
}
