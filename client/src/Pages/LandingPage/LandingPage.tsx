import "./LandingPage.css";
import Video from "@/Components/Video/Video";
import { Link } from "react-router-dom";

import { Tweet } from "react-tweet";

const LandingPage = () => {
  return (
    <section className=" flex flex-col items-center">
      <div className="max-w-[900px] flex flex-col gap-[100px]">
        <div>
          <h2 className="text-xl font-semibold">Design Doc</h2>
          <br />
          <br />
          <p>
            This page is a brief of the design choices I made while creating the
            Dashboard, the Orders Page and the Default Page fron the Figma
            Files.{" "}
          </p>

          <br />
          <br />

          <div className="df-info-card">
            <p>
              In case you do not want to read the Design Doc first, you can
              visit the Default Page (Dashboard Landing) and the Order Page by
              following the links below. The same links are also available in
              the sidebar on the left.
            </p>

            <div className="flex items-center justify-between gap-[12px]">
              <Link to="/default" className="blue-button">
                Default Page
              </Link>
              <Link to="/orders" className="blue-button">
                Orders Page
              </Link>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div>
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <br />
          <br />
          <p>
            This project is developed using <u>React</u> and <u>TypeScript</u>,
            and is hosted on Vercel. Styling is primarily done with vanilla CSS
            (90%), with Tailwind CSS used for some components to expedite
            development due to time constraints.
          </p>
          <br />
          <p>
            The app also uses <u>Radix Primitives</u> to create accessible
            components with consistent styling across devices and operating
            systems.
            <br />
            <br />
            Other packages used include Vaul, Sonner, Framer Motion, and
            shadcnui/Charts for building various components of the Dashboard.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Accessibility</h2>
          <br />
          <br />
          <p>
            I wanted to create an accessible dashboard with easy keyboard
            navigation. Radix Primitives like Accordion, Tabs, and Checkboxes
            enhance keyboard navigation, ensuring intuitive use while
            maintaining consistent behavior and styling across devices.
          </p>

          <br />
          <br />
          <Video
            src="/video/Keycontrols.mov"
            className="outline-1 outline-white/20 outline mx-auto w-full"
          />

          <p className="text-sm w-full max-auto text-center">
            Keyboard Navigation
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Responsive Design</h2>
          <br />
          <br />
          <p>
            Although the Figma file did not include designs for smaller screens,
            I explored my own design ideas to create a responsive dashboard.
            <br />
            <br />
            My approach involved identifying key dashboard components to display
            on smaller screens, while abstracting other elements to appear only
            when needed by the user.
            <br />
            <br />
            To achieve a fully responsive design, I implemented a Drawer
            Component that abstracts the sidebars (Navigation and Info Panel)
            for smaller screens.
            <br />
            <br />
            <Video
              src="/video/ResponsiveDesign1.mov"
              className="outline-1 outline-white/20 outline mx-auto w-full"
            />
            <br />
          </p>
          <div className="df-info-card">
            <h2 className="font-semibold mb-2 shimmer-effect">
              When to show compact dashboard?
            </h2>
            Another key challenge in creating a fluid responsive design was
            handling multiple charts within the dashboard. When charts were
            resized below a certain width, they appeared awkward and harder to
            view. Additionally, styling the dashboard with floating drawers
            using media queries was difficult.
            <br />
            <br />
            To resolve this, I implemented a state that checks if the available
            space for charts falls below a threshold (700px in our case). If it
            does, a compact version of the dashboard is displayed.
            <Video
              src="/video/ResponsiveDesign2.mov"
              className="outline-1 outline-white/20 outline mx-auto w-full"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Microinteractions and Animations
          </h2>

          <br></br>
          <br></br>
          <p>
            A dashboard design should focus primarily on ease of use, showing
            maximum details in the available screen space. Heavy animations and
            interactions can prove to be counter intuitive and irritating in
            most cases.
            <br></br>
            <br></br>
            So, I wanted to add some meaningful aniamtions and interaction that
            focused on providing feedback to certain actions.
            <br />
            <br />
            Here are a few key interactions and animations:
          </p>
          <br />
          <br />
          <p className="font-semibold mb-4">ThemeSwitcher</p>

          <Video
            src="/video/ThemeSwithcer.mov"
            className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
          />

          <br />
          <br />

          <p className="font-semibold mb-4">
            Notification and Activity Animations
          </p>

          <Video
            src="/video/NotificationAnimation.mov"
            className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
          />

          <br />
          <br />

          <p className="font-semibold mb-4">
            Chart interactions and number tickers
          </p>

          <Video
            src="/video/Charts.mov"
            className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
          />

          <br />
          <br />
          <p className="font-semibold mb-4">
            Order details for mobile and tablet screen
          </p>

          <p>
            This interaction mimicks the iOS Bottom Sheet interaction very
            closely giving a natvie experience to users.
          </p>
          <Video
            src="/video/Details.mov"
            className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
          />

          <br />
          <br />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Context and State Management
          </h2>
          <br />
          <br />

          <p>
            I am using the React Context API to create two contexts:
            ThemeContext and a DashboardContext.
            <br />
            <br />
            <u>ThemeContext</u> maintains the active theme of the dashboard,
            while <u>DashboardContext</u> manages dashboard settings such as
            showInfoPanel (toggles the right sidebar), showSidebar (toggles the
            dashboard navigation options), recents (a stack that keeps track of
            the last two visited pages for quick navigation), and favorites (a
            list of pages that users can mark as favorites).
            <br />
            <br />
          </p>

          <Video
            src="/video/Context.mov"
            className="outline-1 outline-white/20 outline mx-auto"
          />
        </div>

        <br />
        <br />

        <div>
          <h2 className="text-xl font-semibold">Conclusion</h2>
          <br />
          <br />

          <p className="font-semibold mb-4">Challenges</p>
          <p>
            The most challenging aspect of the build was designing a fluid and
            intuitive dashboard for smaller screens. I aimed to avoid the common
            approach of merely changing flex directions, which often leads to a
            repetitive layout. Instead, I focused on creating a self-explanatory
            design that emphasizes ease of use.
          </p>
          <br />
          <br />

          <p className="font-semibold mb-4">Scope of Improvment</p>
          <p>
            There are areas I would like to work on and improve given the time.
            <br />
            Like having fallbacks, skeletons, suspense states for slow network
            connections etc, optimising the readability of certain sections of
            the codebase and making the chart components more flexible.
            <br />
            <br />
            However, I consciously choose to focus on the "feel" of the site
            over these as I felt that it could create more impact over the
            others. Besides the requirements mentioned in the assignment, seemed
            to be more focused on creating the UI for the given role.
          </p>

          <br />
          <br />

          <p className="font-semibold mb-4">Learning</p>
          <p>
            My biggest take away from the project would be handling complex
            layouts with a mix of media queries and JS. It was a good experience
            to follow a industry standard Figma Design and developing it.
          </p>
        </div>

        {/* <TweetEmbed tweetId="1840527089751277664" /> */}

        <div className="df-info-card mt-16 flex p-4">
          <h2 className="shimmer-effect text-xl md:text-2xl font-semibold">
            My 2 cents on why you should consider me.
          </h2>

          <p>
            I have a keen interest in UI/UX and deeply consider how user
            interfaces can be designed to engage users effectively. Over the
            past year, I have been actively working on developing my skills in
            this area.
            <br />
            <br />I frequently share my work on my portfolio{" "}
            <a
              href="https://www.imharshsharma.in"
              className="text-blue-400"
              target="_blank"
            >
              imharshsharma.in
            </a>{" "}
            and on my{" "}
            <a
              href="https://x.com/mai_sharmaji"
              className="text-blue-400"
              target="_blank"
            >
              X (Twitter)
            </a>{" "}
            account.
          </p>

          <p>
            I am currently working on a npm package,{" "}
            <a
              href="https://suchidocs.in/"
              className="text-blue-400"
              target="_blank"
            >
              Suchi
            </a>{" "}
            that creates Index (Table of Contents) for your pages and articles.
            See the full{" "}
            <a
              href="https://suchidocs.in/"
              className="text-blue-400"
              target="_blank"
            >
              documentation
            </a>{" "}
            here.
          </p>

          <p>Here are some of my best experiments.</p>

          <Tweet id="1808649775040114784" />
          <Tweet id="1809065534757220420" />
          <Tweet id="1794379039144333443" />
          <Tweet id="1812521794173038768" />
        </div>

        <p className="py-16">
          Thank you for taking the time out and sticking around till here.
          Looking forward to having a conversation soon!!{" "}
        </p>

        <div className="h-[100px]" />
      </div>
    </section>
  );
};

export default LandingPage;
