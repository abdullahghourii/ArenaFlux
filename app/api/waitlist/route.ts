import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase-admin"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = String(body.email || "").trim().toLowerCase()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 },
      )
    }

    const { error } = await supabaseAdmin.from("waitlist").insert({
      email,
    })

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({
          ok: true,
          message: "This email is already on the waitlist.",
        })
      }

      console.error("Supabase waitlist error:", error)

      return NextResponse.json(
        { ok: false, message: "Could not save email. Please try again." },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { ok: true, message: "You have been added to the waitlist." },
      { status: 201 },
    )
  } catch (error) {
    console.error("Waitlist API error:", error)

    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}