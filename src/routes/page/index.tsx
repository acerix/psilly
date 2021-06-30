import { FunctionalComponent, h, Fragment } from 'preact'
import Helmet from 'react-helmet'
import whiteRabbit from './white-rabbit.js'

const cms = {
  time: <Fragment>{+new Date()}</Fragment>,
  talk: <Fragment><h1>Urging to speak?</h1><p>Leave a message in the <a href="/chat">chatter</a> or drop one in the <a href="https://mindmeet.space/">mind meet space</a>.</p></Fragment>,
  listen: <Fragment><h1>Hear</h1><p>Looking for something to listen to?</p><p>Listen to <a href="/page/music">music</a>, <a href="/page/words">words</a>, or <a href="/page/sounds">other sounds</a>.</p></Fragment>,
  watch: <Fragment><h1>Visual Stimulation</h1><p>Things you can watch.</p><p>Watch some videos to make you <a href="/page/funny">laugh</a>, <a href="/page/happy">smile</a>, <a href="/page/trippy">trip</a>, or <a href="/page/deep">think</a>.</p></Fragment>,
  play: <Fragment><h1>Play</h1><p>Have phun!</p><p>When in doubt, <a href="/page/games">play the game</a>.</p><p>Or <a href="/jam">play music</a>.</p></Fragment>,
  music: <Fragment><h1>The Music of Sound</h1><p>Listen to music.</p><p>Choose a musical path and enjoy the ride...</p><p><a href="//ice3.somafm.com/brfm-128-mp3">brfm</a></p><h2>Jammers</h2><p>If you're not too high and wanna jam, <a href="/jam">come jam</a>.</p></Fragment>,
  words: <Fragment><h1>Words</h1><p>A word in the brain is worth two in the mouth.</p><p>Listen to the words of those who have tread the path.</p><p>Don't look too close but go as deep as you can.<br />Beethoven<br />Listen the sound of silence.</p></Fragment>,
  sounds: <Fragment><h1>Sounds</h1><p>The sounds of the world.</p><p>Let sounds paint the picture in your mind.</p></Fragment>,
  deep: <Fragment><h1>Deep</h1><p>Videos to take you to the next level.</p><p>Deep videos abroad. Turn on, tune in, drop out.</p></Fragment>,
  trippy: <Fragment><h1>Trippy</h1><p>Videos to help explore the psychedelic state.</p><div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube-nocookie.com/embed/0RXdd0pCJ9Q" allowFullScreen /></div><p>Who's seeing this right now?</p></Fragment>,
  games: <Fragment><h1>Games</h1><p>Fun games ahead! Wanna play?</p><h2>Routine Fun Maintenance</h2><p>Sorry, fun is currently under construction, the best we can do for now is NOFUN.</p></Fragment>,
  funny: <Fragment><h1>Funny</h1><p>Ready to laugh?</p><p>Warning: Hilarity may ensue.</p><div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube-nocookie.com/embed/yL_-1d9OSdk" allowFullScreen /></div></Fragment>,
  happy: <Fragment><h1>Happy</h1><p>Want to feel better?</p><div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube-nocookie.com/embed/XBTOqyUtX-0" allowFullScreen /></div><p>Videos to make you feel good.</p></Fragment>,
  read: <Fragment><h1>Read</h1><p>Words for thought.</p><p><a target="_blank" href="/files/the-doors-of-perception.pdf">The Doors of Perception</a></p><p><a target="_blank" href="/files/the-bardo-thodol-tibetan-book-of-the-dead.pdf">The Bardo Thodol: The Tibetan Book of the Dead</a></p></Fragment>,
  gaze: <Fragment><h1>Gaze</h1><p>Follow the white rabbit and face the Abyss.</p><p>Sorry, I don't know anything about a key or a door.</p></Fragment>,
  'white-rabbit': <Fragment><h1>White Rabbit</h1><p>Do you already know the risks of staring into abyss?</p><pre>{atob(whiteRabbit)}</pre></Fragment>,
  life: <Fragment><h1>What is life?</h1><p>The life equation is the antidote to the anti-life equation.</p><p>The equation is mathematical proof that life is worth living, just as the anti-life.</p><p>The equation is mathematical proof that life is meaningless.</p><p>Theorize. Life is precious.</p></Fragment>,
  see: <Fragment><h1>See</h1><p>Seeing is believing, or so they say...</p></Fragment>,
  hear: <Fragment><h1>Hear</h1><p>Hear ye, hear ye!</p><p>What sayeth ye?</p><p>Ye sayeth as ye doeth.</p><p>Then what doeth ye?</p><p>Ye doeth as was proclaimed.</p><p>Ah, so ye hideth behind nomological determinism?</p><p><a href="/page/hear">Hear ye, hear ye!</a></p></Fragment>,
  taste: <Fragment><h1>Taste</h1><p>If it leaves a bad taste in your mouth, imagine what it does to the universe.</p></Fragment>,
  smell: <Fragment><h1>Smell</h1><p>Oouoooh, that smell!</p></Fragment>,
  feel: <Fragment><h1>Feel</h1><p>You may feel this, but can you feel that?</p></Fragment>,
}

interface Props {
    page: keyof typeof cms;
}

const Page: FunctionalComponent<Props> = (props: Props) => {
  const { page } = props
  return (
    <section class="container py-5">
      <Helmet>
        <title>Do { page ? page.replace('-',' ') : '?' }</title>
      </Helmet>
      { cms[page] }
    </section>
  )
}

export default Page
