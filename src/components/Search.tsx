import React from "react";

type SearchProps = {
  setSearchValue: (obj: string) => void;
  searchValue: string;
};

const Search: React.FC<SearchProps> = ({ setSearchValue, searchValue }) => {
  return (
    <div className="search_block">
      <img className="searchIcon" src="/img/search.svg" alt="search" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Поиск по имени"
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className="clearIcon"
          src="/img/clear.svg"
          alt="clear_button"
        />
      )}
    </div>
  );
};
export default Search;
