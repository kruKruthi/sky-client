export interface NavItem {
  label: string;
  href?: string;
  submenuContainerClassName?: string
  submenus?: NavItem[];
  subMenuContent?: React.ReactNode;
  onClose?: any;
}
