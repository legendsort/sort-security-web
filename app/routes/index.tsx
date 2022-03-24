import Menu from "~/components/menu";
import Slide from "~/components/slide";

export default function Index() {
  return (
    <div>
      <Menu />
      <Slide>
        <div
          className="bg-cover h-screen"
          style={{
            backgroundImage: "url(/images/bg-slide-building.jpg)",
          }}
        >
          <div className="m-auto max-w-5xl p-12">
            <div className="m-auto max-w-5xl ">
              <div className="flex mb-24">
                <div className="flex-grow">
                  <img
                    className="w-56"
                    src="/images/logo-startupdev.svg"
                    alt="Startup Dev"
                  />
                </div>
              </div>
              <div className="text-7xl max-w-3xl mb-8 leading-tight">
                Your Founding Engineering Team
              </div>
              <div className="text-lg mb-8">
                We'll build your business as you do.
              </div>
              <div>
                <button className="bg-brand-green py-3 px-6 text-center text-gray-600 font-bold text-lg">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          className="bg-cover h-screen"
          style={{
            backgroundImage: "url(/images/mk-s-wKS46KBpolg-unsplash.jpeg)",
          }}
        >
          <div className="m-auto max-w-5xl p-12">
            <div className="text-5xl uppercase font-bold text-white space-x-3">
              Trusted by
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          className=" flex justify-center items-center h-screen w-full"
          id="contact"
          style={{
            backgroundImage: "url(/images/bg-slide3.jpg)",
          }}
        >
          <div>
            <div className="w-128 border-b border-b-gray-200 py-8 w-96">
              <div className="text-6xl mb-12 font-bold text-brand-green">
                Get in Touch
              </div>
              <div className="mb-4">
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-4 px-4 mb-3 w-full"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-12">
                <button className="bg-brand-green py-3 px-6 text-center text-gray-600 font-bold text-lg w-full">
                  Let's Go
                </button>
              </div>
            </div>
            <div className="m-auto max-w-xl  py-8 flex">
              <div className="flex-grow"></div>
              <div className="flex">
                <div className="mr-2">
                  <img className="w-6" src="/images/github.svg" alt="Github" />
                </div>
                <div className="mr-2">
                  <a href="https://twitter.com/startupdotdev">
                    <img className="w-6" src="/images/twitter.svg"></img>
                  </a>
                </div>
                <div className="mr-2">
                  <a href="https://www.linkedin.com/company/startup-dev/">
                    <img className="w-6" src="/images/linkedin.svg"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
