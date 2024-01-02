import { CartIcon, MenuIcon } from "./Icons";

type ButtonProps = {
  onClick: () => void;
};

type ControlBtnProps = {
  expanded: boolean;
} & ButtonProps;

export const HamburgerBtn = ({ onClick, expanded }: ControlBtnProps) => (
  <button
    id="navigation-menu-btn"
    className="mb-[-3.5px] lg:hidden"
    onClick={onClick}
    aria-label="navigation menu"
    aria-controls="navigation-menu"
    aria-expanded={expanded}
  >
    <MenuIcon />
  </button>
);

type CartBtnProps = {
  children: number;
} & ControlBtnProps;

export const CartBtn = ({ onClick, children, expanded }: CartBtnProps) => {
  const num = +children;
  const ariaLabel = `${num} item${num > 1 ? "s" : ""}`;

  return (
    <div className="relative mb-[-3.5px]">
      {!!num && (
        <div
          className="absolute -right-2 -top-2 bg-orange text-white text-xs px-2 rounded-lg"
          aria-label={ariaLabel}
          aria-live="assertive"
        >
          {num}
        </div>
      )}
      <button
        id="product-cart-btn"
        onClick={onClick}
        aria-label="product cart"
        aria-controls="product-cart"
        aria-expanded={expanded}
      >
        <CartIcon />
      </button>
    </div>
  );
};
