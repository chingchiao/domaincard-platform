import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function clean(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const full_name = clean(formData.get("full_name"));
  const email = clean(formData.get("email"));
  const company = clean(formData.get("company"));
  const user_type = clean(formData.get("user_type"));
  const domains_owned = clean(formData.get("domains_owned"));
  const monthly_domain_spend = clean(formData.get("monthly_domain_spend"));
  const monthly_ad_spend = clean(formData.get("monthly_ad_spend"));
  const top_registrars = clean(formData.get("top_registrars"));
  const reason = clean(formData.get("reason"));

  if (!full_name || !email || !user_type) {
    return NextResponse.redirect(
      new URL("/request-beta?error=missing-required-fields", request.url),
      303
    );
  }

  const { error } = await supabaseAdmin.from("beta_applications").insert({
    full_name,
    email: email.toLowerCase(),
    company,
    user_type,
    domains_owned,
    monthly_domain_spend,
    monthly_ad_spend,
    top_registrars,
    reason,
    status: "pending"
  });

  if (error) {
    console.error("Beta application insert error:", error);
    return NextResponse.redirect(
      new URL("/request-beta?error=submission-failed", request.url),
      303
    );
  }

  return NextResponse.redirect(new URL("/request-success", request.url), 303);
}
