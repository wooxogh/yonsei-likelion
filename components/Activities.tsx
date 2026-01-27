import React from 'react';
import { BookOpen, Lightbulb, Code, Presentation } from 'lucide-react';

const activities = [
  {
    title: "정기 세션",
    subtitle: "Regular Session",
    description: "매주 트랙별 스터디와 전체 세션을 통해 웹 개발의 기초부터 심화까지 탄탄하게 학습합니다.",
    icon: BookOpen
  },
  {
    title: "아이디어톤",
    subtitle: "Idea-thon",
    description: "팀빌딩 후 무박 2일간 우리만의 아이디어를 구체화하며, 기획과 협업의 과정을 경험합니다.",
    icon: Lightbulb
  },
  {
    title: "해커톤",
    subtitle: "Hackathon",
    description: "여름방학의 꽃. 전국의 멋사 대학들과 함께 실제 서비스를 구현하고 배포하는 치열한 개발 마라톤입니다.",
    icon: Code
  },
  {
    title: "데모데이",
    subtitle: "Demo Day",
    description: "한 학기 동안 갈고 닦은 우리의 서비스를 세상에 선보이는 최종 발표회이자 네트워킹 파티입니다.",
    icon: Presentation
  }
];

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-24 bg-neutral-900 relative">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-yonsei-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-likelion-orange font-bold tracking-widest uppercase mb-2">Our Activities</h2>
          <h3 className="text-4xl font-bold text-white">주요 활동</h3>
          <p className="text-gray-400 mt-4">1년 동안 우리는 이렇게 성장합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="bg-black border border-white/10 rounded-xl p-8 hover:bg-white/5 transition-all duration-300 group hover:border-yonsei-light/30"
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-likelion-orange mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-likelion-orange/10 shadow-[0_0_15px_rgba(255,119,16,0.1)]">
                <activity.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-likelion-orange transition-colors">
                {activity.title}
              </h4>
              <p className="text-xs font-semibold text-yonsei-light uppercase tracking-wider mb-4">
                {activity.subtitle}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;