import Menu from "~/components/menu";
import Slide from "~/components/slide";

export default function Index() {
  return (
    <div>
      <Menu />
      <Slide>
        <div className="m-auto max-w-5xl py-24">
          <div className="m-auto max-w-5xl ">
            <div className="flex mb-24">
              <div className="flex-grow">
                <img
                  className="w-56"
                  src="/images/logo.svg"
                  alt="Startup Dev"
                />
              </div>
            </div>
            <div className="text-7xl max-w-3xl mb-8 leading-tight">
              Your Founding Engineering Team
            </div>
            <div className="text-gray-600 text-lg mb-8">
              We build your business with you
            </div>
            <div>
              <button className="bg-brand-dark py-3 px-6 text-center text-white font-bold text-lg">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="bg-gray-50 h-full">
          <div className="m-auto max-w-5xl py-24">
            <div className="text-lg uppercase font-bold text-gray-500 space-x-3">
              Trusted by
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          className=" flex justify-center items-center h-screen w-full"
          id="contact"
        >
          <div>
            <div className="w-128 border-b border-b-gray-200 py-8 w-96">
              <div className="text-6xl mb-12">Get in Touch</div>
              <div className="mb-4">
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-4 px-4 mb-3 w-full"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-12">
                <button className="bg-brand-dark py-3 px-6 text-center text-white font-bold text-lg w-full">
                  Contact
                </button>
              </div>
            </div>
            <div className="m-auto max-w-xl  py-8 flex">
              <div className="flex-grow">Startup Dev Worldwide</div>
              <div className="flex">
                <div className="mr-2">
                  <img src="/images/github.svg" alt="Github" />
                </div>
                <div className="mr-2">TW</div>
                <div className="mr-2">LI</div>
                <div className="">{new Date().getFullYear()}W</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
