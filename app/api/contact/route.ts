import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
}

interface StoredSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const dataDirectory = join(process.cwd(), "data");
const dataFile = join(dataDirectory, "contact-submissions.json");

export const runtime = "nodejs";

function sanitize(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (body.website) {
      return NextResponse.json({ message: "Заявка отклонена." }, { status: 400 });
    }

    const name = sanitize(body.name ?? "");
    const email = sanitize(body.email ?? "");
    const message = (body.message ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { message: "Укажите имя, чтобы мы могли к вам обратиться." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Проверьте адрес почты и попробуйте еще раз." },
        { status: 400 }
      );
    }

    if (!message || message.length < 12) {
      return NextResponse.json(
        { message: "Добавьте немного больше деталей в сообщение." },
        { status: 400 }
      );
    }

    const submission: StoredSubmission = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    };

    await mkdir(dataDirectory, { recursive: true });

    let storedItems: StoredSubmission[] = [];

    try {
      const current = await readFile(dataFile, "utf8");
      const parsed = JSON.parse(current) as StoredSubmission[];
      storedItems = Array.isArray(parsed) ? parsed : [];
    } catch {
      storedItems = [];
    }

    storedItems.unshift(submission);
    await writeFile(dataFile, JSON.stringify(storedItems, null, 2), "utf8");

    return NextResponse.json({
      message: "Сообщение получено.",
      id: submission.id
    });
  } catch {
    return NextResponse.json(
      { message: "Не удалось отправить сообщение. Попробуйте еще раз." },
      { status: 500 }
    );
  }
}
