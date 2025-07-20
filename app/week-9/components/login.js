"use client";
import { useAuth } from "../_utils/auth-context";

export default function Login() {
  const { user, login, logout } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">
          {user ? `Welcome, ${user.displayName}` : "Please Log In"}
        </h1>
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={login}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </main>
  );
}
