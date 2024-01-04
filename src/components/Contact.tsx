const Contact = ({ separate }: { separate?: boolean }) => {
  return (
    <section
      id="contact"
      className={` bg-[#FFA07A] ${
        !separate ? "border-t-[4px]" : ""
      }  border-x-[4px]  border-black py-10 gap-4 flex flex-col justify-center items-center`}
    >
      <h1 className="text-3xl font-semibold">Get in touch!</h1>
      <form
        className="flex flex-col gap-10"
        method="POST"
        action="https://formspree.io/f/moqovkzp"
      >
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="ease-in-out duration-100 rounded-md p-2 shadow-input border-2 border-black focus:outline-gray-600 outline-offset-0 outline-none lg:w-[364px] w-[300px]"
            autoComplete="on"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="email">
            Email *
          </label>
          <input
            type="text"
            required
            id="email"
            name="email"
            placeholder="Enter email"
            className="ease-in-out duration-100 rounded-md p-2 shadow-input border-2 border-black focus:outline-gray-600 outline-offset-0 outline-none lg:w-[364px] w-[300px]"
            autoComplete="on"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="number">
            Number
          </label>
          <input
            type="number"
            pattern="-\d{3}-\d{3}-\d{4}$"
            id="number"
            name="phone"
            placeholder="Enter number"
            className="ease-in-out duration-100 rounded-md p-2 shadow-input border-2 border-black focus:outline-gray-600 outline-offset-0 outline-none lg:w-[364px] w-[300px]"
            autoComplete="on"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="message">
            Message *
          </label>
          <textarea
            required
            placeholder="Enter your message"
            id="message"
            name="message"
            className="ease-in-out duration-100 rounded-md p-2 shadow-input border-2 border-black focus:outline-gray-600 outline-offset-0 outline-none lg:w-[364px] w-[300px]"
            rows={4}
            autoComplete="on"
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
    </section>
  );
};

export default Contact;
