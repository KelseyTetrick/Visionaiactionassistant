import { useState } from "react";

interface PasswordScreenProps {
  onAuthenticate: () => void;
}

export default function PasswordScreen({ onAuthenticate }: PasswordScreenProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Kelsey") {
      sessionStorage.setItem("authenticated", "true");
      onAuthenticate();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-md p-8 bg-[var(--card)] rounded-[var(--radius)] border border-[var(--border)] shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-[var(--foreground)]">Enter Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border border-[var(--border)] rounded-[var(--radius)] bg-[var(--input-background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            required
          />
          {error && <p className="text-[var(--destructive)] mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] hover:bg-[var(--primary)]/90 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
