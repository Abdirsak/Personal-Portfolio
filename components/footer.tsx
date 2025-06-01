export function Footer() {
  return (
    <footer className="bg-[#0A0E2A] dark:bg-white text-white dark:text-[#0A0E2A] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2 text-[#FFA500]">Abdirizak Abdullahi Hassan</div>
              <p className="text-white dark:text-[#0A0E2A]">Full-Stack Developer</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white dark:text-[#0A0E2A]">
                © {new Date().getFullYear()} Abdirizak Abdullahi Hassan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
