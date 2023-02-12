import { FunctionalComponent, Fragment } from 'preact'
import Helmet from 'react-helmet'

const posts = {
  hi: (
    <Fragment>
      <h1>Hello Blog</h1>
      <p>
        If I had something to say, this would be the place. But, as you probably
        have guessed, I don't. Based on my philosophy of anti-nihilistic
        probabilistic-deterministism, the meaning of the time consuming unibrain
        all starts with a dot, and ends it with one or more bangs. Some have
        claimed that the universe originated from a "big bang", but heavy metal
        evidence proves the biggest bang to be dolmayan.
      </p>
    </Fragment>
  ),
}

interface Props {
  post: keyof typeof posts
}

const Page: FunctionalComponent<Props> = (props: Props) => {
  const { post } = props
  return (
    <section class="container py-5">
      <Helmet title={`Say ${post ? post.replace('-', ' ') : '?'}`} />
      {posts[post]}
    </section>
  )
}

export default Page
