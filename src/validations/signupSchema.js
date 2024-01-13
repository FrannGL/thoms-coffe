import { object, string, ref } from "yup";

export const signUpSchema = object().shape({
	email: string().email("Ingrese un email válido").required("Ingrese un email"),
	password: string().min(6, "La contraseña debe tener al menos 6 caracteres").required("Ingrese una contraseña"),
	confirmPassword: string()
		.oneOf([ref("password")], "Las contraseñas deben coincidir")
		.required("Confirme su contraseña"),
});
