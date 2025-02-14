import { useEffect, useState } from "react";
import GridPostList from "../../components/shared/GridPostList";
import Loader from "../../components/shared/Loader";
import SearchResults from "../../components/shared/SearchResults";
import { Input } from "../../components/ui/input";
import useDebounce from "../../hooks/useDebounce";
import {
  useGetPosts,
  useSearchPosts,
} from "../../lib/react-query/queriesAndMutations";

import { useInView } from "react-intersection-observer";

const Explore = () => {
  const { ref, inView } = useInView();
  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("All");
  // const [openFilter, setOpenFilter] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);
  const { data: searchedPosts, isFetching: isSearchFetching } =
    useSearchPosts(debouncedValue);

  useEffect(() => {
    if (inView && !searchValue) fetchNextPage();
  }, [inView, searchValue]);

  if (!posts) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  const shouldShowSearchResults = searchValue !== "";
  const shouldShowPosts =
    !shouldShowSearchResults &&
    posts?.pages.every((items) => items && items.documents.length === 0);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>

        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img
            src="/assets/icons/search.svg"
            width={24}
            height={24}
            alt="search"
          />
          <Input
            type="text"
            placeholder="search"
            className="explore-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className="flex-between w-full max-w-5xl">
          <h3 className="body-bold md:h3-bold">Popular Today</h3>
        </div>

        <div className="flex flex-wrap gap-9 w-full max-w-5xl">
          {shouldShowSearchResults ? (
            <SearchResults
              isSearchFetching={isSearchFetching}
              searchedPosts={searchedPosts}
              filterBy={filter}
            />
          ) : shouldShowPosts ? (
            <p className="text-light-4 mt-10 text-center w-full">
              End of posts
            </p>
          ) : (
            posts.pages.map((item, index) => {
              return (
                item && (
                  <GridPostList
                    key={`page-${index}`}
                    posts={item.documents}
                    filterBy={filter}
                  />
                )
              );
            })
          )}
        </div>
      </div>
      {hasNextPage && !searchValue && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Explore;
