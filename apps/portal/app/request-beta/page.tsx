export default function RequestBetaPage() {
  return (
    <>
      <nav className="nav">
        <a className="logo" href="/request-beta">DomainCard Beta</a>
        <div className="nav-links">
          <a href="https://getdomaincard.com">Learn more</a>
          <a href="/activate">Have an invite code?</a>
        </div>
      </nav>

      <main className="container">
        <section className="split">
          <div>
            <div className="badge">Invite-only private beta</div>

            <h1>Request private beta access to DomainCard.</h1>

            <p className="lead">
              DomainCard is accepting a limited number of domain investors,
              enterprise registrants, agencies, and domain businesses into the
              early beta. Approved applicants will receive an invitation code to
              activate access.
            </p>

            <ul className="checklist">
              <li>Rewards on eligible domain, renewal, auction, and ad spend</li>
              <li>Virtual-card workflows for registrars, auctions, ads, hosting, and SEO tools</li>
              <li>Domain-economy merchant labeling and transaction intelligence</li>
              <li>Partner-funded registrar and registry reward campaigns</li>
              <li>AI-assisted support for rewards, merchants, and spend workflows</li>
            </ul>
          </div>

          <aside className="panel">
            <h2>Apply for beta access</h2>
            <p>
              Tell us about your domain activity. We prioritize applicants with
              active domain, renewal, auction, marketplace, or ad spend.
            </p>

            <form action="/api/request-beta" method="POST">
              <div className="field">
                <label htmlFor="full_name">Full name *</label>
                <input id="full_name" name="full_name" required />
              </div>

              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="field">
                <label htmlFor="company">Company / portfolio name</label>
                <input id="company" name="company" />
              </div>

              <div className="field">
                <label htmlFor="user_type">I am a *</label>
                <select id="user_type" name="user_type" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="domain_investor">Domain investor / portfolio holder</option>
                  <option value="enterprise_registrant">Enterprise registrant</option>
                  <option value="agency_operator">Agency / digital operator</option>
                  <option value="registrar_registry">Registrar / registry partner</option>
                  <option value="marketplace_platform">Marketplace / domain platform</option>
                  <option value="investor_partner">Investor / strategic partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="domains_owned">Estimated domains owned</label>
                <select id="domains_owned" name="domains_owned" defaultValue="">
                  <option value="">Select range</option>
                  <option value="1-25">1–25</option>
                  <option value="26-100">26–100</option>
                  <option value="101-500">101–500</option>
                  <option value="501-2500">501–2,500</option>
                  <option value="2500+">2,500+</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="monthly_domain_spend">Monthly domain spend</label>
                <select id="monthly_domain_spend" name="monthly_domain_spend" defaultValue="">
                  <option value="">Select range</option>
                  <option value="under_500">Under $500</option>
                  <option value="500-2500">$500–$2,500</option>
                  <option value="2500-10000">$2,500–$10,000</option>
                  <option value="10000-50000">$10,000–$50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="monthly_ad_spend">Monthly ad / growth spend</label>
                <select id="monthly_ad_spend" name="monthly_ad_spend" defaultValue="">
                  <option value="">Select range</option>
                  <option value="none">None</option>
                  <option value="under_1000">Under $1,000</option>
                  <option value="1000-10000">$1,000–$10,000</option>
                  <option value="10000-50000">$10,000–$50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="top_registrars">Top registrars / platforms used</label>
                <textarea
                  id="top_registrars"
                  name="top_registrars"
                  placeholder="Example: GoDaddy, Namecheap, Dynadot, Porkbun, NameSilo, Afternic, Sedo, Google Ads"
                />
              </div>

              <div className="field">
                <label htmlFor="reason">Why do you want DomainCard?</label>
                <textarea
                  id="reason"
                  name="reason"
                  placeholder="Tell us about your domain, renewal, auction, or ad-spend workflow."
                />
              </div>

              <button className="button" type="submit">
                Request Beta Access
              </button>

              <p className="small" style={{ marginTop: "16px" }}>
                DomainCard is invite-only. Submitting this form does not guarantee
                access. Approved applicants will receive an invitation code.
              </p>
            </form>
          </aside>
        </section>

        <section className="section">
          <h2>Best fit for early access</h2>
          <div className="grid">
            <div className="card">
              <h3>Domain investors</h3>
              <p>Portfolio holders managing renewals, transfers, auctions, marketplaces, parking, and registrar spend.</p>
            </div>

            <div className="card">
              <h3>Enterprise registrants</h3>
              <p>Companies managing brand domains, DNS, hosting, protection, and digital infrastructure expenses.</p>
            </div>

            <div className="card">
              <h3>Agencies and operators</h3>
              <p>SEO, affiliate, ad-buying, lead-gen, parking, and domain operations teams with recurring spend.</p>
            </div>
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
