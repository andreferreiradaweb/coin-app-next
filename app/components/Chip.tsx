interface IChipProps {
  title: string;
}

const Chip: React.FC<IChipProps> = (props) => {
  const { title } = props;
  return (
    <div className="rounded bg-primary-100 px-4 py-1 hover:bg-primary-200">
      <label>
        <small className="text-primary-500 text-lg">{title}</small>
      </label>
    </div>
  );
};

export default Chip;
