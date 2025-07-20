// app/week-9/page.js
"use client";

import { useAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { user, login, logout } = useAuth();
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-6">🛒 Week 9: Shopping List Auth</h1>

      {user ? (
        <>
          <p className="mb-4 text-lg">Welcome, <span className="font-semibold">{user.displayName}</span>!</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={logout}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Log Out
            </button>
            <button
              onClick={() => router.push("/week-9/shopping-list")}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Go to Shopping List
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={login}
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Log In with GitHub
        </button>
      )}
    </main>
  );
}
