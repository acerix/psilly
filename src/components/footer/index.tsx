import { FunctionalComponent, h } from 'preact'

const Footer: FunctionalComponent = () => {
  return (
    <footer class="footer text-muted py-3 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-10">
            <p class="mb-2">© <time id="copyright-year">{new Date().getFullYear()}</time> <a class="text-muted text-decoration-none" href="https://psilly.com/">Psilly Corporation</a>. Psilly™ is a trademark of <a class="text-muted text-decoration-none" href="https://psilly.com/">Psilly Corporation</a>. All Rights Reserved.</p>
          </div>
          <div class="col-sm-5 col-md-2">
            <p class="float-end mb-2">
              <a class="text-muted text-decoration-none me-2" href="https://www.youtube.com/channel/UCNYwYcc65kItw98wcqU0-Gg" target="_blank" rel="noreferrer">YouTube</a>
              <a target="_blank" rel="noreferrer" class="text-muted text-decoration-none" href="https://github.com/acerix/psilly">&lt;sauce/&gt;</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
