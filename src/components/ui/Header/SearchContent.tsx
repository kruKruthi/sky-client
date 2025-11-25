import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const SearchContent: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="flex items-center gap-2 w-[70%]">
      <input
        type="text"
        placeholder="Enter your search"
        className="px-4 bg-white w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
        Search
      </button>
      <button className="flex items-center gap-1 text-black hover:text-gray-600 ml-6 cursor-pointer" onClick={onClose}>
        <span>Close</span>
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchContent;
