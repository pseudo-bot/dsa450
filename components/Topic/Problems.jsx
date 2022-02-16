import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useContext } from 'react';
import Question from './Question';
import { QuesContext } from '../../context/QuestionsContext';

export default function Problems({ data, index }) {
  const { status } = useContext(QuesContext);

  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);

  let total = status[index][0].length;
  let solved = status[index][0].filter((item) => item).length;

  return (
    <>
      <div className="text-gray-500 justify-center px-8 gap-20 flex items-center w-screen h-12 z-50 fixed bg-gray-100 dark:bg-gray-600 top-16 shadow-md border-green-300 border-b dark:border-gray-400">
        <div className="border-b-2 text-[#15a801] border-[#15a801] dark:text-gray-200 dark:border-gray-200">
          Solved {solved}
        </div>
        <div className="border-b-2 text-[#df7802] border-[#df7802] dark:text-gray-200 dark:border-gray-200">
          Unsolved {total - solved}
        </div>
      </div>
      <div className="w-screen px-5 mx-auto relative top-32 flex flex-wrap max-w-5xl justify-center">
        {data.problems.map((el, i) => {
          return (
            <Question
              key={i}
              ques={el.desc}
              href={el.link}
              topic_index={index}
              question_index={i}
            />
          );
        })}
      </div>
    </>
  );
}
