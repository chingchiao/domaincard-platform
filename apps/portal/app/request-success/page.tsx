export default function RequestSuccessPage() {
  return (
    <>
      <nav className="nav">
        <a className="logo" href="/request-beta">DomainCard Beta</a>
        <div className="nav-links">
          <a href="/request-beta">Request Beta Access</a>
          <a href="/activate">Have an invite code?</a>
        </div>
      </nav>

      <main className="container">
        <section className="panel" style={{ maxWidth: "760px" }}>
          <div className="badge">Application received</div>

          <h1 style={{ fontSize: "48px" }}>You are on the beta request list.</h1>

          <p className="lead">
            Thank you for requesting access to DomainCard. We are currently
            accepting a limited number of beta users.
          </p>

          <div className="notice">
            Your application status is <strong>Pending Review</strong>. If approved,
            you will receive an invitation code by email.
          </div>

          <p>
            Early access is prioritized for active domain investors, enterprise
            registrants, agencies, domain businesses, registrars, registries, and
            partners with meaningful domain-economy spend.
          </p>

          <div style={{ marginTop: "28px" }}>
            <a className="button" href="/activate">I have an invitation code</a>
          </div>
        </section>

        <div className="footer">
          <span>© 2026 DomainCard. A project of Ecstatic Ventures LLC.</span>
          <span><a href="mailto:hello@ecstaticventures.com">Contact</a></span>
        </div>
      </main>
    </>
  );
}
