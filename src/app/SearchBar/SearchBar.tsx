/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hVl5q7YIHfe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { SVGProps } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setKeyword } from '@/redux/searchSlice';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { keyword } = useAppSelector((state) => state.searchReducer);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setKeyword(event.target.value));

  const [IsShowIcon, setIsShowIcon] = useState(true);

  return (
    <>
      <div className="bg-gray-100 pt-2">
        <div className="pb-2">
          <div className="relative mx-auto flex w-full max-w-[90%] items-center justify-center rounded-2xl border border-gray-300 bg-gray-200 px-6 py-1 focus-within:ring-2 focus-within:ring-gray-300 dark:bg-gray-900">
            <div className="relative w-full">
              {IsShowIcon && (
                <SearchIcon className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-6 -translate-y-1/2 text-gray-400" />
              )}
              <Input
                value={keyword}
                onFocus={() => setIsShowIcon(false)}
                onBlur={() => setIsShowIcon(true)}
                onChange={changeHandler}
                type="search"
                placeholder={IsShowIcon ? '搜尋' : ''}
                className="h-10 w-full border-0 bg-transparent pr-0 pl-10 text-center text-base font-semibold placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-transparent dark:text-gray-100 dark:placeholder-gray-500"
              />
            </div>
          </div>
        </div>
        <hr className="w-full border-gray-300" />
      </div>
    </>
  );
};

export default SearchBar;
