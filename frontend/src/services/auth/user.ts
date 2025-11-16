import { queryKeys } from "@/src/services/queryKeys";
import { registerUser } from "@/src/services/auth/loginApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type RegisterUserInput = {
  name: string;
  email: string;
  password: string;
};

export function useRegisterUserMutation() { 
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RegisterUserInput) => registerUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.list() });
    },
  });
}
