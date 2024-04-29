import { LoadingModal } from "@/components/loading-model";

interface LoadingProps {
  open: boolean;
}

export const Loading = ({ open }: LoadingProps) => {
  return <LoadingModal open={open} />;
};
