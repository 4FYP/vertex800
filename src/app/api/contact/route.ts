import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const projectType = String(body.projectType || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Ready for SMTP / Resend / SendGrid wiring via env vars.
    console.info("[Vertex800 contact]", {
      name,
      email,
      company: company || "-",
      projectType,
      message,
      to: "info@vertex800.com",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to send email right now. Please call us or email info@vertex800.com.",
      },
      { status: 500 }
    );
  }
}
