"use client";
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";

export default function NavBar() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  return (
    <nav className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">SkillSphere</Link>
      </div>
      <div className="flex-none gap-4">
        <Link href="/" className="btn btn-ghost btn-sm">Home</Link>
        <Link href="/courses" className="btn btn-ghost btn-sm">Courses</Link>
        {user && <Link href="/profile" className="btn btn-ghost btn-sm">My Profile</Link>}

        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={user.image || "/default-avatar.png"} alt={user.name} />
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="btn btn-sm btn-error btn-outline"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-sm btn-primary">Login</Link>
            <Link href="/register" className="btn btn-sm btn-outline">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}