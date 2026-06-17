export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-purple-600 font-bold text-lg sm:text-xl">Campus</span>
            <span className="font-light text-lg sm:text-xl">Numerique</span>
          </div>
          <button className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600">Accueil</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">À propos</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Curriculum</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Actualités</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold">Bootcamp</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            CampusNumerique
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Tristique volutpat orci feugiat in sagittis turpis orci erat aliquam. Nulla pellentesque
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-base w-full sm:w-auto">
              Télécharger le programme
            </button>
            <button className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-base w-full sm:w-auto">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Decorative squares - diagonal touching */}
      <div className="bg-white py-8 flex justify-center">
        <div className="relative w-8 h-8">
          <div className="absolute top-0 left-0 w-4 h-4 bg-black"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-600"></div>
        </div>
      </div>

      {/* Pourquoi Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Pourquoi CampusNumerique ?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12">
            Campus Numérique une initiative des jeunes ingénieurs en Génie Numérique de la localité de Sangmélima sud du Cameroun. Cette entreprise d&apos;éducation aux nouvelles technologies dédiée à offrir aux collégiens , lycéens , étudiants et travailleurs une formation de pointe en codage et en art numérique. Nos services incluent des camps de vacances immersifs, ainsi que des ateliers en milieu scolaire et extra-scolaires personnalisés selon les besoins des apprenants ou de nos partenaires.
          </p>

          {/* Features */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Apprentissage active</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  On dispense en permettant à nos apprenants de réaliser des projets pendants la majeure partie du cours (learning by doing)
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Des expert</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Nos enseignants sont des expérimentés en secteur informatique.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Des programmes sur mesure</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Etant hyper-focus sur une tranche d&apos;âge, on adapte le programme aux besoins des apprenants
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Des cours pour tous</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Nous offrons une immense plage en terme d&apos;événement Tech, art numérique, data, business adaptable à n&apos;importe quel profil de l&apos;apprenant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-purple-600 font-semibold mb-2 text-sm sm:text-base">CURRICULUM</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">
              L&apos;équipe tech qui transmet la passion à travers les tendances moderne
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base px-4">
              Dans un monde ou la technologie est indispensable et évolue à la vitesse de l&apos;éclair, il est essentiel de trouver des acteurs qui non seulement suivent les tendances mais les façonne. À la différence des bootcamps traditionnel, nous insufflons la passion et l&apos;innovation dans chaque composant essentielle lors de votre apprentissage.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
            <button className="px-4 sm:px-6 py-2 sm:py-3 text-purple-600 border-b-2 border-purple-600 font-medium whitespace-nowrap text-sm sm:text-base">
              Vue d&apos;ensemble
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm sm:text-base">
              Travail préparatoire
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm sm:text-base">
              Programmation
            </button>
          </div>

          {/* Tab Content */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Des ateliers pratique Immersive</h3>
            <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Maîtriser à la fois le compétences fondamentales qui alimentent l&apos;économie numérique d&apos;aujourd&apos;hui ( Intelligence Artificiel , Programmation, 3D design et bien d&apos;autres ) et anticipe sur un monde de plus en plus connecté.
            </p>

            {/* Expandable Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left">
                <span className="font-medium text-sm sm:text-base">Ce que vous ferez en pratique</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Checklist */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Création de site Web</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Savoir utiliser la suite Bureautique Microsoft</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Utilisation de l&apos;intelligence artificielle au service de la jeunesse</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Robotique</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Montage vidéos</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Art en 3D</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Travail en équipe</span>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualité Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Buttons at top */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-md flex items-center gap-2 text-xs sm:text-sm border-2 border-purple-700">
              <span className="font-bold text-sm sm:text-base">CN</span>
              <span>Télécharger le programme</span>
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium">
              Postuler
            </button>
          </div>

          {/* Actualité label and image */}
          <div className="mb-8 sm:mb-12">
            <p className="text-orange-500 font-semibold mb-4 text-sm sm:text-base">Actualité</p>
            <div className="bg-gray-200 rounded-lg h-48 sm:h-64 lg:h-80"></div>
          </div>
        </div>
      </section>

      {/* Bootcamp Details Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Embarquez pour l&apos;une de nos prochaines sessions
          </h2>
          <p className="text-gray-700 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
            Rejoignez nos formations AI Software en ligne, sur l&apos;un de nos 28+ campus à travers le monde ou en format temps partiel.
          </p>

          <div className="bg-gray-200 rounded-md px-4 sm:px-5 py-2 inline-block mb-6 sm:mb-8">
            <span className="font-semibold text-sm sm:text-base">2026</span>
          </div>

          {/* First Bootcamp Card */}
          <a href="/bootcamp/uiecc" className="block bg-white rounded-lg border border-gray-200 p-4 sm:p-5 mb-4 hover:shadow-md transition-shadow">
            <h3 className="text-base sm:text-lg font-bold mb-2">
              Computer Science Summer Program NYC (UIECC)
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 mb-3">
              <span>June 29 - July 30</span>
              <span>Mon - Fri</span>
              <span>8 - 17H GMT</span>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5 mb-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium">5,000 Fcfa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>95 Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-500">no sits left</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm leading-relaxed">
              In this intensive bootcamp, you&apos;ll learn to program using Java and Python, two of the most popular and universally-applicable languages used by software developers today. This course will give any student a head-start in university-level coding courses.
            </p>
            <button className="bg-orange-200 text-orange-600 px-4 sm:px-5 py-2.5 rounded-md w-full mb-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium border border-orange-300">
              <span>Réservez votre place</span>
            </button>
          </a>

          {/* Second Bootcamp Card */}
          <a href="/bootcamp/sangmelima" className="block bg-white rounded-lg border border-gray-200 p-4 sm:p-5 mb-6 hover:shadow-md transition-shadow">
            <h3 className="text-base sm:text-lg font-bold mb-2">
              Computer Science Summer Program NYC (lycée classique sangmelima)
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 mb-3">
              <span>June 29 - July 30</span>
              <span>Mon - Fri</span>
              <span>8 - 17H GMT</span>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5 mb-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium">5,000 Fcfa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>95 Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-500">no sits left</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm leading-relaxed">
              In this intensive bootcamp, you&apos;ll learn to program using Java and Python, two of the most popular and universally-applicable languages used by software developers today. This course will give any student a head-start in university-level coding courses.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2.5 rounded-md w-full mb-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
              <span>Réservez votre place</span>
              <span>🔒</span>
            </button>
            <button className="border border-orange-400 text-orange-500 bg-orange-50 hover:bg-orange-100 px-4 sm:px-5 py-2.5 rounded-md w-full flex items-center justify-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>see full schedule</span>
            </button>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-purple-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold">Vos questions les plus fréquentes</h2>
          </div>

          {/* Filter Dropdown */}
          <div className="mb-4 sm:mb-6">
            <select className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base">
              <option>Tous</option>
            </select>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left">
                <span className="font-medium text-sm sm:text-base pr-2">Campus numérique propose-t-il des solutions de financement, comme des paiements en plusieurs fois ou des prêts ?</span>
                <span className="text-gray-400 text-xl sm:text-2xl flex-shrink-0">+</span>
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left">
                <span className="font-medium text-sm sm:text-base pr-2">Je n&apos;ai aucune expérience technique, puis-je suivre le bootcamp ?</span>
                <span className="text-gray-400 text-xl sm:text-2xl flex-shrink-0">+</span>
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-start justify-between text-left">
                <div className="pr-2">
                  <p className="font-medium mb-2 text-sm sm:text-base">J&apos;ai moins de 18 ans, puis-je postuler ?</p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Oui, il est tout à fait possible de participer à nos bootcamps si vous avez moins de 18 ans. Cependant, nous accordons une attention particulière à l&apos;orientation des plus jeunes à partir de 10ans. Après un entretien d&apos;échange, nous les dirigeons vers l&apos;atelier ou le programme le plus adapté à leur niveau, à leurs objectifs et à leur maturité académique. Notre priorité est de garantir un cadre d&apos;apprentissage sécurisé, structuré et favorable à leur épanouissement complet.
                  </p>
                </div>
                <span className="text-gray-400 text-xl sm:text-2xl flex-shrink-0">+</span>
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left">
                <span className="font-medium text-sm sm:text-base pr-2">Quels sont les frais d&apos;inscription au programme ?</span>
                <span className="text-gray-400 text-xl sm:text-2xl flex-shrink-0">+</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">A propos</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">A propos de campusNumerique</a></li>
                <li><a href="#" className="hover:text-white">Curriculum</a></li>
                <li><a href="#" className="hover:text-white">Actualités</a></li>
                <li><a href="#" className="hover:text-white">Ateliers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Nos Ateliers</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white">Création de site internet</a></li>
                <li><a href="#" className="hover:text-white">Bureautique Informatique</a></li>
                <li><a href="#" className="hover:text-white">Robotique</a></li>
                <li><a href="#" className="hover:text-white">Montage vidéo</a></li>
                <li><a href="#" className="hover:text-white">Art en 3D</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Localisation</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>Akon - Sangmelima</li>
                <li>Bastos - Yaoundé</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8 sm:mb-12">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Nous contacter</h4>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">service en ligne 24h/24 - 7j/7</p>
            <a 
              href="https://wa.me/" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
            >
              Cliquez pour nous contacter
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="mb-4 sm:mb-6">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                <span className="text-purple-600">Campus</span>
                <span className="text-white">Numerique</span> Bootcamp, a <span className="text-purple-600">Noble Desktop</span> partner company, is dedicated to providing high school students with a state-of-the-art education in computer science and digital design. Our programs include hands-on, immersive summer camps and after-school programs.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-xs">
              <p>© 2026 campusnumerique Inc. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
