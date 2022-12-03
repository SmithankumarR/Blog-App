function Pagination(props) {
    let { articlesCount, articlesPerPage, activePageIndex, updateCurrentPageIndex } = props;
    let numberOfPages = Math.ceil(articlesCount / articlesPerPage);
    let pagesArray = [];

    for (let i = 0; i <= numberOfPages; i++) {
        pagesArray.push(i);
    }
    return (
        <div className="flex">
            <button onClick={() => updateCurrentPageIndex(activePageIndex - 1 < 1 ? 1 : activePageIndex - 1)} className="font-bold">Prev</button>
            <div className="p-2 flex flex-wrap">
                {pagesArray.map((page) => (
                    <span onClick={() => updateCurrentPageIndex(page)} key={page}
                        className={`${activePageIndex === page ? "bg-orange-600 hover:bg-orange-400 text-white border my-2 border-gray-900 p-2 mx-2 rounded-md" : "border my-2 border-orange-400 p-2 mx-2 rounded-md"} `}>
                        {page}
                    </span>
                ))}
            </div>
            <button onClick={() => updateCurrentPageIndex(activePageIndex + 1 > numberOfPages ? numberOfPages : activePageIndex + 1)} className="font-bold">Next</button>
        </div>
    );
}

export default Pagination;
