export type SignUpFields = "Username" | "Password" | "FavoriteAnimal" | "FavoriteColor" | "FavoriteNumber";

export type SignUpValidationErrors = Record<SignUpFields, Array<string>>;

export type ValidationResult = {
  type: string;
  title: string;
  status: number;
  errors: SignUpValidationErrors;
  traceId: string;
}

export type ContactFields = "Name" | "Email" | "Message";

export type ContactFluentValidationResult = Array<ContactFluentValidationFailure>;

export type ContactFluentValidationFailure = {
  attemptedValue: string;
  errorMessage: string;
  propertyName: ContactFields;
}
