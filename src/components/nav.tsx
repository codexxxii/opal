import { Suspense } from "react";
import { Show, SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { signedInLinks } from "@/constants";

export default function Nav() {
  return (
    <header className="w-full h-14">
      <MaxWidthWrapper className="h-full flex justify-between items-center">
        <Link href="/" className="text-3xl tracking-tighter">
          Opal
        </Link>
        <nav className="flex items-center gap-5">
          <Link href={{ pathname: "/" }}>
            <button className="border-transparent hover:underline">Home</button>
          </Link>
          <Suspense
            fallback={
              <div className="w-5 h-5 rounded-full border border-gray-400 animate-spin border-r-transparent" />
            }
          >
            <Show when={"signed-out"}>
              <SignInButton mode="modal" forceRedirectUrl={"/auth-callback"}>
                <button>Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal" forceRedirectUrl={"/auth-callback"}>
                <button className="flex items-center gap-2 bg-[#111111] text-white">
                  Get Started <ArrowRight size={12} />
                </button>
              </SignUpButton>
            </Show>
            <Show when={"signed-in"}>
              {signedInLinks.map((link) => (
                <Link href={{ pathname: link.href }} key={link.id}>
                  <button className="border-transparent hover:underline">
                    {link.label}
                  </button>
                </Link>
              ))}
              <SignOutButton>
                <button className="border-red-500 bg-red-500 text-red-50">
                  Sign Out
                </button>
              </SignOutButton>
            </Show>
          </Suspense>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
