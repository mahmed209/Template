import React from "react";
import CountUp from "react-countup";
import BackgroundImage from "../assets/img/join.png";

const JoinUs = () => {
    return (
        <div
            className="w-full h-6/12 mb-12 bg-cover border-purple-700 border-t-2 border-b-2 bg-center bg-no-repeat py-8 px-4 md:px-16"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">JOIN OUR TEAM</h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
                <p className="text-center text-xl font-semibold text-gray-700 mb-8 max-w-8xl mx-auto">
                    Be a part of something extraordinary! Join our team of innovators and problem-solvers who are committed to delivering state-of-the-art IT solutions. By working with us, you’ll engage in challenging projects, develop cutting-edge technologies, and grow your career in a dynamic, collaborative environment. Together, we’re shaping the future of tech and creating impactful solutions. Get in touch to explore exciting career opportunities and become a key player in our mission to transform industries.
                </p>

                <div className="flex justify-around items-center">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-900">
                            <CountUp end={500} duration={3} separator="," />+
                        </h3>
                        <p className="text-lg font-medium text-blue-950">Tasks Completed</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-900">
                            <CountUp end={100} duration={3} />%
                        </h3>
                        <p className="text-lg font-medium text-blue-950">Quality Performance</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-900">
                            <CountUp end={2000} duration={3} separator="," />+
                        </h3>
                        <p className="text-lg font-medium text-blue-950">Successful Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
