import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import LearningTips from "@/components/home/LearningTips";
import TopInstructors from "@/components/home/TopInstructors";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}