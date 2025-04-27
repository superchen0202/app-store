/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hVl5q7YIHfe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from '@/components/ui/input';
import { SVGProps } from 'react';

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
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2 dark:bg-gray-900">
      <SearchIcon className="h-4 w-4" />
      <Input type="search" placeholder="Search" className="h-8 w-full border-0 font-semibold" />
    </div>
  );
};

export default SearchBar;
