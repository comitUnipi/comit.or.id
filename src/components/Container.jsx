const LayoutContainer = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 p-4">
      {children}
    </div>
  );
};

export default LayoutContainer;
