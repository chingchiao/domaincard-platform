type ActivatePageProps = {
  searchParams?: Promise<{
    status?: string;
  }>;
};

export default async function ActivatePage({ searchParams }: ActivatePageProps) {
  const params = await searchParams;
  const status = params?.status;

  return (
    <>
      <nav className="nav">
        <a className="logo" href="/request-beta">DomainCard Beta</a>
        <div className="nav-links">
          <a href="/request-beta">Request Beta Access</a>
        </div>
      </nav>

      <main className="container">
        <section className="split">
          <div>
            <div className="badge">Invitation-code activation</div>

            <h1>Activate your DomainCard beta invitation.</h1>

            <p className="lead">
              DomainCard is currently invite-only. Enter your email and invitation
              code to verify beta access.
            </p>

            {status === "success" && (
              <div className="notice">
                Invitation verified. Your beta activation has been recorded.
                Full account access will be enabled as the product portal opens.
              </div>
            )}

            {status === "invalid" && (
              <div className="error">
                Invalid invitation code or email. Please check your invitation email
                and try again.
              </div>
            )}
          </div>

          <aside className="panel">
            <h2>Enter invitation code</h2>

            <form action="/api/activate" method="POST">
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="field">
                <label htmlFor="invite_code">Invitation code *</label>
                <input
                  id="invite_code"
                  name="invite_code"
                  required
                  placeholder="DC-BETA-XXXXXX"
                />
              </div>

              <button className="button" type="submit">
                Verify Invitation
              </button>
            </form>
          </aside>
        </section>

        <div className="footer">
          <span>© 2026 DomainCard. A project of Ecstatic Ventures LLC.</span>
          <span><a href="mailto:hello@ecstaticventures.com">Contact</a></span>
        </div>
      </main>
    </>
  );
}
