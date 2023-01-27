import Menu from "~/components/menu";
import Slide from "~/components/slide";

import { type ActionFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLocation,
  useTransition,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";

import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const SUCCESS_MESSAGE = "Thanks, We'll Reply Soon";

const validateEmail = (email: string) => {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Valid Email Please";
  }
};

const trustedBys: string[] = [
  "/images/semi-trusted/logo-google1.png",
  "/images/semi-trusted/logo-youtube.png",
  "/images/semi-trusted/logo-facebook.png",
  "/images/semi-trusted/logo-ea.png",
  "/images/semi-trusted/logo-okta.png",
  "/images/semi-trusted/logo-envoy.png",
  "/images/semi-trusted/logo-hackerone.png",
  "/images/semi-trusted/logo-havo.png",
];

const services: {
  title: string;
  subtitle: string;
  icon: string;
}[] = [
  {
    title: "Initialize Security",
    subtitle:
      "We kickstart your security program: Understand your attack surfaces, pick the right tools, and get started",
    icon: "/images/icons/shield-flash-fill.svg",
  },
  {
    title: "Security Engineering",
    subtitle:
      "We save your engineers time by triaging bug reports, fixing vulnerabilities, and helping with secure code design.",
    icon: "/images/icons/treasure-map-fill.svg",
  },
  {
    title: "DevSecOps",
    subtitle:
      "We harden and secure your infrastructure and delivery workflows without slowing your team down.",
    icon: "/images/icons/ship-fill.svg",
  },
];

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString() || "";
  const leadText = "startup.security: " + email;

  let formMessage = {
    email: validateEmail(email),
  };

  if (Object.values(formMessage).some(Boolean)) return { formMessage };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: leadText }),
  };
  fetch("TODO", requestOptions);

  formMessage = { email: SUCCESS_MESSAGE };
  // await addSubmission({
  //   email,
  // });

  return { formMessage };
};

