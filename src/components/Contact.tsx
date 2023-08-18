const Contact = ({ separate }: { separate?: boolean }) => {
  return (
    <main
      className={`bg-[#FFA07A] ${
        !separate ? "border-t-[4px]" : ""
      }  border-x-[4px]  border-black py-10 gap-4 flex flex-col justify-center items-center`}
    >
      <div className="text-3xl font-semibold">Get in touch!</div>
      <form
        className="flex flex-col gap-10"
        method="POST"
        action="https://formspree.io/f/moqovkzp"
      >
        <div className="flex flex-col gap-3">
          <label className="text-xl">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="ease-in-out duration-100 rounded-md p-2 shadow-input border-2 border-black focus:outline-none outline-none w-[364px]"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-xl">Email or Number *</label>
          <input
            type="text"
            required
            placeholder="Enter email or number"
            className="ease-in-out duration-100 rounded-md p-2 shadow-input border-2 border-black focus:outline-none outline-none w-[364px]"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-xl">Message *</label>
          <textarea
            required
            placeholder="Enter your message"
            className="ease-in-out duration-100 rounded-md p-2 shadow-input border-2 border-black focus:outline-none outline-none w-[364px]"
            rows={4}
            autoComplete="off"
          ></textarea>
        </div>
        <div className="m-auto">
          <button
            type="submit"
            className="ease-in-out duration-100 text-xl font-semibold shadow border-2 border-black rounded-md p-2 bg-[#90EE90]"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
