import { BookmarkSquareIcon, UserIcon } from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { name: "Links", href: "/admin", icon: BookmarkSquareIcon },
  { name: "Mi Plaza", href: "/admin/profile", icon: UserIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  };

  return (
    <div className="mb-6 max-w-xl mx-auto">
      {/* Select para móvil */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Selecciona una pestaña
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border border-[#3E3F29] bg-[#F1F0E4] text-[#3E3F29] py-2 px-3 focus:border-[#BCA88D] focus:ring-1 focus:ring-[#BCA88D]"
          onChange={handleChange}
          value={location.pathname}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.href}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      {/* Navegación para escritorio */}
      <div className="hidden sm:block">
        <nav
          className="border-b border-[#3E3F29] max-w-xl mx-auto flex space-x-8"
          aria-label="Tabs"
        >
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.href;
            return (
              <Link
                key={tab.name}
                to={tab.href}
                className={classNames(
                  isActive
                    ? "border-b-4 border-[#3E3F29] text-[#3E3F29] font-semibold"
                    : "border-b-4 border-transparent text-[#7D8D86] hover:border-[#BCA88D] hover:text-[#3E3F29]",
                  "inline-flex items-center gap-2 py-4 text-lg transition-colors duration-200"
                )}
              >
                <tab.icon
                  className={classNames(
                    isActive ? "text-[#BCA88D]" : "text-[#A9B2A1]",
                    "h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
