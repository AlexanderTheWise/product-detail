import { CartBtn, HamburgerBtn, Logo, UserAvatar } from "../atoms";
import AvatarImg from "../../assets/image-avatar.png";
import { Categories } from "../molecules";

export const Header = () => (
  <header className="h-16 flex justify-between md:h-28 md:border-b-2 md:border-b-lightGrayBlue">
    <div className="flex gap-4 items-center lg:gap-12 ">
      <HamburgerBtn onClick={() => {}} expanded={false} />
      <Logo />
      <Categories className="hidden" />
    </div>

    <div className="flex gap-5 md:gap-11 items-center">
      <CartBtn onClick={() => {}} expanded={false}>
        {1}
      </CartBtn>
      <UserAvatar src={AvatarImg} />
    </div>
  </header>
);
