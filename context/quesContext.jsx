import { createContext, useState } from "react";
import data from '../assets/data/data';

export const QuesContext = createContext(null);

const dataOb = data.map(el => {
  return {
    topic: el.topic,
    problems: el.problems.map(prob => {
      return {
        desc: prob.desc,
        link: prob.link,
        status: 0,
      }
    })
  }
})

export const QuesProvider = ({children}) => {
  const [data, setData] = useState(dataOb);

  return (
    <QuesContext.Provider value={{data, setData}}>
      {children}
    </QuesContext.Provider>
  );
}

