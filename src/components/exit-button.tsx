"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButton({ page }: { page: string }) {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <Link href={"/login"}>
          Entrar
        </Link>
      ) : (
        <button onClick={() => signOut({ callbackUrl: "/login" })}>
          Sair
        </button>
      )}
    </>
  );
}