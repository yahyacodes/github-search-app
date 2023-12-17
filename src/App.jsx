import { useState } from "react";
import "./App.css";
import SearchUser from "./Components/SearchUser";
import User from "./Components/User";

function App() {
  const [data, setData] = useState();
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const handleUSername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <SearchUser
        user={username}
        onSetUsername={handleUSername}
        onHandleSearch={handleSearch}
      />
      <User data={data} username={username} />
      {/* <div>
        <div className="bg-divBg rounded-xl">
          {data && (
            <ul className="mt-12 p-4">
              <li key={data.id} className="">
                <div className="flex flex-col md:flex-row md:space-x-6 sm:space-x-0">
                  <img
                    src={data.avatar_url}
                    className="flex-none w-36 h-36 rounded-full border border-gray-100"
                  />
                  <div>
                    <h1 className="block text-gray-100 text-lg font-semibold mt-8">
                      {data.name}
                    </h1>
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      className="block text-skyBlue text-sm"
                    >
                      @{data.login}
                    </a>

                    <span className="block text-gray-300 text-md mt-4 font-semibold">
                      {data.bio}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-24 bg-color rounded-xl p-8 mt-8 justify-center">
                  <div className="flex-shrink-0 gap-10">
                    <div className="flex gap-2">
                      <div className="mt-1 text-xl text-gray-100">
                        <BsFillPeopleFill />
                      </div>
                      <div>
                        <div className="flex flex-col md:flex-row "></div>
                        <p className="text-gray-100 text-lg">Followers</p>
                        <span className="text-sm text-white md:p-4">
                          {data.followers}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="flex gap-2">
                      <div className="mt-1 text-xl text-gray-100">
                        <BsFillPeopleFill />
                      </div>
                      <div>
                        <p className="text-gray-100 text-lg">Following</p>
                        <span className="text-sm text-white md:p-8">
                          {data.following}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="items-center flex-shrink-0">
                    <div className="flex gap-2">
                      <div className="mt-1 text-xl text-gray-100">
                        <BsFillJournalBookmarkFill />
                      </div>
                      <div>
                        <p className="text-gray-100 text-lg">Repositories</p>
                        <span className="text-sm text-white md:p-8">
                          {data.public_repos}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between md:space-x-24">
                    <div className="w-1/2">
                      <div className="flex gap-2">
                        <div className="mt-1 text-xl text-gray-100">
                          <BsGeoAltFill />
                        </div>
                        <div>
                          <p className="text-gray-100 text-lg">
                            {data.location || "Location Not Found"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-1/2">
                      <div className="flex gap-2">
                        <div className="mt-1 text-xl text-gray-100">
                          <BsTwitterX />
                        </div>
                        <div>
                          <p className="text-gray-100 text-lg">
                            {data.twitter_username || "Twitter Not Found"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:space-x-24 justify-between mt-2">
                    <div className="w-1/2">
                      <div className="flex gap-2">
                        <div className="mt-1 text-xl text-gray-100">
                          <BsLink45Deg />
                        </div>
                        <div>
                          <p className="text-gray-100 text-md">
                            {data.blog || "Webiste Not Found"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="flex gap-2">
                        <div className="mt-1 text-xl text-gray-100">
                          <BsBuildings />
                        </div>
                        <div>
                          <p className="text-gray-100 text-lg">
                            {data.company || "Company Not Found"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div> */}
    </>
  );
}

export default App;
