interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtons = ({ currentPage, totalPages, onPageChange }: PaginationButtonsProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-8 justify-between space-x-2 text-2xl font-lato font-bold">
      {pages.map((page) => (
        <button
          key={page}
          className={`w-12 h-12 rounded-full cursor-pointer ${currentPage === page ? `bg-red-500` : `bg-stone-800`}`}
          onClick={() => onPageChange(page)}
        >
          <span className="text-white">{page}</span>
        </button>
      ))}
      <button className="w-fit h-fit bg-red-500 rounded-md p-1 cursor-pointer hover:bg-stone-800">
        <span className="text-white">Outras receitas</span>
      </button>
    </div>
  );
};

export default PaginationButtons;
