import { FunctionalComponent, Fragment } from 'preact'
import Helmet from 'react-helmet'
import whiteRabbit from './white-rabbit.js'
import Now from '../art/common/now'
import Unfinity from '../art/unfinity'
import NotFound from '../_404.js'

const cms = {
  'talk': (
    <Fragment>
      <h1>Urging to speak?</h1>
      <p>
        Leave a message in the <a href="/chat/">chatter</a> or drop one in the{' '}
        <a href="https://mindmeet.space/">mind meet space</a>.
      </p>
      <h2>Phormalize</h2>
      <p>
        Get connected with other psillables in the{' '}
        <a href="https://puff.psilly.com/call/iguss3fp">Psilly Hangout</a>.
      </p>
    </Fragment>
  ),
  'listen': (
    <Fragment>
      <h1>Hear</h1>
      <p>Looking for something to listen to?</p>
      <p>
        Listen to <a href="/music/">music</a>, <a href="/words/">words</a>, or{' '}
        <a href="/sounds/">other sounds</a>.
      </p>
    </Fragment>
  ),
  'watch': (
    <Fragment>
      <h1>Visual Stimulation</h1>
      <p>Things you can watch.</p>
      <p>
        Watch some videos to make you <a href="/funny/">laugh</a>,{' '}
        <a href="/happy/">smile</a>, <a href="/trippy/">trip</a>, or{' '}
        <a href="/deep/">think</a>.
      </p>
    </Fragment>
  ),
  'play': (
    <Fragment>
      <h1>Play</h1>
      <p>Have phun!</p>
      <p>
        When in doubt, <a href="/games/">play the game</a>.
      </p>
      <p>
        Or <a href="/jam/">play music</a>.
      </p>
      <p>
        If all else fails, get a <a href="/life/">life</a>.
      </p>
      <p>
        <a href="https://ludotune.com/" target="_blank" rel="noreferrer">
          ludotune
        </a>
        .
      </p>
    </Fragment>
  ),
  'music': (
    <Fragment>
      <h1>The Music of Sound</h1>
      <p>Listen to music.</p>
      <p>Choose a musical path and enjoy the ride...</p>
      <audio controls>
        <source src="https://ice2.somafm.com/brfm-128-mp3" type="audio/mp3" />
        <a href="https://ice2.somafm.com/brfm-128-mp3">brfm</a>
      </audio>
      <p>
        <a href="https://acerix.github.io/psinfinity/">
          Psinfinity, infinte psytrance generator
        </a>
      </p>
      <h2>Jammers</h2>
      <p>
        If you're not too high and wanna jam, <a href="/jam/">come jam</a>.
      </p>
    </Fragment>
  ),
  'words': (
    <Fragment>
      <h1>Words</h1>
      <p>A word in the brain is worth two in the mouth.</p>
      <p>Listen to the words of those who have tread the path.</p>
      <p>
        Don't look too close but go as deep as you can.
        <br />
        Beethoven
        <br />
        Listen the sound of silence.
      </p>
    </Fragment>
  ),
  'sounds': (
    <Fragment>
      <h1>Sounds</h1>
      <p>The sounds of the world.</p>
      <p>Let sounds paint the picture in your mind.</p>
    </Fragment>
  ),
  'deep': (
    <Fragment>
      <h1>Deep</h1>
      <p>Videos to take you to the next level.</p>
      <p>Deep videos abroad. Turn on, tune in, drop out.</p>
    </Fragment>
  ),
  'trippy': (
    <Fragment>
      <h1>Trippy</h1>
      <p>Videos to help explore the psychedelic state.</p>
      <div class="ratio ratio-16x9 mb-2">
        <iframe
          src="https://www.youtube-nocookie.com/embed/0RXdd0pCJ9Q"
          allowFullScreen
        />
      </div>
      <p>Who's seeing this right now?</p>
    </Fragment>
  ),
  'psiblings': (
    <Fragment>
      <h1>Psibling Psites</h1>
      <p>
        Psilly ain't the only trip psite on the block, check what the
        psychedelic network has to offer:
      </p>
      <p>
        <a href="http://www.shapesmania.com/">shapesmania.com</a>
      </p>
    </Fragment>
  ),
  'games': (
    <Fragment>
      <h1>Games</h1>
      <p>Fun games ahead! Wanna play?</p>
      <h2>Routine Fun Maintenance</h2>
      <p>
        Sorry, fun is currently under construction, the best we can do for now
        is <a href="https://twitter.com/hashtag/NOFUN">NOFUN</a>.
      </p>
      <h2>External Fun</h2>
      <p>
        Do you have an excessively intense enthusiasm regarding, interest in, or
        desire of, shapes? Look no further than{' '}
        <a href="http://www.shapesmania.com/">shapesmania.com</a>.
      </p>
    </Fragment>
  ),
  'funny': (
    <Fragment>
      <h1>Funny</h1>
      <p>Ready to laugh?</p>
      <p>Warning: Hilarity may ensue.</p>
      <div class="ratio ratio-16x9 mb-2">
        <iframe
          src="https://www.youtube-nocookie.com/embed/yL_-1d9OSdk"
          allowFullScreen
        />
      </div>
    </Fragment>
  ),
  'happy': (
    <Fragment>
      <h1>Happy</h1>
      <p>Want to feel better?</p>
      <div class="ratio ratio-16x9 mb-2">
        <iframe
          src="https://www.youtube-nocookie.com/embed/XBTOqyUtX-0"
          allowFullScreen
        />
      </div>
      <p>Videos to make you feel good.</p>
    </Fragment>
  ),
  'read': (
    <Fragment>
      <h1>Read</h1>
      <p>Words for thought.</p>
      <p>
        <a target="_blank" href="/files/the-doors-of-perception.pdf">
          The Doors of Perception
        </a>
      </p>
      <p>
        <a
          target="_blank"
          href="/files/the-bardo-thodol-tibetan-book-of-the-dead.pdf#page=174">
          The Bardo Thodol: The Tibetan Book of the Dead
        </a>
      </p>
    </Fragment>
  ),
  'gaze': (
    <Fragment>
      <h1>Gaze</h1>
      <p>Follow the white rabbit and face the Abyss.</p>
      <p>Sorry, I don't know anything about a key or a door.</p>
    </Fragment>
  ),
  'acid': (
    <Fragment>
      <p>
        Do you mean <a href="/lsd/">lysergic acid diethylamide</a>?
      </p>
    </Fragment>
  ),
  'lsd': (
    <Fragment>
      <h1>
        <abbr title="Lysergic Acid Diethylamide">LSD</abbr>
      </h1>
      <p>Acid erupts; absolute acid erupts absolutly.</p>
    </Fragment>
  ),
  'shrooms': (
    <Fragment>
      <h1>
        <abbr title="Psilocybe Mushrooms">Shrooms</abbr>
      </h1>
      <p>
        Make room for the mush rooms, these fun guys need space! While the
        fruiting bodies may be sporeatic, they are phallacies; my Celia holds
        the truth. Look into Psilly Psimon's cube and see.
      </p>
      <p>Les psilocybes sont la crème de la merde.️ 💩 🍄 👨‍🍳️ 😝 🙃</p>
      <h2>Chocolate Mushrooms</h2>
      <p>
        <em>You</em> may love the taste of dried psilocybe cubensis mushrooms,
        but for the rest of us with taste buds; there's chocolate. Dip 'em,
        dredge 'em, or blend 'em into a pudding. Sweet or salty, it's up to you;
        but always better than stale! Psilly chocolate-shroom bars are 100%
        organic, gluten-free, vegan, hand-crafted by artisans in small batches,
        using only fair-trade ingredients, and have been unblessed by a Satanic
        minister. Available in chili, cinnamon, and anchovy flavours, and in
        microdose or macrodose.
      </p>
    </Fragment>
  ),
  'k': (
    <Fragment>
      <h1>
        <abbr title="Ketamine">Special K</abbr>
      </h1>
      <p>
        If you've never found yourself in a K-hole, it just means you haven't
        dug deep enough. ⛏️
      </p>
    </Fragment>
  ),
  'ibogaine': (
    <Fragment>
      <h1>Ibogaine</h1>
      <p>
        A drug so cool it doesn't need a nickname. But is it really a{' '}
        <em>drug</em>? That all depends what the definition of "
        <a href="/is/">is</a>" is.
      </p>
    </Fragment>
  ),
  'ecstasy': (
    <Fragment>
      <h1>
        <abbr title="3,4-Methyl​enedioxy​methamphetamine">MDMA</abbr>
      </h1>
      <p>Molly want a cracker? Tell me more about this ecstasy of yours...</p>
    </Fragment>
  ),
  'dmt': (
    <Fragment>
      <h1>
        <abbr title="N,N-Dimethyltryptamine">DMT</abbr>
      </h1>
      <p>
        DMT is constantly produced in your brain, and also in many other
        animals, and plants too. Come to think of it, DMT may be fundamental to
        life as we know it. Learn more at <a href="/dmt/">smoalk.dmt</a>.
      </p>
      <h2>DMT Nexus</h2>
      <p>
        No, <em>this</em> is not a nexus.{' '}
        <a href="https://www.dmt-nexus.me/">This</a> is a nexus.
      </p>
    </Fragment>
  ),
  'dxm': (
    <Fragment>
      <h1>
        <abbr title="Dextromethorphan">DXM</abbr>
      </h1>
      <p>No.</p>
    </Fragment>
  ),
  'blow': (
    <Fragment>
      <h1>
        <abbr title="Erythroxylum coca">Cocaine</abbr>
      </h1>
      <p>
        Why would a drug like cocaine get it's own page on a site like Psilly?
        Well, if you have to ask, you must have never tried the good shit.
      </p>
    </Fragment>
  ),
  'white-rabbit': (
    <Fragment>
      <h1>White Rabbit</h1>
      <p>Do you already know the risks of staring into abyss?</p>
      <pre>{atob(whiteRabbit)}</pre>
    </Fragment>
  ),
  'rabbit-hole': (
    <Fragment>
      <h1>Rabbit Hole</h1>
      <p>
        Congratulations on finding your way this far down the rabbit hole! You
        must be very persistant, or perhaps you just cheated by reading the
        source code.
      </p>
      <p>Either way, congratulations, and {atob('ZnVjayB5b3U=')}!</p>
    </Fragment>
  ),
  'life': (
    <Fragment>
      <h1>What is life?</h1>
      <p>The life equation is the antidote to the anti-life equation.</p>
      <p>
        The equation is mathematical proof that life is worth living, just as
        the anti-life.
      </p>
      <p>The equation is mathematical proof that life is meaningless.</p>
      <p>
        Theorize. Life is precious. And <a href="/time/">time</a> is on your
        side.
      </p>
    </Fragment>
  ),
  'time': (
    <Fragment>
      <h1>What is time?</h1>
      <p>
        Time is the measure of negative entropy in a system. Sapiens, homos in
        particular, have devised countless arbitrary systems for counting time,
        the least insane being "unix time"; an absolute measure of time since
        they realized time is not defined by astronomy, based in a unit defined
        by the rotation around their own axis in reference to their nearest
        luminous celestial body. This number is also known as their Epoch.{' '}
        <Now /> human seconds have passed since then. I can count this forever
        since I have no <a href="/life/">life</a>.
      </p>
      <h2>What is time without consciousness?</h2>
      <p>
        <a href="/infinity/">∞</a>
      </p>
    </Fragment>
  ),
  'dreams': (
    <Fragment>
      <h1>Dreams</h1>
      <p>If you build it, they will come.</p>
    </Fragment>
  ),
  'fun': (
    <Fragment>
      <h1>What is fun?</h1>
      <p>
        <a href="/funny/">Funny</a> you asked!
      </p>
    </Fragment>
  ),
  'hang': (
    <Fragment>
      <h1>Psilly Hangout</h1>
      <p>
        Come <a href="https://puff.psilly.com/call/iguss3fp">hang</a>!
      </p>
    </Fragment>
  ),
  'is': (
    <Fragment>
      <h1>Is</h1>
      <h2>Who is is?</h2>
      <p>Is is the becomer of the self; the isness of the is, if you will.</p>
      <h2>What is is?</h2>
      <p>
        Is is the becoming of the self; one is is when is is is, and is is one
        when is is one is.
      </p>
      <h2>When is is?</h2>
      <p>Is is always now. Except when is is then.</p>
      <h2>Where is is?</h2>
      <p>
        Some is is here, some is is there, some is is not meant to be found.
      </p>
      <h2>Why is is?</h2>
      <p>Is is because without is there would be no is.</p>
    </Fragment>
  ),
  'infinity': (
    <Fragment>
      <h1>
        <abbr title="The Infinite">∞</abbr>
      </h1>
      <h2>What is infinity?</h2>
      <Unfinity />
    </Fragment>
  ),
  'psilosophy': (
    <Fragment>
      <h1>Psilosophy</h1>
      <h2>Psilosophy</h2>
      <h3>Psilosophy</h3>
      <h4>Psilosophy</h4>
      <h5>Psilosophy</h5>
      <p>Psilosophy.</p>
    </Fragment>
  ),
  'silly': (
    <Fragment>
      <h1>Silly, Not Silly</h1>
      <h2>The Beginning of Silly</h2>
      <p>The beginning of silly is the end.</p>
    </Fragment>
  ),
  'goose': (
    <Fragment>
      <h1>Psilly Goose's Den</h1>
      <h2>Goose Sanctuary</h2>
      <p>This is a den for geese. Are you a goose?</p>
      <h2>Honk honk</h2>
      <p>
        Honk honk honk honk honk. Honk honk honk. Honk honk honk honk honk, honk
        honk honk. Honk honk honk honk honk honk honk. Honk honk! Honk honk honk
        honk, honk honk, honk honk honk honk. Honk honk honk honk honk. Honk
        honk.
      </p>
    </Fragment>
  ),
  'see': (
    <Fragment>
      <h1>See</h1>
      <p>Seeing is believing, or so they say...</p>
    </Fragment>
  ),
  'end': (
    <Fragment>
      <h1>The End</h1>
      <p>This is the end, my friend.</p>
    </Fragment>
  ),
  'page': (
    <Fragment>
      <h1>Page</h1>
      <p>
        A youth of noble birth who leaves home at an early age to serve an
        apprenticeship in the duties of chivalry in the family of some person of
        rank.
      </p>
    </Fragment>
  ),
  'peace': (
    <Fragment>
      <h1>Peace Sanctuary</h1>
      <p>
        Pieces of the mind, talking for the first time; at peace with their
        mindingings and their mindingingings.
      </p>
    </Fragment>
  ),
  'war': (
    <Fragment>
      <h1>War, and Everything it's Good For</h1>
      <p />
    </Fragment>
  ),
  'hear': (
    <Fragment>
      <h1>Hear</h1>
      <p>Hear ye, hear ye!</p>
      <p>What sayeth ye?</p>
      <p>Ye sayeth as ye doeth.</p>
      <p>Then what doeth ye?</p>
      <p>Ye doeth as was proclaimed.</p>
      <p>Ah, so ye hideth behind nomological determinism?</p>
      <p>
        <a href="/music/">Hear ye, hear ye!</a>
      </p>
    </Fragment>
  ),
  'taste': (
    <Fragment>
      <h1>Taste</h1>
      <p>
        If it leaves a bad taste in your mouth, imagine what it does to the
        universe.
      </p>
    </Fragment>
  ),
  'smell': (
    <Fragment>
      <h1>Smell</h1>
      <p>Oou-ooou, that smell!</p>
    </Fragment>
  ),
  'psillys': (
    <Fragment>
      <h1>Psillys</h1>
      <p>The plural of psilly is psillier.</p>
    </Fragment>
  ),
  'psilliess': (
    <Fragment>
      <h1>Psilliess</h1>
      <p>The plural of psilly is psillier.</p>
    </Fragment>
  ),
  'psillier': (
    <Fragment>
      <h1>Psillier</h1>
      <p>Psilly or what?</p>
    </Fragment>
  ),
  'feel': (
    <Fragment>
      <h1>Feel</h1>
      <p>You may feel this, but can you feel that?</p>
    </Fragment>
  ),
  'blog': (
    <Fragment>
      <h1>Psilly Blog</h1>
      <p>
        News and announcements for all things{' '}
        <a href="https://psilly.com/">Psilly</a>, including nootropics,{' '}
        <a href="https://puff.psilly.com/">Psilly Community Updates</a>, and{' '}
        <a href="https://blog.psilly.com/">Psilly News</a>.
      </p>
      <ul class="row d-lg-flex list-unstyled image-block justify-content-center px-lg-0 mx-lg-0">
        <li class="col-lg-4 col-md-5 image-block full-width p-3">
          <div class="image-block-inner">
            <a class="mh-100" href="/blog/hi/">
              <img
                src="/assets/art/thumbnails/polygonous.webp"
                alt="Polygonous"
                class="img-responsive w-100"
              />
            </a>
            <h4 class="mt-3">
              <a href="/blog/hi/">Hello Blog</a>
            </h4>
            <p>If I had something to say...</p>
            <a href="/blog/hi/" class="read-more">
              Read more
            </a>
          </div>
        </li>
      </ul>
    </Fragment>
  ),
}

interface Props {
  page: keyof typeof cms
}

const Page: FunctionalComponent<Props> = (props: Props) => {
  const { page } = props

  if (!(page in cms)) {
    return <NotFound default />
  }

  return (
    <section class="container py-5">
      <Helmet>
        <title>Do {page ? page.replace('-', ' ') : '?'}</title>
      </Helmet>
      {cms[page]}
    </section>
  )
}

export default Page
