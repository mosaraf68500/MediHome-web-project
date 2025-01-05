import map from "../../assets/Screenshot_2.png"
const Contact = () => {
  return (
    <div>
      <section className="bg-[#E5E7EB] my-24">
        <div className="w-11/12 mx-auto py-16">
          <div className="pb-20">
            <h1 className="text-3xl font-bold text-center">Contact Us</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="lg:col-span-2 gap-10 space-y-7">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <input
                      className="py-2 px-3 border-none outline-none rounded-full bg-slate-50 w-full text-[#A0A0A0]"
                      type="text"
                      placeholder="First Name*"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      className="py-2 px-3 border-none outline-none rounded-full bg-slate-50 w-full text-[#A0A0A0]"
                      type="email"
                      placeholder="Last Name*"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <input
                      className="py-2 px-3 border-none outline-none rounded-full bg-slate-50 w-full text-[#A0A0A0]"
                      type="text"
                      placeholder="Phone Number*"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      className="py-2 px-3 border-none outline-none rounded-full bg-slate-50 w-full text-[#A0A0A0]"
                      type="email"
                      placeholder="Email Number*"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <textarea
                    className="py-2 px-3 border-none outline-none rounded-3xl bg-slate-50 w-full text-[#A0A0A0]"
                    cols="30"
                    rows="8"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <div>
                  <button className="bg-[#2563EB] text-white text-lg py-3 px-5 rounded-full text-sm font-bold hover:bg-green-700 transition duration-300 w-full">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src={map}
                className="rounded-xl w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
