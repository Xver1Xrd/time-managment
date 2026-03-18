"use client";

import { FormEvent, useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
  website: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  website: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: ""
  });

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({
      ...current,
      [field]: value
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Не удалось отправить сообщение.");
      }

      setFormState(initialState);
      setStatus({
        type: "success",
        message: "Сообщение отправлено. Мы свяжемся с вами в течение одного рабочего дня."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Что-то пошло не так. Попробуйте еще раз."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label className="block text-sm text-white/74">
        Имя
        <input
          required
          name="name"
          type="text"
          value={formState.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="mt-2 h-11 w-full rounded-xl border border-white/12 bg-black/30 px-3 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
        />
      </label>

      <label className="block text-sm text-white/74">
        Почта
        <input
          required
          name="email"
          type="email"
          value={formState.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="mt-2 h-11 w-full rounded-xl border border-white/12 bg-black/30 px-3 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
        />
      </label>

      <label className="block text-sm text-white/74">
        Сообщение
        <textarea
          required
          name="message"
          rows={5}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/12 bg-black/30 px-3 py-2 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
        />
      </label>

      <input
        name="website"
        value={formState.website}
        onChange={(event) => updateField("website", event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-accent px-6 text-[0.95rem] font-medium tracking-wide text-black transition-all duration-300 hover:bg-[#d8c1c7] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
      >
        <span className="relative z-10">
          {isSubmitting ? "Отправляем..." : "Отправить сообщение"}
        </span>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>

      {status.type !== "idle" ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-accent/24 bg-accent/10 text-white/82"
              : "border-[#8f4a58]/28 bg-[#8f4a58]/10 text-white/78"
          }`}
        >
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
