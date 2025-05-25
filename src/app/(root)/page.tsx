import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Home",
};

const Page = () => {
  return (
    <div>
      <h1 className="text-red-500 text-4xl underline">Hello world!</h1>
      <Button>Click me!</Button>
    </div>
  );
};

export default Page;
