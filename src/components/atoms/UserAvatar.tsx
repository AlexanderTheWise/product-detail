type UserAvatarProps = {
  src: string;
};

export const UserAvatar = ({ src }: UserAvatarProps) => (
  <img
    className="rounded-full md:h-12 md:w-12 hover:border-2 hover:border-orange cursor-pointer"
    src={src}
    alt="user avatar"
    width="25"
    height="25"
  />
);
