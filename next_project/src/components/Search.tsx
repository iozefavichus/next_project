import styles from '../styles/search.module.css';
import { MouseEventHandler, useState } from 'react';

type MyProps = {
  search: string;
  page: number;
  limit: number;
};

function Search(props: MyProps) {


//   const [searchParams] = useSearchParams();
//   const paramSearch = searchParams.get('search');
//   const paramSkip = searchParams.get('skip');
//   const paramLimit = searchParams.get('limit');

  const getInputValue = (): string => {
    const localValue = localStorage.getItem('search');
    return localValue ? localValue : '';
  };

//   const [SearchValue, setSearchValue] = useState(
//     paramSearch ? paramSearch : getInputValue()
//   );

//   const handleClick: MouseEventHandler = (e) => {
//     e.preventDefault();
//     localStorage.setItem('search', SearchValue);
//     navigate(
//       `/?search=${SearchValue}&skip=${paramSkip ? paramSkip : '0'}&limit=${
//         paramLimit ? paramLimit : props.limit
//       }`
//     );
//   };

  return (
    <div className={styles.searchbar}>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className={styles.input_search}
        placeholder={getInputValue()}
        type="text"
        id="search"
      ></input>
      <button
        className="button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;