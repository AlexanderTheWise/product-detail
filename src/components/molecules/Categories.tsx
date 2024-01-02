import { Link } from "../atoms";

type Category = {
  id: number;
  name: string;
};

type CategoriesProps = {
  className: string;
};

const categories: Category[] = [
  { id: 1, name: "collections" },
  { id: 2, name: "men" },
  { id: 3, name: "women" },
  { id: 4, name: "about" },
  { id: 5, name: "contact" },
];

export const Categories = ({ className }: CategoriesProps) => (
  <nav className={`self-stretch ${className} lg:flex items-center`}>
    <ul className="flex flex-col md:items-center md:flex-row md:self-stretch gap-7">
      {categories.map(({ id, name }) => (
        <li
          className="group flex items-center md:self-stretch  md:hover:border-b-orange md:hover:border-b-2"
          key={id}
        >
          <Link>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
