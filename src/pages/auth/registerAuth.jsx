// RegisterAuth.jsx
import React, { useState } from "react";

export default function RegisterAuth({ onRegister }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isGmail = /^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(email);
  const passOK = pwd.length >= 6;
  const matchOK = pwd === cpwd;

  const canSubmit = isGmail && passOK && matchOK && !submitting;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      // kirim ke handler luar atau sekadar demo
      await (onRegister?.({ email, password: pwd }) ?? new Promise(r => setTimeout(r, 600)));
      console.log("Registered:", { email, password: pwd });
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400   transition";

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className=" w-[500px] rounded-3xl bg-white p-14 ">
       <h2 className="text-2xl font-medium text-gray-900 mb-32">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Gmail */}
          <div>
            <label className="block text-neutral-600 font-medium mb-2">Gmail</label>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              className={inputBase}
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={email && !isGmail ? "true" : "false"}
            />
            {email && !isGmail && (
              <p className="mt-2 text-sm text-red-600">Gunakan alamat @gmail.com yang valid.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-neutral-600 font-medium mb-2">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              className={inputBase}
              placeholder="min 6"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              aria-invalid={pwd && !passOK ? "true" : "false"}
            />
            {pwd && !passOK && (
              <p className="mt-2 text-sm text-red-600">Minimal 6 karakter.</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-neutral-600 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              autoComplete="new-password"
              className={inputBase}
              placeholder="min 6"
              value={cpwd}
              onChange={(e) => setCpwd(e.target.value)}
              aria-invalid={cpwd && !matchOK ? "true" : "false"}
            />
            {cpwd && !matchOK && (
              <p className="mt-2 text-sm text-red-600">Konfirmasi password tidak cocok.</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-4 bg-black text-white  rounded-md hover:bg-gray-800 transition duration-300"
          >
            {submitting ? "Processing..." : "Register"}
          </button>
        </form>

        <p className="mt-8 text-center text-neutral-500">
          have an account?{" "}
          <a href="/login" className="font-semibold text-neutral-900 hover:underline">
            Login now
          </a>
        </p>
      </div>
    </div>
  );
}
