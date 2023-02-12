export default function Footer() {
  return (
    <footer class="footer text-muted py-3 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-2">
              © <time id="copyright-year">{new Date().getFullYear()}</time>{' '}
              <a class="text-muted text-decoration-none" href="/about/">
                Psilly Corporation
              </a>
              . Psilly™ is a trademark of{' '}
              <a class="text-muted text-decoration-none" href="/about/">
                Psilly Corporation
              </a>
              . All rights reserved.
            </p>
          </div>
          <div class="col-md-6">
            <p class="float-end mb-2">
              <a
                class="text-muted text-decoration-none me-2"
                href="/terms/"
                title="Website Terms of Use">
                Terms
              </a>
              <a
                class="text-muted text-decoration-none me-2"
                href="/privacy/"
                title="Privacy Policy">
                Privacy
              </a>
              <a
                class="text-muted text-decoration-none me-2"
                href="https://github.com/acerix/psilly"
                target="_blank"
                rel="noreferrer"
                title="Source Code on GitHub"
                role="img"
                aria-label="Cat face in HTML source code tag">
                &lt;🐱/&gt;
              </a>
              <a
                class="text-muted text-decoration-none me-2"
                href="https://www.reddit.com/r/psilly/"
                target="_blank"
                rel="noreferrer"
                title="/r/psilly on Reddit"
                role="img"
                aria-label="Extraterrestrial being">
                👽
              </a>
              <a
                class="text-muted text-decoration-none me-2"
                href="https://twitter.com/Psilly13"
                target="_blank"
                rel="noreferrer"
                title="@Psilly13 on Twitter"
                role="img"
                aria-label="Generic bird">
                🐦
              </a>
              <a
                class="text-muted text-decoration-none me-2"
                href="https://facebook.com/PsillyCorp"
                target="_blank"
                rel="noreferrer"
                title="@PsillyCorp on facebook"
                role="img"
                aria-label="Old face">
                🗿
              </a>
              <a
                class="text-muted text-decoration-none"
                href="https://www.youtube.com/channel/UCNYwYcc65kItw98wcqU0-Gg"
                target="_blank"
                rel="noreferrer"
                title="Psilly on YouTube"
                role="img"
                aria-label="A day-dream stimulation">
                📺
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
