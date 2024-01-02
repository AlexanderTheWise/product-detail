type LinkProps = {
  children: React.ReactNode;
};

export const Link = ({ children }: LinkProps) => (
  <a
    className="font-bold capitalize md:font-normal md:text-darkGrayBlue md:group-hover:text-veryDarkBlue"
    href="#"
  >
    {children}
  </a>
);
