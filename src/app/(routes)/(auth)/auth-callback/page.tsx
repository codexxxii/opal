import { auth } from "@clerk/nextjs/server";
import { authCallback } from "@/server/actions";

export default async function AuthCallbackPage() {
  await auth.protect();

  await authCallback();

  return (
    <div className="w-full h-screen flex flex-col gap-2.5 justify-center items-center">
      <div className="w-5 h-5 rounded-full border border-[#111111] border-r-transparent animate-spin" />
      <div className="text-center">
        <p className="text-lg font-semibold">Signing you in</p>
        <p className="text-xs text-gray-400">
          You will be redirected automatically
        </p>
      </div>
    </div>
  );
}
