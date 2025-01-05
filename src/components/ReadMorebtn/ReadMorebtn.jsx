import r1 from "../../assets/r1.avif";
import r2 from "../../assets/r2.avif";
import r3 from "../../assets/r3.avif";
import r4 from "../../assets/r4.avif";
import r5 from "../../assets/r5.avif";

const ReadMorebtn = () => {
  return (
    <div>
      <section>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full justify-center pt-8">
            <img src={r1} className="w-[400px ] h-[400px] rounded-md" />
          </div>
          <div id="item2" className="carousel-item w-full justify-center pt-8">
            <img src={r2} className="w-[400px ] h-[400px] rounded-md" />
          </div>
          <div id="item3" className="carousel-item w-full justify-center pt-8">
            <img src={r3} className="w-[400px ] h-[400px] rounded-md" />
          </div>
          <div id="item4" className="carousel-item w-full justify-center pt-8">
            <img src={r4} className="ww-[400px ] h-[400px] rounded-md" />
          </div>

          <div id="item5" className="carousel-item w-full justify-center pt-8">
            <img src={r5} className="ww-[400px ] h-[400px] rounded-md" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>

          <a href="#item5" className="btn btn-xs">
            5
          </a>
        </div>
      </section>
 
      <section className="py-6 px-16 bg-[#D1D5DB] my-8">
        <h1 className="text-3xl font-semibold text-red-500 text-center pb-5">Our Hospital</h1>
        <p className="text-justify">
          Our state-of-the-art facility, Rescue Hospital, is dedicated to
          providing exceptional healthcare services. Our commitment extends
          across various medical disciplines, ensuring that our patients receive
          comprehensive and personalized care. Our team comprises skilled
          surgeons, attentive nurses, experienced specialists, and friendly
          administrative staff who collectively contribute to the well-being and
          comfort of every patient. Equipped with cutting-edge technology, our
          hospital ensures that patients receive advanced and innovative
          treatments. Our emergency care services operate 24/7, staffed by a
          dedicated team prepared to deliver rapid and life-saving
          interventions. This commitment to urgent care reflects our mission to
          be a reliable resource for the community in times of medical crises.
          Beyond emergency care, Rescue Hospital offers a wide spectrum of
          medical services designed to address diverse healthcare needs. Whether
          it's routine check-ups, specialized treatments, or surgical
          procedures, our medical professionals strive to provide top-notch
          services with a focus on patient safety, comfort, and positive
          outcomes. Your health is our priority, and we are honored to serve you
          with excellence and compassion. Our multidisciplinary approach at
          Rescue Hospital ensures a seamless continuum of care for our patients.
          We prioritize preventive healthcare through routine check-ups and
          health education programs to empower individuals with the knowledge to
          make informed decisions about their well-being. In addition to
          emergency care, our hospital specializes in various medical services,
          such as diagnostic imaging, laboratory testing, and advanced surgical
          procedures. Our diagnostic capabilities encompass state-of-the-art
          imaging technologies, enabling precise and accurate assessments for
          timely and effective treatment plans. The hospital's commitment to
          patient-centric care is evident in our focus on creating a healing
          environment. Comfortable and modern patient rooms, coupled with
          compassionate nursing care, contribute to a positive hospital
          experience. We take pride in fostering a collaborative and
          patient-friendly atmosphere, ensuring open communication between our
          healthcare providers and patients. Our commitment to excellence
          extends beyond medical treatments; we are dedicated to promoting
          overall wellness and supporting individuals on their health journeys.
          Rescue Hospital stands as a beacon of healthcare excellence, combining
          advanced medical technologies with compassionate care to meet the
          diverse healthcare needs of our community. Your health and
          satisfaction are at the forefront of our mission, and we look forward
          to serving you with the highest standards of medical care and
          compassion.
        </p>
      </section>
    </div>
  );
};

export default ReadMorebtn;
