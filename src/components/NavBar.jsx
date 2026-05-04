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
    <nav className="navbar bg-base-100 shadow-md px-4 md:px-6 sticky top-0 z-50">

      {/* LEFT */}
      <div className="flex-1">
        <Link href="/" className="text-xl md:text-2xl font-bold text-[#212121]">
          SkillSphere
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0"
        >
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/courses" className={linkClass("/courses")}>
              Courses
            </Link>
          </li>

          {user && (
            <li>
              <Link href="/profile" className={linkClass("/profile")}>
                My Profile
              </Link>
            </li>
          )}

          <div className="divider"></div>

          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : user ? (
            <>
              <li className="px-2 py-1 text-sm">{user.name}</li>
              <li>
                <button onClick={() => signOut()}>Logout</button>
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

      

      
      <div className="hidden lg:flex items-center gap-3">

        <Link href="/" className={linkClass("/")}>
          Home
        </Link>

        <Link href="/courses" className={linkClass("/courses")}>
          Courses
        </Link>

        {user && (
          <Link href="/profile" className={linkClass("/profile")}>
            My Profile
          </Link>
        )}

        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-1">
                <img
                  src={user.image || "https://i.pravatar.cc/100"}
                  alt={user.name}
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
            <Link href="/login" className="btn btn-sm bg-[#4ca6fa] text-white">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm btn-outline">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}