import React, { useState } from "react";
import osud1 from "../../assets/osud1.jpeg";
import osud2 from "../../assets/osud2.jpg";
import osud3 from "../../assets/osud3.jpg";
import osud4 from "../../assets/osud4.jpg";
import osud5 from "../../assets/osud5.jpeg";
import osud6 from "../../assets/osud6.jpeg";

const MoreLatestNews = () => {
  // State to manage "See More" toggle for each card
  const [showMore, setShowMore] = useState([false, false, false, false, false, false]);

  // Toggle the "See More" state for a specific card
  const toggleShowMore = (index) => {
    const updatedState = [...showMore];
    updatedState[index] = !updatedState[index];
    setShowMore(updatedState);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-6">Our Latest News</h1>
      <section className="bg-[#F3F4F6] py-16">
        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            {/* Card 1 */}
            <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
              <figure>
                <img src={osud1} className="rounded-xl w-full" alt="Hospital Wing" />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-semibold">
                  Rescue Hospital Unveils Advanced Medical Wing for Enhanced Patient Care
                </h2>
                <p className="text-gray-500 text-lg">September 5, 2023</p>
                <p className="w-full text-gray-700 text-xl">
                  In a significant stride toward excellence, Rescue Hospital has unveiled its advanced medical wing, equipped with state-of-the-art technology to ensure exceptional patient care.
                  {showMore[0] && (
                    <span>
                      {" "}The new wing focuses on critical care, diagnostics, and innovative treatment approaches.
                    </span>
                  )}
                </p>
                <button
                  className="text-blue-500 mt-2 hover:underline"
                  onClick={() => toggleShowMore(0)}
                >
                  {showMore[0] ? "See Less" : "See More"}
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
              <figure>
                <img src={osud2} className="rounded-xl w-full" alt="Research" />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-semibold">
                  Pioneering Research Initiatives at Rescue Hospital
                </h2>
                <p className="text-gray-500 text-lg">September 12, 2023</p>
                <p className="w-full text-gray-700 text-xl">
                  Rescue Hospital embarks on groundbreaking research initiatives, aiming to revolutionize healthcare practices and achieve remarkable medical advancements.
                  {showMore[1] && (
                    <span>
                      {" "}The research focuses on chronic illnesses, rare diseases, and innovative treatment protocols.
                    </span>
                  )}
                </p>
                <button
                  className="text-blue-500 mt-2 hover:underline"
                  onClick={() => toggleShowMore(1)}
                >
                  {showMore[1] ? "See Less" : "See More"}
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
              <figure>
                <img src={osud3} className="rounded-xl w-full" alt="Healthcare Excellence" />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-semibold">
                  Celebrating a Decade of Compassionate Healthcare Excellence
                </h2>
                <p className="text-gray-500 text-lg">September 5, 2023</p>
                <p className="w-full text-gray-700 text-xl">
                  Rescue Hospital marks a decade of delivering compassionate healthcare services, reaffirming its commitment to excellence and patient well-being.
                  {showMore[2] && (
                    <span>
                      {" "}Over the years, it has expanded its services and infrastructure to better serve the community.
                    </span>
                  )}
                </p>
                <button
                  className="text-blue-500 mt-2 hover:underline"
                  onClick={() => toggleShowMore(2)}
                >
                  {showMore[2] ? "See Less" : "See More"}
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
              <figure>
                <img src={osud4} className="rounded-xl w-full" alt="Community Health" />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-semibold">
                  Community Health Outreach Programs at Rescue Hospital
                </h2>
                <p className="text-gray-500 text-lg">September 15, 2023</p>
                <p className="w-full text-gray-700 text-xl">
                  Rescue Hospital launches health outreach programs to educate and serve the local community with free medical checkups and wellness seminars.
                  {showMore[3] && (
                    <span>
                      {" "}These programs are designed to raise awareness about preventive healthcare and early diagnosis.
                    </span>
                  )}
                </p>
                <button
                  className="text-blue-500 mt-2 hover:underline"
                  onClick={() => toggleShowMore(3)}
                >
                  {showMore[3] ? "See Less" : "See More"}
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
              <figure>
                <img src={osud5} className="rounded-xl w-full" alt="Technology" />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-semibold">
                  Cutting-Edge Technology in Patient Care
                </h2>
                <p className="text-gray-500 text-lg">September 18, 2023</p>
                <p className="w-full text-gray-700 text-xl">
                  Rescue Hospital introduces cutting-edge technologies, including AI-driven diagnostics and robotic-assisted surgeries, to enhance patient outcomes.
                  {showMore[4] && (
                    <span>
                      {" "}These advancements promise to redefine the standards of precision and care in medicine.
                    </span>
                  )}
                </p>
                <button
                  className="text-blue-500 mt-2 hover:underline"
                  onClick={() => toggleShowMore(4)}
                >
                  {showMore[4] ? "See Less" : "See More"}
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
              <figure>
                <img src={osud6} className="rounded-xl w-full" alt="Patient Stories" />
              </figure>
              <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-semibold">
                  Inspiring Patient Stories from Rescue Hospital
                </h2>
                <p className="text-gray-500 text-lg">September 20, 2023</p>
                <p className="w-full text-gray-700 text-xl">
                  Hear heartwarming stories of recovery and resilience from patients treated at Rescue Hospital.
                  {showMore[5] && (
                    <span>
                      {" "}These stories highlight the dedication and expertise of our medical team.
                    </span>
                  )}
                </p>
                <button
                  className="text-blue-500 mt-2 hover:underline"
                  onClick={() => toggleShowMore(5)}
                >
                  {showMore[5] ? "See Less" : "See More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreLatestNews;
