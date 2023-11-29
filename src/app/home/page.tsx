"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import StartScanButton from "@/components/StartButton";
import HistoryButton from "@/components/HistoryButton";
import ResourceButton from "@/components/HealthResourceButton";
import PastScan from "@/components/PastScanButton";
import IssuesStatus from "@/components/IssuesStatus";
import ScanButton from "@/components/ScanButton";
import NavBar from "@/components/NavBar";
import LoginButton from "@/components/LoginButton";
import { useState, useEffect } from "react";

export default function HomePage() {
  const scans = [
    "Placeholder for Scan Details",
    "Placeholder for Scan Details",
  ];

  const [loading, setLoading] = useState(true);

  const isLoggedIn = true;

  return (
    <div
      className="flex flex-col items-center p-8  h-screen relative"
      style={{
        backgroundImage:
          "var(--homepage-gradient, gradient-from-24008C via-9D32A5 to-641A99)",
      }}
    >
      {/* <LoginButton/> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="bg-purple-100 bg-opacity-60 pl-20 pr-20 p-5 rounded-xl text-center shadow-xl">
          <h3 className="text-black font-bold text-xl mb-3 dark:text-black cursor-pointer">
            History
          </h3>
          <div className="mx-auto flex items-center justify-center">
            <PastScan />
          </div>
        </div>

        <div className="bg-purple-100 bg-opacity-90 pl-20 pr-20 p-5 rounded-xl text-center shadow-xl">
          <h3 className="text-black font-bold text-xl mb-3 dark:text-black cursor-pointer">
            Start Scan
          </h3>
          <div className="mx-auto flex items-center justify-center">
            <StartScanButton />
          </div>
        </div>

        <div className="bg-purple-100 bg-opacity-60 pl-20 pr-20 p-5 rounded-xl text-center shadow-xl">
          <h3 className="text-black font-bold text-xl mb-3 dark:text-black cursor-pointer">
            Resources
          </h3>
          <div className="mx-auto flex items-center justify-center">
            <ResourceButton />
          </div>
        </div>
      </div>

      {/* "Latest Scans" section */}
      <div className="bg-white p-5 rounded-xl h-screen w-full overflow-hidden mt-10 mb-5">
        <div className="mb-5">
          <h3 className="text-black text-2xl mb-3 dark:text-black">
            Latest Scans
          </h3>
          {isLoggedIn ? (
            <div>
              {/* Placeholder for latest scans if already logged in */}
              <div>
                <IssuesStatus redNumber={3} yellowNumber={2} greenNumber={5} />
                <IssuesStatus redNumber={4} yellowNumber={1} greenNumber={2} />
                <IssuesStatus redNumber={1} yellowNumber={2} greenNumber={3} />
                {/* Add more components or content as needed */}
              </div>
              {/* Add more scan results as needed */}
              <HistoryButton />
            </div>
          ) : (
            // not logged in
            <div>
              Please log in to see your past scans results{" "}
              <span className="underline text-purple-500">
                <Link href="/login/"> Log In here </Link>
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <NavBar />
      </div>
    </div>
  );
}
