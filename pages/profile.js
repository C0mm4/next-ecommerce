import React from "react";
import Layout from "../components/Layout";

export default function profile() {
  return (
    <Layout title="profile">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="roundimg w-full"
          src="/images/profile.png"
          alt="profile image"
        />
        <div className="px-6 py-4">
          <div className="textcenter font-bold text-xl mb-2 justify-content-center py-4">강형욱</div>
          <p className="textcenter text-gray-700 text-base py-1">
            중부대학교
          </p>
          <p className="textcenter text-gray-700 text-base py-1">
            91912074
          </p>
          <p className="textcenter text-gray-700 text-base py-1">
            게임소프트웨어전공
          </p>
          <p className="textcenter text-gray-700 text-base py-1">
            010-9950-3538
          </p>
          <p className="textcenter text-gray-700 text-base py-1">
            comonhuman@gmail.com
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #c++
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #c#
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #python
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #java
          </span>
        </div>
      </div>
    </Layout>
  );
}
