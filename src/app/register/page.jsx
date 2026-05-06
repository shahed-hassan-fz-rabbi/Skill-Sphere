"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
        image: form.image,
      });
      if (res?.error) {
        toast.error(res.error.message || "Registration failed!");
      } else {
        toast.success("Registration successful!");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const fields = [
    { label: "Full Name", name: "name", type: "text", placeholder: "Your name" },
    { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
    { label: "Photo URL", name: "image", type: "url", placeholder: "https://photo-link.com/image.jpg" },
    { label: "Password", name: "password", type: "password", placeholder: "Min 8 characters" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <Toaster position="top-center" />
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-[#25b1fc] mb-2">
            Register
          </h2>
          <p className="text-center text-base-content/60 mb-4">
            Join SkillSphere today!
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {fields.map((field) => (
              <div className="form-control" key={field.name}>
                <label className="label">
                  <span className="label-text font-medium">{field.label}</span>
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="input input-bordered w-full"
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="btn bg-[#25b1fc] hover:bg-[#1a8bc7] text-white w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Register"
              )}
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full gap-2"
          >
            
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary font-medium text-[#25b1fc]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}