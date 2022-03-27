import Menu from "~/components/menu";
import Slide from "~/components/slide";

import { Form, useActionData } from "remix";

const validateEmail = (email: string) => {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Valid Email Please";
  }
};

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const leadText = "startup.dev: " + email;

  let formMessage = {
    email: validateEmail(email),
  };

  if (Object.values(formMessage).some(Boolean)) return { formMessage };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: leadText }),
  };
  fetch(
    "https://hooks.slack.com/services/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",
    requestOptions
  );

  formMessage = { email: "Thanks, We'll Reply Soon" };
  return { formMessage };
}

export default function Index() {
  const data = useActionData();

  return (
    <div>
      <Menu />
      <Slide>
        <div
          className="bg-cover h-screen"
          style={{
            backgroundImage: "url(/images/bg-slide-building.jpg)",
          }}
          id="top"
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
              <div className="text-2xl mb-8">
                We'll build your business alongside you.
              </div>
              <div className="my-24">
                <button className="border border-1 border-white py-3 px-6 text-center text-white font-bold text-lg">
                  <a href="/#contact">Let's Talk</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          className="bg-cover h-cover"
          style={{
            backgroundImage:
              "url(/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpeg)",
          }}
        >
          <div className="m-auto max-w-5xl py-24 px-12">
            <div className="text-2xl uppercase text-gray-400 space-x-3 pb-12">
              Trusted by
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-24 pb-12 items-center opacity-80">
              <img
                className="p-4"
                src="/images/trusted/white/logo-google1.svg"
              ></img>
              <img
                className="p-4"
                src="/images/trusted/white/logo-youtube.svg"
              ></img>
              <img
                className="p-4"
                src="/images/trusted/white/logo-facebook.svg"
              ></img>
              <img
                className="p-4"
                src="/images/trusted/white/logo-ea.svg"
              ></img>
              <img
                className="p-4"
                src="/images/trusted/white/logo-okta.svg"
              ></img>
              <img
                className="p-4"
                src="/images/trusted/white/logo-envoy.svg"
              ></img>
              <img
                className="p-4"
                src="/images/trusted/white/logo-hackerone.svg"
              ></img>
              <img
                className="p-4"
                src="/images/trusted/white/logo-havo.svg"
              ></img>
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
          <Form method="post" className="flex flex-col w-full max-w-lg">
            <div className="w-256 bg-black p-12 pt-12 pb-12">
              <div className="text-6xl mb-12 font-bold text-white">
                Get in Touch
              </div>
              <div className="mb-4">
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-4 px-4 mb-3 w-full text-gray-800"
                  name="email"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="">
                <button className="bg-brand-green py-3 px-6 text-center text-gray-600 font-bold text-lg w-full">
                  {data?.formMessage?.email
                    ? data?.formMessage?.email
                    : "Let's Go"}
                </button>
              </div>
            </div>
            <div className="m-auto max-w-xl  py-8 flex">
              <div className="flex-grow"></div>
              <div className="flex">
                <div className="mr-2">
                  <a href="https://github.com/startupdotdev">
                    <img
                      className="w-6"
                      src="/images/github.png"
                      alt="Github"
                    />
                  </a>
                </div>
                <div className="mr-2">
                  <a href="https://twitter.com/startupdotdev">
                    <img className="w-6" src="/images/twitter.png"></img>
                  </a>
                </div>
                <div className="mr-2">
                  <a href="https://www.linkedin.com/company/startup-dev/">
                    <img className="w-6" src="/images/linkedin.svg"></img>
                  </a>
                </div>
                <div className="mr-2">
                  <a href="https://discord.gg/9Hcnc9wrpk">
                    <img className="w-6" src="/images/discord.png"></img>
                  </a>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </Slide>
    </div>
  );
}
