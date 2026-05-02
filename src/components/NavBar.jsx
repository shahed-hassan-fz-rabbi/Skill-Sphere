"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const pathname = usePathname();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLink = (path, label) => (
    <Link
      href={path}
      className={`px-3 py-2 rounded-md transition font-medium ${
        pathname === path
          ? "bg-primary text-white"
          : "hover:bg-base-300"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="navbar bg-blue-400 flex justify-between shadow-md px-4 py-5">

      
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold text-primary">
          SkillSphere
        </Link>
      </div>

      
      <div className="navbar-center hidden md:flex">
        <div className="flex gap-2">
          {navLink("/", "Home")}
          {navLink("/courses", "Courses")}
          {navLink("/profile", "My Profile")}
        </div>
      </div>

      
      <div className="navbar-end flex gap-2">

        {!user ? (
          <>
            <Link href="/login">
              <Button size="sm" variant="bordered">
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button size="sm" color="primary">
                Register
              </Button>
            </Link>
          </>
        ) : (
          <>
            {user?.image ? (
              <img
                src={user.image}
                alt="user"
                className="w-10 h-10 rounded-full border"
              />
            ) : (
              <FaUserCircle className="text-3xl" />
            )}

            <Button size="sm" color="danger" onClick={handleSignOut}>
              Logout
            </Button>
          </>
        )}

       
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            ☰
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
            <li>{navLink("/", "Home")}</li>
            <li>{navLink("/courses", "Courses")}</li>
            <li>{navLink("/profile", "My Profile")}</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;