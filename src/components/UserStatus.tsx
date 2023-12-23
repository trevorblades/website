import { Button } from "react-daisyui";

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
      // startIcon={<Google />}
    >
      Sign in with Google
    </Button>
  );
};
