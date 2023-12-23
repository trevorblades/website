import { Button } from "react-daisyui";
import { FcGoogle } from "react-icons/fc";

type UserStatusProps = {
  isLoggedIn: boolean;
};

export const UserStatus = ({ isLoggedIn }: UserStatusProps) => {
  return isLoggedIn ? (
    <Button color="accent" tag="a" href="/api/logout">
      Log out
    </Button>
  ) : (
    <Button
      color="neutral"
      tag="a"
      href="/api/oauth/google"
      startIcon={<FcGoogle />}
    >
      Sign in with Google
    </Button>
  );
};
