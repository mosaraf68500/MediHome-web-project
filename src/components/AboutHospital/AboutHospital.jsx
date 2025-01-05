import { Navigate, NavLink, useNavigate } from "react-router-dom";
import hospital from "../../assets/about.jpg";

const AboutHospital = () => {
    const navigate = useNavigate();

    const handleReadbtn=()=>{
        navigate('/readmorebtn');
    }
  return (
    <section class="my-20 bg-[#D1D5DB]">
      <div class="w-11/12 mx-auto py-20">
        <div class="text-3xl font-bold text-center pb-9">
          <h1>About Our Hospital</h1>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center">
          <div>
            <img src={hospital} class="rounded-xl" alt="" />
          </div>

          <div class="space-y-10">
            <p class="pb-10">
              Our state-of-the-art facility is equipped with cutting-edge
              technology and staffed by a team of highly skilled and
              compassionate healthcare professionals. From skilled surgeons to
              attentive nurses, from experienced specialists to friendly
              administrative staff, every member of our team is committed to
              ensuring the well-being and comfort of our patients. At rescue
              Hospital, we offer a comprehensive range of medical services,
              including but not limited to: Emergency Care: Our 24/7 emergency
              department is always ready to provide rapid and life-saving care
              to those
            </p>

            <a>
              <button class="btn bg-[#2563EB] hover:bg-primary text-white text-lg border-none">
                <NavLink onClick={handleReadbtn}>Read More</NavLink>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHospital;
