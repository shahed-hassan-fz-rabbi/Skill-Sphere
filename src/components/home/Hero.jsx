import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/herobg.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Upgrade Your Skills Today 🚀
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-4">
            Learn from Industry Experts
          </p>
          

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/courses">
              <button className="btn bg-[#25b1fc] btn-lg text-white">
                Explore Courses →
              </button>
            </Link>
            <Link href="/register">
              <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black">
                Get Started Free
              </button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;