import GridPostList from "./GridPostList";
import Loader from "./Loader";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: any;
  filterBy?: string | undefined;
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
  filterBy = "All",
}: SearchResultsProps) => {
  if (isSearchFetching) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} filterBy={filterBy} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
};

export default SearchResults;
