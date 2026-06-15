import { useState } from 'react';
import { BookOpen, Award, Code, GraduationCap, Mail, ExternalLink, ChevronDown, ChevronUp, Lightbulb, Compass } from 'lucide-react';

interface Project {
  title: string;
  lab: string;
  date: string;
  desc: string[];
  tools: string[];
  image: string;
}

interface CourseCategory {
  category: string;
  courses: string[];
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  details: string[];
}

interface LeadershipItem {
  role: string;
  initiative: string;
  date: string;
  desc: string;
  image: string;
}

export default function App() {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const education: EducationItem[] = [
    {
      institution: "Indian Institute of Technology Bombay, India",
      degree: "Integrated B.Tech + M.Tech in Engineering Physics (Specialization: Nanoscience)",
      duration: "2022 - Present",
      details: [
        "Specialization: Nanoscience",
        "Cumulative Performance Index (CPI): 9.40 / 10",
        "Artificial Intelligence and Data Science (Centre for Machine Intelligence and Data Science)"
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: "Investigating Exceptional Points in Non-Hermitian Metasurfaces",
      lab: "Laboratory of Optics of Quantum Materials, IIT Bombay",
      date: "Jan 2026 - Present",
      desc: [
        "Formulated analytical expressions for the frequency-domain resolvent near a microscopic exceptional point, characterizing distinct behaviors on both sides of EP.",
        "Derived the non-adiabatic time domain resolvent to model system dynamics under arbitrary probe pulses.",
        "Developed a 10-parameter leaky polarizer model and performed covariance analysis to resolve experimental discrepancies."
      ],
      tools: ["Green's function", "Covariance Analysis", "Leakiness Modeling", "Python", "COMSOL"],
      image: "images/ep.png"
    },
    {
      title: "Cavity QED with Moiré Superlattices",
      lab: "Laboratory of Optics of Quantum Materials, IIT Bombay",
      date: "Jan 2025 - Dec 2025",
      desc: [
        "Constructed tight-binding models of monolayer photonic graphene and performed multi-pole expansions on 6-site unit cells.",
        "Extended the Bistritzer-MacDonald model of twisted bilayer graphene to a 36-site basis to track flatband formation.",
        "Simulated photonic platforms in COMSOL Multiphysics using silicon nitride to evaluate local density of states (LDOS)."
      ],
      tools: [ "Tight-Binding", "Continuum Model", "COMSOL", "Tidy3D", "Legume", "High-Performance Computing"],
      image: "images/cavity.png"
    },
    {
      title: "Chiral Metamaterials in the TeraHertz Band",
      lab: "Konishi Lab, The University of Tokyo, Japan",
      date: "Jun 2025 - Aug 2025",
      desc: [
        "Simulated 3D chiral helix metamaterials on CST Studio Suite, validating robust circular dichroism in the 0.5-1 THz range.",
        "Optimized bilayer chiral structures to achieve a 10x enhancement in rotation and 20x enhancement in ellipticity.",
        "Gained cleanroom microfabrication experience including photolithography, etching, and thin-film gold sputtering."
      ],
      tools: ["CST Studio Suite", "Cleanroom Fabrication", "Optical setup Alignment", "Data Analysis"],
      image: "/images/chiral.png"
    },
    {
      title: "5km Free Space Optical Link Simulation",
      lab: "QNu Labs Private Limited, Bangalore, India (Remote)",
      date: "May 25 - Jul 25",
      desc: [
        "Simulated Gaussian beam propagation through turbulent media, tracking irradiance fluctuations via Monte Carlo modeling.",
        "Analyzed propagation limits across fluctuation regimes using Rytov theory to evaluate beam wander.",
        "Developed end-to-end wave propagation simulations using the phase screen method and Zernike wavefront corrections."
      ],
      tools: ["Monte Carlo Simulations", "Rytov Theory", "Phase Screen Method", "Python"],
      image: "/images/5km.png"
    },
    {
      title: "Sterile Neutrinos as Dark Matter Candidates",
      lab: "Theoretical HEP Group (Prof. Manibrata Sen), IIT Bombay",
      date: "Jan 2025 - Present",
      desc: [
        "Explored neutrino physics covering three flavour oscillations, the MSW effect, and matter potentials.",
        "Modeled sterile neutrino production via the Dodelson-Widrow mechanism to constrain mass values.",
        "Developed stronger constraints on production in core-collapse supernovae tracking lepton number fraction evolution."
      ],
      tools: ["Beyond Standard Model", "Neutrino Physics", "Core-collapse Supernovae", "Mathematica", "Python"],
      image: "/images/sn.png"
    },
    {
      title: "Self-Driving Car Path Tracking & Controls",
      lab: "Unmesh Mashruwala Innovation Cell (UMIC), IIT Bombay",
      date: "Nov 2023 - Jul 24",
      desc: [
        "Developed geometry-based controllers for high-speed autonomous vehicle path tracking operating at 200 Hz.",
        "Implemented Model Predictive Control (MPC) and MPCC tracking models with dynamic obstacle avoidance.",
        "Represented IIT Bombay at the F1Tenth Autonomous Grand Prix CDC 2024 held in Italy."
      ],
      tools: ["Control Theory", "AV Stack", "C++", "Python", "MPC / MPCC", "ROS2", "Gazebo", "MATLAB"],
      image: "/images/av.png"
    }
  ];

  const coursework: CourseCategory[] = [
    {
      category: "Photonics & Quantum Materials",
      courses: [
        "Light-Matter Interaction",
        "Molecular Spectroscopy and Optical Physics",
        "Introduction to Condensed Matter Physics",
        "Magnetism and Superconductivity",
        "Geometry and Topology in Quantum Matter",
        "Thin Film Physics & Technology",
        "Quantum Information and Computing"
      ]
    },
    {
      category: "Theoretical & High Energy Physics",
      courses: [
        "Quantum Mechanics I, II & III",
        "Electromagnetic Theory",
        "Advanced Topics in Astro-particle Physics",
        "Specialized Topics in QFT and Beyond Standard Model",
        "Statistical Physics & Advanced Statistical Mechanics"
      ]
    },
    {
      category: "Mathematical, Computational & AI",
      courses: [
        "Group Theory for Physics and Mechanics of Solids",
        "Complex Analysis and Integral Transforms",
        "Introduction to Numerical Analysis",
        "Non-linear Dynamics",
        "Continuum Mechanics",
        "Programming for Data Science",
        "Introduction to Machine Learning",
        "Fundamentals of Digital Image Processing",
        "A First Course in Optimization",
        "Probability and Stochastic Processes I"
      ]
    },
    {
      category: "Experimental Physics & Systems",
      courses: [
        "Solid State Physics Laboratory",
        "Nuclear Physics Laboratory",
        "Optics and Spectroscopy Laboratory",
        "Analog & Digital Electronics",
        "Microprocessors"
      ]
    }
  ];

  const leadership: LeadershipItem[] = [
    {
      role: "Undergraduate Teaching Assistant",
      initiative: "Light-Matter Interaction & Introduction to Classical and Quantum Mechanics, Department of Physics, IIT Bombay",  
      date: "Jan 2026 - Apr 2026",
      desc: "Designed and structured comprehensive assessments, including weekly quizzes and examinations, tailored for a diverse cohort of 100+ undergraduate, postgraduate, and doctoral students. Delivered specialized guest lectures on advanced quantum mechanics concepts, such as the Jaynes-Cummings model and the BB84 protocol.",
      image: "/images/ta.png"
    },
    {
      role: "Team Leader",
      initiative: "Team SeDriCa, Unmesh Mashruwala Innovation Cell, IIT Bombay",
      date: "Aug 2025 - Apr 2026",
      desc: "Responsible for overseeing overall technical development, managing technical assets, and industrial collaborations. Spearheading a 3-year collaboration with Mercedes-Benz India on incorporating GenAI into existing AV testing. Organized India's first international autonomous racing event, Roboracers, at IIT Bombay.",
      image: "/images/sedrica.png"
    },
    {
      role: "Department Academic Mentor",
      initiative: "Student Mentor Program, IIT Bombay",
      date: "May 2024 - Apr 2025",
      desc: "Selected out of 50+ candidates after a rigorous procedure of motivation letters, interviews, and peer reviews. Mentored and supported 9 second-year UG students in their academic and personal pursuits. Spearheading a team of 5 to revamp the official DAMP website.",
      image: "/images/smp.png"
    },
    {
      role: "Quantum Machine Learning Project Mentor",
      initiative: "Seasons of Code, Web and Coding Club, IIT Bombay",
      date: "May 2024 - Jul 2024",
      desc: "Mentored a cohort of 12 participants in an 8-week program on Quantum Machine Learning covering fundamentals of Quantum Computing, Python, Qiskit, and PennyLane. Designed and curated weekly tutorials and supervised final project implementations like QGANs and QVAEs.",
      image: "/images/qml.png"
    }
  ];

  const publications: Publication[] = [
    {
      title: "Active Control of Topological Exceptional Points in Non-Hermitian Metasurfaces",
      authors: "P. Sharma, S. S. Mishra, Y. Gupta, B. Kumar, R. Singh, A. Kumar, & A. Kumar",
      venue: "arXiv preprint: arXiv:2605.07702 (Under review at Nature Photonics)",
      year: "2026",
      abstract: "Active control and ultrafast switching of non-Hermitian photonic systems are essential for next-generation reconfigurable optical technologies. Here, we demonstrate dynamic temporal manipulation of EPs in the terahertz (THz) regime using optically excited germanium (Ge) as an active medium. By exploiting pump-probe delay as a continuous tuning parameter, we achieve sub-picosecond eigenmode switching (~0.5 ps) and realize a complete time-resolved EP encirclement within ~2 ps, enabling direct observation of topological phase accumulation. At EP, the metasurface exhibits highly asymmetric transmission for circularly polarized light, characteristic of chiral mode response. Furthermore, we observe ultrafast eigenmode switching and topological phase evolution within ~1 ps, achieving >99% cross-polarization modulation depth. The measured results show strong agreement with theoretical modeling, with a high Petermann factor of approximately 10^3, confirming the effectiveness of the design. Our work establishes pump-probe delay time as a dynamical control parameter for EP topology, introducing a new regime of ultrafast non-Hermitian photonics for high-speed switching, enhanced sensitivity, and tunable polarization control in the THz domain."
    }
  ];

  const getToolBadgeColor = (idx: number) => {
    const colors = [
      "bg-blue-50/40 text-blue-600 border-blue-200/60",
      "bg-amber-50/40 text-amber-700 border-amber-200/60",
      "bg-emerald-50/40 text-emerald-600 border-emerald-200/60",
      "bg-indigo-50/40 text-indigo-600 border-indigo-200/60",
      "bg-purple-50/40 text-purple-600 border-purple-200/60",
      "bg-cyan-50/40 text-cyan-600 border-cyan-200/60"
    ];
    return colors[idx % colors.length];
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 antialiased">
      {/* Sticky Navigation bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-semibold tracking-tight text-lg text-blue-600">Yash Gupta</span>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#interests" className="hover:text-blue-600 transition">Interests</a>
            <a href="#education" className="hover:text-blue-600 transition">Education</a>
            <a href="#research" className="hover:text-blue-600 transition">Research</a>
            <a href="#publications" className="hover:text-blue-600 transition">Publications</a>
            <a href="#mentorship" className="hover:text-blue-600 transition">Leadership</a>
            <a href="#coursework" className="hover:text-blue-600 transition">Coursework</a>
            <a href="#extracurricular" className="hover:text-blue-600 transition">Activities</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        {/* Hero Identity Section */}
        <section className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 pt-6">
          <div className="space-y-6 max-w-2xl w-full">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Yash Gupta
              </h1>
              <div className="border-l-2 border-blue-500 pl-4 space-y-1 py-0.5">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Final Year Dual Degree
                </p>
                <p className="text-xl font-bold text-slate-800 tracking-tight">
                  Engineering Physics
                </p>
                <p className="text-sm font-medium text-slate-500 tracking-wide">
                  Indian Institute of Technology Bombay
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
              <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 shadow-sm shrink-0">
                <Mail size={16} className="text-slate-400 shrink-0" />
                <div className="flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
                  <a href="mailto:yash.gupta@iitb.ac.in" className="hover:text-blue-600 transition duration-150">yash.gupta@iitb.ac.in</a>
                  <span className="text-slate-200 pointer-events-none">|</span>
                  <a href="mailto:yashgupta16052005@gmail.com" className="hover:text-blue-600 transition duration-150 text-slate-500">yashgupta16052005@gmail.com</a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a href="https://github.com/Yash16Gupta" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition duration-150 shadow-sm whitespace-nowrap">
                  <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
                
                <a href="https://www.linkedin.com/in/yashgupta1397" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition duration-150 shadow-sm whitespace-nowrap">
                  <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                
                <a href="https://scholar.google.com/citations?user=zyANulwAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition duration-150 shadow-sm whitespace-nowrap">
                  <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                  Scholar
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-48 h-64 rounded-2xl border border-slate-200/80 overflow-hidden shrink-0 shadow-md bg-slate-100 transition duration-200 hover:shadow-lg">
            <img 
              src="/images/Self.png" 
              alt="Yash Gupta" 
              className="w-full h-full object-cover object-center select-none"
            />
          </div>
        </section>

        {/* Research Interests Section */}
        <section id="interests" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <Lightbulb size={22} className="text-blue-500" /> Research Interests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border-t-4 border-t-blue-600">
              <div className="space-y-3">
                <div className="flex flex-col space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Core Domain</span>
                  <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase">Research Pillars</h3>
                </div>
                <ul className="space-y-2 text-xs font-bold text-slate-800 leading-tight">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span className="text-slate-950">Quantum Photonics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>Light-Matter Interactions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border-t-4 border-t-blue-500">
              <div className="space-y-3">
                <div className="flex flex-col space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Physics Focus</span>
                  <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase">Frameworks</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 font-medium leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span><span className="text-slate-950 font-semibold">Non-Hermitian</span> system dynamics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span><span className="text-slate-950 font-semibold">Nonlinear</span> optical control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span><span className="text-slate-950 font-semibold">Topological</span> photonics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border-t-4 border-t-blue-500">
              <div className="space-y-3">
                <div className="flex flex-col space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Material Platforms</span>
                  <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase">Structural Media</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 font-medium leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>Engineered nanostructured <span className="text-slate-950 font-semibold">metasurfaces</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>Artificial photonic <span className="text-slate-950 font-semibold">moiré superlattices</span></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border-t-4 border-t-blue-500">
              <div className="space-y-3">
                <div className="flex flex-col space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Target Applications</span>
                  <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase">High-Impact Goals</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-700 font-semibold tracking-tight">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Quantum Computing Architectures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Next-Gen Communication Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Active Optoelectronic Devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <GraduationCap size={22} className="text-blue-500" /> Education
          </h2>
          
          <div className="space-y-4 pt-2">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row justify-between gap-4"
              >
                <div className="space-y-3 max-w-2xl">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-blue-50/50 border border-blue-100 text-blue-700 rounded-lg shadow-sm">
                      {edu.details[1]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">
                    <span className="text-slate-700 font-semibold">Minor Degree:</span> {edu.details[2]}
                  </p>
                </div>
                <div className="shrink-0 pt-1 md:pt-0">
                  <span className="inline-block text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-lg tracking-wide uppercase">
                    {edu.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Technical Experience Layout */}
        <section id="research" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <Code size={22} className="text-blue-600" /> Research & Technical Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200">
                
                {/* Image Container with Absolute Hover Text Overlay */}
                <div className="relative w-full h-48 bg-slate-950 overflow-hidden group">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-20 transition duration-300"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider px-2 py-1 bg-slate-900/90 text-white rounded backdrop-blur-sm uppercase z-10">
                    {proj.date}
                  </span>
                  
                  <div className="absolute inset-0 p-4 overflow-y-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center bg-slate-950/90 select-none">
                    <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1">Key Contributions</span>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-200 leading-normal">
                      {proj.desc.map((bullet, bIdx) => (
                        <li key={bIdx} className="align-top"><span className="inline-block max-w-[92%] align-top">{bullet}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Unified Context Block - No extra margin/padding gaps */}
                <div className="flex flex-col flex-grow p-5 space-y-3 bg-white">
                  <div className="space-y-0.5">
                    <h3 className="font-extrabold text-base text-slate-950 tracking-tight leading-snug line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 tracking-wide">
                      {proj.lab}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1 items-center">
                    {proj.tools.map((tool, tIdx) => (
                      <span key={tIdx} className={`text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded border shadow-sm border-transparent transform hover:scale-105 transition duration-150 ${getToolBadgeColor(tIdx)}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bibliographic Publications Module */}
        <section id="publications" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <BookOpen size={22} className="text-blue-500" /> Publications & Preprints
          </h2>
          
          <div className="space-y-4 pt-2">
            {publications.map((pub, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row items-start gap-4 justify-between"
              >
                <div className="space-y-2 flex-grow max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-md">
                      Preprint
                    </span>
                    <span className="text-xs font-semibold text-slate-400 italic">
                      {pub.venue}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {pub.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 font-medium tracking-tight">
                    {pub.authors.split(', ').map((author, aIdx) => {
                      const isMe = author.includes("Y. Gupta");
                      return (
                        <span key={aIdx}>
                          <span className={isMe ? "text-slate-950 font-bold underline decoration-blue-500/50 underline-offset-2" : ""}>
                            {author}
                          </span>
                          {aIdx < pub.authors.split(', ').length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </p>
                  
                  {expandedPaper === idx && (
                    <div className="mt-4 p-4 bg-slate-50 border-l-2 border-blue-500 rounded-r-xl text-xs text-slate-600 leading-relaxed transition-all duration-200 shadow-inner">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Abstract</span>
                      {pub.abstract}
                    </div>
                  )}
                </div>

                <div className="flex md:flex-col items-center gap-2 shrink-0 w-full md:w-auto pt-2 md:pt-0 border-t border-slate-100 md:border-none">
                  <button 
                    onClick={() => setExpandedPaper(expandedPaper === idx ? null : idx)}
                    className="w-full md:w-32 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-150"
                  >
                    {expandedPaper === idx ? <><ChevronUp size={14}/> Hide Abstract</> : <><ChevronDown size={14}/> Abstract</>}
                  </button>
                  
                  <a 
                    href="https://arxiv.org/abs/2605.07702" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full md:w-32 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition duration-150 shadow-sm"
                  >
                    <ExternalLink size={12}/> arXiv Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Mentorship Layout */}
        <section id="mentorship" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <Award size={22} className="text-blue-600" /> Leadership & Mentorship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((lead, idx) => (
              <div key={idx} className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200">
                
                {/* Image Container with Absolute Hover Text Overlay */}
                <div className="relative w-full h-44 bg-slate-950 overflow-hidden group">
                  <img 
                    src={lead.image} 
                    alt={lead.initiative} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-20 transition duration-300"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 bg-slate-900/70 text-white rounded backdrop-blur-sm z-10">
                    {lead.date}
                  </span>
                  
                  <div className="absolute inset-0 p-5 overflow-y-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center bg-slate-950/90 select-none">
                    <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1">Impact Overview</span>
                    <p className="text-xs text-slate-200 leading-relaxed">{lead.desc}</p>
                  </div>
                </div>

                {/* Unified Context Block */}
                <div className="flex flex-col flex-grow p-5 space-y-2 bg-white">
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base text-slate-950 tracking-tight leading-snug line-clamp-2">
                      {lead.role}
                    </h3>
                    
                    {/* Bulleting logic specifically applied for multiple courses separated by '&' */}
                    {lead.role === "Undergraduate Teaching Assistant" && lead.initiative.includes('&') ? (
                      <div className="flex flex-col space-y-1 pt-0.5">
                        {(() => {
                          const [coursesPart, deptPart] = lead.initiative.split(', ');
                          const individualCourses = coursesPart.split(' & ');
                          return (
                            <>
                              <ul className="list-disc list-inside space-y-0.5">
                                {individualCourses.map((course, cIdx) => (
                                  <li key={cIdx} className="text-xs font-semibold text-blue-600 tracking-wide">
                                    <span className="align-middle">{course}</span>
                                  </li>
                                ))}
                              </ul>
                              {deptPart && (
                                <p className="text-[11px] font-medium text-slate-500 tracking-wide pt-0.5">
                                  {deptPart}, IIT Bombay
                                </p>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    ) : (
                      <p className="text-xs font-semibold text-blue-600 tracking-wide">
                        {lead.initiative}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Coursework Module */}
        <section id="coursework" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <GraduationCap size={22} className="text-blue-500" /> Selected Coursework
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {coursework.map((cat, idx) => {
              const thematicStyles = [
                { border: "border-l-4 border-l-blue-500" },
                { border: "border-l-4 border-l-indigo-500" },
                { border: "border-l-4 border-l-slate-600" },
                { border: "border-l-4 border-l-cyan-600" },
              ][idx % 4];

              return (
                <div 
                  key={idx} 
                  className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${thematicStyles.border}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase tracking-wider">
                        {cat.category}
                      </h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {cat.courses.map((course, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs font-medium text-slate-600 leading-tight">
                          <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                          <span className="hover:text-slate-900 transition-colors duration-150">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Extra-Curricular Activities Section */}
        <section id="extracurricular" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <Compass size={22} className="text-blue-500" /> Extra-Curricular Activities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col space-y-3 border-t-4 border-t-blue-500">
              <div className="flex flex-col space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Global & Cultural</span>
                <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase">International Exchange</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 font-medium leading-relaxed flex-grow">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <span>Selected as <span className="text-slate-950 font-semibold">1 of only 14 students globally</span> from 1,149 applicants for the highly selective research exchange program at The University of Tokyo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <span>Awarded an <span className="text-slate-950 font-semibold">A+ grade</span> in a 100-hour comprehensive Japanese Communication & Culture course hosted by the Office of International Relations, IIT Bombay.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col space-y-3 border-t-4 border-t-indigo-500">
              <div className="flex flex-col space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">Fitness & Sports</span>
                <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase">Athletics & Endurance</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 font-medium leading-relaxed flex-grow">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <span>Completed a yearlong intensive conditioning and training program at the <span className="text-slate-950 font-semibold">National Sports Organisation (NSO)</span>, specializing in Aquatics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <span>Successfully trained for and completed the 10K run at the <span className="text-slate-950 font-semibold">IIT Bombay Half Marathon</span> event.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col space-y-3 border-t-4 border-t-purple-600">
              <div className="flex flex-col space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">Service & Tech</span>
                <h3 className="font-bold text-slate-900 tracking-tight text-sm uppercase">Institutional Contribution</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 font-medium leading-relaxed flex-grow">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                  <span>Volunteered technical core skills to completely overhaul and manage active faculty profiles and dynamic layouts across the <span className="text-slate-950 font-semibold">official Department of Physics website portal</span>.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-200 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Yash Gupta. Built using React + TypeScript.
      </footer>
    </div>
  );
}