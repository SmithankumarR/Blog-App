function Pagination(props) {
  let {
    articlesCount,
    articlesPerPage,
    activePageIndex,
    updateCurrentPageIndex,
  } = props;
  let numberOfPages = Math.ceil(articlesCount / articlesPerPage);
  let pagesArray = [];

  for (let i = 0; i <= numberOfPages; i++) {
    pagesArray.push(i);
  }
  return (
    <div className="flex my-4">
      <button
        onClick={() =>
          updateCurrentPageIndex(
            activePageIndex - 1 < 1 ? 1 : activePageIndex - 1
          )
        }
        className="font-bold bg-blue-500 text-blue-50 py-2 px-5 rounded-lg mx-3"
      >
        {" "}
        Prev{" "}
      </button>
      {pagesArray.map((page) => (
        <button
          onClick={() => updateCurrentPageIndex(page)}
          key={page}
          className={`${
            activePageIndex === page
              ? "bg-blue-500 hover:bg-blue-400 text-white border my-2 border-gray-900 p-2 mx-2 rounded-md"
              : "border my-2 border-blue-400 p-2 mx-2 rounded-md"
          } `}
        >
          {page} 
        </button>
      ))}
      <button
        onClick={() =>
          updateCurrentPageIndex(
            activePageIndex + 1 > numberOfPages
              ? numberOfPages
              : activePageIndex + 1
          )
        }
        className="font-bold  bg-blue-500 text-blue-50  px-5  rounded-lg"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
