"use client";
import { useForm } from "react-hook-form";
import { FormData } from "@/src/types/auth";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "@/src/services/auth/user";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const registerMutation = useRegisterUserMutation();

  const onSubmit = async (data: FormData) => {
    try {
      await registerMutation.mutateAsync(data);
      reset();
      router.push("/");
    } catch {
      // error handled by react-query state
    }
  };

  return (
    <div className="flex flex-col m-auto w-[380px] items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-md rounded-xl w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-indigo-500">
          Sign Up
        </h1>

        {registerMutation.isError && (
          <p className="text-red-500">
            {(registerMutation.error as Error)?.message ||
              "Registration failed"}
          </p>
        )}
        {registerMutation.isSuccess && (
          <p className="text-green-600">Account created successfully!</p>
        )}

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className={`border w-full text-gray-500 rounded-lg border-gray-200 p-2 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className={`border w-full text-gray-500 rounded-lg border-gray-200 p-2 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`border w-full text-gray-500 rounded-lg border-gray-200 p-2 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={registerMutation.isPending}
          className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition"
        >
          {registerMutation.isPending ? "Loading..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
