import Menu from "~/components/icons/menu";

export default function Index() {
  return (
    <div>
      <div className="m-auto max-w-5xl py-24">
        <div className="flex mb-24">
          <div className="flex-grow">
            <img className="w-56" src="/images/logo.svg" alt="Startup Dev" />
          </div>
          <div>
            <Menu />
          </div>
        </div>
        <div className="text-7xl max-w-3xl mb-8 leading-tight">
          Your founding engineering team
        </div>
        <div className="text-gray-600 text-lg mb-8">
          We build ideas to products real good boss. LFG.
        </div>
        <div>
          <button className="bg-brand-dark py-3 px-6 text-center text-white font-bold text-lg">
            Let's Talk
          </button>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="m-auto max-w-5xl py-24">
          <div className="text-lg uppercase font-bold text-gray-500 space-x-3">
            Trusted by
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="m-auto max-w-5xl py-24">
          <div className="text-lg uppercase font-bold text-gray-500 space-x-3">
            Recent Projects
          </div>
          <div className="flex overflow-x-scroll">
            <div className="bg-white w-72 h-80 p-12 mr-6">boop</div>
            <div className="bg-white w-72 h-80 p-12 mr-6">boop</div>
            <div className="bg-white w-72 h-80 p-12 mr-6">boop</div>
            <div className="bg-white w-72 h-80 p-12 mr-6">boop</div>
            <div className="bg-white w-72 h-80 p-12 mr-6">boop</div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="m-auto max-w-5xl py-24">
          <div>LFG</div>
          <div>
            <button className="bg-brand-dark py-3 px-6 text-center text-white font-bold text-lg">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="m-auto max-w-5xl border-t border-t-gray-200 py-8">
          <div className="flex">
            <div className="flex-grow">Startup.Dev</div>
            <div className="flex">
              <div className="mr-2">GH</div>
              <div className="mr-2">TW</div>
              <div>LI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
