"use client"
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const textToCopy = "nyora('Mhoro Nyika!')";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="p-8">
      {/* Chikamu chekutanga (Hero Section) */}
      <section className="bg-gray-100 p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-600">Shona Programming Language</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Kuunza mukana kune wese munhu kuti adzidze programming mumutauro
          wemuno.
        </p>
      </section>

      {/* Zvimiro Zvikuru (Key Features) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          🚀 Sei Uchisarudza Mutauro Uyu?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">🌍 Kuwedzera Mikana</h3>
            <p className="text-gray-600">
              Dzidza coding uchishandisa mutauro waunonzwisisa.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">📚 Kutsigira Dzidzo Yevana</h3>
            <p className="text-gray-600">
              Vana vanogona kudzidza coding vachiri kuchikoro pasina
              chipingamupinyi chemutauro.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">💡 Kukurudzira Kugadzira</h3>
            <p className="text-gray-600">
              Kuwedzera hunyanzvi hwevanhu nekuva nechokwadi chekuti
              vanonzwisisa zvakadzama.
            </p>
          </div>
        </div>
      </section>

      {/* Muenzaniso weKodhi (Example Code) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Kutanga kushamisa</h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">
                Platform/Mhando ye mushini
              </th>
              <th className="border border-gray-300 px-4 py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Windows</td>
              <td className="border border-gray-300 px-4 py-2">
                {" "}
                <Link href="/ShonaLangInstaller.exe">
                  <span className="text-blue-500 px-6 py-2 rounded-lg text-sm w-full font-semibold cursor-pointer hover:bg-blue-700">
                    ShonaLang_1.0.0.exe
                  </span>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Mac</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link href="/ShonaLangInstaller.exe">
                  <span className="text-blue-500 px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-blue-700">
                    ShonaLang_1.0.0.app
                  </span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="text center py-8">
        <p className="text-gray-700 mb-4 text-center">
          1. Tanga nekubaya download button rinoenderana ne computer yaunoshanisa
        </p>
        <p className="text-gray-700 mb-4 text-center">
          2. Baya application yaunenge wa downloader
        </p>
        <p className="text-gray-700 mb-4 text-center">
          3. Isa nzira : C:\Program Files (x86)\ShonaLang kuma environment
          variables{" "}
        </p>
        <p className="text-gray-700 mb-4 text-center">4. Isa code iri pazasi mufaera rinopera na .tn</p>
        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono flex justify-between mb-10">
        <code>
          {`nyora("Mhoro Nyika!")`}
        </code>
        <button
        onClick={copyToClipboard}
        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
        </div>

        <p className="text-gray-700 mb-4 text-center">5. testa kushanda kwe code nekushanisa &apos;tino &lt;file_name&gt;&apos; pa command prompt</p>


      </div>

      
    </div>
  );
};

export default Home;
