import { twMerge } from "tailwind-merge";

interface IContainerProps {
  children: JSX.Element;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge("container mx-auto px-4 md:px-12 xl:px-28", className)}
    >
      {children}
    </div>
  );
};

export default Container;
