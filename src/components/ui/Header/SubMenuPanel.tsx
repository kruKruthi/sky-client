import type { NavItem } from "./types"

interface Props {
  menu: NavItem[];
  containerClassName?: string;
  content?: React.ReactNode;
}

const SubMenuPanel: React.FC<Props> = ({ menu, containerClassName, content }) => {
  return (
    <div className={`h-12 bg-white border-t border-gray-200 flex items-center px-6 gap-8 ${containerClassName || ''}`}>
      {
        menu.length > 0 && <>
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-800 text-base hover:text-skyBlue hover:underline cursor-pointer transition-colors duration-150"
              style={{ textDecoration: 'none' }}
            >
              {item.label}
            </a>
          ))}
        </>
      }
      {
        !!content && <>
          {content}
        </>
      }
    </div>
  )
}

export default SubMenuPanel
