export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg text-primary"></span>

      <p className="text-base-content/60 animate-pulse text-lg font-medium">
        Loading, please wait...
      </p>
      
    </div>

  );
}