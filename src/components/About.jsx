import TextType from "../bits/TextType";

const About = () => {
  return (
    <section className="w-full bg-teal-300 py-10">
      <div className="container mx-auto p-10 bg-white rounded-2xl">
        <div className="flex gap-5">
          <div className="flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            esse iure modi architecto reprehenderit. Consectetur hic officia ea
            eligendi perferendis repellendus, voluptate sit asperiores
            voluptates iure, est labore incidunt doloremque.
          </div>
          <div className="flex-1">
            <div className="font-semibold">
              <div className="text-4xl mb-2 underline decoration-teal-300">
                ABOUT ME{" "}
              </div>
              <div className="text-xl mb-4 text-teal-300">
                <TextType
                  text={["Front-end", "Web Developer"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  texts={[
                    "Welcome to React Bits! Good to see you!",
                    "Build some amazing experiences!",
                  ]}
                  deletingSpeed={50}
                  variableSpeedEnabled={false}
                  variableSpeedMin={60}
                  variableSpeedMax={120}
                  cursorBlinkDuration={0.5}
                />
              </div>
              <div className="text-justify tracking-tight">
                I am a fresh graduate in Informatics from UPN Veteran Jakarta,
                driven by an entrepreneurial mindset and a passion for creative
                problem-solving. With a strong interest in technology, I am
                particularly focused on software development, web development,
                and game development. I thrive on tackling complex challenges
                and enjoy creating innovative solutions through technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
