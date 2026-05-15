import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function clean(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const email = clean(formData.get("email"))?.toLowerCase();
  const invite_code = clean(formData.get("invite_code"))?.toUpperCase();

  if (!email || !invite_code) {
    return NextResponse.redirect(new URL("/activate?status=invalid", request.url), 303);
  }

  const { data, error } = await supabaseAdmin
    .from("beta_applications")
    .select("id,email,invite_code,status")
    .eq("email", email)
    .eq("invite_code", invite_code)
    .eq("status", "approved")
    .maybeSingle();

  if (error || !data) {
    return NextResponse.redirect(new URL("/activate?status=invalid", request.url), 303);
  }

  await supabaseAdmin.from("beta_activations").insert({
    email,
    invite_code
  });

  return NextResponse.redirect(new URL("/activate?status=success", request.url), 303);
}
