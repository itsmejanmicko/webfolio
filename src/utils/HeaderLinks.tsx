import { NavLink } from "react-router-dom";

export default function HeaderLinks({
  title,
  path,
  isActive,
}: {
  title: string;
  path: string;
  isActive: string;
}) {
  const isCurrent = isActive === path;

  return (
    <NavLink to={path}>
      <li
        className={`${
          isCurrent ? " text-black/50 text-white" : "text-white hover:text-white/50"
        } cursor-pointer`}
      >
        {title}
      </li>
    </NavLink>
  );
}
