import { useNavigate } from "react-router-dom";
import osud1 from "../../assets/osud1.jpeg";
import osud2 from "../../assets/osud2.jpg";
import osud3 from "../../assets/osud3.jpg";

const LatestNews = () => {
    const navigate = useNavigate();

    const handleMoreNews=()=>{
        navigate('/morelatestnews');


    }


    return (
        <div>
            <section className="bg-[#F3F4F6] py-16">
                <div className="w-11/12 mx-auto">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                        
                        {/* Card 1 */}
                        <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
                            <figure>
                                <img src={osud1} className="rounded-xl w-full" alt="Shoes" />
                            </figure>
                            <div className="card-body flex flex-col flex-grow">
                                <h2 className="card-title">
                                    Rescue Hospital Unveils Advanced Medical Wing for Enhanced Patient Care
                                </h2>
                                <p>September 5, 2023</p>
                                <p className="w-full">
                                    In a significant stride toward excellence, ...
                                </p>
                            </div>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
                            <figure>
                                <img src={osud2} className="rounded-xl w-full" alt="Shoes" />
                            </figure>
                            <div className="card-body flex flex-col flex-grow">
                                <h2 className="card-title">
                                    Pioneering Research Initiatives at Rescue Hospital
                                </h2>
                                <p>September 12, 2023</p>
                                <p className="w-full">
                                    In a significant stride toward excellence, ...
                                </p>
                            </div>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="card p-5 shadow-xl bg-white flex flex-col h-full">
                            <figure>
                                <img src={osud3} className="rounded-xl w-full" alt="Shoes" />
                            </figure>
                            <div className="card-body flex flex-col flex-grow">
                                <h2 className="card-title">
                                    Celebrating a Decade of Compassionate Healthcare Excellence
                                </h2>
                                <p>September 5, 2023</p>
                                <p className="w-full">
                                    In a significant stride toward excellence, ...
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* See More Button */}
                    <div className="text-center pt-10">
                        <button onClick={handleMoreNews} className="btn bg-[#213B63] text-white text-lg hover:bg-primary">
                            See More News
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatestNews;
