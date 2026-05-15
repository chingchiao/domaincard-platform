import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function clean(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const passcode = clean(formData.get("passcode"));
  const id = clean(formData.get("id"));

  if (!passcode || passcode !== process.env.ADMIN_PASSCODE || !id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { error } = await supabaseAdmin
    .from("beta_applications")
    .update({
      status: "rejected",
      updated_at: new Date().toISOString()
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.redirect(
    new URL(`/admin?passcode=${encodeURIComponent(passcode)}&status=rejected`, request.url),
    303
  );
}
