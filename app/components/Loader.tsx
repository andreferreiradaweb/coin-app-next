import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="inline-block">
      <AiOutlineLoading className="mx-3 h-full w-4 animate-spin text-white" />
    </div>
  );
};

export default Loader;
