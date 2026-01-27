import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "YONSEI PLATE",
    category: "Campus Life",
    description: "신촌/송도 캠퍼스 주변의 맛집을 큐레이션하고 학우들의 솔직한 리뷰를 공유하는 커뮤니티 플랫폼입니다.",
    stack: ["React", "Django", "AWS"],
    imageGradient: "from-[#0D0D2F] via-[#1a1a4a] to-black",
    borderColor: "border-[#5F6EAC]/30"
  },
  {
    title: "AKARAKARA",
    category: "Event Service",
    description: "연세대학교 축제 아카라카의 티켓 양도 및 실시간 라인업 확인, 응원가 가사 제공 기능을 담은 축제 통합 앱입니다.",
    stack: ["Flutter", "Spring Boot", "MySQL"],
    imageGradient: "from-[#003876] via-[#001E40] to-black",
    borderColor: "border-yonsei-blue/30"
  },
  {
    title: "STUDY MATE",
    category: "Education",
    description: "공강 시간을 활용하여 함께 공부할 스터디원을 모집하고, 학습 시간을 기록하여 서로 동기부여를 얻는 서비스입니다.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    imageGradient: "from-gray-900 via-gray-800 to-black",
    borderColor: "border-white/20"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#050510] relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="project-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#project-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-spec-orange"></span>
            <h2 className="text-sm font-bold text-spec-orange tracking-widest uppercase">Our Projects</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            우리가 만든 <span className="text-spec-blue">결과물</span>
          </h3>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            기획부터 개발, 배포까지. <br className="md:hidden"/>멋쟁이사자처럼에서 만들어진 실제 서비스들입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-[#0D0D2F]/40 backdrop-blur-sm border ${project.borderColor} rounded-2xl overflow-hidden hover:border-spec-orange/50 transition-all duration-300 hover:-translate-y-2 flex flex-col`}
            >
              {/* Thumbnail Area */}
              <div className={`h-52 w-full bg-gradient-to-br ${project.imageGradient} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-0"></div>
                {/* Scale Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-50 group-hover:scale-110 transition-transform duration-700 z-0`}></div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-bold text-white/90 bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-10px] group-hover:translate-y-0 duration-300">
                    <button className="p-2 bg-black/60 hover:bg-spec-orange rounded-full text-white transition-colors">
                      <Github size={16} />
                    </button>
                    <button className="p-2 bg-black/60 hover:bg-spec-blue rounded-full text-white transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-spec-orange transition-colors">{project.title}</h4>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-[#0D0D2F]/20 flex-1 flex flex-col">
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium text-spec-blue bg-spec-blue/10 border border-spec-blue/20 px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;