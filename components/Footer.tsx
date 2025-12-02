import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-white/5 mt-16 border-t border-secondary dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-text-primary dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                상떼
              </h2>
            </div>
            <p className="text-sm text-text-secondary dark:text-gray-400">
              현대인을 위한 뷰티와 코스메틱.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-base text-text-primary dark:text-white mb-4">쇼핑</h5>
            <ul className="space-y-2">
              {['신상품', '베스트셀러', '스킨케어', '메이크업'].map((item) => (
                <li key={item}>
                  <a
                    className="text-sm text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-pink-400 transition-colors"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-base text-text-primary dark:text-white mb-4">
              고객 서비스
            </h5>
            <ul className="space-y-2">
              {['문의하기', 'FAQ', '배송 및 반품', '내 계정'].map((item) => (
                <li key={item}>
                  <a
                    className="text-sm text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-pink-400 transition-colors"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-base text-text-primary dark:text-white mb-4">
              팔로우
            </h5>
            <div className="flex space-x-4">
              <a
                className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-pink-400 transition-colors"
                href="#"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.11,9.75 4.19,10.56C3.47,10.54 2.82,10.34 2.26,10.03C2.26,10.05 2.26,10.07 2.26,10.09C2.26,12.24 3.79,14.01 5.9,14.44C5.55,14.52 5.18,14.56 4.8,14.56C4.52,14.56 4.25,14.54 3.99,14.49C4.55,16.25 6.25,17.5 8.25,17.54C6.73,18.72 4.8,19.45 2.75,19.45C2.42,19.45 2.1,19.43 1.79,19.38C3.84,20.73 6.26,21.5 8.84,21.5C16.02,21.5 20.34,15.62 20.34,10.5C20.34,10.33 20.34,10.16 20.33,9.99C21.1,9.44 21.85,8.73 22.46,7.89V6Z"></path>
                </svg>
              </a>
              <a
                className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-pink-400 transition-colors"
                href="#"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c3.252,0.148,4.771,1.691,4.919,4.919c0.058,1.265,0.069,1.645,0.069,4.85s-0.012,3.584,-0.069,4.85c-0.149,3.225,-1.664,4.771,-4.919,4.919c-1.266,0.058,-1.644,0.07,-4.85,0.07s-3.584,-0.012,-4.85,-0.07c-3.26,-0.149,-4.771,-1.664,-4.919,-4.919c-0.058,-1.265,-0.07,-1.644,-0.07,-4.85s0.012,-3.584,0.07,-4.85c0.149,-3.225,1.664,-4.771,4.919,-4.919c1.266,-0.057,1.645,-0.069,4.85,-0.069M12,0C8.741,0,8.333,0.014,7.053,0.072C2.695,0.272,0.273,2.69,0.073,7.052C0.014,8.333,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.2,4.358,2.618,6.78,7.052,6.98c1.281,0.058,1.689,0.072,4.948,0.072s3.668,-0.014,4.948,-0.072c4.354,-0.2,6.782,-2.618,6.979,-7.052c0.058,-1.281,0.073,-1.689,0.073,-4.948s-0.014,-3.668,-0.072,-4.948C21.72,2.69,19.302,0.274,14.948,0.073C13.668,0.014,13.259,0,12,0L12,0z M12,5.838c-3.403,0,-6.162,2.759,-6.162,6.162s2.759,6.162,6.162,6.162s6.162,-2.759,6.162,-6.162S15.403,5.838,12,5.838z M12,16.25c-2.344,0,-4.25,-1.906,-4.25,-4.25s1.906,-4.25,4.25,-4.25s4.25,1.906,4.25,4.25S14.344,16.25,12,16.25z M18.802,4.198c-0.828,0,-1.5,0.672,-1.5,1.5s0.672,1.5,1.5,1.5s1.5,-0.672,1.5,-1.5S19.63,4.198,18.802,4.198z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary dark:border-gray-700 mt-8 pt-6 text-center text-sm text-text-secondary dark:text-gray-400">
          <p>© 2024 상떼 Cosmetics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;