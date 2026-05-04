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
        <span className="loading loading-spinner loading-lg text-primary"></span>
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
            <div className="w-28 rounded-full ring ring-primary ring-offset-2">
              <img
                src={user.image || "https://i.pravatar.cc/200"}
                alt={user.name}
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-base-content/60 mt-1">{user.email}</p>
          </div>

          <div className="badge badge-primary badge-outline">Student</div>

          <div className="divider"></div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-xs text-base-content/60">Enrolled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-xs text-base-content/60">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-xs text-base-content/60">Certificates</p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Update Button */}
          <Link href="/profile/update" className="btn btn-primary w-full">
            ✏️ Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}