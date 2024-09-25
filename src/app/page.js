import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex mx-auto justify-between bg-slate-200">
      <header >
        <div className="max-h-[100vh] fixed">
          <h1>
            Manyard
          </h1>
          <h3>
            Web Developer
          </h3>
          <p>
            I build stuff and break then right after
          </p>
          <div className="my-80">
            <div>
              <a>
                About Me
              </a>
            </div>
            <div>
              <a>
                Projects
              </a>
            </div>
            <div>
              <a>
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="my-80">
          <b>
            some project
          </b>
          <p>
            some project description
          </p>
        </div>
        <div className="my-80">
          <b>
            some project
          </b>
          <p>
            some project description
          </p>
        </div>
        <div className="my-80">
          <b>
            some project
          </b>
          <p>
            some project description
          </p>
        </div>
        <div className="my-80">
          <b>
            some project
          </b>
          <p>
            some project description
          </p>
        </div>
      </main>
    </div>
  );
}
