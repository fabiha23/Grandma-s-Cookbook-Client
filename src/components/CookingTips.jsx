import React from 'react';
import { Fade } from 'react-awesome-reveal';

const tips = [
  {
    icon: '🔥',
    title: 'Preheat Your Pan',
    description: 'Always heat your pan before adding ingredients for a perfect sear.',
    color: 'bg-purple-200',
  },
  {
    icon: '🔪',
    title: 'Sharp Knife, Safe Life',
    description: 'A sharp knife is safer than a dull one — less slipping, more control.',
    color: 'bg-blue-200 ',
  },
  {
    icon: '🧂',
    title: 'Season Early',
    description: 'Season meats and vegetables early for deeper flavor development.',
    color: 'bg-orange-200',
  },
  {
    icon: '🍳',
    title: 'Don’t Overcrowd',
    description: 'Overcrowding the pan steams your food — give it space to brown.',
    color: 'bg-blue-200',
  },
  {
    icon: '⏲️',
    title: 'Rest Your Meat',
    description: 'Let cooked meat rest before cutting to keep juices inside.',
    color: 'bg-orange-200',
  },
  {
    icon: '🧽',
    title: 'Clean As You Go',
    description: 'Clean your workspace while cooking to save time and stay organized.',
    color: 'bg-purple-200',
  },
];

const CookingTips = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Quick Cooking Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tips.map((tip, index) => (
          <Fade key={index} direction="up">
            <div
              className={`relative bg-[#E2DCC5] p-5 rounded-md shadow-md text-center hover:rotate-[-3deg] rotate-0 transition-transform duration-300 border-2 border-[#D9CFC1]`}
            >
              <div className="text-4xl mb-2">{tip.icon}</div>
              <h3 className="text-lg font-bold mb-1 text-accent ">{tip.title}</h3>
              <p className="text-accent  mb-1 ">{tip.description}</p>
              <div className="absolute w-4 h-4 bg-accent rounded-full top-2 left-2 "></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CookingTips;
