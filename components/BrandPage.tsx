import React from 'react';

const BrandPage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-text-primary dark:text-white mb-6">
          Brand Story
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="space-y-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=2574&auto=format&fit=crop" 
                alt="Lab ingredients" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">Pure & Natural</h3>
            <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-6">자연 그대로의 순수함</h2>
            <p className="text-text-secondary dark:text-gray-400 leading-relaxed text-lg">
              '상떼(Santé)'는 프랑스어로 건강을 의미합니다. 우리는 피부 본연의 건강함을 되찾아주는 것을 최우선 가치로 삼고 있습니다. 
              불필요한 화학 성분은 배제하고, 자연에서 얻은 가장 순수한 원료만을 고집합니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=2670&auto=format&fit=crop" 
                alt="Nature" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">Sustainable Beauty</h3>
            <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-6">지속 가능한 아름다움</h2>
            <p className="text-text-secondary dark:text-gray-400 leading-relaxed text-lg">
              우리는 아름다움이 지구를 해치지 않아야 한다고 믿습니다. 
              상떼의 모든 패키지는 재활용 가능한 소재로 만들어지며, 
              탄소 발자국을 줄이기 위한 노력을 멈추지 않습니다.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary/20 dark:bg-white/5 rounded-3xl p-12 text-center">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">format_quote</span>
            <p className="text-2xl md:text-3xl font-serif text-text-primary dark:text-white italic mb-6">
              "진정한 아름다움은 건강한 피부에서 시작됩니다."
            </p>
            <p className="text-text-secondary dark:text-gray-400 font-bold">- Sangte Founder</p>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;