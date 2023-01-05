import Card from "@components/card";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center">
      <Card className="mx-auto max-h-[32rem] w-full hover:drop-shadow-none">
        <p className="mb-2 p-2 font-bold text-neutral-500">
          Write your message here
        </p>
        <div className="p-2">
          <div className="relative">
            <label
              htmlFor="name"
              className="text-sm leading-7 text-neutral-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-neutral-300 bg-neutral-100 py-1 px-3 text-base leading-8 text-neutral-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500"
            />
          </div>
        </div>
        <div className="p-2">
          <div className="relative">
            <label
              htmlFor="email"
              className="text-sm leading-7 text-neutral-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-neutral-300 bg-neutral-100 py-1 px-3 text-base leading-8 text-neutral-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500"
            />
          </div>
        </div>
        <div className="p-2">
          <div className="relative">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-neutral-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-neutral-300 bg-neutral-100 py-1 px-3 text-base leading-6 text-neutral-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500"
            ></textarea>
          </div>
        </div>
        <div className="w-full p-2">
          <button
            disabled
            className="mx-auto flex rounded-2xl border-0 bg-yellow-500 py-2 px-8 text-lg text-white focus:outline-none disabled:cursor-not-allowed disabled:bg-neutral-300 hover:bg-yellow-600"
          >
            Send
          </button>
        </div>
      </Card>

      <div className="ml-8 text-3xl font-bold text-neutral-400">
        Let&apos;s work on a project together!
      </div>
    </div>
  );
}
