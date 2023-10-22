import cat from "@/public/images/cat.jpg"
import Image from "next/image";
import toby from "@/public/images/toby.jpg"

const Main = () => {

    return (
        <div
            className="p-20 flex flex-col font-serif text-lg"
        >

            <h2 className="pl-[30rem] text-xl font-semibold"> 
                To Chelssey,
            </h2>

            <div
                className="flex w-full p-20 gap-10 items-center justify-center"
            >

                <Image 
                    src={cat}
                    alt="cat"
                    className="w-[25rem]"
                />

                <p
                    className="break-keep"
                >
                    " I see that you're overthinking and I respect that. Nevertheless, 
                    I just wanted to say that you'll never be a distraction to me :>.
                    If my studies are important to me, then so as you!! You'll always
                    welcome to me anytime, even at the busiest moments. There are times
                    where I may not be able to respond immediately but rest assured that
                    it's not because you're becoming a bother to me. You're already important 
                    to me so don't you worry. I want you to want me and be clingyy, HUI. ""
                </p>

                <Image 
                    src={toby}
                    alt="cat"
                    className="w-[25rem]"
                />

            </div>


            <h2
                className="place-self-end pr-[30rem] text-xl font-semibold"
            >
                From Your Presi
            </h2>

        </div>
    )

};

export default Main;