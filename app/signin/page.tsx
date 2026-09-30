import type { Metadata } from "next";
import { LoginPage } from "@/components/login-page";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description:
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge. Sign in to your ByteSpace account.",
  openGraph: {
    title: "Sign In — ByteSpace",
    description:
      "Sign in to ByteSpace. Access your courses, instructors, and community easily.",
    url: "https://bytespace.dev/signin",
    siteName: "ByteSpace",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <LoginPage />;
}
