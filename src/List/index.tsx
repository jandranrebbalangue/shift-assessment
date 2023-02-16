import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import List from "./List";

const Index = (): JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
};

export default Index;
