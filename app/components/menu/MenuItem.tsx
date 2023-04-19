interface IMenuItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({ href, label, onClick }) => {
  return (
    <a href={href} onClick={onClick} className="transition hover:underline">
      {label}
    </a>
  );
};

export default MenuItem;
