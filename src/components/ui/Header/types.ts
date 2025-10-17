export interface NavItem {
  label: string;
  href?: string;
  submenuContainerClassName?: string
  submenu?: NavItem[];
  subMenuContent?: React.ReactNode;
  onClose?: any;
}
