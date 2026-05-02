import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/hero.png";

const Hero = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        <Image
          src={heroImg}
          alt="Hero"
          width={400}
          height={300}
          className="rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold">
            Upgrade Your Skills 🚀
          </h1>

          <p className="py-6">
            Learn from experts and grow your career.
          </p>

          <Link href="/courses">
            <button className="btn btn-primary">
              Explore Courses
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;