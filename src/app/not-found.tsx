import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width="48"
        height="48"
        priority
      />
      <h1 className="my-2 text-2xl font-semibold">Not Found</h1>
      <p className="mb-4 text-destructive">Could not find requested resource</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
