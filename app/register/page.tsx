import type { Metadata } from "next";
import { RegisterPage } from "@/components/register-page";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description:
    "Join ByteSpace today. The registration process is straightforward, uncomplicated, and efficient. Sign up quickly, easily, and at no cost.",
  openGraph: {
    title: "Create an Account — ByteSpace",
    description:
      "Join ByteSpace today. Access hundreds of top-tier courses and unlock your creative and technical potential.",
    url: "https://bytespace.dev/register",
    siteName: "ByteSpace",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <RegisterPage />;
}
