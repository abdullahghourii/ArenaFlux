import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase-admin"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const fullName = String(body.fullName || "").trim()
    const email = String(body.email || "").trim().toLowerCase()
    const message = String(body.message || "").trim()

    if (!fullName) {
      return NextResponse.json(
        { ok: false, message: "Full name is required." },
        { status: 400 },
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 },
      )
    }

    if (!message) {
      return NextResponse.json(
        { ok: false, message: "Message is required." },
        { status: 400 },
      )
    }

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      full_name: fullName,
      email,
      message,
    })

    if (error) {
      console.error("Supabase contact error:", error)

      return NextResponse.json(
        { ok: false, message: "Could not save your message. Please try again." },
        { status: 500 },
      )
    }

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT

    if (!formspreeEndpoint) {
      return NextResponse.json(
        {
          ok: false,
          message: "Message saved, but Formspree endpoint is missing.",
        },
        { status: 500 },
      )
    }

    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        email,
        message,
        subject: `New ArenaFlux contact message from ${fullName}`,
      }),
    })

    if (!formspreeResponse.ok) {
      console.error("Formspree error:", await formspreeResponse.text())

      return NextResponse.json(
        {
          ok: false,
          message:
            "Your message was saved, but the email notification failed. Please check Formspree.",
        },
        { status: 502 },
      )
    }

    return NextResponse.json(
      { ok: true, message: "Message sent successfully." },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}