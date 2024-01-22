const Tag = ({key, item}) => {
  return (
    <span
      className="bg-primary bg-opacity-50 py-1 px-4 rounded-md mt-6"
      key={key}
    >
      <p className="text-white text-sm">{item}</p>
    </span>
  );
};

export default Tag;
