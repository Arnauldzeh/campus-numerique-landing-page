export default function BootcampDetail() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-4 sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <div className="flex items-center">
            <span className="text-purple-600 font-bold text-lg">Campus</span>
            <span className="font-light text-lg">Numerique</span>
          </div>
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 pt-6">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-1">BOOTCAMP</h1>
            <p className="text-sm text-gray-600">Program ID: IKC-2026-001</p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
            <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 px-6 py-12 flex items-center justify-center relative">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-pink-400 rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute bottom-12 left-8 w-32 h-32">
                <div className="w-full h-full bg-gray-800 rounded-lg transform -rotate-6 opacity-70"></div>
              </div>
              
              {/* Laptop illustration */}
              <div className="relative z-10 mb-8">
                <div className="w-48 h-32 bg-gray-800 rounded-t-lg border-4 border-gray-700 flex items-center justify-center">
                  <div className="w-40 h-24 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                </div>
                <div className="w-56 h-2 bg-gray-700 rounded-b-lg mx-auto"></div>
              </div>

              {/* Plant decoration */}
              <div className="absolute bottom-8 right-12 text-6xl opacity-50">🌿</div>
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <div className="mb-16"></div>
                <h2 className="text-2xl font-bold mb-1">AI - FIRST WEB</h2>
                <h3 className="text-2xl font-bold mb-4">ENGINEERING TRAINING</h3>
                <div className="flex gap-2">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold">4 Weeks</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold">Beginner</span>
                </div>
              </div>

              {/* Status Badge */}
              <button className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Starts in 8 days
              </button>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between mb-6 bg-purple-50 rounded-lg px-4 py-3">
            <div className="flex items-center gap-2 text-purple-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-semibold text-sm">Seats Available</span>
            </div>
            <span className="text-red-500 font-bold text-sm">4 slots left</span>
          </div>

          {/* Program Notes */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-3">Program Notes</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              This bootcamp has run since 2020, helping 4301 folks become Web Developers. This year&apos;s new edition is a massive, complete operational shift using an AI-first methodology. It&apos;s the way production work actually happens now.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              This bootcamp has run since 2020, helping 4301 folks become Web Developers. This year&apos;s new edition is a massive, complete operational shift using an AI-first methodology. It&apos;s the way production work actually happens now.
            </p>
          </div>

          {/* Curriculum */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">CURRICULUM</h3>
              <span className="text-sm text-gray-600">4 WEEKS</span>
            </div>

            <h4 className="font-bold text-base mb-4">What you&apos;ll learn</h4>

            {/* Week 01 */}
            <div className="mb-3">
              <div className="border-t-2 border-dashed border-gray-300 pt-4 pb-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-purple-600 rounded flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-semibold">WEEK</span>
                    <span className="text-3xl font-bold">01</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-base mb-2">BUILD AN APP WITH A DATABASE</h5>
                    <p className="text-sm text-gray-600 mb-2">Build a real app that saves data from day one</p>
                    <p className="text-xs text-gray-500 font-semibold">PROJECT: PERSONAL DASHBOARD</p>
                  </div>
                </div>
                <div className="mt-4 pl-24">
                  <p className="text-xs font-semibold text-gray-700 mb-2">WHAT YOU&apos;LL LEARN</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Describe what you want to AI and get a working app</li>
                    <li>• Understand what a database does and why your app needs one</li>
                    <li>• Build forms that create, edit, and delete records</li>
                    <li>• Run your app locally and use it every day</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Week 02 */}
            <div className="mb-3">
              <div className="border-t-2 border-dashed border-gray-300 pt-4 pb-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-purple-600 rounded flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-semibold">WEEK</span>
                    <span className="text-3xl font-bold">02</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-base mb-2">BUILD AN APP WITH A DATABASE</h5>
                    <p className="text-sm text-gray-600 mb-2">Build a real app that saves data from day one</p>
                    <p className="text-xs text-gray-500 font-semibold">PROJECT: PERSONAL DASHBOARD</p>
                  </div>
                </div>
                <div className="mt-4 pl-24">
                  <p className="text-xs font-semibold text-gray-700 mb-2">WHAT YOU&apos;LL LEARN</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Describe what you want to AI and get a working app</li>
                    <li>• Understand what a database does and why your app needs one</li>
                    <li>• Build forms that create, edit, and delete records</li>
                    <li>• Run your app locally and use it every day</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Week 03 */}
            <div className="mb-3">
              <div className="border-t-2 border-dashed border-gray-300 pt-4 pb-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-purple-600 rounded flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-semibold">WEEK</span>
                    <span className="text-3xl font-bold">03</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-base mb-2">BUILD AN APP WITH A DATABASE</h5>
                    <p className="text-sm text-gray-600 mb-2">Build a real app that saves data from day one</p>
                    <p className="text-xs text-gray-500 font-semibold">PROJECT: PERSONAL DASHBOARD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 04 */}
            <div className="mb-6">
              <div className="border-t-2 border-dashed border-gray-300 pt-4 pb-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-purple-600 rounded flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-semibold">WEEK</span>
                    <span className="text-3xl font-bold">04</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-base mb-2">BUILD AN APP WITH A DATABASE</h5>
                    <p className="text-sm text-gray-600 mb-2">Build a real app that saves data from day one</p>
                    <p className="text-xs text-gray-500 font-semibold">PROJECT: PERSONAL DASHBOARD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ICI Info Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>ICI, PAS D&apos;ORGANISATION IMPERSONNELLE.</strong> Ce bootcamp est porté par une équipe chargée et intentionnelle qui soutient que-mêmes chaque cours rapportant à toutes vos questions. Voyez en ligne avec nos étudiants, à leur rythme fait de start anonyme pas de cursus générique. Avec skip deux éditions à notre avril depuis 2024, notre mission reste la même : vous enseigner précisément les compétences réelles pour faire de vous un expert par la pratique.
              </p>
            </div>
          </div>

          {/* Methods & Details */}
          <div className="mb-8 text-sm space-y-4">
            <div>
              <p className="text-gray-500 text-xs mb-1">Methods</p>
              <p className="text-gray-800">Learning by practice</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Format</p>
              <p className="text-gray-800">Home exercises, practical examples</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Effort</p>
              <p className="text-gray-800">2-3 hrs per day</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Requirement</p>
              <p className="text-gray-800">Personal Laptop & Internet connexion</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Output</p>
              <p className="text-gray-800">Production-ready applications</p>
            </div>
          </div>

          {/* Registration Status */}
          <div className="border-2 border-gray-400 rounded p-6 text-center mb-4">
            <p className="text-gray-500 text-xs mb-2">STATUS</p>
            <p className="text-xl font-bold text-red-500 mb-2">REGISTRATIONS ARE CLOSED</p>
            <p className="text-sm text-gray-600">The current bootcamp has no more sits</p>
          </div>

          {/* Notice */}
          <div className="border-2 border-red-200 bg-red-50 rounded p-4 mb-8">
            <p className="text-red-500 text-xs font-semibold mb-2">NOTICE</p>
            <p className="text-sm text-gray-700">
              If you enrolled in the current bootcamp, check your email to find out how to access the course.
            </p>
          </div>

          {/* Instructor */}
          <div className="mb-12">
            <h3 className="text-gray-500 text-sm mb-4">Instructor</h3>
            <div className="flex gap-4">
              <div className="w-32 h-32 bg-gray-300 rounded flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-base mb-1">Sir Ing. Roger Nlla</h4>
                <p className="text-sm text-gray-600 mb-3">Present Carrière - Data Scientiste</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  This bootcamp has run since 2020, helping 4301 folks become Data analysts. This year&apos;s new edition is a massive, complete operational shift using an AI-first methodology. It&apos;s the way production work actually happens now.
                </p>
              </div>
            </div>
          </div>

          {/* Bootcamp Partners */}
          <div className="mb-12">
            <h3 className="text-center text-lg font-semibold mb-6">Bootcamp Partners</h3>
            <div className="flex justify-center items-center gap-8 text-gray-300">
              {/* Icon 1 - Abstract logo */}
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              
              {/* Icon 2 - X (Twitter) */}
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              
              {/* Icon 3 - Instagram */}
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              
              {/* Icon 4 - Instagram (duplicate) */}
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              
              {/* Icon 5 - Circle slash */}
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M4.93 4.93l14.14 14.14"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
