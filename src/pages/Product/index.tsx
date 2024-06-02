const Product = () => {
  return (
    <>
      <div className="w-full p-4 bg-white shadow rounded">
        <div className="w-full flex justify-end">
          <button className="bg-c-blue-100 text-white text-xs rounded px-4 py-3">
            Categoria
          </button>
        </div>
        <div>
          <div className="grid grid-cols-4">
            <div className="p-4 border-[1px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Product };
