import { Link } from "react-router-dom";

export function LabelCard({ label }) {
  return (
    <Link to={`${label}`} key={label} className="sm:w-full">
      <div className="label-card">{label}</div>
    </Link>
  );
}
[];
