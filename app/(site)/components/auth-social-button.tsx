import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface AuthSocialButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <Button className="w-full py-4">
      <Icon />
      <h2>{label}</h2>
    </Button>
  );
};

export default AuthSocialButton;
