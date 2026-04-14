import { Link, useLocation } from "react-router-dom";

const districts = [
  { path: "/", label: "முகப்பு" },
  { path: "/coimbatore", label: "கோயம்புத்தூர்" },
  { path: "/erode", label: "ஈரோடு" },
  { path: "/tiruppur", label: "திருப்பூர்" },
  { path: "/karur", label: "கரூர்" },
  { path: "/salem", label: "சேலம்" },
  { path: "/namakkal", label: "நாமக்கல்" },
  { path: "/dindigul", label: "திண்டுக்கல்" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-card border-b border-border sticky top-[76px] z-40 shadow-sm">
      <div className="container mx-auto px-4">
        {/* News Districts */}
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {districts.map((d) => (
            <Link
              key={d.path}
              to={d.path}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === d.path
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {d.label}
            </Link>
          ))}
          {/* Candidates List 2026 Link */}
          <Link
            to="/candidates-2026"
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              pathname === "/candidates-2026"
                ? "bg-yellow-400 text-yellow-900 shadow"
                : "text-foreground hover:bg-muted"
            }`}
          >
            வேட்பாளர் பட்டியல் 2026
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
