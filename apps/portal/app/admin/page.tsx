import { supabaseAdmin } from "@/lib/supabaseAdmin";

type AdminPageProps = {
  searchParams?: Promise<{
    passcode?: string;
    status?: string;
  }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const passcode = params?.passcode;
  const filterStatus = params?.status || "pending";
  const adminPasscode = process.env.ADMIN_PASSCODE;

  if (!adminPasscode || passcode !== adminPasscode) {
    return (
      <>
        <nav className="nav">
          <a className="logo" href="/request-beta">DomainCard Admin</a>
        </nav>

        <main className="container">
          <section className="panel" style={{ maxWidth: "560px" }}>
            <h1 style={{ fontSize: "42px" }}>Admin access</h1>
            <p>Enter your admin passcode to view beta applications.</p>

            <form action="/admin" method="GET">
              <div className="field">
                <label htmlFor="passcode">Admin passcode</label>
                <input id="passcode" name="passcode" type="password" required />
              </div>

              <button className="button" type="submit">Enter admin</button>
            </form>
          </section>
        </main>
      </>
    );
  }

  const { data: applications, error } = await supabaseAdmin
    .from("beta_applications")
    .select("*")
    .eq("status", filterStatus)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <>
      <nav className="nav">
        <a className="logo" href={`/admin?passcode=${encodeURIComponent(passcode)}`}>
          DomainCard Admin
        </a>
        <div className="nav-links">
          <a href={`/admin?passcode=${encodeURIComponent(passcode)}&status=pending`}>Pending</a>
          <a href={`/admin?passcode=${encodeURIComponent(passcode)}&status=approved`}>Approved</a>
          <a href={`/admin?passcode=${encodeURIComponent(passcode)}&status=rejected`}>Rejected</a>
        </div>
      </nav>

      <main className="container">
        <section className="panel">
          <div className="badge">Beta applications</div>
          <h1 style={{ fontSize: "48px" }}>
            {filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)} applications
          </h1>

          <p>
            Review applicants, approve access, and generate invitation codes.
            For MVP, email invitation codes manually.
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Type</th>
                  <th>Domains / Spend</th>
                  <th>Registrars</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Invite</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {applications?.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <strong>{app.full_name}</strong>
                      <div className="small">{app.email}</div>
                      <div className="small">{app.company}</div>
                    </td>
                    <td>{app.user_type}</td>
                    <td>
                      <div>{app.domains_owned || "—"}</div>
                      <div className="small">Domain: {app.monthly_domain_spend || "—"}</div>
                      <div className="small">Ads: {app.monthly_ad_spend || "—"}</div>
                    </td>
                    <td>{app.top_registrars || "—"}</td>
                    <td>{app.reason || "—"}</td>
                    <td>{app.status}</td>
                    <td>
                      <code>{app.invite_code || "—"}</code>
                    </td>
                    <td>
                      <form action="/api/admin/approve" method="POST" style={{ marginBottom: "8px" }}>
                        <input type="hidden" name="passcode" value={passcode} />
                        <input type="hidden" name="id" value={app.id} />
                        <button className="button" type="submit">Approve</button>
                      </form>

                      <form action="/api/admin/reject" method="POST">
                        <input type="hidden" name="passcode" value={passcode} />
                        <input type="hidden" name="id" value={app.id} />
                        <button className="button-secondary" type="submit">Reject</button>
                      </form>
                    </td>
                  </tr>
                ))}

                {applications?.length === 0 && (
                  <tr>
                    <td colSpan={8}>No applications found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
