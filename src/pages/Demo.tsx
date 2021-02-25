import React, { useEffect, useState } from "react";

export const Demo = () => {
  const [CTR, setCTR] = useState(false);
  const [OPT, setOPT] = useState(false);
  const [CMD, setCMD] = useState(false);
  const [marked, setMarked] = useState(false);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [text, setText] = useState("Change text case instantly.");

  useEffect(() => {
    if (up) {
      setTimeout(() => setUp(false), 500);
    }
  }, [up]);

  useEffect(() => {
    if (down) {
      setTimeout(() => setDown(false), 500);
    }
  }, [down]);

  useEffect(() => {
    const unsubs = [];
    let timeUntil = 0;
    events.forEach((e) => {
      timeUntil += e.delay;
      const timeout = setTimeout(e.action, timeUntil);
      unsubs.push(() => clearTimeout(timeout));
    });

    return () => unsubs.forEach((u) => u());
  }, []);

  const events = [
    {
      delay: 500,
      action: () => {
        setMarked(true);
      },
    },
    {
      delay: 3000,
      action: () => {
        setCTR(true);
      },
    },
    {
      delay: 400,
      action: () => {
        setOPT(true);
      },
    },
    {
      delay: 400,
      action: () => {
        setCMD(true);
      },
    },
    {
      delay: 1000,
      action: () => {
        setUp(true);
        setText("CHANGE TEXT CASE INSTANTLY.");
      },
    },
    {
      delay: 1000,
      action: () => {
        setDown(true);
        setText("Change Text Case Instantly.");
      },
    },
    {
      delay: 1000,
      action: () => {
        setDown(true);
        setText("Change text case instantly.");
      },
    },
    {
      delay: 1000,
      action: () => {
        setDown(true);
        setText("change text case instantly.");
      },
    },
    {
      delay: 1000,
      action: () => {
        setUp(true);
        setText("Change text case instantly.");
      },
    },
    {
      delay: 1000,
      action: () => {
        setUp(true);
        setText("Change Text Case Instantly.");
      },
    },
    {
      delay: 2000,
      action: () => {
        setMarked(false);
      },
    },
  ];

  return (
    <>
      <h1 className="text-5xl font-medium text-black text-center mt-20 mb-8">
        <div className="mb-1">
          <Marked marked={marked} text={text}></Marked>
        </div>
      </h1>
      <div className="flex">
        <Key active={CTR} className="mr-4" letter="⌃" text={"control"}></Key>
        <Key active={OPT} className="mr-4" letter="⌥" text={"option"}></Key>
        <Key active={CMD} className="mr-4" letter="⌘" text={"command"}></Key>
        <div className="pl-8"></div>
        <Key center={true} className="mr-2" letter="◀" text={"command"}></Key>
        <div className="mr-2">
          <Key active={up} center={true} defHeight={false} letter="▲" className={`w-16 h-8 mb-1`}></Key>
          <Key active={down} center={true} defHeight={false} letter="▼" className={`w-16 h-7 `}></Key>
        </div>
        <Key center={true} className="mr-2" letter="▶" text={"command"}></Key>
      </div>
    </>
  );
};

const Marked = ({ text, marked }) => {
  const DURATION = 1000;
  const [lettersMarked, setLettersMarked] = useState(0);
  useEffect(() => {
    if (marked) {
      const t = setTimeout(() => {
        const textLength = text.length;
        const timeEach = DURATION / textLength;
        text.split("").forEach((_, i) => {
          setTimeout(() => {
            setLettersMarked(i + 1);
          }, (i + 1) * timeEach);
        });
      }, 500);
      return () => clearTimeout(t);
    } else {
      setLettersMarked(0);
    }
  }, [marked]);
  return (
    <>
      <mark className="bg-blue-200 bg-opacity-40">{text.slice(0, lettersMarked)}</mark>
      {text.slice(lettersMarked)}
    </>
  );
};

const Key = ({ letter, active:ahere = false, className, defHeight = true, center = false }) => {
  const [activeOverride, setActiveOverride] = useState(false)
  const active = activeOverride || ahere
  return (
    <div
    onMouseDown={() => setActiveOverride(true)}
    onMouseUp={() => setActiveOverride(false)}
      className={`${className}
  ${defHeight && "w-16 h-16"} rounded 
  ${active ? "bg-gray-900" : "bg-gray-600"} 
  
  ${active ? "" : "shadow-lg"}
   text-white `}
    >
      <div
        className={`
      ${defHeight ? " p-4" : ""}
      ${center ? "text-center" : "text-right"}
      text-lg `}
      >
        {letter}
      </div>
      {/* <div style={{
          fontSize: 10
      }} className="text-left font-light">{text}</div> */}
    </div>
  );
};
