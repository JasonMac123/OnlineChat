import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface AuthSocialButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const AuthSocialButton = ({ icon: Icon, label, onClick }: AuthSocialButtonProps) => {
  return (
    <Button className="w-full py-4" onClick={onClick}>
      <Icon />
      <h2>{label}</h2>
    </Button>
  );
};

export default AuthSocialButton;
