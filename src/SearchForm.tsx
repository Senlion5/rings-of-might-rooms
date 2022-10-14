import { FC, ChangeEvent } from "react";

interface SearchFormProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchForm: FC<SearchFormProps> = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </form>
  );
};

export default SearchForm;
