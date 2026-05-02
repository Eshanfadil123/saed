export function WorkCase() {
  return (
    <div className="relative flex flex-col justify-center items-center h-[40vh] w-screen sm:h-screen md:h-screen lg:h-screen overflow-hidden">

      {/* background image */}
      <video
        src="/videos/showcase.mp4"
        className="absolute inset-0 w-full h-full object-fill scale-100 brightness-100 z-0"
        autoPlay
        loop
        muted
      />

    </div>



  )
}