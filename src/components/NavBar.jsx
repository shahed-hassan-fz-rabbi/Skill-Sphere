"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  const linkClass = (path) =>
    `btn btn-ghost btn-sm ${
      pathname === path || pathname.startsWith(path + "/")
        ? "bg-[#4ca6fa] text-white"
        : ""
    }`;

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur-md shadow-md px-4 md:px-6">

      
      <div className="flex-1">
        <Link
          href="/"
          className="text-2xl font-bold text-[#22d2fe]"
        >
          SkillSphere
        </Link>
      </div>

      
      <div className="dropdown dropdown-end lg:hidden">

        <label tabIndex={0} className="btn btn-ghost btn-circle">
          ☰
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow-lg bg-base-100 rounded-box w-56 space-y-1"
        >
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/courses"
              className={linkClass("/courses")}
            >
              Courses
            </Link>
          </li>

          {user && (
            <li>
              <Link
                href="/profile"
                className={linkClass("/profile")}
              >
                My Profile
              </Link>
            </li>
          )}

          <div className="divider my-1"></div>

          {isPending ? (
            <div className="flex justify-center py-2">
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : user ? (
            <>
              <li className="px-2 py-1 text-sm font-medium">
                {user.name}
              </li>

              <li>
                <button onClick={() => signOut()}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>

              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-3">

        <Link href="/" className={linkClass("/")}>
          Home
        </Link>

        <Link
          href="/courses"
          className={linkClass("/courses")}
        >
          Courses
        </Link>

        {user && (
          <Link
            href="/profile"
            className={linkClass("/profile")}
          >
            My Profile
          </Link>
        )}

        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="flex items-center gap-3">

            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                <img
                  src={
                    user.image ||
                    "https://i.pravatar.cc/100"
                  }
                  alt={user?.name || "User"}
                />
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

            <Link
              href="/login"
              className="btn btn-sm bg-[#4ca6fa] text-white border-none hover:bg-[#3395f7]"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-sm btn-outline"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}