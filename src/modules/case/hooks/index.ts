import { trpc } from '~/utils/trpc';

export const useCaseFields = () => trpc.useQuery(['case.fields']);
export const useCaseCases = () => trpc.useQuery(['case.cases']);
export const useCreateCase = () => trpc.useMutation(['case.create']);
