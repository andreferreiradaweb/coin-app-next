interface ChipProps {
  title: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  const { title } = props;
  return (
    <div className="rounded bg-primary-100 px-4 py-1 hover:bg-primary-200">
      <label>
        <small className="text-primary-500">{title}</small>
      </label>
    </div>
  );
};

export default Chip;
