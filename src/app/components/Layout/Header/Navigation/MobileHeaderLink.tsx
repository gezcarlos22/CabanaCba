import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onLinkClick: () => void }> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div className="relative w-full">
      {item.submenu ? (
        <button
          onClick={handleToggle}
          className="flex items-center justify-center w-full py-2 text-white text-muted focus:outline-hidden"
        >
          {item.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`ml-1 transform transition-transform ${submenuOpen ? 'rotate-180' : ''}`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        </button>
      ) : (
        <Link
          href={item.href}
          className="flex items-center justify-center w-full py-2 text-white text-muted focus:outline-hidden"
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      )}
      {submenuOpen && item.submenu && (
        <div className="bg-black p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block py-2 px-4 rounded text-center ${
                pathname === subItem.href 
                  ? 'text-primary font-bold' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={onLinkClick}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
