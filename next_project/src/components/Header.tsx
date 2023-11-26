import Search from "./Search";
import ErrorButton from "./ErrorButton";
import Pagination from "./Pagination";
import ChooseLimit from "./ChooseLimit";

const Header = () => (
        <div>
            <Search />
            <ErrorButton />
            <Pagination />
            <ChooseLimit />
        </div>
);

export default Header;