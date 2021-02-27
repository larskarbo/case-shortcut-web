import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

export default function () {
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-tr from-gray-100 pt-0 to-yellow-50 min-h-screen">
        <Helmet>
          <title>Thank you</title>
        </Helmet>
        <div className="max-w-lg flex flex-col items-center px-8">
          <div className="w-full font-light text-gray-900">
            <h2 className="font-bold pt-8 text-lg pb-1 mt-36">Thank you for buying!</h2>
            <p>You will receive an email soon with a download link.</p>
            <p>
              If you don't receive an email, please{" "}
              <a className="underline text-blue-500" href="https://twitter.com/larskarbo">
                contact me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
