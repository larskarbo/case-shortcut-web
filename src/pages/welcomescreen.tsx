import React from "react";
import "./welcomescreen.css";
import { Key } from "../components/Demo";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from 'react-helmet';

export default function () {
  return (
    <div className="flex flex-col items-center bg-gradient-to-tr from-gray-100 pt-0 to-yellow-50 min-h-screen">
      <Helmet>
        <title>Welcome to Case Shortcut</title>
      </Helmet>

      <div className="max-w-2xl">
        <div className="py-12 font-light max-w-lg m-auto text-center">
          I couldn't figure out how to launch an app window, so just pretend this one is real ↓
        </div>
        <div className="window macwindow shadow-2xl w-full mb-32">
          <div className="titlebar macwindow">
            <div className="buttons macwindow">
              <div className="close macwindow">
                <a className="closebutton macwindow" href="https://caseshortcut.com">
                  <span>
                    <strong>x</strong>
                  </span>
                </a>
              </div>
              <div className="minimize macwindow">
                <a className="minimizebutton macwindow" href="https://larskarbo.no">
                  <span>
                    <strong>&ndash;</strong>
                  </span>
                </a>
              </div>
              <div className="zoom macwindow">
                <a className="zoombutton macwindow" href="https://larskarbo.no">
                  <span>
                    <strong>+</strong>
                  </span>
                </a>
              </div>
            </div>
            Case Shortcut
          </div>
          <div className="content macwindow p-8">
            <h1 className="py-2 text-3xl font-semibold">Welcome to Case Shortcut!</h1>
            <p className="py-2 ">Thanks for buying this app. Let's get started!</p>
            <h2 className="py-2 text-2xl font-semibold">Setup</h2>
            <h3 className="py-2 text-xl font-medium">1. Move the app to Applications</h3>
            <p className="py-2 ">
              If you didn't put the .app file in Applications, go ahead and quit Case Shortcut, move it there and
              restart the app.
            </p>
            <StaticImage className="max-w-md" src="moveapp.png" alt="Move the app" />
            <h3 className="py-2 text-xl font-medium">2. Permissions</h3>
            <p className="py-2 ">
              Case Shortcut need some permissions to be able to work across different apps as a global shortcut.
            </p>
            <p className="py-2 ">
              Go to <i className="font-light">"Settings"</i> → <i className="font-light">"Security & privacy"</i> →{" "}
              <i className="font-light">"Privacy"</i> → <i className="font-light">"Accessibility"</i> and check Case
              Shortcut.
            </p>
            <StaticImage className="max-w-md" src="permissions.png" alt="Permissions" />
            <h2 className="py-2 text-2xl font-semibold">Usage</h2>

            <p className="py-2 pb-4">
              Go to a textbox in any app, and mark some text. Then press the menu bar icon, and the case you want:
            </p>

            <StaticImage className="max-w-md" src="barbar.png" alt="Permissions" />
            <textarea value={`You can trY iT hERE!\n\nTry title case on me`} className="rounded p-4 my-4 h-36 border bg-white"></textarea>

            <p className="py-2 pb-4">
              You can also use these combinations for UPPERCASE and lowercase
            </p>
            <div className="flex items-center">
              <Key className="mr-4" letter="⌃"></Key>
              <Key className="mr-4" letter="⌥"></Key>
              <Key className="mr-4" letter="⌘"></Key>
              <div className="mr-4">+</div>
              <Key className="mr-4" letter="▲"></Key>
              <div className="mr-4">or</div>
              <Key className="mr-4" letter="▼"></Key>
            </div>
            <h2 className="py-2 text-2xl font-semibold mt-8">Feedback</h2>
            <p className="py-2 ">
              If you have feedback, suggestions, questions or problems, reach out to me{" "}
              <a className="underline text-blue-500" href="https://twitter.com/larskarbo">
                on twitter
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
