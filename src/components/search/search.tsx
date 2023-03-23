import { Search } from '@/utils/interfaces'

export default function SearchBar({ searchTerm, setSearchTerm }: Search) {
  return (
    <div className="mb-2 pb-4 pl-0 md:pl-2 w-full">
      <form className="md:w-6/12 w-full" name="search">
        <label className="mr-4 text-base md:text-lg" htmlFor="search">
          Search launches:
        </label>
        <input
          id="search"
          className="text-base md:text-lg mt-2 bg-transparent border border-gray-700 rounded p-2 w-full md:w-6/12"
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          value={searchTerm}
        />
      </form>
    </div>
  )
}
