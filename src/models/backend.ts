export type SignUpFields = "Username" | "Password" | "FavoriteAnimal" | "FavoriteColor" | "FavoriteNumber";

export type SignUpValidationErrors = Record<SignUpFields, Array<string>>;

export type BadRequestObjectResult = {
  type: string;
  title: string;
  status: number;
  errors: SignUpValidationErrors;
  traceId: string;
}
