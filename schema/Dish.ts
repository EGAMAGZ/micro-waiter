import { z } from "zod";

export const DishSchema = z.object({
  name: z.string({
    required_error: "Nombre de platillo es requerido",
    invalid_type_error: "Nombre de platillo debe ser texto",
  }),
  price: z.coerce.number({
    required_error: "Precio de platillo es requerido",
    invalid_type_error: "Precio de platillo debe ser númerico",
  }),
  quantity: z.coerce.number({
	  required_error: "Cantidad de platillo es requerido",
	  invalid_type_error: "Cantidad de platillo debe ser númerico",
  }),
});

export type Dish = z.infer<typeof DishSchema>;
