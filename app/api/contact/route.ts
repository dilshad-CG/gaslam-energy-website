import { NextResponse } from "next/server";

/**
 * Contact endpoint.
 *
 * This validates and accepts the enquiry. To actually deliver it, wire the block
 * below to Gas'Lam's real destination — e.g. Resend / SendGrid email, a Slack
 * webhook, or a CRM. No delivery integration is committed here because the
 * company profile does not include a destination email address (we don't invent one).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email } = body ?? {};

    if (!name || !company || !email) {
      return NextResponse.json(
        { ok: false, error: "Name, company and email are required." },
        { status: 400 }
      );
    }

    // TODO(gaslam): forward `body` to email/CRM/Slack once a destination is provided.
    // Example: await resend.emails.send({ to: CONTACT_INBOX, subject: `Enquiry — ${company}`, ... })
    console.log("[contact] new enquiry", {
      name,
      company,
      email,
      service: body.service,
      industry: body.industry,
      location: body.location,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
