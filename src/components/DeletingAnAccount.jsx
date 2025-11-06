import React from "react";
import { Link } from "react-router-dom";

const DeletingAnAccount = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen font-popp p-3">
        {/* Navbar */}
        <div className="flex flex-row w-full items-center justify-between px-3 py-[28px]">
          <Link
            to="/"
            className="flex flex-row items-center justify-center gap-2 md:gap-[21px]"
          >
            <img src="/images/ED-(1).png" className=" h-[30px] md:h-[40px]" />
            <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
              iANC
            </span>
          </Link>
          <img src="/images/partnerlogo.svg" />
        </div>
        {/* steps to delete an account */}
        <div className="">
          <p className="text-primary90 font-[500] text-2xl text-center">
            How To Delete An Account
          </p>
          <p>
            We are sorry to see you go! Follow the steps below to delete your
            account. If you encounter any issues, please contact our support
            team.
          </p>
          <p className="text-primary90 font-[500] text-xl my-6">
            Step-by-Step Guide
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-primary90 font-[400] text-md ">
                Step 1: Log In to Your Account
              </p>
              <ul className="ml-5 list-disc">
                <li>Open the app</li>
                <li>Enter your username and password to log in.</li>
              </ul>
            </div>

            <div>
              <p className="text-primary90 font-[400] text-md ">
                Step 2: Navigate to More
              </p>
              <ul className="ml-5 list-disc">
                <li>Click on More</li>
              </ul>
            </div>
            <div>
              <p className="text-primary90 font-[400] text-md ">
                Step 3: Delete Account
              </p>
              <ul className="ml-5 list-disc">
                <li>Click on Delete Account</li>
              </ul>
            </div>
            <div>
              <p className="text-primary90 font-[500] text-xl">
                Additional Information
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  <span className="text-primary90">Data Deletion:</span>{" "}
                  Deleting your account will remove all your data from our
                  servers. This includes your personal information, posts, and
                  any other data associated with your account.
                </li>
                <li>
                  <span className="text-primary90">Reactivation:</span> Once
                  your account is deleted, it cannot be recovered. If you wish
                  to use our services again, you will need to create a new
                  account.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-primary90 font-[500] text-xl">
                Frequently Asked Questions
              </p>
              <div className="flex flex-col">
                <p className="text-primary90 font-[400] text-md ">
                  Will my data be permanently deleted?
                </p>
                <p>
                  Yes, all your data will be permanently removed from our
                  servers.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary90 font-[400] text-md ">
                  How long does it take to delete my account?
                </p>
                <p>Account deletion is immediate.</p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary90 font-[400] text-md ">
                  Can I recover my account after deletion?
                </p>
                <p>No, once your account is deleted, it cannot be recovered.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingAnAccount;
