import TextType from "../bits/TextType";
import personImage from "../assets/img/person.jpg";

const About = () => {
  return (
    <section className="w-full py-10 bg-grey-200" id="about">
      <div className="container mx-auto p-10 bg-white rounded-2xl shadow-2xl">
        <div className="flex gap-3">
          <div className="flex-1 flex justify-center items-center">
            <img src={personImage} alt="" className="h-120 w-auto rounded-xl" />
          </div>
          <div className="flex-2">
            <div className="font-semibold">
              <div className="text-4xl mb-2 mt-2 text-[#46ecd5] underline decoration-teal-300">
                <TextType
                  text={["About Me"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  texts={["About Me"]}
                  deletingSpeed={50}
                  variableSpeedEnabled={false}
                  variableSpeedMin={60}
                  variableSpeedMax={120}
                  cursorBlinkDuration={0.5}
                />
              </div>
              <div className="text-2xl text-justify tracking-tight mb-4">
                I am a fresh graduate in Informatics from UPN Veteran Jakarta,
                driven by an entrepreneurial mindset and a passion for creative
                problem-solving. With a strong interest in technology, I am
                particularly focused on software development, web development,
                and game development. I thrive on tackling complex challenges
                and enjoy creating innovative solutions through technology.
              </div>
              <div className="flex flex-row gap-6 mb-4">
                {/* github */}
                <a
                  href="https://github.com/widhyasee"
                  target="blank"
                  className="hover:text-white hover:bg-teal-200 p-5 rounded-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/widhyasee/"
                  target="blank"
                  className="hover:text-white hover:bg-teal-200 p-5 rounded-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href=""
                  target="blank"
                  className="hover:text-white hover:bg-teal-200 p-5 rounded-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
              <button className="rounded-3xl bg-teal-300 p-3 text-white hover:shadow-xl shadow-teal-400 hover:bg-teal-400">
                Downlod CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
