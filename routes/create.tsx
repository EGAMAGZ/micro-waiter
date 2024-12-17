import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  async POST(request, context) {
    const formData = await request.formData();
    console.log(Object.fromEntries(formData.entries()));
    return await context.render();
  },
};
export default function CreatePage() {
  return (
    <div>
      <h1 class="text-4xl font-bold text-center">Registrar platillo</h1>
      <div class="container mx-auto">
        <form method="POST">
          <label class="form-control w-full">
            <div class="label font-semibold">
              <span class="label-text">Nombre de platillo:</span>
            </div>
            <input type="text" name="name" class="input input-bordered" />
          </label>
          <label class="form-control w-full">
            <div class="label font-semibold">
              <span class="label-text">Precio de platillo:</span>
            </div>
            <input type="number" name="price" class="input input-bordered" />
          </label>
          <label class="form-control w-full">
            <div class="label font-semibold">
              <span class="label-text">Cantidad de platillo:</span>
            </div>
            <input type="number" name="quantity" class="input input-bordered" />
          </label>
          <div class="flex justify-end gap-2 mt-4">
            <a href="/" class="btn btn-neutral">Cancelar</a>
            <button class="btn btn-primary">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
