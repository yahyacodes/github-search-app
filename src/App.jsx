import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="w-full py-4 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-100"
          placeholder="Search..."
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="text-white absolute end-2.5 bottom-2.5 bg-gray-400 font-medium rounded-lg text-sm px-8 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {data && (
        <div>
          <ul className="mt-12 space-y-3">
            {data.items.map((user) => (
              <li
                key={user.id}
                className="px-4 py-5 duration-150 bg-gray-100 rounded-xl hover:rounded-xl hover:bg-gray-300"
              >
                <a href="#" className="space-y-3">
                  <div className="flex items-center gap-x-3">
                    <img
                      src={user.avatar_url}
                      alt=""
                      className="bg-white w-20 h-20 border rounded-full flex items-center justify-center"
                    />
                    <div>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {user.login}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">{user.public_repo}</p>
                  {/* <div className="text-sm text-gray-600 flex items-center gap-6">
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                          fill="#9CA3AF"
                        />
                        <path
                          d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                      {item.job_type}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                          fill="#9CA3AF"
                        />
                      </svg>

                      {item.location}
                    </span>
                  </div> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
