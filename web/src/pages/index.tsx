import { loadStripe } from "@stripe/stripe-js/pure";
import axios from "axios";
import React, { useState } from "react";
import { Demo } from "../components/Demo";
import Head from "next/head";
export const BASE = `/.netlify/functions/`;

export default function Index() {
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
    <>
      <div
        className="flex justify-between h-6"
        style={{
          backgroundColor: "#FFD171",
        }}
      >
        <img
          alt=""
          className="hidden sm:block"
          src={"/left.png"}
          style={{
            // maxHeight: 30,
            width: "auto",
          }}
        />
        <img
          alt=""
          src={"/right.png"}
          style={{
            // maxHeight: 30,
            width: "auto",
          }}
        />
        <img
          className="absolute hidden md:block md:right-0 lg:right-36"
          alt=""
          src={"/menu.png"}
          style={{
            top: 10,
            width: 200,
          }}
        />
      </div>
      <div className="flex flex-col items-center bg-gradient-to-tr from-gray-100 pt-0 to-yellow-50 min-h-screen">
        <Head>
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
        </Head>
        <div className="max-w-lg flex flex-col items-center px-8">
          <Demo />
          <div className="pt-12">
            <div className="flex flex-col items-center justify-center mb-8">
              <img src={"/logostroked.svg"} className="w-24" />
              <div className="text-xs font-medium pt-2">Case Shortcut.app</div>
            </div>
            <button
              onClick={onPressPay}
              style={{
                backgroundColor: "#ff502f",
              }}
              className={`
            duration-150 px-4 py-5 rounded  text-white flex items-center
      
            `}
            >
              {loadingPay ? (
                <span className="font-bold">Loading superpower...</span>
              ) : (
                <>
                  <span className="font-bold">Get the superpower</span>
                  <span className="font-light pl-1">(5$)</span>
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
            <ul className="list-disc list-inside pl-4 mb-4">
              <li>THIS IS AN EXAMPLE SENTENCE. (uppercase)</li>
              <li>this Is an Example Sentence. (title case)</li>
              <li>this is an example sentence. (lowercase)</li>
            </ul>
            <ul className="list-disc list-inside pl-4 mb-4">
              <li>camelCase</li>
              <li>hyphen-case</li>
              <li>dot.case</li>
            </ul>
            <ul className="list-disc list-inside pl-4 mb-4">
              <li>LAUNCH 🚀 CASE 🚀</li>
              <li>CLAP👏CASE👏</li>
            </ul>
          </div>
          <div className="mt-16">
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
    </>
  );
}
