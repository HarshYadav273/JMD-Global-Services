import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const newContact = await Contact.create(body);

    return Response.json({
      success: true,
      data: newContact,
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}