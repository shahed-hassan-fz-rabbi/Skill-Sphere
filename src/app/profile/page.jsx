"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-[#53cbfe]"></span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-10">
      <div className="card bg-base-100 shadow-2xl w-full max-w-md">
        <div className="card-body items-center text-center gap-4">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-[#53cbfe] ring-offset-2">
              <img
                src={user.image || "https://i.pravatar.cc/200"}
                alt={user.name}
              />
            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-base-content/60 mt-1">{user.email}</p>
          </div>

          <div className="badge text-[#53cbfe] badge-outline">Student</div>

          <div className="divider"></div>

         
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#53cbfe]">0</p>
              <p className="text-xs text-base-content/60">Enrolled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#53cbfe]">0</p>
              <p className="text-xs text-base-content/60">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#53cbfe]">0</p>
              <p className="text-xs text-base-content/60">Certificates</p>
            </div>
          </div>

          <div className="divider"></div>

         
          <Link href="/profile/update" className="btn bg-[#53cbfe] hover:bg-[#b3d6fc] text-white  w-full">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}