export default function Index() {
  let location = useLocation();
  const data = useActionData();
  const transition = useTransition();

  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  let [visitorId, setVisitorId] = useState<string>();

  useEffect(() => {
    if (data?.formMessage?.email === SUCCESS_MESSAGE && !hasSubmitted) {
      setHasSubmitted(true);
      toast.success("Email submitted!", { position: "bottom-center" });
    }
  }, [data?.formMessage?.email, hasSubmitted]);

  useEffect(() => {
    const fpPromise = FingerprintJS.load({
      apiKey: "9sCCEFv95ZaGTIP6yc29",
    });

    // Get the visitor identifier when you need it.
    fpPromise
      .then((fp) => fp.get())
      .then((id) => {
        setVisitorId(id.visitorId);
      });
  }, [location]);

  return (
    <div>
      <Menu />
      <Slide>
        <div
          className="bg-cover h-screen"
          style={{
            backgroundImage: "url(/images/grid-red-40.jpg)",
          }}
          id="top"
        >
          <div className="m-auto max-w-5xl p-3 md:p-12">
            <div className="m-auto max-w-5xl ">
              <div className="flex mb-24">
                <div className="flex-grow">
                  <img
                    className="w-56"
                    src="/images/logo4.png"
                    alt="startup security"
                  />
                </div>
                <div>
                  <a className="header" href="https://blog.startup.security">
                    Blog
                  </a>
                </div>
              </div>
              <div className="text-5xl lg:text-7xl max-w-3xl mb-8 leading-tight">
                <span style={{ color: "#D42828" }}>
                  You built something awesome.
                </span>{" "}
                Let's make sure it's secure.
              </div>
              <div className="text-2xl mb-10">
                We help startups evolve their security tools, processes, and
                culture
              </div>
              <div className="mb-12 md:mb-24">
                <div className="pipedriveWebForms"
                     data-pd-webforms="https://webforms.pipedrive.com/f/6b1egcBQnFxiCH3vA5oJ5B8Yruzm2qHhKlREqq0jJ7NT2MejPaRlBZScYbkrHcKH8D">
                  <iframe
                      src={`https://pipedrivewebforms.com/form/6b1egcBQnFxiCH3vA5oJ5B8Yruzm2qHhKlREqq0jJ7NT2MejPaRlBZScYbkrHcKH8D?embeded=1&uuid=${"8"}`}
                      name={`https://startup.security-${"8"}`}
                      scrolling="no"
                      seamless="seamless"
                      style={{
                        border: 'none',
                        width: '100%',
                        maxWidth: '768px',
                        minWidth: '320px',
                        height: '100%',
                        minHeight: '900px',
                        position: 'relative',
                      }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          className="bg-cover h-cover bg-bottom shadow-inner shadow-i"
          style={{
            background: "#E6E6E6",
            minWidth: 320,
            boxShadow: "inset 0px 20px 10px -5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="m-auto max-w-5xl py-24 px-3 md:px-12 relative">
            <div className="text-2xl uppercase font-bold space-x-3 pb-12 text-gray-600">
              Trusted by
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-24 pb-12 items-center opacity-80">
              {trustedBys.map((l, i) => (
                <img
                  src={l}
                  key={i}
                  style={{ maxWidth: 180 }}
                  className="p-4 text-current"
                  alt="Logo"
                />
              ))}
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div
          className="bg-cover h-cover bg-bottom shadow-inner shadow-i"
          style={{
            background: "#6E6E6E",
            minWidth: 320,
            boxShadow: "inset 0px 20px 10px -5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="m-auto max-w-5xl py-24 px-3 md:px-12 relative">
            <div className="text-2xl uppercase font-bold space-x-3 text-gray-300">
              How we can help
            </div>
            <div className="my-16 text-4xl md:text-6xl font-light leading-tight">
              We work with growing startups to design and implement custom
              security programs.
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-24 py-12 items-center opacity-80 align-baseline"
              style={{ alignItems: "baseline" }}
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  className="mb-24 md:mb-0 align-baseline justify-start "
                >
                  <div className="">
                    <img src={s.icon} width="50" alt="icon" />
                  </div>
                  <div className="bg-gray-400 my-6 h-1 w-3/5">&nbsp;</div>
                  <div className="text-2xl mb-4">{s.title}</div>
                  <div className="mb-4">{s.subtitle}</div>
                </div>
              ))}
            </div>

            <div className="text-gray-700 mb-8 opacity-60">
              Let's address your crucial threats without slowing down your
              roadmap
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div
          className=" flex justify-center items-center h-screen w-full bg-brand-dark"
          id="contact"
          style={{}}
        >
          <Form method="post" className="flex flex-col w-full max-w-lg">
            <input name="visitor-id" value={visitorId || ""} type="hidden" />
            <div className="w-256  p-12 pt-12 pb-12 bg-brand-dark">
              <div className="text-4xl md:text-6xl mb-8 font-bold text-white text-center">
                Get in Touch
              </div>

              <div className="">
                <a
                  href="mailto:root@startup.security"
                  className={clsx(
                    "bg-brand py-3 px-6 text-center text-brand-light font-bold text-lg w-full block",
                    {
                      "opacity-60": hasSubmitted,
                    }
                  )}
                >
                  {transition.state === "submitting"
                    ? "...Submitting"
                    : data?.formMessage?.email
                    ? data?.formMessage?.email
                    : "Email us"}
                </a>
              </div>
            </div>
            <div className="m-auto max-w-xl mb-8 py-8 flex">
              <div className="flex-grow"></div>
              <div className="flex">
                <div
                  className="border-r border-r-gray-500 mr-3 pr-3"
                  style={{ width: 50, height: 30 }}
                >
                  <a href="https://startup.dev">
                    <svg
                      style={{ maxWidth: "100%", height: 30 }}
                      width="120"
                      height="87"
                      viewBox="0 0 120 87"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M38.6274 11.7654L11.7574 38.6354C9.41421 40.9786 9.41421 44.7776 11.7574 47.1207L38.6274 73.9908C40.9706 76.3339 44.7696 76.3339 47.1127 73.9908C47.6345 73.469 48.4804 73.469 49.0021 73.9908L54.1838 79.1724C54.7055 79.6942 54.7055 80.5401 54.1838 81.0619C47.9354 87.3102 37.8047 87.3102 31.5563 81.0619L4.68629 54.1918C-1.5621 47.9434 -1.5621 37.8128 4.68629 31.5644L31.5563 4.69432C37.8047 -1.55407 47.9354 -1.55407 54.1838 4.69432L59.8675 10.3781L65.0538 5.19178C71.3022 -1.05661 81.4328 -1.05661 87.6812 5.19178L114.551 32.0618C120.8 38.3102 120.8 48.4409 114.551 54.6893L87.6812 81.5593C81.4328 87.8077 71.3022 87.8077 65.0538 81.5593L59.5207 76.0262L59.5218 76.0251L52.1936 68.697L52.1926 68.6981L38.1838 54.6893C31.9354 48.4409 31.9354 38.3102 38.1838 32.0618L52.7965 17.4491L47.1127 11.7654C44.7696 9.42224 40.9706 9.42224 38.6274 11.7654ZM72.1249 12.2628L66.9386 17.4491L66.9394 17.4499L59.8683 24.521L59.8675 24.5202L45.2548 39.1329C42.9117 41.4761 42.9117 45.275 45.2548 47.6182L59.3701 61.7334L73.9828 47.1207C76.3259 44.7776 76.3259 40.9786 73.9828 38.6354L65.5252 30.1778C64.7441 29.3968 64.7441 28.1305 65.5252 27.3494L69.7678 23.1068C70.5489 22.3257 71.8152 22.3257 72.5962 23.1068L81.0538 31.5644C87.3022 37.8128 87.3022 47.9434 81.0538 54.1918L66.4411 68.8045L72.1249 74.4882C74.468 76.8314 78.267 76.8314 80.6102 74.4882L107.48 47.6182C109.823 45.275 109.823 41.4761 107.48 39.1329L80.6102 12.2628C78.267 9.9197 74.468 9.9197 72.1249 12.2628Z"
                        fill="url(#paint0_linear_34_55)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_34_55"
                          x1="-0.297187"
                          y1="42.8958"
                          x2="119.573"
                          y2="43.6477"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4AFCDC" />
                          <stop offset="1" stopColor="#2FEAC8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>

                <div className="mr-4">
                  <a href="https://twitter.com/startup_sec">
                    <img
                      className="w-6"
                      src="/images/twitter.png"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
                <div className="mr-4">
                  <a href="https://www.linkedin.com/company/startupdotsecurity/">
                    <img
                      className="w-6"
                      src="/images/linkedin.svg"
                      alt="linkedin"
                    ></img>
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
