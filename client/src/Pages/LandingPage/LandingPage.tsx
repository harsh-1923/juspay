import { Book } from "lucide-react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Video from "@/Components/Video/Video";

const LandingPage = () => {
  return (
    <section className="max-w-[900px]">
      <h2 className="text-xl font-semibold">Introduction to Assignment Work</h2>
      <br />
      <br />
      <p>
        This project is developed using React and TypeScript, and is hosted on
        Vercel. Styling is primarily done with vanilla CSS (90%), with Tailwind
        CSS used for some components to expedite development due to time
        constraints.
      </p>
      <br />
      <br />
      <p>
        The app also uses Radix Primitives to create accessible components with
        consistent styling across devices and operating systems.
        <br />
        <br />
        Other packages used include Vaul, Sonner, Framer Motion, and
        shadcnui/Charts for building various components of the Dashboard.
      </p>

      <br />
      <br />

      <h2 className="text-xl font-semibold">Accessibility</h2>
      <br />
      <br />
      <p>
        I wanted to create an accessible dashboard with easy keyboard
        navigation. Radix Primitives like Accordion, Tabs, and Checkboxes
        enhance keyboard navigation, ensuring intuitive use while maintaining
        consistent behavior and styling across devices.
      </p>

      <br />
      <br />
      <Video
        src="/video/Keycontrols.mov"
        className="outline-1 outline-white/20 outline mx-auto w-full"
      />

      <p className="text-sm w-full max-auto text-center">Keyboard Navigation</p>

      <br />
      <br />

      <h2 className="text-xl font-semibold">Responsive Design</h2>
      <br />
      <br />
      <p>
        Although the Figma file did not include designs for smaller screens, I
        wanted to explor my own design ideas to create a responsive dashboard.
        <br />
        <br />
        My approach involved identifying key dashboard components that should be
        visible on smaller screens, while abstracting other elements to appear
        only when needed by the user.
        <br />
        <br />
        To create a fully responsive design, I decided to make use of a Drawer
        Component that abstracts the sidebars (Navigation and the Info Pannel)
        for smaller screen.
        <br />
        <br />
        <Video
          src="/video/ResponsiveDesign1.mov"
          className="outline-1 outline-white/20 outline mx-auto w-full"
        />
        <br />
        <br />
      </p>
      <div className="df-info-card">
        <h2 className="font-semibold mb-2 shimmer-effect">
          When to show compact dashboard?
        </h2>
        Another key challenge in creating a fluid responsive design was handling
        multiple charts within the dashboard. When charts were resized below a
        certain width, they appeared awkward and harder to view. Additionally,
        styling the dashboard with floating drawers using media queries was
        difficult.
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

      <br />
      <br />

      <h2 className="text-xl font-semibold">
        Microinteractions and Animations
      </h2>

      <br></br>
      <br></br>
      <p>
        A dashboard design should focus primarily on ease of use, showing
        maximum details in the available screen space. Heavy animations and
        interactions can prove to be counter intuitive and irritating in most
        cases.
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

      <p className="font-semibold mb-4">Notification and Activity Animations</p>

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
        This interaction mimicks the iOS Bottom Sheet interaction very closely
        giving a natvie experience to users.
      </p>
      <Video
        src="/video/Details.mov"
        className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
      />
      <div className="df-info-card mt-4 flex items-center">
        <h2 className="shimmer-effect text-xl md:text-2xl font-semibold">
          Design Doc: Everything on the site
        </h2>

        <p className="max-w-[400px] text-center">
          I've put together some notes on my design and development process,
          sharing the choices I made along the way.
          <br />
          <br />
          Feel free to take a quick look!
        </p>

        <Link
          to="/design
        "
        >
          <button className="design-doc-button">
            <Book size={14} />
            Design Doc
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
