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
	let solved = status[index][0].filter(item => item).length;

  return (
    <>
      <div className="w-screen px-5 mx-auto relative top-44 flex flex-wrap max-w-5xl justify-center">
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

      <div className="pointer-cursor z-50 max-w-[20rem] dark:border-gray-100 shadow-md opacity-90 fixed py-2 w-3/4 justify-between dark:bg-gray-600 rounded-full bg-green-600 text-gray-50 top-32 left-1/2 -translate-x-1/2 flex items-center px-8">
				<div className=''>Solved {solved}</div>
				<div className=''>Unsolved {total - solved}</div>
			</div>
    </>
  );
}
