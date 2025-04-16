import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      <div className="mockup-phone border-gray-700 my-8 bg-gradient-to-b from-pink-200 to-blue-200">
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-4 w-full">
              <span className="loading loading-infinity w-24 bg-pink-500"></span>
              <h1 className="text-2xl font-bold text-gray-900">Sign Up To Our Newsletter</h1>
              <p className="text-sm text-gray-700">Get the latest news and updates.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            <button
              className="btn btn-secondary mt-2 w-3/5"
              onClick={() =>
                window.open("https://media1.tenor.com/m/Mf937DWwuj0AAAAd/twerk-dance.gif", "_blank")
              }
            >
              Subscribe
            </button>
            <div className="flex flex-col items-center justify-center mt-16">
              <p className="text-sm text-gray-700 mb-2">Rate our newsletter</p>
              <div className="rating rating-xl gap-1">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                  aria-label="5 star"
                />
              </div>
            </div>
            <div className="mt-16">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Tannie Potta
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">
                  I'm the best there is, the best there was, and the best there ever will be.
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end mb-8">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://randomuser.me/api/portraits/men/53.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Gabriel Iglesias
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">Yo no hablo ingles</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
