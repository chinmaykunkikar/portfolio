import { Card } from "@components/Card";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="flex w-full flex-col items-center justify-start gap-12 text-type lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col">
          <div className="text-3xl font-bold ">
            Let&apos;s work on a project together!&nbsp;✨
          </div>
          <div className="mt-8 font-bold text-type lg:mt-16">Email me on</div>
          <div className="cursor-pointer select-all font-mono text-lg">
            chinmay.kunkikar@gmail.com
          </div>
        </div>
        <Card
          className="h-auto w-full rounded-xl hover:filter-none lg:w-1/2"
          aria-label="Contact Form"
        >
          <div className="p-2">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-7">
                Name
              </label>
              <input
                disabled
                type="text"
                id="name"
                name="name"
                className="leading-8outline-none w-full rounded bg-neutral-100 px-3 py-1 text-base transition-colors duration-200 ease-in-out focus:border-2 focus:border-yellow-500"
              />
            </div>
          </div>
          <div className="p-2">
            <div className="relative">
              <label htmlFor="email" className="text-sm leading-7">
                Email
              </label>
              <input
                disabled
                type="email"
                id="email"
                name="email"
                className="w-full rounded bg-neutral-100 px-3 py-1 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-2 focus:border-yellow-500"
              />
            </div>
          </div>
          <div className="p-2">
            <div className="relative">
              <label htmlFor="message" className="text-sm leading-7 ">
                Message
              </label>
              <textarea
                disabled
                id="message"
                name="message"
                className="h-32 w-full resize-none bg-neutral-100 px-3 py-1 text-base leading-6 text-neutral-700 outline-none transition-colors duration-200 ease-in-out focus:border-2 focus:border-yellow-500"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <button
              disabled
              className="mx-auto flex rounded-2xl border-0 bg-yellow-500 px-16 py-2 text-lg font-bold text-white hover:bg-yellow-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              Send
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
