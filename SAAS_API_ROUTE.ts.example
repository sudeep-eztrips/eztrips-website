// ============================================================
// ADD THIS FILE TO YOUR EZTRIPS SAAS APP AT:
// src/app/api/website/enquiry/route.ts
// ============================================================
// Also run this SQL migration in your Supabase dashboard first:
/*
  CREATE TABLE IF NOT EXISTS enquiries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id uuid REFERENCES clients(id),
    destination text,
    travel_date date,
    date_flexible boolean DEFAULT false,
    flexibility_days int,
    adults int DEFAULT 1,
    children int DEFAULT 0,
    children_ages jsonb,
    budget_range text,
    budget_type text,
    special_requirements text,
    whatsapp_opted boolean DEFAULT true,
    source text DEFAULT 'website',
    status text DEFAULT 'new',
    created_at timestamptz DEFAULT now()
  );
*/
// ============================================================

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

const ALLOWED_ORIGINS = [
  'https://eztrips.in',
  'https://www.eztrips.in',
  'http://localhost:3001',
  'http://localhost:3000',
]

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin')
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) })
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin')
  const headers = corsHeaders(origin)

  try {
    const body = await req.json()

    const {
      name, email, phone, destination,
      travelDate, dateFlexible, flexibilityDays,
      adults, children, childrenAges,
      budgetRange, budgetType, specialRequirements,
      whatsappOptin, source,
    } = body

    // Validate required fields
    if (!name || !email || !phone || !destination) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, destination' },
        { status: 400, headers }
      )
    }

    // Find or create client
    let clientId: string

    const { data: existingClient } = await supabase
      .from('clients')
      .select('id')
      .or(`email.eq.${email},phone.eq.${phone}`)
      .maybeSingle()

    if (existingClient) {
      clientId = existingClient.id
    } else {
      const { data: newClient, error: clientError } = await supabase
        .from('clients')
        .insert({ name, email, phone })
        .select('id')
        .single()

      if (clientError || !newClient) {
        throw new Error('Failed to create client')
      }
      clientId = newClient.id
    }

    // Create enquiry record
    const { data: enquiry, error: enquiryError } = await supabase
      .from('enquiries')
      .insert({
        client_id: clientId,
        destination,
        travel_date: travelDate || null,
        date_flexible: dateFlexible || false,
        flexibility_days: flexibilityDays ? parseInt(flexibilityDays) : null,
        adults: parseInt(adults) || 1,
        children: parseInt(children) || 0,
        children_ages: childrenAges || null,
        budget_range: budgetRange || null,
        budget_type: budgetType || 'per_person',
        special_requirements: specialRequirements || null,
        whatsapp_opted: whatsappOptin !== false,
        source: source || 'website',
        status: 'new',
      })
      .select('id')
      .single()

    if (enquiryError || !enquiry) {
      throw new Error('Failed to create enquiry')
    }

    // Create draft proposal
    const { data: proposal } = await supabase
      .from('proposals')
      .insert({
        title: `${destination} Trip — Website Enquiry`,
        status: 'enquiry',
        client_id: clientId,
        destination,
        travel_start: travelDate || null,
        adults: parseInt(adults) || 1,
        children: parseInt(children) || 0,
        notes: specialRequirements || null,
        enquiry_id: enquiry.id,
      })
      .select('id')
      .single()

    const proposalUrl = proposal?.id
      ? `${process.env.NEXT_PUBLIC_APP_URL}/proposals/${proposal.id}`
      : `${process.env.NEXT_PUBLIC_APP_URL}/enquiries`

    // Send email notification
    await resend.emails.send({
      from: 'EzTrips Website <noreply@eztrips.in>',
      to: 'sudeep@eztrips.in',
      subject: `New Website Enquiry — ${name} → ${destination}`,
      html: `
        <h2>New Website Enquiry</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Destination</strong></td><td>${destination}</td></tr>
          <tr><td><strong>Travel Date</strong></td><td>${travelDate || 'Flexible'}</td></tr>
          ${dateFlexible ? `<tr><td><strong>Flexibility</strong></td><td>± ${flexibilityDays} days</td></tr>` : ''}
          <tr><td><strong>Travellers</strong></td><td>${adults} adults, ${children || 0} children</td></tr>
          ${budgetRange ? `<tr><td><strong>Budget</strong></td><td>${budgetRange} (${budgetType})</td></tr>` : ''}
          ${specialRequirements ? `<tr><td><strong>Special Requirements</strong></td><td>${specialRequirements}</td></tr>` : ''}
          <tr><td><strong>WhatsApp Opt-in</strong></td><td>${whatsappOptin !== false ? 'Yes' : 'No'}</td></tr>
          <tr><td><strong>Source</strong></td><td>${source || 'website'}</td></tr>
        </table>
        <br/>
        <a href="${proposalUrl}" style="background:#00327d;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
          View in EzTrips App →
        </a>
      `,
    })

    return NextResponse.json(
      { success: true, enquiry_id: enquiry.id },
      { status: 200, headers }
    )
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers }
    )
  }
}
