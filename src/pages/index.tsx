import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";

import { navigate } from "gatsby";
import Helmet from "react-helmet";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Header } from "../course/Header";
import { Demo } from "../components/Demo";
import axios from "axios";

import { loadStripe } from "@stripe/stripe-js/pure";
export const BASE = `/.netlify/functions/`;


export default function () {
  const [loadingPay, setLoadingPay] = useState(false);
  const onPressPay = () => {
    setLoadingPay(true);
    axios
      .post(BASE + "money/checkout", {
        priceId: location.href.includes("localhost")
          ? "price_1IOhhODRWTS9VCXGT14MivCz"
          : "price_1IOhYpDRWTS9VCXGI1J8vpMq",
      })
      .then(async function ({ data }) {
        const stripe = await loadStripe(process.env.GATSBY_STRIPE_PUB_KEY);
        stripe
          .redirectToCheckout({
            sessionId: data.sessionId,
          })
          .then((res) => {});
      });
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-tr from-gray-100 pt-0 to-yellow-50 min-h-screen">
      <Helmet>
        <meta property="og:url" content="https://caseshortcut.com/" />
        <link rel="canonical" href="https://caseshortcut.com/" />
        <title>Case Shortcut - Transform text case instantly</title>
        <meta property="og:title" content={"Case Shortcut - Transform text case instantly"} />
        <meta name="twitter:title" content={"Case Shortcut - Transform text case instantly"} />
        <meta name="title" content={"Case Shortcut - Transform text case instantly"} />

        <meta
          name="description"
          content="Case Shortcut lets you transform any case from any app using a global shortcut to UPPERCASE, lowercase, Title Case and more"
        />
        <meta
          property="og:description"
          content="Case Shortcut lets you transform any case from any app using a global shortcut to UPPERCASE, lowercase, Title Case and more"
        />
        <meta
          name="twitter:description"
          content="Case Shortcut lets you transform any case from any app using a global shortcut to UPPERCASE, lowercase, Title Case and more"
        />

        {/* <meta property="og:image" content="https://caseshortcut.com/hero.png" />
        <meta name="twitter:image" content="https://caseshortcut.com/hero.png" /> */}

        <meta property="og:site_name" content="Case Shortcut" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:creator" content={"larskarbo"} />
      </Helmet>

      <div className="max-w-lg flex flex-col items-center">
        <Demo />

        <div className="pt-16">
          <button
            onClick={onPressPay}
            style={{
              backgroundColor: "#ff502f",
            }}
            className={`
          duration-150 px-4 py-4 rounded  text-white
          
          `}
          >
            {loadingPay ? (
              <span className="font-bold">Loading superpower...</span>
            ) : (
              <>
                <span className="font-bold">Get the superpower</span>
                <span className="font-light"> (5$)</span>
              </>
            )}
          </button>
          <div className="text-xs font-light text-gray-600 pt-2 pl-2">MacOS 11+. Works across all apps.</div>
        </div>

        <div className="w-full font-light text-gray-900">
          <h2 className="font-bold pt-8 text-lg pb-1">🤔 Why?</h2>
          <p>You save multiple seconds every day. And you will feel like you are a bit better than everyone else.</p>

          <h2 className="font-bold pt-8 text-lg pb-1">Will this bloat my mac?</h2>
          <p>No! Case Shortcut is a lightweight and optimized native Mac app, written in Swift 5.</p>

          <h2 className="font-bold pt-8 text-lg pb-1">Supported cases</h2>
          <ul className="list-disc list-inside pl-4">
            <li>This is an example senctence. (sentence case)</li>
            <li>This Is an Example Sentence. (title case)</li>
            <li>THIS IS AN EXAMPLE SENTENCE. (uppercase)</li>
            <li>this is an example sentence. (lowercase)</li>
          </ul>
        </div>

        <div className="mt-24">
          <a href="https://larskarbo.no" target="_blank">
            <div
              className=" flex items-center border border-gray-200 rounded p-2 px-4
            hover:border-gray-400 transition-colors duration-150 hover:shadow-sm
            "
            >
              <img
                alt="Lars"
                className="rounded-full mr-2 w-8"
                src="https://s.gravatar.com/avatar/4579b299730ddc53e3d523ec1cd5482a?s=72"
              />
              <div className="font-light">
                made by <strong className="font-bold">@larskarbo</strong>
              </div>
            </div>
          </a>
          <a
            href="https://www.producthunt.com/posts/imitate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-imitate"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=282675&theme=light"
              alt="Imitate | Product Hunt"
              //  style="width: 250px; height: 54px;"
              className="mt-6"
              width="250"
              height="54"
            />
          </a>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
}

const languages = [
  {
    name: "English",
    code: "us",
  },
  {
    name: "Chinese",
    code: "cn",
  },
  {
    name: "Russian",
    code: "ru",
  },
  {
    name: "German",
    code: "de",
  },
  {
    name: "Norwegian",
    code: "no",
  },
  {
    name: "Other",
  },
];

export function Other() {
  const [language, setLanguage] = useState(null);
  const [sent, setSent] = useState(false);
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/.netlify/functions/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: formRef.current.email.value,
        language: formRef.current.otherLanguage?.value || language.name.toLowerCase(),
      }),
    })
      .then((a) => {
        console.log("a: ", a);

        setSent(true);
      })
      .catch((err) => {});
  };

  if (language) {
    return (
      <div className="mt-12 bg-yellow-50 border border-yellow-400 rounded px-8 py-4">
        <button
          onClick={() => {
            setLanguage(null);
            setSent(false);
          }}
          className="text-xs mb-4 hover:underline text-gray-800 font-light"
        >
          ← Go back
        </button>
        <form ref={formRef} onSubmit={onSubmit}>
          <div className="flex items-center mb-4">
            {language.code ? (
              <img
                className="rounded-full ring ring-gray-300 shadow "
                src={`https://hatscripts.github.io/circle-flags/flags/${language.code}.svg`}
                width="32"
              />
            ) : (
              <AiFillQuestionCircle size={32} color="gray" />
            )}
            <div className="text-xl font-medium  ml-3">{language.name}</div>
          </div>
          {sent ? (
            <>
              <h2 className="text-black font-bold mb-2 ">Thank you!</h2>
              <p className="text-black mb-2 ">I will let you know when it is available.</p>
            </>
          ) : language.name == "Other" ? (
            <>
              <h2 className="text-black font-bold mb-2 ">Which language would you like Imitate for?</h2>
              <div className=" mb-2 flex border border-gray-300 w-96 rounded overflow-hidden text-sm">
                <input
                  required
                  name="otherLanguage"
                  className="flex-grow px-4 py-2"
                  type="texts"
                  placeholder="A language..."
                />
              </div>
              <div className=" mb-4 flex border border-gray-300 w-96 rounded overflow-hidden text-sm">
                <input required name="email" className="flex-grow px-4 py-2" type="email" placeholder="Your email" />
              </div>
              <button
                className=" mb-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 border border-gray-400 hover:border-gray-500 shadow-sm text-sm rounded transition-colors"
                type="submit"
              >
                Get notified ⚡
              </button>
            </>
          ) : (
            <>
              <h2 className="text-black font-bold mb-2 ">Imitate for {language.name} is not yet available.</h2>
              <p className="text-black mb-2 ">Enter your email to be one of the first to try it.</p>
              <div className=" mb-4 flex border border-gray-300 w-96 rounded overflow-hidden text-sm">
                <input required name="email" className="flex-grow px-4 py-2" type="email" placeholder="Your email" />
              </div>
              <button
                className=" mb-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 border border-gray-400 hover:border-gray-500 shadow-sm text-sm rounded transition-colors"
                type="submit"
              >
                Sign up for the {language.name} wait list ⚡
              </button>
            </>
          )}
          {/* <p className="text-xs font-light opacity-60 mb-2 mt-1 ">Currently available for French learners only.</p> */}
        </form>
      </div>
    );
  }

  return (
    <>
      <h3 className="mt-12 mb-4 text-lg font-medium text-center">Other languages:</h3>
      <div className="flex flex-wrap justify-center">
        {languages.map((l) => (
          <button
            onClick={() => setLanguage(l)}
            key={l.name}
            className="bg-gray-50 border border-gray-400 rounded px-8 py-4 flex items-center mr-4 mb-4 w-5/12 hover:bg-gray-100 transition-colors"
          >
            {l.code ? (
              <img
                className="rounded-full ring ring-gray-300 shadow "
                src={`https://hatscripts.github.io/circle-flags/flags/${l.code}.svg`}
                width="32"
              />
            ) : (
              <AiFillQuestionCircle size={32} color="gray" />
            )}
            <div className="text-xl font-light text-gray-900 ml-3 mr-4">{l.name}</div>
          </button>
        ))}
      </div>
    </>
  );
}
