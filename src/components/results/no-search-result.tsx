
const NoResult = () => {
  return (
    <div className="flex flex-col items-between justify-center text-center bg-[#f9f8fb] h-[200px] px-6">
      <h3 className="text-lg md:text-2xl text-[#433A81] my-2">
        No data matches your search
      </h3>
      <p className="text-sm md:text-base my-2">
        Go back or try searching for something else
      </p>
    </div>
  );
};

export default NoResult;
