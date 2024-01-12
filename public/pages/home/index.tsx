import Helmet from 'react-helmet'

const Home = () => (
  <section class="container">
    <Helmet title="Psilly Belongs You" />
    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1 class="h4 fw-bold">🍄 Psilly Belongs You 🍄</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Enjoy your pstay!</p>
        <p class="mb-4">How are you feeling?</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a
            class="btn btn-outline-secondary btn-lg px-4 me-sm-3"
            href="/sober/">
            Not high
          </a>
          <a class="btn btn-outline-warning btn-lg px-4 me-sm-3" href="/high/">
            High enough
          </a>
          <a class="btn btn-outline-danger btn-lg px-4" href="/toohigh/">
            Too high
          </a>
        </div>
      </div>
      <div class="overflow-hidden">
        <div class="container">
          <a href="/art/polygonous/">
            <picture>
              <source
                srcset="/assets/art/thumbnails/polygonous.webp"
                type="image/webp"
              />
              <source
                srcset="/assets/art/thumbnails/polygonous.png"
                type="image/png"
              />
              <img
                src="/assets/art/thumbnails/polygonous.png"
                width={300}
                height={185}
                class="img-fluid border rounded-3 shadow-lg"
                alt="Polygonous nail of thumb"
                loading="lazy"
              />
            </picture>
          </a>
        </div>
      </div>
      <div class="col-lg-6 mx-auto mt-4">
        <p class="lead mb-4">Support Psychedelia</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a class="btn btn-outline-primary btn-lg px-4 me-sm-3" href="/join/">
            Join
          </a>
          <a
            class="btn btn-outline-success btn-lg px-4 me-sm-3"
            href="/donate/">
            Donate
          </a>
        </div>
      </div>
    </div>
    <h2 class="pb-2 border-bottom">Psychedelic Digital Sanctuary</h2>
    <p>
      Welcome to Psilly, a digital sanctuary dedicated to fostering a safe and
      supportive online community for individuals navigating the profound realms
      of psychedelic experiences. Our mission is to provide a space where those
      exploring altered states of consciousness can connect, share insights, and
      seek answers in an atmosphere of understanding and compassion.
    </p>
    <p>
      At Psilly, we believe in the transformative power of psychedelic journeys
      and recognize the importance of a supportive community during these unique
      and introspective moments. Our platform is committed to offering a
      judgment-free zone where users can freely express their thoughts,
      concerns, and questions without fear of stigma or misunderstanding.
    </p>
    <p>
      Guided by principles of harm reduction and responsible exploration, Psilly
      seeks to empower users with accurate information, insightful resources,
      and a network of like-minded individuals who share a commitment to
      personal growth and well-being. We encourage open dialogue, responsible
      use, and the exchange of diverse perspectives to create a rich tapestry of
      knowledge that aids in navigating the complex landscapes of psychedelia.
    </p>
    <p>
      As stewards of a safe digital haven, we prioritize the well-being and
      mental health of our community members. We promote informed
      decision-making, encourage respectful discourse, and strive to foster an
      environment that nurtures personal development and positive connections.
    </p>
    <p>
      Join us at Psilly, where the boundless exploration of consciousness meets
      the warm embrace of a supportive community. Together, let's embark on a
      journey of discovery, healing, and understanding in the spirit of unity
      and harmony.
    </p>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0">Explore the Infinite Within</h3>
          <p>
            Embark on a journey of self-discovery and community support as you
            delve into the transformative realms of psychedelia. Join our
            welcoming community committed to fostering a space of understanding
            and growth.
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0">Connect and Share</h3>
          <p>
            Forge meaningful connections with like-minded individuals who
            understand the unique experiences of psychedelic exploration. Share
            your insights, questions, and stories in a judgment-free zone that
            celebrates diversity and personal growth.
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0">Navigating the Psychedelic Landscape</h3>
          <p>
            Access resources and engage in discussions centered around harm
            reduction, responsible use, and the latest information on
            psychedelic substances. Empower yourself with knowledge to ensure a
            safe and informed journey.
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0">Guiding the Psychedelic Experience</h3>
          <p>
            Discover curated insights, guided journeys, and thoughtful
            reflections from experienced individuals within the community. Learn
            from the collective wisdom to enhance the depth and meaning of your
            psychedelic experiences.
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0">Integrating Profound Experiences</h3>
          <p>
            Navigate the post-psychedelic journey with guidance on mindful
            integration. Access tools and discussions aimed at incorporating
            insights gained during altered states into your everyday life for
            lasting personal transformation.
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0">Unite in Psychedelic Exploration</h3>
          <p>
            Stay informed about upcoming events, conferences, and gatherings
            dedicated to the psychedelic community. Connect with others in
            person or virtually, fostering a sense of unity and shared purpose.
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0 text-break">Knowledge as Empowerment</h3>
          <p>
            Access a wealth of educational resources, articles, and expert
            insights to deepen your understanding of psychedelics. Stay informed
            on the latest research, therapeutic applications, and cultural
            perspectives surrounding these fascinating substances.
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <h3 class="fw-bold mb-0">Nurturing Well-being</h3>
          <p>
            Prioritize mental health with resources and discussions focused on
            well-being during and after psychedelic experiences. Find support,
            share coping strategies, and contribute to a compassionate space
            that values mental health above all.
          </p>
        </div>
      </div>
    </div>
    <p>Explore Psilly — Where Consciousness Explores, Connects, and Grows.</p>
  </section>
)

export default Home
