import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, subject });

    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["as3992054@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #333; margin-bottom: 20px; border-bottom: 3px solid #007bff; padding-bottom: 10px;">
              📧 New Contact Form Submission
            </h1>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; margin-bottom: 5px;">👤 From:</h3>
              <p style="margin: 5px 0; font-size: 16px; color: #333;"><strong>${name}</strong></p>
              <p style="margin: 5px 0; color: #666;">${email}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; margin-bottom: 5px;">📝 Subject:</h3>
              <p style="margin: 5px 0; font-size: 16px; color: #333; background-color: #f8f9fa; padding: 10px; border-radius: 5px;">
                ${subject}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; margin-bottom: 5px;">💬 Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                <p style="margin: 0; line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888;">
              <p style="margin: 0; font-size: 14px;">
                Sent from your portfolio website contact form<br>
                <span style="font-size: 12px;">Timestamp: ${new Date().toLocaleString()}</span>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);