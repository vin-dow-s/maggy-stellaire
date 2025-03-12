import Image from "next/image"

const About = () => {
    return (
        <section
            id="a-propos-section"
            className="body-text flex flex-col lg:w-[75%] sm:w-[90%] w-[95%] mx-auto justify-center items-center sm:my-64 my-16 px-4"
        >
            <h2
                id="a-propos"
                className="text-4xl sm:text-5xl font-heading mb-8 sm:mb-16"
            >
                À propos
            </h2>
            <div className="flex flex-col xl:flex-row gap-8 ">
                <div className="w-full">
                    <Image
                        src=""
                        alt=""
                        className="rounded-lg max-w-[600px] xl:min-w-[400px] w-full"
                        width={650}
                        height={650}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold"></p>
                    <p className="text-gray-300"></p>
                    <p className="text-gray-300"></p>
                    <p className="text-gray-300"></p>
                    <p className="text-gray-300"></p>
                    <p className="font-semibold"></p>
                    <p className="font-semibold"></p>
                </div>
            </div>
        </section>
    )
}

export default About
